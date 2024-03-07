import Link from "next/link";

const Cart = () => {
  return (
    <>
      <Link
        href="/"
        className="bg-green-600 rounded-full border-white shadow-md p-2"
      >
        <svg
          className="w-[28px] h-[28px] text-white "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.8-3H7.4M11 7H6.3M17 4v6m-3-3h6"
          />
        </svg>
      </Link>
    </>
  );
};

export default Cart;
