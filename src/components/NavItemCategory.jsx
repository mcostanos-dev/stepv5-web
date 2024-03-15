import { getButtonClasses } from "./Button";
import Link from "next/link";

const NavItemCategory = ({ children, handleMouseEnter, isOpen }) => {
  return (
    <Link
      href="/"
      onMouseEnter={handleMouseEnter}
      type="button"
      className={getButtonClasses(
        "ghost",
        "sm",
        `transition duration-300 text-sm font-semibold text-gray-700 hover:text-gray-600 tracking-wider ${
          isOpen && "bg-gray-200 border-gray-500"
        }`
      )}
    >
      {children}
    </Link>
  );
};

export default NavItemCategory;
