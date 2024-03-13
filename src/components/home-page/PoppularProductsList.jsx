import React from "react";
import FadeIn from "../framer-motion/fadeIn";
import ProductCard from "../ProductCard";

const PoppularProductsList = () => {
  return Array.from({ length: 6 }).map((card, i) => {
    return (
      <FadeIn key={i} duration={1} delay={i * 0.07}>
        <ProductCard />
      </FadeIn>
    );
  });
};

export default PoppularProductsList;
