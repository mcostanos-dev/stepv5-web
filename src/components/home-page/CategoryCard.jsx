import Image from "next/image";
import Link from "next/link";
import { getButtonClasses } from "../Button";

const CategoryCard = () => {
  return (
    <div className="group min-w-40 w-52 bg-white border border-gray-200 rounded-sm shadow hover:-translate-y-1 duration-300 hover:shadow-lg">
      <div className="overflow-hidden">
        <Link href={"/1"} className="overflow-hidden">
          <Image
            className="rounded-t-sm mx-auto group-hover:scale-110 transition duration-300"
            src="/test-image.jpg"
            width={150}
            height={150}
            alt=""
          />
        </Link>
      </div>

      <div className="p-5 bg-gray-100">
        <Link href={"/1/1"}>
          <h5 className="mb-2 text-sm text-wrap font-bold tracking-tight text-gray-900 ">
            STRAP
          </h5>
        </Link>

        <Link href={"/1/1"} className={getButtonClasses("default", "sm")}>
          Go to Category
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
