"use client";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import TestImage from "../../../public/test-image.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  return (
    <div className="flex w-full lg:w-1/2  mb-16 lg:mb-0 ">
      <div className="w-full flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-center ">
        <div className=" w-full sm:w-auto min-w-48 px-1 text-center flex sm:flex-col items-center justify-center ">
          {images &&
            images.map((image) => {
              return (
                <button
                  type="button"
                  onClick={() => handleImageClick(image)}
                  key={image.id}
                  className={cn("h-30 xl:h-40 mb-4 mr-2 sm:mr-0 rounded-lg  ", {
                    "scale-110 transition-all duration-200":
                      selectedImage === image,
                  })}
                >
                  <Image
                    className="h-full w-full"
                    width={100}
                    height={60}
                    src={TestImage}
                    alt=""
                  />
                </button>
              );
            })}
        </div>
        <div className="flex-1 px-4 xl:items-center">
          {selectedImage?.image && (
            <motion.div
              key={selectedImage?.imageName}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
            >
              <Image
                className="mb-5 mx-auto "
                width={300}
                height={300}
                src={selectedImage?.image}
                alt=""
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
