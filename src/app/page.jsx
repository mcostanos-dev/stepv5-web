import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OurStats from "@/components/home-page/OurStats";
import BannerContent from "@/components/home-page/BannerContent";
import CategoryList from "@/components/home-page/CategoryList";
import PoppularProductsList from "@/components/home-page/PoppularProductsList";

import HeadingSecondary from "@/components/HeadingSecondary";

export default async function Home() {
  return (
    <div className="w-full relative">
      <div
        className="flex items-center justify-center bg-cover bg-center relative z-30  h-[700px] bg-gradient-to-r "
        style={{ backgroundImage: "url(/banner-2.jpg)" }}
      >
        <BannerContent />
        <div className="absolute inset-0 bg-slate-950 bg-opacity-40  z-20" />
      </div>

      <section className="bg-gray-100 py-2.5 md:py-16">
        <MaxWidthWrapper className="z-40 bg-white lg:-mt-40  shadow-sm rounded-sm  relative py-2.5 md:py-16 drop-shadow-md">
          <HeadingSecondary>Categories</HeadingSecondary>

          <div className="flex flex-wrap  gap-x-2 gap-y-4">
            <CategoryList />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className=" bg-white py-2.5 md:py-16">
        <MaxWidthWrapper>
          <HeadingSecondary>Popular Products</HeadingSecondary>

          <div className="flex flex-wrap gap-x-2  gap-y-4">
            <PoppularProductsList />
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        className="relative bg-gray-100 py-2.5 md:py-16 h-[600px] bg-fixed bg-left"
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        <MaxWidthWrapper className="relative z-40">
          <OurStats />
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-slate-950 bg-opacity-50  z-20" />
      </section>

      <div className=" bg-white py-2.5 md:py-16 ">
        <MaxWidthWrapper>Next Content</MaxWidthWrapper>
      </div>
    </div>
  );
}
