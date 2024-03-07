"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

//For Selecting Product Variation
export function CartProvider({ children }) {
  const [option, setOption] = useState({});
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(0);
  const [allDiscounts, setAllDiscounts] = useState([]);
  const [discount, setDiscount] = useState(0);

  const handleSetOption = (newOption) => {
    if (newOption.id === option.id) {
      setOption({});
    } else {
      setOption(newOption);
    }
  };

  const handleSetPrice = (price) => setPrice(price);

  const handleSetQuantity = (newQuantity) => {
    if (isNaN(newQuantity) || newQuantity < 0) {
      return setQuantity(0);
    } else {
      if (newQuantity > stock) {
        return setQuantity(stock);
      }

      if (allDiscounts?.length > 0) {
        const discountsAvailable = allDiscounts.filter(
          (discount) => discount.minimumQuantity <= newQuantity
        );
        const highestDiscount = discountsAvailable.reduce(
          (highestSoFar, currentDiscount) => {
            if (
              !highestSoFar?.discount ||
              currentDiscount.discount > highestSoFar.discount
            ) {
              return currentDiscount;
            }
            return highestSoFar;
          },
          null
        );

        if (highestDiscount !== null && highestDiscount.discount) {
          handleSetDiscount(highestDiscount.discount);
        } else {
          handleSetDiscount(0);
        }
      }

      return setQuantity(newQuantity);
    }
  };

  const handleSetStock = (newStock) => setStock(newStock);

  const handleSetDiscount = (newDiscount) => setDiscount(newDiscount);

  const handleSetAllDiscounts = (newDiscounts) => {
    return setAllDiscounts(newDiscounts);
  };

  let totalPrice;

  if (option.additionalPrice) {
    totalPrice = (price + option.additionalPrice) * quantity;
    if (discount) {
      const discountFactor = 1 - discount / 100;
      totalPrice *= discountFactor;
    }
  } else {
    totalPrice = price * quantity;
    if (discount) {
      const discountFactor = 1 - discount / 100;
      totalPrice *= discountFactor;
    }
  }

  totalPrice = totalPrice.toFixed(2);

  const value = {
    option,
    totalPrice,
    quantity,
    stock,
    discount,
    handleSetOption,
    handleSetPrice,
    handleSetQuantity,
    handleSetStock,
    handleSetDiscount,
    handleSetAllDiscounts,
    setDiscount,
    setOption,
    setQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
