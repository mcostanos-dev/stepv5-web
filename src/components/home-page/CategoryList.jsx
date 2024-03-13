import React from "react";
import CategoryCard from "./CategoryCard";

import FadeIn from "../framer-motion/fadeIn";
const CategoryList = () => {
  return Array.from({ length: 10 }).map((card, i) => {
    return (
      <FadeIn key={i} duration={1} delay={i * 0.07}>
        <CategoryCard />
      </FadeIn>
    );
  });
};

export default CategoryList;
