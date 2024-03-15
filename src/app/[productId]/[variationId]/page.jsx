import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// import Breadcrumbs from "@/components/Breadcrumbs";
// import ImageGallery from "@/components/product-page/ImageGallery";
// import Link from "next/link";
// import StarRating from "@/components/product-page/StarRating";
// import { getButtonClasses } from "@/components/Button";
// import { allProducts } from "@/config.js";
// import ProductOptions from "@/components/product-page/ProductOptions";
// import Price from "@/components/product-page/Price";
// import Quantity from "@/components/product-page/Quantity";

// import WishListButton from "@/components/product-page/WishListButton";
// import StockCount from "@/components/product-page/StockCount";
// import Discounts from "@/components/product-page/Discounts";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import AddToCartButton from "@/components/product-page/AddToCartButton";

// const ProductVariation = ({ params }) => {
//   const productId = params.productId;
//   const variationId = params.variationId;

//   const [selectedProduct] = allProducts?.filter(
//     (product) => product.id === Number(productId)
//   );

//   const [selectedVariation] = selectedProduct?.variations.filter(
//     (variation) => variation.id === Number(variationId)
//   );

//   return (
//     <MaxWidthWrapper>
//       <section className="pt-6 pb-24  rounded-b-10xl overflow-hidden">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <Breadcrumbs
//               category={"Strapping Machine"}
//               categorylink=""
//               productName={selectedProduct.productName}
//               productPageLink={`/${selectedProduct.id}`}
//               variation={selectedVariation.name}
//               variationPageLink={`/${selectedProduct.id}/${variationId}`}
//             />
//             <ImageGallery images={selectedProduct?.images} />

//             <div className="w-full lg:w-1/2 px-4">
//               <div className="max-w-full mb-6">
//                 <span className="text-xs text-gray-400 tracking-wider">
//                   {selectedProduct?.name}
//                 </span>
//                 <h2 className="mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-heading font-medium">
//                   {selectedVariation?.name}
//                 </h2>

//                 <p className="text-md text-gray-600">
//                   {selectedVariation?.description}
//                 </p>
//               </div>
//               <StarRating />
//               <div className="mb-6">
//                 <h4 className="mb-3 font-heading font-medium space-x-1">
//                   <span>Variant:</span>
//                   <span className="text-gray-500">
//                     {selectedVariation.name}
//                   </span>
//                 </h4>
//                 <div className="flex flex-wrap gap-1">
//                   {selectedProduct?.variations.map((variation) => (
//                     <Link
//                       href={`/${productId}/${variation.id}`}
//                       key={variation.name}
//                       className={getButtonClasses(
//                         "secondary",
//                         "sm",
//                         Number(variationId) === variation.id
//                           ? "bg-slate-800 hover:bg-slate-600 text-white"
//                           : ""
//                       )}
//                     >
//                       {variation.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* <ProductOptions
//                 variationId={variationId}
//                 options={selectedVariation.options}
//               /> */}
//               {/* <StockCount stock={selectedVariation?.stock} /> */}
//               <Price price={selectedVariation?.price} />
//               {/* <Discounts discounts={selectedVariation?.discounts} /> */}
//               {/* <Quantity variationId={variationId} /> */}
//               {/* <div className="flex flex-wrap -mx-2 mb-12">
//                 <AddToCartButton />
//                 <WishListButton />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </MaxWidthWrapper>
//   );
// };

// export default ProductVariation;
