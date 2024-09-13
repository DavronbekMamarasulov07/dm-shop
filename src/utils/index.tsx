import { Spin } from "antd";
import { Suspense } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Spin className="custom-spin" tip="Loading..." size="large" />
    </div>
  );
};

const SuspenseElement = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};


export const RenderRating = ({ rate } : { rate: number }) => {
  if (rate > 5) {
    rate = 5;
  }

  const fullStars = Math.floor(rate);
  const emptyStars = 5 - fullStars;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <AiFillStar key={`full-${index}`} className="fill-[#56b280] text-xl" />
  ));
  const starsE = Array.from({ length: emptyStars }, (_, index) => (
    <AiOutlineStar key={`empty-${index}`} className="fill-[#56b280] text-xl" />
  ));

  return (
    <div className="starsWrapper flex items-center gap-2 mt-1">
      <div className="flex items-center gap-1 ">
        {stars} {starsE}
      </div>
    </div>
  );
};

export default SuspenseElement;
