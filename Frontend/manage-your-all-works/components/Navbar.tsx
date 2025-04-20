"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({ profilePicture: "" });

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
          setUserData(response.data);
        }
      } catch (error) {
        console.error("User not authenticated");
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Manage Your Works</div>
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <a href="/login" className="hover:underline">
              Login
            </a>
            <a href="/register" className="hover:underline">
              Register
            </a>
          </>
        ) : (
          <div className="relative group">
            <img
              src={userData.profilePicture || "/default-avatar.png"}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
