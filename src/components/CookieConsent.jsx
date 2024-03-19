"use client";

import { cn, date } from "@/lib/utils";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import FadeIn from "./framer-motion/fadeIn";
import useHarvestData from "@/hooks/useHarvestedData";

const CookieConsent = () => {
  const {
    currentStorage,
    location,
    geolocationError,
    isClose,
    handleAcceptConsent,
  } = useHarvestData();

  return (
    <div>
      {(!currentStorage && location) || geolocationError ? (
        <FadeIn duration={0.7}>
          <div
            aria-hidden="true"
            className={cn(
              isClose
                ? "hidden"
                : " fixed bottom-6 right-4 bg-white  z-50 shadow-lg border mx-2 max-w-screen-sm rounded-xl opacity-95"
            )}
          >
            <div className="relative p-4 w-full  max-h-full">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Consent Notice
                </h3>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 ">
                  Notice to gather user data, Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Minima, magnam perspiciatis.
                  Quae sapiente porro explicabo, totam magnam facere modi
                  reiciendis, quaerat numquam eum minus!
                </p>
              </div>

              <div className="relative flex items-center space-x-2 p-4 md:p-5 border-t border-gray-200 rounded-b z-60">
                <Button variant="default" onClick={() => handleAcceptConsent()}>
                  I accept
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}

      {currentStorage ? (
        <FadeIn duration={0.7}>
          <div
            aria-hidden="true"
            className={cn(
              isClose
                ? "hidden"
                : " fixed bottom-6 right-4 bg-white  z-50 shadow-lg border mx-2 max-w-screen-sm rounded-xl opacity-95"
            )}
          >
            <div className="relative p-4 w-full  max-h-full">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  I got your data 😎
                </h3>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                {
                  <div className="flex flex-col gap-4">
                    <p className="text-base leading-relaxed text-gray-500 ">
                      IP Address : {JSON.parse(currentStorage)?.[0]?.ip}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 ">
                      Referer : {JSON.parse(currentStorage)?.[1]?.referrer}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 ">
                      Device and Brower Info :{" "}
                      {JSON.parse(currentStorage)?.[2]?.userAgent}
                    </p>
                    <p className="flex flex-col gap-4 text-base leading-relaxed text-gray-500 ">
                      <span>
                        Latidue :{" "}
                        {JSON.parse(currentStorage)?.[3]?.location?.latitude}
                      </span>
                      <span>
                        Longitude :{" "}
                        {JSON.parse(currentStorage)?.[3]?.location?.longitude}
                      </span>
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 ">
                      Date taken : {JSON.parse(currentStorage)?.[4]?.date}
                    </p>
                  </div>
                }
              </div>

              <div className="relative flex items-center space-x-2 p-4 md:p-5 border-t border-gray-200 rounded-b z-60">
                <Button disabled={true} variant="default">
                  I accept
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}
    </div>
  );
};

export default CookieConsent;
