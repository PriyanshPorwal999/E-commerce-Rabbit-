import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="Hover: text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="Hover: text-gray-300">
            <SlSocialInstagram className="h-5 w-5"/>
          </a>
          <a href="#" className="Hover: text-gray-300">
           <BsTwitterX className="h-4 w-4"/>
          </a>
        </div>
        <div className="text-sm text-center">
          <span>We Deliver Worldwide - Fast and Reliable Shipping!</span>
        </div>
        <div className="text-sm text-center hidden md:block">
          <a href="tel: 1234567890" className="hover: text-gray-300">+91 2222222</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
