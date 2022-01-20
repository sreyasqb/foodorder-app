import React from "react";
import logo from '../assets/qrcode.gif';
const HomePage = () => {
  return (
    <div className="">
      <div className="mt-[10vh] text-4xl">SCAN QR CODE</div>
      <img className="mx-auto object-scale-down h-[60]" src={logo} alt='loading'/>
    </div>
  );
};
export default HomePage;
