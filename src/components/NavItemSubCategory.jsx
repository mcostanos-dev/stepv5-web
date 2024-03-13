import Link from "next/link";
import { getButtonClasses } from "./Button";

const NavItemSubCategory = ({ children }) => {
  return (
    <Link
      className={getButtonClasses(
        "ghost",
        "sm",
        `text-xs font-bold text-gray-700 hover:text-gray-600"`
      )}
      href="/"
    >
      {children}
    </Link>
  );
};

export default NavItemSubCategory;
