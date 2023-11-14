import React from "react";
import Container from "./container";
import Image from "next/image";
import logo from "@/public/image/logoalt.png";
import twitter from "@/public/image/twitter.png";
import facebook from "@/public/image/facebook.png";
import instagram from "@/public/image/instagram.png";

export default function Footer() {
  return (
    <div className="bg-Dark_Green h-[400px]">
      <Container>
        <div className="flex ">
          <div className="">
            <Image src={logo} alt="" />
            <div className="flex gap-[19px] mt-[25px]">
              <Image src={twitter} alt="" />
              <Image src={facebook} alt="" />
              <Image src={instagram} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
