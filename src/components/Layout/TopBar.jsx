import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
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
      </div>
    </div>
  );
};

export default TopBar;
