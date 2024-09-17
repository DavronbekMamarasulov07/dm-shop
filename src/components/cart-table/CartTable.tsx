import { TiDelete } from "react-icons/ti"; 
import {  Image, Popconfirm, PopconfirmProps, message } from "antd";
import { Product } from "../../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  selectCartProductById,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const CartTable = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProduct = useSelector((state: RootState) =>
    selectCartProductById(state, product.id)
  );

  const quantity = cartProduct?.quantity || 0;

  const handleIncrement = () => {
      
    dispatch(incrementQuantity(product.id));
  };



  
const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success(`${product.title} removed in cart`);
  dispatch(removeFromCart(product.id));
};

const cancel: PopconfirmProps["onCancel"] = (e) => {
  console.log(e);
  message.error(`${product.title} not removed in cart`);
};

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(product.id));
      
    } else {
      dispatch(removeFromCart(product.id));
      message.error(`${product.title} removed in cart`);
    }
  };

  const total =
    quantity >= 10
      ? ((+(product.price * quantity).toFixed(2)) - ((+(product.price * quantity).toFixed(2)) % 10) ).toFixed(2) 
      : (product.price * quantity).toFixed(2);


  
  return (
    <tr className="w-full">
      <td className="w-[150px]">
        <Image
          width={100}
          height={100}
          className="w-full"
          src={product.thumbnail}
          alt=""
        />
      </td>
      <td className="font-bold w-[300px]">{product.title}</td>
      <td className="font-bold w-[200px]">${product.price}</td>
      <td className="font-bold">${total}</td>
      <td className="w-[250px] text-center ">
        <div className="flex items-center gap-5 justify-center">
          <AiOutlineMinus
            onClick={handleDecrement}
            className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
          />
          <span className="w-5 text-center">{quantity}</span>
          <AiOutlinePlus
            onClick={handleIncrement}
            className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
          />
        </div>
      </td>
      <td>
        <Popconfirm
          title={`Delete the ${product.title}`}
          description={`Are you sure to delete this ${product.title}?`}
          onConfirm={confirm}
          onCancel={cancel}
          okText="Delete"
          cancelText="Cancel"
        >
          <TiDelete
            className="text-4xl text-center block mx-auto text-[#56b280]"
          />
        </Popconfirm>
      </td>
    </tr>
  );
};

export default CartTable;
