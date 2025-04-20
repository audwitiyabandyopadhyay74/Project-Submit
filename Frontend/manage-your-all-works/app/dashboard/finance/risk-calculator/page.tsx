"use client";
import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Squares from "../../../components/Squares";

// Risk Calculator Component
const RiskCalculatorPage = () => {
  const [investment, setInvestment] = useState<number | "">("");
  const [riskPercentage, setRiskPercentage] = useState<number | "">("");
  const [riskAmount, setRiskAmount] = useState<number | null>(null);

  const calculateRisk = () => {
    if (!investment || !riskPercentage) {
      alert("Please fill in all fields");
      return;
    }

    const risk = (investment * riskPercentage) / 100;
    setRiskAmount(parseFloat(risk.toFixed(2))); // Round to 2 decimal places
  };

  return (
    <div className="w-screen h-screen flex gap-4">
      <Squares />
      <Sidebar />
      <div className="flex flex-wrap gap-4 p-10 justify-center z-100 items-center h-[100vh] w-screen">
        <div className="todo-tasks bg-white w-[60%] h-[90vh] overflow-y-visible text-black rounded-4xl flex flex-col justify-start items-center gap-4 pt-10 mt-10 p-10">
          <h1 className="text-3xl font-bold flex gap-20 items-center justify-evenly w-full lg:absolute top-20">
            Risk Calculator
          </h1>
          <div className="flex w-[60%] h-max flex-wrap justify-center items-center gap-10 lg:absolute top-40">
            <div className="flex flex-col justify-center items-center gap-4 p-10 mt-10">
              <div className="">
                <label className="block font-semibold mb-1">Investment Amount (₹):</label>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="border p-2 w-82 h-10 rounded-lg"
                  placeholder="Enter investment amount"
                />
              </div>
              <div className="mb-3">
                <label className="block font-semibold mb-1">Risk Percentage (%):</label>
                <input
                  type="number"
                  value={riskPercentage}
                  onChange={(e) => setRiskPercentage(Number(e.target.value))}
                  className="border p-2 w-82 h-10 rounded-lg"
                  placeholder="Enter risk percentage"
                />
              </div>
              <button
                onClick={calculateRisk}
                className="bg-red-500 text-white px-4 py-2 rounded-md w-42 h-10 cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Calculate Risk
              </button>
              {riskAmount !== null && (
                <div className="mt-5 p-4 border rounded-md bg-green-100 relative">
                  <h2 className="text-xl font-bold">Risk Amount:</h2>
                  <p className="text-2xl font-semibold">₹ {riskAmount}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Investment Calculator Component


export default  RiskCalculatorPage ;