import DatePicker from "./DatePicker";

const Forms = ({
  handleChangeExpenseAmount,
  handleChangeDate,
  valueStoredProps,
  docById,
  dateById,
  valueReset,
}) => {
  return (
    // <div>
    <div className="flex flex-col justify-center items-center mt-5 mx-auto">
      <label class="mx-10 w-[250px] text-center">
        <span class="text-gray-700">Expense Type:</span>
        <select
          class="form-select mt-1 block w-full rounded-md"
          id={docById}
          onCl
        >
          <option>Food</option>
          <option>Transportation</option>
          <option>Housing</option>
          <option>Others</option>
        </select>
      </label>
      <label class="w-[250px] mt-2 text-center">
        <span class="text-gray-700">Enter The Amount You Have Spent:</span>
        <input
          type="number"
          class="form-input block w-full rounded-md"
          placeholder="Expense Amount"
          onChange={(e) => {
            handleChangeExpenseAmount(e.target.value);
          }}
        />
      </label>
      {/* FOR SPENDING DETAILS */}
      {/* <label class="text-center mt-2">
        <span class="text-gray-700 ">Spending Details:</span>
        <input
          type="text"
          class="form-input block w-[250px] rounded-md"
          placeholder="Description"
        />
      </label> */}
      {/* <DatePicker
        handleChangeDate={(e) => {
          e.handleChangeDate.value;
        }}
        valueStoredProps={(e) => {
          e.target.valueStoredProps;
        }}
      /> */}
      <div className="w-full flex flex-col mt-3 items-center">
        {/* <span className="text-gray-700">Select Date:</span>
        <input
          className="p-2 w-[150px] h-[50px] rounded-md"
          type="date"
          id={dateById}
          onChange={(e) => {
            handleChangeDate(e.target.value);
          }}
        ></input> */}
        <div className="flex mt-3 mx-10">
          <button
            type="button"
            onClick={(e) => {
              valueStoredProps(e.target.value);
            }}
            className="bg-[#00df9a] rounded-2xl font-medium py-3 px-4 text-black"
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              valueReset(e.target.value);
            }}
            class="
            relative group overflow-hidden px-6 h-12 bg-[#FF7900] rounded-2xl mx-5"
          >
            <div
              aria-hidden="true"
              class="transition duration-300 group-hover:-translate-y-12"
            >
              <div class="h-12 flex items-center justify-center">
                <span class="text-[#000300] font-link">Reset</span>
              </div>
              <div class="h-12 flex items-center justify-center">
                <span class="text-[#000300] font-link">Reset</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Forms;

// bg-[#00df9a] rounded-md font-medium py-3 px-4 text-black
