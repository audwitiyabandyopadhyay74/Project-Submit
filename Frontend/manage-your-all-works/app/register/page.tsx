"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register", // Backend registration endpoint
        { name, email, phoneNumber, password },
        { withCredentials: true } // Include cookies in the request
      );
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center z-0 ">
      <div className="design1 absolute bottom-5 left-10">
        <div className="w-50 h-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-54 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-58 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-62 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
      </div>
      <div className="w-120 h-160 bg-white rounded-4xl flex flex-col items-center justify-center text-center gap-10 z-100">
        <span className="text-black capitalize text-5xl font-bold">Register</span>
        <input
          type="text"
          name="Name"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="Email"
          name="Email"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="PhoneNumber"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-black w-32 h-15 rounded-md p-10 cursor-pointer hover:scale-110"
          onClick={handleRegister}
        >
          Register
        </button>
        <a
          href="/login"
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Have an account? Login
        </a>
      </div>
      <div className="design2 absolute bottom-5 right-10 z-0">
        <div className="w-50 h-50 chess bg-gradient-to-r from-black to-white rounded-full border-0"></div>
        <div className="h-24 w-50 chess bg-gradient-to-r from-black to-white rounded-full border-0"></div>
        <div className="h-24 w-54 chess bg-gradient-to-r from-black to-white rounded-full border-0"></div>
        <div className="h-24 w-58 chess bg-gradient-to-r from-black to-white rounded-full border-0"></div>
        <div className="h-24 w-62 chess bg-gradient-to-r from-black to-white rounded-full border-0"></div>
      </div>
    </div>
  );
};

export default page;