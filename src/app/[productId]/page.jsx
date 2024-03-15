import Breadcrumbs from "@/components/Breadcrumbs";
import ImageGallery from "@/components/product-page/ImageGallery";
import Link from "next/link";
import { allProducts } from "@/config.js";
import StarRating from "@/components/product-page/StarRating";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HorizontalMargin from "@/components/HorizontalMargin";
import Price from "@/components/product-page/Price";
import AddToCartButton from "@/components/product-page/AddToCartButton";
import { getButtonClasses } from "@/components/Button";
import ProductContentNav from "@/components/product-page/ProductContentNav";
import PriceTable from "@/components/product-page/PriceTable";

const SingPeoduct = ({ params }) => {
  const productId = params.productId;

  const [selectedProduct] = allProducts.filter(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      <MaxWidthWrapper>
        <section className="py-2.5 md:py-16 ">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <Breadcrumbs
                category={"Strapping Machine"}
                productName={selectedProduct?.productName}
                productPageLink={productId}
              />
              <ImageGallery images={selectedProduct?.images} />

              <div className="w-full lg:w-1/2 px-4 lg:px-0 ">
                <div className="max-w-full mb-6">
                  <span className="text-xs text-gray-400 tracking-wider">
                    {selectedProduct?.productName}
                  </span>
                  <h2 className="mt-6 mb-4 text-xl md:text-xl lg:text-2xl font-heading font-bold tracking-tight">
                    {selectedProduct?.productName}
                  </h2>
                  <StarRating />
                  <HorizontalMargin />
                  <Price price={1000} />
                  <AddToCartButton />
                  <HorizontalMargin />
                  <p className="text-md text-gray-600 tracking-wide">
                    {selectedProduct?.description}
                    <span>
                      <Link
                        className="px-2 text-md text-teal-500 font-semibold  hover:text-teal-600 tracking-wide"
                        href={"/"}
                      >
                        Read more
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <ProductContentNav />
      <div className="  bg-gray-50">
        <section className="mx-auto py-2.5 md:py-12 max-w-screen-2xl">
          <PriceTable />
        </section>
      </div>
    </>
  );
};

export default SingPeoduct;
