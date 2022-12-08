import React from "react";

const TableBodies = ({ tType, tDetails, tDate, tTotal }) => {
  return (
    <tr className="bg-white">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{tType}</td>
      {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {tDetails}
      </td> */}
      {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{tDate}</td> */}
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{tTotal}</td>
    </tr>
  );
};

export default TableBodies;
