"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/app/CartProvider";

const Price = ({ price }) => {
  const { handleSetPrice, totalPrice } = useContext(CartContext);

  useEffect(
    function () {
      handleSetPrice(price);
    },
    [price, handleSetPrice]
  );

  return (
    <div className="flex flex-col space-y-1  mb-4">
      <span className="text-md text-gray-400  tracking-wide">
        Price Starts:
      </span>
      <p className="flex items-start ">
        <span className="mr-1 text-md self-center text-gray-800 font-bold">
          $
        </span>
        <span className="text-2xl text-gray-800 font-bold">{totalPrice}</span>
      </p>
    </div>
  );
};

export default Price;
