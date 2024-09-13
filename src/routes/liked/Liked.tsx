import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Container from "../../components/container/Container";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Typography } from "antd";

const { Title } = Typography;

const Liked = () => {
  const { likedProducts } = useSelector((state: RootState) => state.like);


  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow my-[150px]">
        <Container>
          <div>
            {likedProducts.length > 0 && likedProducts ? (
              <div>
                <Title className="pb-[30px]" level={2}>
                  {" "}
                  Liked products
                </Title>
                <div className="grid grid-cols-4 gap-y-10 gap-x-5 ">
                  {likedProducts?.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <Title className="pb-[30px]" level={2}>
                {" "}
                No liked products
              </Title>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Liked
