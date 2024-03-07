import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { MENU_ITEMS } from "@/config.js";
import { getButtonClasses } from "./Button";

const NavItems = () => {
  return (
    <nav className="hidden lg:block bg-gray-50 h-16  border-b border-gray-200 shadow-sm">
      <MaxWidthWrapper className="h-full">
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-2 h-full">
          {MENU_ITEMS.map((item) => {
            return (
              <Link
                className={getButtonClasses("animateZoom", "lg")}
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavItems;
