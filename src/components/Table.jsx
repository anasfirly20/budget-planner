import React, { useState } from "react";
import TableBodies from "./TableBodies";
import TableHeads from "./TableHeads";

const Table = ({ tryTest }) => {
  return (
    <div className="w-full bg-gray-200">
      <div className="w-full bg-gray-900 py-2">
        <p className="text-center w-full text-white italic font-serif ">
          "Fail to Manage, Manage to Fail"
        </p>
      </div>
      <h1 className="text-xl mb-2 mt-2 text-center font-sans font-bold">
        Your Expenses
      </h1>
      {/* FOR Desktop */}
      <div className="overflow-auto rounded-lg mx-5 shadow-lg md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <TableHeads thName="Type" />
              <TableHeads thName="Details" />
              <TableHeads thName="Date" />
              <TableHeads thName="Total" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <TableBodies
              tType="Food"
              tDetails="King New Fit office chair, mesh + Pu, black"
              tDate="food12/12/12"
              tTotal="123"
            />
            <TableBodies
              tType="Transportation"
              tDetails="Taaxi"
              tDate="food12/12/1123"
              tTotal="1212323"
            />
            <TableBodies
              tType="Housing"
              tDetails="Kvartira"
              tDate="food12/12/1asd2"
              tTotal="100000$"
            />
            <TableBodies
              tType="Others"
              tDetails="Bought New shoes"
              tDate="food12/12/12sa"
              tTotal="123123$"
            />
            <TableBodies
              tType="Sum Of All Total Spendings:"
              tDetails=""
              tDate=""
              tTotal=""
            />
          </tbody>
        </table>
      </div>
      {/* FOR MOBILE */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mx-5 md:hidden ">
        <div className="bg-white space-y-3 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold">Food</div>
            <div className="text-gray-500">Date 12/4/22</div>
          </div>
          <div className="text-sm text-gray-700">
            Kiring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200 total</div>
        </div>
        <div className="bg-white space-y-3 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold">Transportation</div>
            <div className="text-gray-500">Date 12/4/22</div>
          </div>
          <div className="text-sm text-gray-700">
            Kiring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200 total</div>
        </div>
        <div className="bg-white space-y-3 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold">Housing</div>
            <div className="text-gray-500">Date 12/4/22</div>
          </div>
          <div className="text-sm text-gray-700">
            Kiring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200 total</div>
        </div>
        <div className="bg-white space-y-3 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold">Others</div>
            <div className="text-gray-500">Date 12/4/22</div>
          </div>
          <div className="text-sm text-gray-700">
            Kiring New Fit office chair, mesh + PU, black
          </div>
          <div className="text-sm font-medium text-black">$200 total</div>
        </div>
      </div> */}
    </div>
  );
};

export default Table;
