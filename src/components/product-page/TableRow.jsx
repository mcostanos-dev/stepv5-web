"use client";

import React, { useState } from "react";
import { Button } from "../Button";
import { insertHarvestedData } from "@/actions/actions";
import { useLocalStorageItem } from "@/hooks/useLocalStorageItem";
import SubmitFormstatusButton from "./SubmitFormstatusButton";

const TableRow = () => {
  const data = useLocalStorageItem("harvest");

  const parsedData = JSON.parse(data);

  const insertData = insertHarvestedData.bind(
    null,
    parsedData?.[0]?.ip,
    1,
    parsedData
  );

  // TODO: Create useFormSTate

  return (
    <tr className="">
      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
        STEP TP-202CE
        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
          <div className="flex items-center">180 x 220 x 180mm</div>
          <div className="flex items-center">Strapping Machine</div>
          <div className=""> 20</div>
          <div className="flex items-center">$19.20</div>
        </div>
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
        180 x 220 x 180mm
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
        Strapping Machine
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
        20
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
        $19.20
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
        $19.20
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
        $19.20
      </td>
      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
        $19.20
      </td>
      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
        <div className="flex flex-row gap-1 items-center">
          <button className="group  flex h-8   overflow-hidden rounded-md text-gray-600">
            <div className="flex items-center justify-center bg-gray-200 px-3 transition group-hover:bg-red-500 group-hover:text-white">
              -
            </div>
            <input
              type="text"
              className="w-10 p-1 border border-gray-200"
              defaultValue={0}
            />
            <div className="flex items-center justify-center bg-gray-200 px-3 transition group-hover:bg-emerald-500 group-hover:text-white">
              +
            </div>
          </button>
          <form action={insertData}>
            <SubmitFormstatusButton>
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
            </SubmitFormstatusButton>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
