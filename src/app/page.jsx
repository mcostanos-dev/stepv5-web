import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OurStats from "@/components/home-page/OurStats";
import BannerContent from "@/components/home-page/BannerContent";
import CategoryList from "@/components/home-page/CategoryList";
import PoppularProductsList from "@/components/home-page/PoppularProductsList";

export default async function Home() {
  return (
    <div className="w-full relative">
      <div className="flex items-center justify-center bg-cover bg-center relative z-30  h-[700px] bg-gradient-to-r from-gray-50 to-red-100/10">
        <BannerContent />
        <div className="absolute inset-0 bg-orange-50 bg-opacity-20  z-20" />
      </div>
      <div className="bg-gray-100 py-2.5 md:py-16">
        <MaxWidthWrapper className="z-40 bg-white lg:-mt-40  shadow-sm rounded-sm  relative py-2.5 md:py-16">
          <div className="max-w-md text-center mb-6">
            <h2 className="text-md font-semibold sm:text-xl text-gray-800 text-left px-1">
              Categories
            </h2>
          </div>
          <div className="flex flex-wrap  gap-x-2 gap-y-4">
            <CategoryList />
          </div>
        </MaxWidthWrapper>
      </div>
      <div className=" bg-white py-2.5 md:py-16">
        <MaxWidthWrapper>
          <div className="max-w-md text-center mb-6">
            <h2 className="text-xl font-semibold sm:text-xl text-gray-800 text-left px-1">
              Popular Products
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-2  gap-y-4">
            <PoppularProductsList />
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        className="relative bg-gray-100 py-2.5 md:py-16 h-[600px] bg-fixed bg-left"
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        <MaxWidthWrapper className="relative z-40">
          <OurStats />
        </MaxWidthWrapper>
        <div className="absolute inset-0 bg-slate-950 bg-opacity-50  z-20" />
      </div>

      <div className=" bg-white py-2.5 md:py-16 ">
        <MaxWidthWrapper>Next Content</MaxWidthWrapper>
      </div>
    </div>
  );
}
