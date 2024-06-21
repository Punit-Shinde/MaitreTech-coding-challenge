import React, { useState } from "react";
import logo from "../assets/restaurant_24px.svg";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Navbar = () => {
  const navigate = useNavigate();
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const toggleOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  return (
    <>
      <nav className="bg-[#3F51B5] w-full h-16 flex justify-between items-center text-white px-5">
        <div
          className="flex gap-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="text-white" />
          <h1 className="text-xl font-semibold">Food's Restaurant</h1>
        </div>
        <div className="relative w-8 h-5">
          {window.location.pathname === "/menu" && (
            <>
              <FaShoppingCart
                className="text-black justify-end text-xl cursor-pointer"
                onClick={toggleOrderSummary}
              />
              <div className="count absolute top-0 right-0 w-10px h-10px px-1 bg-gray-400 rounded-full text-white border-2 border-white text-[10px] font-semibold select-none">
                1
              </div>
            </>
          )}
        </div>
      </nav>
      {showOrderSummary && (
        <div className="fixed w-full h-full  bg-[#00000082] shadow-lg border rounded-lg p-4 z-10">
          <div className="absolute w-[35%] h-48 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-76 p-5 shadow-md rounded-md border-2 bg-white">
            <h1 className="font-bold">Order Summary</h1>
            <div className="flex justify-between gap-5 mt-5">
              <p>Coke : </p>
              <p>1</p>
              <div className="gap-2">
                <button className="w-12 px-4 py-1 bg-[#3F51B5] text-white text-2xl rounded-lg">
                  +
                </button>
                <button className="w-12 px-4 py-1 bg-[#fd0e0e] text-white text-2xl rounded-lg">
                  -
                </button>
              </div>
            </div>
            <p>Total (INR):</p>
            <div className="flex justify-end mt-5 mr-0">
              <button
                className="px-4 py-1 bg-[#3F51B5] text-white text-xl rounded-lg"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Save and Checkout
              </button>
              <button
                className="px-4 py-1  text-black text-xl rounded-lg"
                onClick={toggleOrderSummary}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
