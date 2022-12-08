import React, { Fragment } from "react";

const TableHeads = ({ thName }) => {
  return (
    <Fragment>
      <th className="p-3 text-sm font-semibold tracking-wide text-left ">
        {thName}
      </th>
    </Fragment>
  );
};

export default TableHeads;
