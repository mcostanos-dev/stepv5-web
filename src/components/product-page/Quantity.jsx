"use client";
import { CartContext } from "@/app/CartProvider";

import { useContext } from "react";

const Quantity = () => {
  const { quantity, handleSetQuantity } = useContext(CartContext);

  return (
    <div className="mb-6">
      <h4 className="mb-3 font-heading font-medium">Qty:</h4>
      <input
        className="w-24 px-3 py-2 text-center bg-white border-2 border-gray-600 outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-xl"
        type="text"
        onChange={(e) => handleSetQuantity(e.target.value)}
        value={quantity}
      />
    </div>
  );
};

export default Quantity;
