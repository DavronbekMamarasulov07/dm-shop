import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductDetail from "../../components/product-detail/ProductDetail";

const Details = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-[150px] flex-grow">
        <ProductDetail />
      </div>
      <Footer />
    </div>
  );
}

export default Details
