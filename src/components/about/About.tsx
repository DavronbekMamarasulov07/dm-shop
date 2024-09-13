import Container from "../container/Container";
import information from "../../img/information.png"
import { Button } from "antd";
import { useState } from "react";

const About = () => {
  const [check, setCheck] = useState<boolean>(false)
  return (
    <div className="bg-[#F7F8FA] pt-[133px] pb-[200px]">
      <Container>
        <div className="flex justify-between items-end ">
          <div className="flex flex-col gap-4">
            <h3 className="w-full  max-w-[300px] text-[#1d252c] text-[40px] font-medium leading-[46.60px]">
              Clean and fragrant soy wax
            </h3>
            <p className=" text-[#56b280] text-base font-normal leading-snug mb-5">
              Made for your home and for your wellness
            </p>
            <ul className="flex flex-col gap-[10px]">
              <li className="flex items-center gap-2">
                <input onChange={() => setCheck(!check)} defaultChecked className="about-check" type="checkbox" />
                <span className="text-base font-normal  leading-7">
                  Eco-sustainable:All recyclable materials, 0% CO2 emissions
                </span>
              </li>
              <li className="flex items-center gap-2">
                <input onChange={() => setCheck(!check)} defaultChecked className="about-check" type="checkbox" />
                <span className="text-base font-normal  leading-7">
                  Hyphoallergenic: 100% natural, human friendly ingredients{" "}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <input onChange={() => setCheck(!check)} defaultChecked className="about-check" type="checkbox" />
                <span className="text-base font-normal  leading-7">
                  Handmade: All candles are craftly made with love.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <input onChange={() => setCheck(!check)} defaultChecked className="about-check" type="checkbox" />
                <span className="text-base font-normal  leading-7">
                  Long burning: No more waste. Created for last long.
                </span>
              </li>
            </ul>
            <Button size="large" type="primary" className="!bg-[#56b280] !text-white !text-base max-w-[150px] mt-[68px] transition-transform active:scale-95">
              Learn more
            </Button>
          </div>
          <div className="about-img flex justify-center bg-white shadow-xl rounded overflow-hidden">
            <img width={500} src={information} className="about__img" alt="information_photo" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About

