import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiBars3BottomRight,
} from "react-icons/hi2";

const NavBar = () => {
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div>
          {/* Left Logo */}
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Options */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-black  hover:text-gray-500 text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-black  hover:text-gray-500 text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-black  hover:text-gray-500 text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-black  hover:text-gray-500 text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right logos */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover: text-gray-700">
            <HiOutlineUser className="h-6 w-6 text-gray-500" />
          </Link>
            <button className="relative  hover: text-black">
            <HiOutlineShoppingCart className="h-6 w-6 text-gray-500" />
            <span className="absolute -top-1 bg-red-400 text-white text-xs rounded-full px-2 py-0.5">4</span>
          </button>

          {/* Search Button */}


          {/* Hamburger buttton */}
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
