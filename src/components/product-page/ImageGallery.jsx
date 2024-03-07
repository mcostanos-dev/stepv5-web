"use client";
import Link from "next/link";
import Image from "next/image";
import TestImage from "../../../public/test-image.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(() => images[0]);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  return (
    <div className="flex w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
      <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
        <div className=" w-full sm:w-auto min-w-80 px-4 text-center flex sm:flex-col items-center justify-center">
          {images &&
            images.map((image) => {
              return (
                <button
                  type="button"
                  onClick={() => handleImageClick(image)}
                  key={image.id}
                  className={cn(
                    "h-30 mb-4 mr-2 sm:mr-0 rounded-lg focus:outline focus:outline-offset-1 focus:outline-gray-400",
                    {
                      "outline outline-offset-2 outline-gray-400 scale-110 transition-all duration-200":
                        selectedImage === image,
                    }
                  )}
                >
                  <Image
                    className="h-full w-full"
                    width={100}
                    height={100}
                    src={TestImage}
                    alt=""
                  />
                </button>
              );
            })}
        </div>
        <div className="flex-1 my-auto px-4">
          <Image
            className="mb-5 mx-auto "
            width={300}
            height={300}
            src={selectedImage?.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
