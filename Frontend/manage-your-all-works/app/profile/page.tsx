"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter

const ProfilePage = () => {
  const router = useRouter(); // Initialize router
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profilePicture: "",
  });
  const [profilePic, setProfilePic] = useState<string | null>(null); // Store base64 string

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/checkAuth",
          {},
          { withCredentials: true } // Ensure cookies are sent
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, []);

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result as string); // Convert file to base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      const { name, email, phoneNumber } = userData;

      const response = await axios.put(
        "http://localhost:5000/api/auth/updateUserProfile",
        { name, email, phoneNumber, profilePic }, // Send base64 string
        { withCredentials: true }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to logout:", error);
      alert("Failed to logout");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center z-0">
      <div className="design1 absolute bottom-5 left-10">
        <div className="w-50 h-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-50 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-54 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-58 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
        <div className="h-24 w-62 chess bg-gradient-to-r from-white to-black rounded-full border-0"></div>
      </div>
      <div className="z-100 w-120 h-160 bg-white rounded-4xl flex flex-col items-center justify-center text-center gap-10">
        <span className="text-black capitalize text-5xl font-bold">Profile</span>
        {userData.profilePicture && (
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <input
          type="text"
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Name"
          value={userData.name}
          onChange={(e) =>
            setUserData({ ...userData, name: e.target.value })
          }
        />
        <input
          type="text"
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Email"
          value={userData.email}
          onChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
        />
        <input
          type="text"
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChange={(e) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
        />
        <input
          type="file"
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          max-size={2000}
          accept="image/*"
          placeholder="Choose a Profile Picture max 200MB"
        />
        <b className="text-black mt-[-4rem]">Choose a Profile Picture max 200MB</b>
        <div className="flex gap-4">
          <button
            className="bg-black w-32 h-10 rounded-md  cursor-pointer hover:scale-110"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 w-32 h-10 rounded-md  cursor-pointer hover:scale-110"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
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

export default ProfilePage;
