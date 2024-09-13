import { Skeleton } from "antd";
import Container from "../container/Container"
import { useGetProductsQuery } from "../../redux/api/productsApi";
import { RenderRating } from "../../utils";

const Testimonials = () => {
  const { data } = useGetProductsQuery();

  const products = data?.products;


  return (
    <div className="bg-[#56B2801A] py-[90px]">
      <Container>
        <div className="">
          <div className=" text-center text-[#0b254b] text-[40px] font-medium  leading-[57.60px]">
            Testimonials
          </div>
          <div className=" text-center text-[#5e6e89] text-lg font-medium  leading-7 tracking-tight">
            Some quotes from our happy customers
          </div>
          <div className="w-full ">
            {products && products.length > 0 ? (
              <div className="grid grid-cols-3 gap-8 ">
                {products.slice(0, 3).map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col  items-center my-[40px] w-full max-w-[400px] p-6 bg-white shadow-md rounded-xl transition-transform hover:scale-105"
                  >
                    <img
                      width={80}
                      className="rounded-full"
                      src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                      alt="avatar"
                    />
                    <span className="mt-4">
                      <RenderRating rate={product.reviews[0].rating} />
                    </span>
                    <div className="w-full flex flex-col flex-1">
                      <p className="mt-5 mb-2 text-center text-[#1c283f] text-[22px] font-medium  leading-7 flex-1">
                        "{product.reviews[0].comment}"
                      </p>
                      <h3 className=" text-center text-[#7b7f87] text-lg font-normal ">
                        {product.reviews[0].reviewerName}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-8 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col  items-center my-[40px] w-full max-w-[400px] p-6 bg-white shadow-md rounded-xl"
                  >
                    <Skeleton.Image
                      active
                      style={{ width: 80, height: 80, borderRadius: "50%" }}
                    />
                    <span className="mt-4">
                      <Skeleton.Button
                        active
                        style={{ width: 100, height: 20 }}
                      />
                    </span>
                    <div className="w-full flex flex-col flex-1">
                      <span className="mt-5 mb-2 text-center text-[#1c283f] text-[22px] font-medium  leading-7 flex-1">
                        <Skeleton.Input
                          active
                          style={{ width: 200, height: 20 }}
                        />
                      </span>
                      <h3 className=" text-center text-[#7b7f87] text-lg font-normal ">
                        <Skeleton.Input
                          active
                          style={{ width: 100, height: 20 }}
                        />
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials
