import { useGetProductsQuery } from "../../redux/api/productsApi";
import Container from "../container/Container";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Card from "../card/Card";


const Popular = () => {
  const {data} = useGetProductsQuery();

  const products = data?.products;

  const sortedProducts = products?.map((product) => product).sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="topRating mt-[90px] mb-14">
      <Container>
        <div className=" ">
          <div className="flex flex-col gap-4 mb-12 ">
            <h3 className="] text-center text-[#0b254b] text-[40px] font-medium  leading-[57.60px]">
              Popular
            </h3>
            <p className=" text-center text-[#5e6e89] text-lg font-medium  leading-7 tracking-tight">
              Our top selling product that you may like
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: true }}
            loop={true}
          >
            {sortedProducts?.map((product, index) => (
              <SwiperSlide key={index}>
                <Card product={product} key={product.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Popular
