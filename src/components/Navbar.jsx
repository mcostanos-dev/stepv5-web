import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { getButtonClasses } from "./Button";
import Search from "./Search";

import NavItems from "./NavItems";
import Logo from "./Logo";
import AvartarPlaceholder from "./AvartarPlaceholder";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="relative  bg-white">
        <MaxWidthWrapper>
          <div className="flex items-center h-24">
            <Logo />

            <div className="ml-auto flex ">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4  ">
                {user ? null : (
                  <div className="flex space-x-3 items-center">
                    <Search />

                    <Link href="/" className={getButtonClasses("ghost", "sm")}>
                      Sign In
                    </Link>

                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                    <Link href="/" className={getButtonClasses("ghost", "sm")}>
                      Create an Account
                    </Link>

                    <span
                      className="h-6 mr-8 w-px bg-gray-200"
                      aria-hidden="true"
                    />

                    <AvartarPlaceholder />

                    <Cart />
                  </div>
                )}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="border-b-[3px] border-red-500" />
        <NavItems />
      </header>
    </div>
  );
};

export default Navbar;
