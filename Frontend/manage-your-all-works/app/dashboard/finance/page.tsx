"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Squares from "../../components/Squares";
import { FaCalculator } from "react-icons/fa";


// Define the type for a task


const Finance = () => {


  return (
    <div className="w-screen h-screen flex gap-4">
      <Squares />
      <Sidebar />
      <div className="flex flex-wrap gap-4 p-10 justify-center z-100 items-center min-h-[100vh] max-h-max w-screen">
        <div className="todo-tasks bg-white w-[60%] min-h-[90vh] max-h-max overflow-y-visible text-black rounded-4xl flex flex-col justify-start items-center gap-4 pt-10 mt-10 p-10">
          <h1 className="text-3xl font-bold flex gap-20 items-center justify-evenly w-full lg:absolute top-20">
             Finance</h1>   
             <div className="flex w-[60%] h-max flex-wrap justify-center items-center gap-10 lg:absolute top-40  ">
       <a href="/finance/emi-calculator">
       <div className="bg-[#ffffffa6] w-40 h-40  rounded-lg flex flex-col justify-center items-center gap-4 p-10 mt-10 border cursor-pointer hover:bg-black hover:text-white hover:scale-110">
        <FaCalculator size={60}/>
        <h1 className="font-bold text-1xl text-center">EMI Calculator</h1>
       </div>
       </a>
       <a href="/finance/risk-calculator">
       <div className="bg-[#ffffffa6] w-40 h-40  rounded-lg flex flex-col justify-center items-center gap-4 p-10 mt-10 border cursor-pointer hover:bg-black hover:text-white hover:scale-110">
        <FaCalculator size={60}/>
        <h1 className="font-bold text-1xl text-center">Risk Calculator</h1>
       </div>
       </a>
         <a href="/finance/investment-calculator">
       <div className="bg-[#ffffffa6] w-40 h-40  rounded-lg flex flex-col justify-center items-center gap-4 p-10 mt-10 border cursor-pointer hover:bg-black hover:text-white hover:scale-110">
        <FaCalculator size={60}/>
        <h1 className="font-bold text-1xl w-full text-center">Investment Calculator</h1>
       </div>
         </a>
             </div>
        </div>
      </div>
     
    </div>
  );
};

export default Finance;
