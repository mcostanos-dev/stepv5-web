"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { MENU_ITEMS } from "@/config.js";
import NavItem from "./NavItem";
import { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const navRef = useRef(null);

  useClickOutside(navRef, () => setActiveIndex(null));

  return (
    <nav
      ref={navRef}
      className="hidden lg:block bg-white h-16  border-b border-stone-200 shadow-sm"
    >
      <MaxWidthWrapper className="h-full">
        <div className="hidden lg:flex lg:items-center lg:justify-start lg:space-x-2 h-full">
          {MENU_ITEMS.map((category, i) => {
            function handleMouseEnter() {
              setActiveIndex(i);
            }

            function handleMouseLeave() {
              setActiveIndex(null);
            }

            const isOpen = i === activeIndex;

            return (
              <NavItem
                key={i}
                index={i}
                isOpen={isOpen}
                category={category}
                navRef={navRef}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavItems;
