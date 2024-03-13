import React from "react";

const OurStats = () => {
  return (
    <>
      <h2 className="text-center  pb-6 text-3xl text-white sm:text-4xl xl:text-5xl z-50">
        WHY <span className="font-bold">US</span>{" "}
        <span className="text-sm">(Dummy Content)</span>
      </h2>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
        <div className="bg-white/10 relative mb-3 rounded-sm border-2 border-red-500 px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-bold text-red-600 sm:text-5xl">
            490+
          </p>
          <p className="relative mt-5 text-white">
            We have more than Products available 490 products available to
            choose from
          </p>
        </div>

        <div className="bg-white/10 relative mb-3 rounded-sm border-2 border-red-500  px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-bold text-red-600 sm:text-5xl">
            30+
          </p>
          <p className="relative mt-5 text-white">
            With over 30 years of selling packaging related products
          </p>
        </div>

        <div className="bg-white/10 relative mb-3 rounded-sm border-2 border-red-500  px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
          <p className="relative text-3xl font-bold text-red-600 sm:text-5xl">
            2000+
          </p>
          <p className="relative mt-5 text-white">
            With over 2000 products sold throughout the years
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStats;
