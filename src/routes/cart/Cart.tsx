import Header from "../../components/header/Header.tsx";
import { useSelector } from "react-redux";
import {  RootState } from "../../redux/store";
import { Product } from "../../types";
import Footer from "../../components/footer/Footer.tsx";
import CartTable from "../../components/cart-table/CartTable.tsx";
import Container from "../../components/container/Container.tsx";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import useSearchParamsHook from "../../hooks/UseQueryParams.tsx";
import BankCardForm from "../../components/bank-card-form/BankCardForm.tsx";

const Carts = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const { setParam, getParam ,removeParam } = useSearchParamsHook();
  const { cartProduct }: { cartProduct: Product[] } = useSelector(
    (state: RootState) => state.cart
  );
  

  const total = cartProduct
    .map((product) => product.price * (product.quantity || 0))
    .reduce((a, b) => a + b, 0).toFixed(2);

    

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (getParam("modal")) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [getParam("modal")]);

   const showModal = () => {
     setIsModalOpen(true);
     setParam("modal", "open");
   };
  
   const handleCancel = () => {
     setIsModalOpen(false);
     removeParam("modal");
   };

  console.log(total);
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="my-[120px] flex-grow ">
        <Container>
          <div className="w-full flex flex-col items-end">
            <div className="w-full">
              <h2 className=" text-left text-3xl font-bold mb-5">
                Product Cart
              </h2>
            </div>
            <table className="w-full cart-table">
              <thead className=" ">
                <tr>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">
                    <p>Quantity</p>
                    <span className="text-[#56b280] text-[10px]">
                      (quantity more than 10 will get 10% discount)
                    </span>
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="pt-5">
                {cartProduct && cartProduct.length > 0 ? (
                  cartProduct.map((product) => (
                    <CartTable key={product.id} product={product} />
                  ))
                ) : (
                  <tr className="w-full">
                    <td colSpan={6} className="text-center py-10">
                      Cart is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {cartProduct && cartProduct.length > 0 ? (
              <div className="bg-green-100 flex flex-col w-full max-w-[400px] p-5 mt-5 gap-2 items-end">
                <div className=" w-full flex justify-between gap-5 ">
                  <span className="text-2xl">SubTotal: </span>{" "}
                  <strong className="text-xl">${total}</strong>
                </div>
                <div className=" w-full flex justify-between gap-5">
                  <span className="text-2xl">Shipping</span>{" "}
                  <strong className="text-xl">Free</strong>
                </div>
                <div className=" w-full flex justify-between gap-5">
                  <span className="text-2xl text-green-700 font-bold">
                    Total:{" "}
                  </span>{" "}
                  <strong className="text-xl text-green-700">${total}</strong>
                </div>
                <Button
                  onClick={showModal}
                  size="large"
                  type="primary"
                  className="!bg-green-500"
                >
                  Checkout
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Container>
      </div>
      <Footer />
      <Modal
        className="custom-modal"
        footer={null}
        maskClosable={false}
        centered
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <BankCardForm />
      </Modal>
    </div>
  );
};
export default Carts;
