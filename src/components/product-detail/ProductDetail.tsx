import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineMinus } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import Container from '../container/Container';
import { useGetProductsByIdQuery } from '../../redux/api/productsApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Skeleton, message } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Product } from "../../types";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  if (!id) {
    return <div>Product not found</div>;
  }

  const productId = Number(id);
  const { data, isLoading, error } = useGetProductsByIdQuery(productId);
  useEffect(() => {
    if (error) return message.error("Product not found");
  }, [error]);


const handleIncrement = () => {
  setQuantity(quantity + 1);
};

const handleDecrement = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
    
  }
  else{
    message.error("Quantity cannot be less than 1");
  }

};

 const handleAddToCart = (product : Product, quantity : number) => {
   dispatch(addToCart({ ...product, quantity }));
   message.success(`${product.title} added to cart`);
   setQuantity(1);
 };

 


  return (
    <div>
      <Container>
        <div>
          {isLoading ? (
            <div className="flex gap-5 justify-between">
              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="w-full max-w-[530px] bg-[#f7f7f7]  flex items-center justify-center py-[60px]">
                  <Skeleton.Image active style={{ width: 350, height: 350 }} />
                </div>
                <span className="text-[#222] w-full text-center text-[20px] font-medium px-12">
                  <Skeleton.Button active style={{ width: 450 }} />
                  <Skeleton.Button active style={{ width: 350 }} />
                </span>
                <span className="text-[#56b280] text-center text-[18px] font-medium border-b border-transparent hover:border-[#56b280] transition-transform">
                  <Skeleton.Button active style={{ width: 150 }} />
                </span>
              </div>
              <div className="flex-1 w-full max-w-[550px]">
                <h3 className="text-[#272727] text-[26px] font-medium leading-[57.60px]">
                  <Skeleton.Input active style={{ width: 150 }} />
                </h3>
                <div className="flex justify-between gap-10 ">
                  <div className="flex flex-col justify-center items-center  ">
                    <span className="text-[#56b280] text-[26px] font-semibold  leading-[57.60px] flex-1">
                      <Skeleton.Input active style={{ width: 150 }} />
                    </span>
                    <div className="flex items-center flex-col gap-2">
                      <span className=" text-center text-[#272727] text-lg font-normal  leading-relaxed">
                        <Skeleton.Input active style={{ width: 100 }} />
                      </span>
                      <Skeleton.Button active style={{ width: 100 }} />
                    </div>
                  </div>
                  <div className="flex  flex-col  justify-between">
                    <div className="flex items-center gap-5 p-5">
                      <Skeleton.Button active style={{ width: 300 }} />
                    </div>
                    <div className="flex flex-col gap-2 p-5  w-full max-w-[400px] border rounded-lg">
                      <div className="flex items-center gap-2 justify-between">
                        <Skeleton.Button active style={{ width: 300 }} />
                      </div>
                      <Skeleton.Button
                        active
                        style={{ width: 300, height: 100 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="   mt-[65px] flex  justify-end">
                  <Skeleton.Button active style={{ width: 300, height: 50 }} />
                </div>
                <div className="flex flex-col gap-2 mt-10 p-5 border  rounded-lg">
                  <div>
                    <Skeleton.Button active style={{ width: 500 }} />
                  </div>
                  <div>
                    <Skeleton.Button active style={{ width: 500 }} />
                  </div>
                  <div className="flex items-center gap-1">
                    <Skeleton.Button active style={{ width: 165 }} />
                    <Skeleton.Button active style={{ width: 165 }} />
                    <Skeleton.Button active style={{ width: 165 }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-5 justify-between">
              <div className="flex-1 flex flex-col items-center gap-4">
                <div className="w-full max-w-[530px] h-[500px] bg-[#f7f7f7]   flex items-center justify-center py-[60px]">
                  <img
                    width={350}
                    src={data?.thumbnail}
                    alt="product-image"
                    className="detail-bg "
                  />
                </div>
                <p className="text-[#222] text-center text-[20px] font-medium px-12">
                  {data?.description?.slice(0, 100)}
                </p>
                <p className="text-[#56b280] text-center text-[18px] font-medium border-b border-transparent hover:border-[#56b280] transition-transform">
                  🚚 FREE SHIPPING
                </p>
              </div>
              <div className="flex-1 w-full max-w-[550px]">
                <h3 className="text-[#272727] text-[26px] font-medium leading-[57.60px]">
                  {data?.title}
                </h3>
                <div className="flex justify-between gap-10 ">
                  <div className="flex flex-col justify-start items-start w-full max-w-[150px] ">
                    <p className="text-[#56b280] text-[24px] font-semibold   leading-[57.60px] flex-1">
                      $ {(quantity * (data?.price ?? 0)).toFixed(2)}
                    </p>
                    <div className="flex items-center flex-col gap-2">
                      <span className=" text-center text-[#272727] text-lg font-normal  leading-relaxed">
                        Quantity
                      </span>
                      <div className="flex items-center gap-3 border  border-[#56b280] px-3 py-1">
                        <AiOutlinePlus
                          onClick={() => handleIncrement()}
                          className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
                        />
                        <span className="w-5 text-center">{quantity}</span>
                        <AiOutlineMinus
                          onClick={() => handleDecrement()}
                          className="text-[#56b280] text-xl font-bold transition-transform active:scale-90"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-col  justify-between">
                    <div className="flex items-center gap-5 p-5">
                      <input className="about-check" type="checkbox" />
                      <span className="text-[#272727] text-base font-normal leading-none">
                        One time purchase
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-5  w-full max-w-[400px] border rounded-lg">
                      <div className="flex items-center gap-2 justify-between">
                        <input
                          defaultChecked
                          type="checkbox"
                          className="about-check"
                        />
                        <span className="text-[#272727] text-base font-normal leading-none">
                          Subscribe and delivery every{" "}
                        </span>
                        <select
                          defaultValue={"4 weeks"}
                          className="border py-1 px-2 text-base outline-none"
                        >
                          <option value="">1 weeks</option>
                          <option value="">2 weeks</option>
                          <option value="">3 weeks</option>
                          <option value="">4 weeks</option>
                        </select>
                      </div>
                      <p className="text-[#636363] text-base font-normal leading-relaxed">
                        Subscribe now and get the 10% of discount on every
                        recurring order. The discount will be applied at
                        checkout.{" "}
                        <span className="text-[#56b280]">See details</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleAddToCart(data as Product, quantity)}
                  className=" mt-[65px] flex  justify-end"
                >
                  <button className="add-btn border  flex items-center justify-center gap-3 border-[#56b280] text-[#56b280] text-xl font-light   px-[95px] py-2 transition-transform  hover:bg-[#56b280] hover:text-white ">
                    <AiOutlineShoppingCart className="text-2xl add-btn_icon text-[#56b280]  " />{" "}
                    + Add to cart
                  </button>
                </div>
                <div className="flex flex-col gap-2 mt-10 p-5 border  rounded-lg">
                  <div>
                    <strong className="text-[#1D252C]">Wax:</strong>
                    <span className="text-[#849A8E]">
                      {" "}
                      Top grade Soy wax that delivers a smoke less, consistent
                      burn
                    </span>
                  </div>
                  <div>
                    <strong className="text-[#1D252C]">Fragrance: :</strong>
                    <span className="text-[#849A8E]">
                      {" "}
                      Premium quality ingredients with natural essential oils
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <strong className="text-[#1D252C]">Burning Time:</strong>
                    <span className="text-[#849A8E]"> 70-75 hours</span>
                    <strong className="text-[#1D252C]">Dimension:</strong>
                    <span className="text-[#849A8E]">10cm x 5cm </span>
                    <strong className="text-[#1D252C]">Weight: </strong>
                    <span className="text-[#849A8E]">400g</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail
