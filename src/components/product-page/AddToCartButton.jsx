"use client";
import Link from "next/link";
import { Button, getButtonClasses } from "../Button";
import { useContext } from "react";
import { CartContext } from "@/app/CartProvider";

const AddToCartButton = () => {
  const { quantity } = useContext(CartContext);
  return (
    <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
      <Button
        disabled={!quantity || (quantity < 1 && true)}
        className={getButtonClasses(
          "default",
          "lg",
          "w-full flex items-center justify-center "
        )}
      >
        <span>Add To Cart</span>
      </Button>
    </div>
  );
};

export default AddToCartButton;
