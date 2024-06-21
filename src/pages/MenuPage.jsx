import React from "react";
import Navbar from "../components/Navbar";
import OrderSummary from "../components/OrderSummary";

import Card from "../components/Card";
const MenuPage = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="flex gap-10 m-32 flex-wrap">
          <Card />
        </div>
      </div>

      {/* <div className="absolute w-[35%] h-48 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-76 p-5 shadow-md rounded-md border-2 ">
        <OrderSummary />
      </div> */}
    </>
  );
};

export default MenuPage;
