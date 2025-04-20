"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/checkAuth",
          {},
          { withCredentials: true }
        );
        if (response.status === 200) {
          setIsAuthenticated(true);
          router.push("/dashboard"); // Redirect to dashboard if authenticated
        }
      } catch (error) {
        console.error("User not authenticated");
      }
    };
    checkAuth();
  }, [router]);

  if (isAuthenticated) return null; // Prevent rendering if redirecting

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="design1 absolute bottom-5 left-10 z-0">
        <div className="w-50 h-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-54 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-58 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-62 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
      </div>
      <div
        className="z-100 w-120 h-160 bg-white rounded-4xl flex flex-col items-center justify-center text-center gap-10"
        style={{
          zIndex: 10, // Ensure the box is above other elements
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Add shadow for visibility
        }}
      >
        <span className="text-black capitalize text-5xl font-bold">Login</span>
        <input
          type="text"
          name="Name"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="Name"
          id=""
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-black w-32 h-15 rounded-md p-10 cursor-pointer hover:scale-110"
          onClick={handleLogin}
        >
          Login
        </button>

        <span className="text-black">New User?</span>{" "}
        <a
          href="/register"
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Register
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