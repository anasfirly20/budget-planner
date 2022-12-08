import React, { useState } from "react";

const DatePicker = ({ handleChangeDate, valueStoredProps }) => {
  return (
    <div className="w-full flex flex-col mt-3 items-center">
      <span className="text-gray-700">Select Date:</span>
      <input
        className="p-2 w-[150px] h-[50px] rounded-md"
        type="date"
        id="myDatePicker"
        onChange={(e) => {
          handleChangeDate(e.target.value);
        }}
      ></input>
      <div className="flex mt-3 mx-10">
        <button
          type="button"
          className="bg-[#00df9a] rounded-md font-medium py-3 px-4 text-black"
          onClick={(e) => {
            valueStoredProps(e.target.value);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
