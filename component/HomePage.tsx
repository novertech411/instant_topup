import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./container";
import Image from "next/image";
import strock from "@/public/strock.png";
import searchBox from "@/public/search.png";

function HomPage() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="w-[800px] mt-[155px] mx-auto relative">
          <Image
            className=" w-[300px] absolute -right-10 -top-10 "
            src={searchBox}
            alt=""
          />
          <div className="relative">
            <h1 className=" text-black text-[70px] font-[850] text-center">
              Your electricity payment made easy.
            </h1>
            <Image
              className="absolute -right-10 bottom-0"
              src={strock}
              alt=""
            />
          </div>
        </div>
        <div></div>
      </Container>

      <Footer />
    </div>
  );
}

export default HomPage;
