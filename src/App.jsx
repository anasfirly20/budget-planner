import react, { useState } from "react";
import Border from "./components/Border";
import BudgetPlanner from "./components/BudgetPlanner";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-link">
      <Navbar />
      <Intro />
      {/* <Border /> */}
      <BudgetPlanner />
    </div>
  );
}

export default App;
