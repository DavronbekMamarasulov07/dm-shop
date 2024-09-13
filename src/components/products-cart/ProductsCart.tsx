// import { IoMdRemoveCircle } from "react-icons/io"; 
// import { Link } from "react-router-dom";
// import { Product } from "../../types";
// import { Image } from "antd";
// import { AppDispatch } from "../../redux/store";
// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../redux/slices/cartSlice";



// interface ProfileCardProps {
//   cartProduct: Product;
// }



// const ProductsCart = ({ cartProduct } : ProfileCardProps) => {
//   const dispatch = useDispatch<AppDispatch>();
//   return (
//     <div className="flex flex-col">
//       <div className="flex justify-between border-b border-b-[#e5e5e5] pb-3">
//         <div className="flex flex-1">
//           <span className=" text-base font-medium leading-relaxed text-[#272727]">
//             Product :{" "}
//             <span className="text-[#56b280] text-xl underline">
//               {" "}
//               {cartProduct.title}
//             </span>
//           </span>
//         </div>
//         <div className="flex flex-1 items-center justify-between">
//           <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//             Price
//           </span>
//           <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//             Quantity
//           </span>
//           <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//             Total
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <div className="flex justify-between  border-b border-b-[#e5e5e5] py-5">
//           <div className="flex flex-1 items-center gap-8">
//             <span
//               onClick={() => dispatch(removeFromCart(cartProduct.id))}
//               className="cursor-pointer  text-2xl font-normal leading-relaxed text-[#56b280] transition active:scale-95 "
//             >
//               <IoMdRemoveCircle />
//             </span>
//             <Image
//               width={150}
//               className=" bg-slate-100 object-contain"
//               src={cartProduct.thumbnail}
//               alt="Product"
//             />
//             <div className="flex flex-col">
//               <span className=" text-xl font-medium leading-[57.60px] text-[#272727]">
//                 {cartProduct.title}
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-1 items-center justify-between">
//             <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//               ${cartProduct.price}
//             </span>
//             <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//               <div className="flex items-center gap-4">
//                 <button className="flex h-8 w-8 items-center justify-center rounded bg-slate-200  text-lg font-normal leading-relaxed text-[#56b280] transition active:scale-95 active:bg-slate-300">
//                   -
//                 </button>
//                 <span className=" text-lg font-normal leading-relaxed text-[#1d252c]">
//                   {cartProduct.quantity}
//                 </span>
//                 <button
//                   onClick={() => {}}
//                   className="flex h-8 w-8 items-center justify-center rounded bg-slate-200  text-lg font-normal leading-relaxed text-[#a6a6a6] transition active:scale-95 active:bg-slate-300"
//                 >
//                   +
//                 </button>
//               </div>
//             </span>
//             <span className="flex flex-1 items-center justify-center  text-base font-medium leading-relaxed text-[#272727]">
//               ${(cartProduct.price * cartProduct.quantity).toFixed(2)}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsCart

