import Link from "next/link";
import Image from "next/image";

const NavItemProduct = ({ product }) => {
  return (
    <div key={product.name} className="flex flex-col ">
      <div className="flex items-center gap-4  px-3">
        <Link className="" href={product?.href}>
          {product.name}
        </Link>
        <Image src={product?.img} height={48} width={48} alt={product.name} />
      </div>
    </div>
  );
};

export default NavItemProduct;
