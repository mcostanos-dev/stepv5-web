import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import FadeIn from "../framer-motion/fadeIn";
import { getButtonClasses } from "../Button";

const BannerContent = () => {
  return (
    <MaxWidthWrapper>
      <div className="max-w-3xl">
        <FadeIn duration={0.4}>
          <h1 className="relative text-5xl text-gray-900 font-semibold mb-6 ">
            Efficient Packaging Solutions: Machinery and Materials for Every
            Need.
          </h1>
        </FadeIn>

        <FadeIn duration={0.6}>
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            Streamline Your Packaging Process with Cutting-Edge Equipment and
            High-Quality Materials
          </p>
        </FadeIn>

        <FadeIn duration={0.8}>
          <Link
            href={"/1"}
            className={getButtonClasses("default", "lg", "relative z-50")}
          >
            Go to Products
          </Link>
        </FadeIn>
      </div>
    </MaxWidthWrapper>
  );
};

export default BannerContent;
