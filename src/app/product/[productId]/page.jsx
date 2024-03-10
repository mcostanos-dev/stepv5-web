import Link from "next/link";
import { Button, getButtonClasses } from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageGallery from "@/components/product-page/ImageGallery";
import { singleProduct, allProducts } from "@/config.js";

import StarRating from "@/components/product-page/StarRating";

const SingPeoduct = ({ params }) => {
  const productId = params.productId;

  const [selectedProduct] = allProducts.filter(
    (product) => product.id === Number(productId)
  );

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <Breadcrumbs
            category={"Strapping Machine"}
            productName={selectedProduct?.productName}
            productPageLink={productId}
          />
          <ImageGallery images={selectedProduct?.images} />

          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-full mb-6">
              <span className="text-xs text-gray-400 tracking-wider">
                {selectedProduct?.productName}
              </span>
              <h2 className="mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-heading font-medium">
                {selectedProduct?.productName}
              </h2>

              <p className="text-md text-gray-600">
                {selectedProduct?.description}
              </p>
            </div>
            <StarRating />
            <div className="mb-6">
              <h4 className="mb-3 font-heading font-medium space-x-1">
                <span>Variant:</span>
                <span className="text-gray-500">Select A Variant</span>
              </h4>
              <div className="flex flex-wrap gap-1">
                {selectedProduct?.variations &&
                  selectedProduct.variations.map((variation) => (
                    <Link
                      href={`/product/${productId}/${variation.id}`}
                      key={variation.name}
                      className={getButtonClasses("secondary", "sm")}
                    >
                      {variation.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingPeoduct;
