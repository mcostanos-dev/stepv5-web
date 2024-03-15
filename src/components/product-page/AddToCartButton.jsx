"use client";

import { getButtonClasses } from "../Button";
import Link from "next/link";

const AddToCartButton = () => {
  return (
    <div className="w-full md:w-2/3 px-2 mb-6 md:mb-0">
      <Link
        href="#price-table"
        className={getButtonClasses(
          "default",
          "lg",
          "w-full flex items-center justify-center "
        )}
      >
        <span className="font-bold text-md tracking-wider">
          See Pricing Details
        </span>
      </Link>
    </div>
  );
};

export default AddToCartButton;
