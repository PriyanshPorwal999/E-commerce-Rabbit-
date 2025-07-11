import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents  from "../Cart/CartContents";
import { useNavigate } from "react-router";

const CartDrawer = ({ DrawerOpen, toggleCartDrawer }) => {
 
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout");
  }

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        DrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      {/* Cart Contents with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>

      {/* Checkout Button fixed at bottom */}
      <div className="p-4 sticky bottom-0 bg-white">
        <button onClick={handleCheckout} className="bg-black text-white rounded-lg hover:bg-gray-900 w-full py-3 font-semibold transition">
          Checkout
        </button>
        <p className="text-sm text-gray-400 text-center tracking-tighter mt-2">
          Shipping, Taxes and Discout codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
