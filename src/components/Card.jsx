import React from "react";
import Burger from "../assets/burger.jpeg";

const Card = () => {
  return (
    <div className="w-60 h-72 border-2 rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-[50%] object-cover ">
        <img src={Burger} alt="food img" className="w-full" />
      </div>
      
      <div className="ml-2 mt-5">
        <h2 className="font-semibold text-xl">Burger</h2>
        <p className="mt-2">Price:200</p>
        <p className="mt-2">Total:1</p>
        <p className="mt-2">Cost (INR):200</p>
        <div className="flex gap-5 mt-3">
          <button className="w-12 px-4 py-1 bg-[#3F51B5] text-white text-xl rounded-lg">
            +
          </button>
          <button className="w-12 px-4 py-1 bg-[#d3d3d3] text-[#747474] text-xl rounded-lg">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
