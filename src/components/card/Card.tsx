import { AiOutlineHeart } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import { BsFillCartPlusFill } from "react-icons/bs"; 
import { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addToLiked, removeFromLiked } from "../../redux/slices/likeSlice";
import { message } from "antd";

const Card = ({ product }: { product: Product }) => {
  const {likedProducts} = useSelector((state: RootState) => state.like)
  const dispatch = useDispatch<AppDispatch>();

  const isProductLiked = (productId: number) => {
    return likedProducts?.some((product) => product.id === productId);
  };

  const handleLike = (product: Product) => {
    if (isProductLiked(product.id)) {
      dispatch(removeFromLiked(product.id));
      message.error(`${product.title} removed from favorites`);
    } else {
      dispatch(addToLiked(product));
      message.success(`${product.title} added to favorites`);
    }
  };
  return (
    <div>
      <div
        key={product.id}
        className="cart flex flex-col h-[300px] shadow-xl rounded  overflow-hidden "
      >
        <div className=" bg-black py-5  w-full flex items-center justify-center min-h-[190px] relative overflow-hidden">
          <img width={150} src={product.thumbnail} alt="product_img" />
        </div>
        <div className="px-5 py-4 flex flex-col w-full flex-1 ">
          <h3 className="text-[#1c283f] text-base font-medium flex-1 ">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-right text-[#56b280] text-xl font-medium">
              {product.price}$
            </span>
            <div className="flex items-center gap-3">
              <span
                onClick={() => handleLike(product)}
                className="text-right text-red-500 text-2xl font-medium transition-transform hover:scale-110"
              >
                {isProductLiked(product.id) ? (
                  <AiFillHeart  />
                ) : (
                  <AiOutlineHeart  />
                )}
              </span>
              <span className="text-right text-[#56b280] text-2xl font-medium transition-transform hover:scale-110">
                <BsFillCartPlusFill />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
