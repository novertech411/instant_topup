import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import logo from "@/public/image/logo.png";
import phoneicon from "@/public/image/vuesax-outline-call.png";
import Container from "./container";
export default function Navbar() {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[764px] w-5/6 mx-auto">
      <div className="  py-[22px]  px-[81px] flex justify-between">
        <div className="w-[75px] h-[45px]">
          <Image src={logo} alt="" />
        </div>

        <div className="flex gap-[75px]">
          <div className="flex gap-10 items-center  ">
            <p className=" text-[16px] font-400  "> Contact us </p>
            <div className="flex  gap-2  ">
              <Image
                className="W-[24px] h-[24px]"
                height={24}
                width={24}
                src={phoneicon}
                alt=""
              />
              <h1 className=" text-[16px] font-400  ">+234 806 573 0411</h1>
            </div>
          </div>

          <div>
            <button className="py-[12px]  px-[30px]  text-lazy_Gold">
              login
            </button>
            <button className="py-[12px]  px-[30px] border-2   text-lazy_Gold border-lazy_Gold rounded-lg">
              {" "}
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
