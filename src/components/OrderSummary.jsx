import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
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
        <button className="px-4 py-1  text-black text-xl rounded-lg">
          Cancel
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
