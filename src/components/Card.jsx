import React from "react";
import feedsData from "../data/feeds.json";
import Hamburger from "../assets/burger.jpeg";
import Coke from "../assets/coke.jpeg";
import Fries from "../assets/fries.jpeg";
import Pepsi from "../assets/pepsi.jpeg";

const imageMap = {
  Hamburger,
  Coke,
  Fries,
  Pepsi,
};

const Card = () => {
  return (
    <div className="items-center flex gap-4">
      {feedsData.map((item, index) => (
        <div
          key={index}
          className="w-72 h-96 border-2 rounded-lg shadow-md overflow-hidden"
        >
          <div className="w-full h-[50%] object-cover">
            <img
              src={imageMap[item.name]}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-2 mt-5">
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <p className="mt-2">Price: {item.price}</p>
            <p className="mt-2">Cost (INR): {item.price}</p>
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
      ))}
    </div>
  );
};

export default Card;
