import Link from "next/link";

const ProductDescription = ({ children, link }) => {
  return (
    <p className="text-md text-gray-600 tracking-wide">
      {children}
      {link && (
        <span>
          <Link
            className="px-2 text-md text-teal-500 font-semibold  hover:text-teal-600 tracking-wide"
            href={link}
          >
            Read more
          </Link>
        </span>
      )}
    </p>
  );
};

export default ProductDescription;
