import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = ({ params }) => {
  const categoryId = params.categoryId;
  return (
    <MaxWidthWrapper>
      <div>Category Page. List of Categories{categoryId}</div>
    </MaxWidthWrapper>
  );
};

export default page;
