import { allProducts } from "@/config.js";
import React from "react";
import TableRow from "./TableRow";

const PriceTable = () => {
  const tableHead = allProducts[0].tableHead;
  return (
    <div className="mt-6 overflow-hidden rounded-sm bg-white px-6 shadow lg:px-4">
      <table
        id="price-table"
        className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2"
      >
        <thead className="hidden border-b lg:table-header-group">
          <tr>
            {tableHead.map(
              (thead, i) =>
                thead.name && (
                  <td
                    key={`${thead.name}${i}`}
                    className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3"
                  >
                    {thead.name}
                  </td>
                )
            )}
          </tr>
        </thead>
        <tbody className="bg-white lg:border-gray-300">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
