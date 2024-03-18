import Breadcrumbs from "@/components/Breadcrumbs";
import ImageGallery from "@/components/product-page/ImageGallery";
import Link from "next/link";
import { allProducts } from "@/config.js";
import StarRating from "@/components/product-page/StarRating";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HorizontalBorder from "@/components/HorizontalBorder";
import Price from "@/components/product-page/Price";
import AddToCartButton from "@/components/product-page/AddToCartButton";
import ProductContentNav from "@/components/product-page/ProductContentNav";
import PriceTable from "@/components/product-page/PriceTable";
import HeadingSecondary from "@/components/HeadingSecondary";
import ProductCard from "@/components/ProductCard";
import ProductDescription from "@/components/product-page/ProductDescription";
import ProductCarousel from "@/components/ProductCarousel";

const SingPeoduct = ({ params }) => {
  const productId = params.productId;

  const [selectedProduct] = allProducts.filter(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      {/* Product Info */}
      <MaxWidthWrapper>
        <section className="py-2.5 md:py-20 ">
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
                  <HeadingSecondary>
                    {selectedProduct?.productName}
                  </HeadingSecondary>

                  <StarRating />

                  <HorizontalBorder />

                  <Price price={1000} />

                  <AddToCartButton />

                  <HorizontalBorder />

                  <ProductDescription link={"/"}>
                    {selectedProduct?.description}
                  </ProductDescription>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Pricing Table */}
      <ProductContentNav />
      <div className="  bg-gray-50">
        <section
          id="price-table"
          className="mx-auto py-2.5 md:py-20 max-w-screen-2xl"
        >
          <HeadingSecondary className="text-center">
            Price Table
          </HeadingSecondary>
          <PriceTable />
        </section>
      </div>

      {/* Accessories */}
      <MaxWidthWrapper>
        <section id="accessories" className=" py-2.5 md:py-20">
          <HeadingSecondary>Compatible Accesories</HeadingSecondary>
          <div className="flex flex-row gap-x-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Product long description */}
      <div className="  bg-gray-50">
        <MaxWidthWrapper>
          <section id="description" className=" py-2.5 md:py-20">
            <HeadingSecondary>Detailed Description</HeadingSecondary>{" "}
            <ProductDescription>
              {selectedProduct?.description}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem tempora necessitatibus magnam esse inventore,
              dignissimos quia, accusamus officia omnis cupiditate commodi eos
              amet nam quaerat. Nisi, magnam! Tempora, aliquam. Dignissimos
              eaque a autem dolore voluptatem nemo consequuntur nulla aperiam
              optio ducimus excepturi, doloribus ut est tenetur velit et
              nesciunt unde libero recusandae, blanditiis veritatis eos, sit
              minima quisquam. Ab quaerat delectus officiis magni beatae,
              adipisci magnam nemo reprehenderit voluptates corporis aperiam
              minus. Quod, ipsa alias? Qui ipsam nulla aliquam sunt consequuntur
              reiciendis rerum in minus praesentium tempora! Magni modi itaque
              inventore aliquid maiores vel dolore molestias esse dignissimos
              voluptate! Nesciunt.
            </ProductDescription>
          </section>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section id="description" className=" py-2.5 md:py-20">
          {/* carousel */}
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default SingPeoduct;
