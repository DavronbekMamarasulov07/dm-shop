import { Skeleton } from "antd";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import Container from "../container/Container";
import Card from "../card/Card";

const Products = () => {
  const { data } = useGetProductsQuery();
  const products = data?.products;

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center my-[100px]">
          <h2 className="w-[1109px] h-[50px] text-center text-[#0b254b] text-[40px] font-medium  leading-[57.60px] mb-3">
            Products
          </h2>
          <p className="w-[1109px] h-[35px] text-center text-[#5e6e89] text-lg font-medium  leading-7 tracking-tight mb-[60px]">
            Order it for you or for your beloved ones
          </p>
          {products && products.length > 0 ? (
            <div className="grid grid-cols-4 gap-10">
              {products &&
                products.slice(0, 8).map((product) => (
                  <Card product={product} key={product.id} />
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-10">
              {Array.from({ length: 8 }).map((_, index) => (
                <div className="flex flex-col shadow-xl" key={index}>
                  <div className="bg-black p-5 w-full flex items-center justify-center">
                    <Skeleton.Image
                      active
                      style={{ width: 250, height: 190 }}
                    />
                  </div>
                  <div className="px-5 py-2 flex flex-col w-full flex-1 gap-2">
                    <h3 className="text-[#1c283f] text-base font-medium flex-1 ">
                      <Skeleton.Input active style={{ width: 150 }} />
                    </h3>
                    <span className="text-right text-[#56b280] text-xl font-medium">
                      <Skeleton.Button active />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
