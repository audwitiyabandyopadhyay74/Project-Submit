"use client";
import React,{useState} from "react";
import Sidebar from "../../../components/Sidebar";
import Squares from "../../../components/Squares";


// Define the type for a task


const EmiCalculatorPage = () => {

const [loanAmount, setLoanAmount] = useState<number | "">("");
const [interestRate, setInterestRate] = useState<number | "">("");
const [loanTenure, setLoanTenure] = useState<number | "">("");
const [emi, setEmi] = useState<number | null>(null);

const calculateEmi = () => {
  if (!loanAmount || !interestRate || !loanTenure) {
    alert("Please fill in all fields");
    return;
  }

  const P = loanAmount;
  const R = interestRate / 12 / 100; // Monthly interest rate
  const N = loanTenure * 12; // Loan tenure in months

  const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  setEmi(parseFloat(emiValue.toFixed(2))); // Round to 2 decimal places
};


  return (
    <div className="w-screen h-screen flex gap-4">
      <Squares />
      <Sidebar />
      <div className="flex flex-wrap gap-4 p-10 justify-center z-100 items-center h-[100vh] w-screen">
        <div className="todo-tasks bg-white w-[60%] h-[90vh] overflow-y-visible text-black rounded-4xl flex flex-col justify-start items-center gap-4 pt-10 mt-10 p-10">
          <h1 className="text-3xl font-bold flex gap-20 items-center justify-evenly w-full lg:absolute top-20">
             EMI Calculator</h1>   
             <div className="flex w-[60%] h-max flex-wrap justify-center items-center gap-10 lg:absolute top-40  ">
             <div className=" flex flex-col justify-center items-center gap-4 p-10 mt-10  ">
  <div className="">
    <label className="block font-semibold mb-1">Loan Amount (₹):</label>
    <input
      type="number"
      value={loanAmount}
      onChange={(e) => setLoanAmount(Number(e.target.value))}
      className="border p-2 w-82 h-10 rounded-lg"
      placeholder="Enter loan amount"
    />
  </div>
  <div className="mb-3">
    <label className="block font-semibold mb-1">Interest Rate (% per annum):</label>
    <input
      type="number"
      value={interestRate}
      onChange={(e) => setInterestRate(Number(e.target.value))}
      className="border p-2 w-82 h-10 rounded-lg"
      placeholder="Enter annual interest rate"
    />
  </div>
  <div className="mb-3">
    <label className="block font-semibold mb-1">Loan Tenure (Years):</label>
    <input
      type="number"
      value={loanTenure}
      onChange={(e) => setLoanTenure(Number(e.target.value))}
      className="border p-2 w-82 h-10 rounded-lg"
      placeholder="Enter loan tenure in years"
    />
  </div>
  <button
    onClick={calculateEmi}
    className="bg-red-500 text-white px-4 py-2 rounded-md w-42 h-10 cursor-pointer hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
  >
    Calculate EMI
  </button>
  {emi !== null && (
  <div className="mt-5 p-4 border rounded-md bg-green-100 relative">
    <h2 className="text-xl font-bold">Your EMI:</h2>
    <p className="text-2xl font-semibold">₹ {emi}</p>
  </div>)}
</div>

 
             </div> </div> 
        </div>
      </div>
     
  );
};

export default EmiCalculatorPage;

{/* <div className="flex-1 p-10">
<h1 className="text-3xl font-bold mb-5">EMI Calculator</h1>
<div className="mb-5">
  <div className="mb-3">
    <label className="block font-semibold mb-1">Loan Amount (₹):</label>
    <input
      type="number"
      value={loanAmount}
      onChange={(e) => setLoanAmount(Number(e.target.value))}
      className="border p-2 w-full"
      placeholder="Enter loan amount"
    />
  </div>
  <div className="mb-3">
    <label className="block font-semibold mb-1">Interest Rate (% per annum):</label>
    <input
      type="number"
      value={interestRate}
      onChange={(e) => setInterestRate(Number(e.target.value))}
      className="border p-2 w-full"
      placeholder="Enter annual interest rate"
    />
  </div>
  <div className="mb-3">
    <label className="block font-semibold mb-1">Loan Tenure (Years):</label>
    <input
      type="number"
      value={loanTenure}
      onChange={(e) => setLoanTenure(Number(e.target.value))}
      className="border p-2 w-full"
      placeholder="Enter loan tenure in years"
    />
  </div>
  <button
    onClick={calculateEmi}
    className="bg-blue-500 text-white px-4 py-2 rounded-md"
  >
    Calculate EMI
  </button>
</div>
{emi !== null && (
  <div className="mt-5 p-4 border rounded-md bg-green-100">
    <h2 className="text-xl font-bold">Your EMI:</h2>
    <p className="text-2xl font-semibold">₹ {emi}</p>
  </div>
)}
</div> */}