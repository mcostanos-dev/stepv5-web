import { motion, AnimatePresence } from "framer-motion";

import React from "react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItemCategory from "./NavItemCategory";
import NavItemSubCategory from "./NavItemSubCategory";
import NavItemProduct from "./NavItemProduct";

const NavItem = ({
  category,
  isOpen,
  handleMouseEnter,
  handleMouseLeave,
  index,
}) => {
  return (
    <div className="w-full z-50">
      <NavItemCategory handleMouseEnter={handleMouseEnter} isOpen={isOpen}>
        {category.name}
      </NavItemCategory>

      {/* DROP DOWN */}
      {isOpen && (
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            exit={{ y: +20, opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "absolute inset-x-0 top-full text-md  py-4 bg-white border-b shadow-lg opacity-95"
            )}
          >
            <div></div>
            <MaxWidthWrapper>
              <div className="flex space-x-16 ">
                {category.subCategories.map((subCategory) => {
                  return (
                    <div key={subCategory.name}>
                      <NavItemSubCategory>
                        {subCategory.name}
                      </NavItemSubCategory>

                      {subCategory.products.map((product) => {
                        return (
                          <NavItemProduct
                            key={product.name}
                            product={product}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </MaxWidthWrapper>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavItem;
