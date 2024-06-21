import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-thin mt-28 select-none">Welcome to Food's</h1>
        <h1 className="text-7xl font-thin mt-5 select-none">Kitchen</h1>
        <button
          className="bg-[#3F51B5] text-white font-semibold text-lg uppercase rounded-md mt-12 px-4 py-2"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Go to Menu
        </button>
      </div>
    </>
  );
};

export default HomePage;
