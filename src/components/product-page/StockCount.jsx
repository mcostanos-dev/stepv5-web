"use client";
import { CartContext } from "@/app/CartProvider";
import { useEffect, useContext } from "react";

const StockCount = ({ stock: stockData }) => {
  const { stock, handleSetStock } = useContext(CartContext);

  useEffect(
    function () {
      handleSetStock(stockData);
    },
    [stockData, handleSetStock]
  );

  return (
    <div className="mb-6">
      <h4 className="mb-3 font-heading font-medium">
        <span>Stock:</span>
        <span className="text-gray-400"> {stock}</span>
      </h4>
    </div>
  );
};

export default StockCount;
