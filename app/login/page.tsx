import React from "react";
import Image from "next/image";
import logo from "@/public/image/logo.png"

function page() {
  return <div className="flex">
<div className="bg-login-bg cover w-[50%]">
<Image src="" alt="" />
</div>
<div className="w-[50%]">
<div className="w-[90%]">
<Image src={logo}  alt=''/>

<h2 className="text-black text-[39px] font-[600]  text-center">Welcome to Instanttopup!</h2>
<button className="flex">
    <Image src='' alt='' /> 
    <p>Login with Google</p>
</button>

<div>
    <h4>Email address</h4>
    <Inpu
</div>

</div>
</div>



  </div>;
}

export default page;
