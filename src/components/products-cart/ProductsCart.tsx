// import React from "react";
// import { Table, Button } from "antd";

// interface Product {
//   key: string;
//   title: string;
//   price: number;
//   stock: number;
// }

// interface ColumnType {
//   title: string;
//   dataIndex?: keyof Product;
//   key: string;
//   render?: (text: any, record: Product) => React.ReactNode;
// }

// const AddToCartTable = ({product} : {product: Product}) => {
//   const columns: ColumnType[] = [
//     {
//       title: "Product",
//       dataIndex: "title",
//       key: "title",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//       render: (price: number) => `$${price.toFixed(2)}`,
//     },
//     {
//       title: "Stock",
//       dataIndex: "stock",
//       key: "stock",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//           Add to Cart
//         </Button>
//       ),
//     },
//   ];

  

//   return (
//     <div className="p-4">
//       <Table<Product>
//         columns={columns}
//         dataSource={[product]}
//         className="border-collapse border border-gray-300"
//         rowClassName="hover:bg-gray-50"
        
//       />
//     </div>
//   );
// };

// export default AddToCartTable;
