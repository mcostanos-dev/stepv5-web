"use client";
import { useContext } from "react";
import { Button } from "../Button";
import { CartContext } from "@/app/CartProvider";

const ProductOptions = ({ options }) => {
  const { option: optionName, handleSetOption } = useContext(CartContext);
  return (
    <div className="mb-6">
      <h4 className="mb-3 font-heading font-medium">
        <span>Additional Options:</span>
        <span className="text-gray-400"> {optionName?.name}</span>
      </h4>
      <div className="flex flex-wrap gap-1">
        {options &&
          options.map((option) => (
            <Button
              key={option.id}
              type="button"
              variant="secondary"
              btnSize="sm"
              onClick={() => handleSetOption(option)}
              className={
                option.id === optionName?.id
                  ? "bg-slate-800 hover:bg-slate-600 text-white"
                  : ""
              }
            >
              {option.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default ProductOptions;
