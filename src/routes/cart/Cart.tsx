// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import ProductsCart from "../../components/products-cart/ProductsCart";
// import { Product } from "../../types";
// import { Link } from "react-router-dom";

// const Cart: React.FC = () => {
//   const { cartProduct } = useSelector((state: RootState) => state.cart);
//   const [products, setProducts] = useState<Product>({} as Product);

//   // Sync products state with cartProduct from Redux
//   useEffect(() => {
//     setProducts( cartProduct as Product);
//   }, [cartProduct]); // Dependency array ensures effect runs when cartProduct changes

//   return (
//     <div className="flex min-h-screen w-full flex-col justify-between bg-white">
//       <Header />
//       <div className="mb-12 mt-24 flex flex-col gap-10">
//         <div className="container flex flex-col gap-16">
//           <div className="flex flex-col items-center justify-center gap-4 text-center">
//             <h2 className="text-center text-[26px] font-medium leading-[57.60px] text-[#272727]">
//               Your cart items
//             </h2>
//             <Link
//               to={"/"}
//               className="h-[26px] w-[350px] text-center text-lg font-normal leading-relaxed text-[#56b280] underline"
//             >
//               Back to shopping
//             </Link>
//           </div>

//           <ProductsCart cartProduct={products} />
//         </div>

//         <div className="container flex items-center justify-end">
//           <div className="min-w-1/2 flex items-center gap-10">
//             <div className="flex flex-col items-end justify-center gap-2">
//               <div className="flex items-center gap-5">
//                 <span className="text-xl font-medium leading-relaxed text-[#272727]">
//                   Sub-total
//                 </span>
//                 <span className="text-right text-xl font-medium leading-relaxed text-[#272727]">
//                   $ 9.99
//                 </span>
//               </div>
//               <span className="text-right text-base font-normal leading-relaxed text-[#9e9e9e]">
//                 Tax and shipping cost will be calculated later
//               </span>
//             </div>

//             <button className="flex max-w-max items-start justify-start gap-2.5 rounded bg-[#56b280] px-11 py-2 transition active:scale-95">
//               <span className="text-center text-xl font-medium text-white">
//                 Check-out
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;
