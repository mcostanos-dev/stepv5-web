"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/app/CartProvider";
import { Button } from "../Button";
import { cn } from "@/lib/utils";

const Price = ({ price }) => {
  const { handleSetPrice, totalPrice } = useContext(CartContext);

  useEffect(
    function () {
      handleSetPrice(price);
    },
    [price, handleSetPrice]
  );

  return (
    <div className=" mb-4 ">
      <p className="flex items-start ">
        <span className="mr-2 text-sm self-center text-gray-800 font-medium">
          $
        </span>
        <span className="text-2xl text-gray-800 font-medium">{totalPrice}</span>
      </p>
    </div>
  );
};

export default Price;
