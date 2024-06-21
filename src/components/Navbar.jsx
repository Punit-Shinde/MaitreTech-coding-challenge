import React from "react";
import logo from "../assets/restaurant_24px.svg";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-[#3F51B5] w-full h-16 flex justify-between items-center text-white px-5">
        <div
          className="flex gap-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="text-white" />
          <h1 className="text-xl font-semibold">Food's Resturant</h1>
        </div>
        <div className="relative w-8 h-5">
          {window.location.pathname === "/menu" && (
            <>
              <FaShoppingCart
                className="text-black justify-end text-xl cursor-pointer"
                onClick={() => {
                  navigate("./ordersummary");
                }}
              />
              <div className="count absolute top-0 right-0 w-10px h-10px px-1 bg-white rounded-full text-black text-[10px] font-semibold select-none">
                1
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
