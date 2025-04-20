"use client";
import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Squares from "../../../components/Squares";

const InvestmentCalculatorPage = () => {
  const [principal, setPrincipal] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [time, setTime] = useState<number | "">("");
  const [investmentValue, setInvestmentValue] = useState<number | null>(null);

  const calculateInvestment = () => {
    if (!principal || !rate || !time) {
      alert("Please fill in all fields");
      return;
    }

    const investment = principal * Math.pow(1 + rate / 100, time); // Compound interest formula
    setInvestmentValue(parseFloat(investment.toFixed(2))); // Round to 2 decimal places
  };

  return (
    <div className="w-screen h-screen flex gap-4">
      <Squares />
      <Sidebar />
      <div className="flex flex-wrap gap-4 p-10 justify-center z-100 items-center h-[100vh] w-screen">
        <div className="todo-tasks bg-white w-[60%] h-[90vh] overflow-y-visible text-black rounded-4xl flex flex-col justify-start items-center gap-4 pt-10 mt-10 p-10">
          <h1 className="text-3xl font-bold flex gap-20 items-center justify-evenly w-full lg:absolute top-20">
            Investment Calculator
          </h1>
          <div className="flex w-[60%] h-max flex-wrap justify-center items-center gap-10 lg:absolute top-40">
            <div className="flex flex-col justify-center items-center gap-4 p-10 mt-10">
              <div className="">
                <label className="block font-semibold mb-1">Principal Amount (₹):</label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="border p-2 w-82 h-10 rounded-lg"
                  placeholder="Enter principal amount"
                />
              </div>
              <div className="mb-3">
                <label className="block font-semibold mb-1">Rate of Interest (% per annum):</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="border p-2 w-82 h-10 rounded-lg"
                  placeholder="Enter annual interest rate"
                />
              </div>
              <div className="mb-3">
                <label className="block font-semibold mb-1">Time Period (Years):</label>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="border p-2 w-82 h-10 rounded-lg"
                  placeholder="Enter time period in years"
                />
              </div>
              <button
                onClick={calculateInvestment}
                className="bg-red-500 text-white px-4 py-2 rounded-md w-42 h-10 cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Calculate Investment
              </button>
              {investmentValue !== null && (
                <div className="mt-5 p-4 border rounded-md bg-green-100 relative">
                  <h2 className="text-xl font-bold">Future Investment Value:</h2>
                  <p className="text-2xl font-semibold">₹ {investmentValue}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculatorPage;