import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <article className="min-w-40 w-52 relative flex flex-col overflow-hidden rounded-sm border shadow-sm">
      <Link href="/product/1">
        <div className="aspect-square overflow-hidden">
          <Image
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src="/test-image.jpg"
            width={150}
            height={150}
            alt=""
          />
        </div>
      </Link>

      <div className="absolute top-0 m-2 rounded-full bg-white">
        <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
          Sale
        </p>
      </div>
      <div className="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p className="mr-3 text-sm font-semibold">$99.00</p>
          <del className="text-xs text-gray-400"> $79.00 </del>
        </div>
        <h3 className="mb-2 text-sm text-gray-400">STEP TP-202</h3>
      </div>
      <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
        <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
          Add
        </div>
        <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
          +
        </div>
      </button>
    </article>
  );
};

export default ProductCard;
