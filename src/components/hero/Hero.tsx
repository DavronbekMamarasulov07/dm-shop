import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero  w-full flex items-center justify-center">
      <div className="w-full max-w-[730px]  bg-[#f7f8fa]/80 rounded-sm backdrop-blur-xl flex items-center justify-center flex-col pt-[33px] pb-[63px] px-[100px]">
        <div className="w-full max-w-[540px] h-28 text-center text-[#1d252c] text-[40px] font-medium  leading-[57.60px]">
          🌱 <br />
          The nature candle
        </div>
        <p className="w-full max-w-[537px] h-14 text-center text-[#1d252c] text-lg font-normal leading-relaxed">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments{" "}
        </p>
        <button className="text-center text-white text-xl font-medium mt-[45px] px-11 py-2 bg-[#56b280] rounded justify-start items-start gap-2.5 inline-flex transition-transform active:scale-95 hover:bg-[#418a62]">
          Discovery our collection
        </button>
      </div>
    </div>
  );
}

export default Hero
