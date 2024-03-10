"use client";
import React from "react";
import { Button } from "../Button";
import { useEffect, useContext } from "react";
import { CartContext } from "@/app/CartProvider";
import { cn } from "@/lib/utils";

const Discounts = ({ discounts }) => {
  const {
    handleSetCurrentDiscount,
    handleSetQuantity,
    stock,
    handleSetAllDiscounts,
    discount: currentDiscount,
  } = useContext(CartContext);

  //Resetting the current discount when the component mounts
  useEffect(function () {
    handleSetCurrentDiscount(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Store all discount data when the component mounts
  useEffect(
    function () {
      handleSetAllDiscounts(discounts);
    },
    [discounts, handleSetAllDiscounts]
  );

  function handleSelectDiscount(newDiscount) {
    handleSetCurrentDiscount(newDiscount.discount);
    handleSetQuantity(newDiscount.minimumQuantity);
  }
  return (
    <div className="flex">
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
                onClick={() => handleSelectDiscount(discount)}
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

export default Discounts;
