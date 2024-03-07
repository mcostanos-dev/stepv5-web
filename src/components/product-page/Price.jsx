"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/app/CartProvider";
import { Button } from "../Button";
import { cn } from "@/lib/utils";

const Price = ({ price, discounts }) => {
  const {
    handleSetPrice,
    totalPrice,
    handleSetDiscount,
    handleSetQuantity,
    stock,
    handleSetAllDiscounts,
    discount: currentDiscount,
  } = useContext(CartContext);

  useEffect(
    function () {
      handleSetPrice(price);
    },
    [price, handleSetPrice]
  );

  useEffect(
    function () {
      handleSetAllDiscounts(discounts);
    },
    [handleSetAllDiscounts, discounts]
  );

  function handleClickDiscount(discount) {
    handleSetDiscount(discount.discount);
    handleSetQuantity(discount.minimumQuantity);
  }

  return (
    <div className="flex flex-col mb-4 space-y-6">
      <p className="flex items-start ">
        <span className="mr-2 text-sm self-center text-gray-800 font-medium">
          $
        </span>
        <span className="text-2xl text-gray-800 font-medium">{totalPrice}</span>
      </p>
      {discounts?.length > 0 && (
        <div className="flex-1 flex-grow flex gap-1 flex-wrap">
          {discounts.map((discount) => {
            if (discount.minimumQuantity > stock) return;
            return (
              <Button
                type="button"
                key={discount.name}
                btnSize="sm"
                variant={
                  discount.discount === currentDiscount
                    ? "positive"
                    : "secondary"
                }
                className="group"
                onClick={() => handleClickDiscount(discount)}
              >
                Buy {discount.minimumQuantity}+ for
                <span
                  className={cn(
                    "transition-all font-bold px-1 font text-teal-600 group-hover:scale-150 group-hover:px-2 duration-300",
                    { "text-red-500": discount.discount === currentDiscount }
                  )}
                >
                  {discount.name}
                </span>{" "}
                discount!
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Price;
