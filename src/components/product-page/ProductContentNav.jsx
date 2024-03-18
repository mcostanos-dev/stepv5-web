import Link from "next/link";
import { getButtonClasses } from "../Button";
import MaxWidthWrapper from "../MaxWidthWrapper";

const menu = [
  { name: "PRICE TABLE", link: "#price-table" },
  { name: "ACCESSORIES", link: "#accessories" },
  { name: "DESCRIPTION", link: "#description" },
  { name: "SIMILAR PRODUCTS", link: "#similar-products" },
  { name: "REVIEWS", link: "#reviews" },
];

const ProductContentNav = () => {
  return (
    <nav className="hidden lg:block bg-white border-y-[2px]  border-gray-200 ">
      <MaxWidthWrapper>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-16 rtl:space-x-reverse text-sm">
              {menu.map((m, i) => {
                return (
                  <li key={i} className="hover ">
                    <Link
                      href={m.link}
                      className={getButtonClasses(
                        "positive",
                        "sm",
                        "font-semibold"
                      )}
                    >
                      {m.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default ProductContentNav;
