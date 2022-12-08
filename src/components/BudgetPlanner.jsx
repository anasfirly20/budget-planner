import React, { Fragment, useEffect, useState } from "react";

import Table from "./Table"; // main Table
import TableBodies from "./TableBodies";
import TableHeads from "./TableHeads";

import Forms from "./Forms"; //main Forms
import DatePicker from "./DatePicker";
import { data } from "autoprefixer";
import useLocalStrorage from "./LocalStorage";

const BudgetPlanner = () => {
  // const [dataFood, setDataFood] = useState([
  //   {
  //     type: "Food",
  //     details: "kunefe",
  //     date: "22/22/22",
  //     total: 1000,
  //   },
  // ]);

  const [tryTotal, setTryTotal] = useState(0);
  // For food
  const [detailsFood, setDetailsFood] = useState("");
  const [dateFood, setDateFood] = useState("");
  const [totalFood, setTotalFood] = useLocalStrorage("totalFood", 0);

  // For Transportation
  const [detailstransport, setTransportDetails] = useState("");
  const [dateTransport, setDateTransport] = useState("");
  const [totalTransport, setTotalTransport] = useLocalStrorage(
    "totalTransport",
    0
  );
  // for Housing
  const [detailsHousing, setHousingDetails] = useState("");
  const [dateHousing, setDateHousing] = useState("");
  const [totalHousing, setTotalHousing] = useLocalStrorage("totalHousing", 0);

  //
  const [detailsOthers, setOthersDetails] = useState("");
  const [dateOthers, setDateOthers] = useState("");
  const [totalOthers, setTotalOthers] = useLocalStrorage("totalOthers", 0);

  // last
  const [sumOfAll, setSumOfAll] = useState(0);

  return (
    <Fragment>
      <div className="h-screen w-full bg-gray-200">
        <div className="w-full bg-gray-200">
          <div className="w-full bg-gray-900 py-2">
            <p className="text-center w-full italic text-gray-300">
              "Fail to Plan, Plan to Fail"
            </p>
          </div>
          <h1 className="text-xl mb-2 mt-2 text-center font-bold">
            Your Expenses
          </h1>
          {/* FOR Desktop */}
          <div className="overflow-auto rounded-lg mx-5 shadow-lg md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <TableHeads thName="Type" />
                  {/* <TableHeads thName="Details" /> */}
                  {/* <TableHeads thName="Date" /> */}
                  <TableHeads thName="Total Amount (in USD)" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* TRY LATER */}
                {/* {dataFood?.map((e) => {
                  return (
                    <Fragment>
                      <TableBodies
                        tType={e.type}
                        tDetails={e.details}
                        tDate={e.date}
                        tTota={e.total}
                        className=""
                      />
                    </Fragment>
                  );
                })} */}

                <TableBodies
                  tType="Food"
                  // tDetails={detailsFood}
                  // tDate={dateFood}
                  tTotal={`$ ${totalFood}`}
                />
                <TableBodies
                  tType="Transportation"
                  // tDetails={detailstransport}
                  // tDate={dateTransport}
                  tTotal={`$ ${totalTransport}`}
                />
                <TableBodies
                  tType="Housing"
                  // tDetails={detailsHousing}
                  // tDate={dateHousing}
                  tTotal={`$ ${totalHousing}`}
                />
                <TableBodies
                  tType="Others"
                  // tDetails={detailsOthers}
                  // tDate={dateOthers}
                  tTotal={`$ ${totalOthers}`}
                />
                <TableBodies
                  tType="Total Spendings:"
                  // tDetails=""
                  // tDate=""
                  tTotal={`$ ${
                    sumOfAll +
                    totalFood +
                    totalTransport +
                    totalHousing +
                    totalOthers
                  }`}
                  // onChange
                />
              </tbody>
            </table>
          </div>
          <Forms
            valueReset={() => {
              setTotalFood(0);
              setTotalTransport(0);
              setTotalHousing(0);
              setTotalOthers(0);
              setSumOfAll(0);
            }}
            docById="mySelect"
            dateById="myDatePicker"
            handleChangeExpenseAmount={(e) => setTryTotal(e)}
            handleChangeDate={(e) => setDate(e)}
            valueStoredProps={() => {
              if (document.getElementById("mySelect").value === "Food") {
                setTotalFood(Number(totalFood) + Number(tryTotal));
              } else {
                if (
                  document.getElementById("mySelect").value === "Transportation"
                ) {
                  setTotalTransport(Number(totalTransport) + Number(tryTotal));
                } else {
                  if (document.getElementById("mySelect").value === "Housing") {
                    setTotalHousing(Number(totalHousing) + Number(tryTotal));
                  } else {
                    if (
                      document.getElementById("mySelect").value === "Others"
                    ) {
                      setTotalOthers(Number(totalOthers) + Number(tryTotal));
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BudgetPlanner;
