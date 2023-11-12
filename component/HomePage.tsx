import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./container";
import Image from "next/image";
import strock from "@/public/image/strock.png";
import searchBox from "@/public/image/search.png";
import billCard from "@/public/image/billcard.png";
import aedc from "@/public/image/aedc.png";
import bedc from "@/public/image/bedc.png";
import ekedc from "@/public/image/ekedc.png";
import image1 from "@/public/image/24-Group 2488.png";
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

        <div className="mt-[250px] mb-[61px]">
          <div className="w-[70px] h-2 bg-lazy_Gold rounded-lg"></div>
          <div className="flex  gap-[75px]">
            <div className=" w-[300px]">
              <h1 className="text-[39px] font-[500] ">
                Our service <br></br> partners{" "}
              </h1>
            </div>
            <div className=" flex justify-between w-full  ">
              <Image className="w-[200px] h-[100px] " src={aedc} alt="" />
              <Image className="w-[250px] h-[100px] " src={bedc} alt="" />
              <Image className="w-[200px] h-[100px] " src={ekedc} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <section className="bg-green-banner bg-cover h-[600px] flex items-center pt-[50px]">
        <Container>
          <div className="flex     items-center">
            <div className="w-[55%]  py-auto ">
              <Image src={image1} alt="" />
            </div>
            <div className="text-white  w-[45%]  items-cente">
              <h3 className="text-[45px] font-[700]">27/4 customer support</h3>
              <p className="text-[20px] font-[400] my-[25px]">
                Don't blame yourself; we're here to swiftly resolve your issues,
                24/7, wherever you are. Your convenience is our priority.
              </p>
              <button className="bg bg-lazy_Gold text-[16px] px-[28px] py-[12px] rounded-md">
                {" "}
                Contact us{" "}
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className=" bg-white ">
        <Container>
          <div className="flex     items-center">
            <div className="text-black  w-[45%]  items-cente">
              <h3 className="text-[45px] font-[700]">Set topup remindert</h3>
              <p className="text-[20px] font-[400] my-[25px]">
                Tell us when to remind you to topup your electricity while you
                focus on other issue at hand
              </p>
              <button className="text-white bg-lazy_Gold text-[16px] px-[28px] py-[12px] rounded-md">
                {" "}
                Reminder{" "}
              </button>
            </div>
            <div className="w-[55%]  py-auto ">
              <Image src={image1} alt="" />
            </div>
          </div>
        </Container>
      </section>
      <section className=" bg-[#D9F2EF] ">
        <Container>
          <div className="flex     items-center">
            <div className="w-[55%]  py-auto ">
              <Image src={image1} alt="" />
            </div>
            <div className="text-white  w-[45%]  items-cente">
              <h3 className="text-[45px] font-[700]">Pay via bank transfer</h3>
              <p className="text-[20px] font-[400] my-[25px]">
                Switch to bank transfers for instant, hassle-free electricity
                top-ups. Stay focused while we keep your power flowing smoothly
              </p>
              <button className="bg bg-lazy_Gold text-[16px] px-[28px] py-[12px] rounded-md">
                {" "}
                Buy electricity{" "}
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default HomPage;
