import Card from "../../components/card/Card";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import useSearchParamsHook from "../../hooks/UseQueryParams";
import { useGetProductsBySearchQuery } from "../../redux/api/productsApi";
import { Typography } from "antd";

const Search = () => {
 const { getParam } = useSearchParamsHook();
 const param = getParam("q");
 const { data } = useGetProductsBySearchQuery({ q : param });
 const products = data?.products;

 const { Title } = Typography;

 console.log(products);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-[100px]  flex-grow">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            {products?.length === 0 ? (
              <Title  level={2}>No products found</Title>
            ) : (
              products?.map((product) => (
                <Card key={product.id} product={product} />
              ))
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Search
