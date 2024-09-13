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
    <div>
      <Header />
      <div className="my-[100px]">
        <Container>
          <Title className="text-center py-6" level={2}>
            Search results for: <span className="underline ">{param}</span>
          </Title>
          <div className="grid grid-cols-4 gap-4 ">
            {products?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Search
