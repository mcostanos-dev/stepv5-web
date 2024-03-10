import Link from "next/link";

const Breadcrumbs = ({
  category = "",
  categoryPageLink = "",
  productName = "",
  productPageLink = "",
  variation = "",
  variationPageLink = "",
}) => {
  return (
    <div className="w-full px-4">
      <ul className="flex flex-wrap items-center mb-6">
        <li className="mr-6">
          <Link
            className="flex items-center text-xs sm:text-sm font-medium text-gray-400 hover:text-gray-500"
            href="#"
          >
            <span>Home</span>
            <svg
              className="ml-6"
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </li>
        {category && (
          <li className="mr-6">
            <Link
              className="flex items-center text-xs sm:text font-medium text-gray-400 hover:text-gray-500"
              href={"/"}
            >
              <span>{category}</span>
              {productName && (
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </Link>
          </li>
        )}

        {productName && (
          <li className="mr-6">
            <Link
              className="flex items-center text-xs sm:text font-medium text-gray-400 hover:text-gray-500"
              href={productPageLink}
            >
              {productName}

              {variation && (
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </Link>
          </li>
        )}
        {variation && (
          <li className="mr-6">
            <Link
              className="flex items-center text-xs sm:text font-medium text-gray-400 hover:text-gray-500"
              href={variationPageLink}
            >
              {variation}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
