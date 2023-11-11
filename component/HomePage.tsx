import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./container";
import Image from "next/image";
import strock from "@/public/strock.png";
import searchBox from "@/public/search.png";
import billCard from "@/public/billcard.png";
import aedc from "@/public/aedc.png";
import bedc from "@/public/bedc.png";
import ekedc from "@/public/ekedc.png";
function HomPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="w-[800px] mt-[155px] mx-auto relative">
          <Image
            className=" w-[350px] absolute -right-10 -top-10 "
            src={searchBox}
            alt=""
          />
          <div className="">
            <h1 className=" text-black text-[60px] font-[800] text-center">
              Your electricity payment made easy.
            </h1>
            <Image className=" mx-auto " src={strock} alt="" />
          </div>

          <div className="w-[850]">
            <p className="text-[26px] font-[400] text-center">
              Simplify your electricity payment and bill management at your
              convenience<br></br> with an easy to use digital platform
              designed for you
            </p>
          </div>

          <div className="flex gap-[20px] justify-center mt-[40px]">
            <input
              className="placeholder:text-[#BDBDBD] border-[#D9F2EF] bg-[#E6F6F4] font-[400] rounded-md py-[17px]  pr-[75px] pl-[15px]"
              placeholder="Enter your phone number to begin"
            />
            <button className="py-[12px] px-[24px] text-white text-[16px] font-[600] bg-lazy_Gold rounded-md">
              Buy electricity
            </button>
          </div>
          <Image
            className="w-[200] absolute  -ml-[150px] -mt-[30px] "
            src={billCard}
            alt=""
          />
        </div>

        <div className="mt-[250px]">
          <div className="w-[70px] h-2 bg-lazy_Gold rounded-lg"></div>
          <div className="flex gap-[63px]">
            <div className="w-[300px]">
              <h1 className="text-[39px] font-[600] ">Our service partners </h1>
            </div>
            <div className=" flex  justify-between ">
              <Image className="w-[150] " src={aedc} alt="" />
              <Image className="w-[150] " src={bedc} alt="" />
              <Image className="w-[150] " src={ekedc} alt="" />
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default HomPage;
