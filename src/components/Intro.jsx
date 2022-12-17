import React from "react";
import Typed from "react-typed";

const Intro = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Manage your spendings with Budget Planner
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Spend your money
        </h1>
        <Typed
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
          strings={["Smartly.", "Wisely."]}
          typeSpeed={120}
          backSpeed={120}
          loop
        />
        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:opacity-90 active:opacity-80"
          onClick={() => {
            window.scrollTo(0, document.body.scrollHeight);
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro;
