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
        <div>
          {window.location.pathname === "/menu" && (
            <FaShoppingCart
              className="text-black justify-end text-xl"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
