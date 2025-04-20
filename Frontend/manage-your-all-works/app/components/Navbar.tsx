"use client";
import React, { useEffect, useState } from "react";
import "./logo.css"; // Import the CSS file for Logo
import axios from "axios";

const NavBar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState({
        profilePicture: "/default-user-icon.png",
        name: "",
    });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/auth/checkAuth",
                    {},
                    { withCredentials: true }
                );
                if (response.status === 200) {
                    setIsLoggedIn(true);
                    // Set the user's profile picture from the response
                    setUserProfile({
                        profilePicture: response.data.profilePicture || "/default-user-icon.png",
                        name: response.data.name || "User"
                    });
                }
            } catch (error) {
                setIsLoggedIn(false);
                console.log(error)
            }
        };
        checkAuth();
    }, []);

    return (
    <nav className="w-screen flex justify-evenly items-center fixed gap-48 z-100">
        <div className="logo text-center w-max cursor-pointer">
        <div className="circle"></div>
        </div>
        <div className="links w-[700px]">
          
        {isLoggedIn ? (
                  <ul className="linksul flex gap-10 text-md items-center justify-center text-black">
                  <li><a href="/dashboard">Dashboard</a></li>
               
                  </ul>
            ) : (
                <>
                  <ul className="linksul flex gap-10 text-md items-center justify-center lg:visible invisible">
                  <li><a href="#HOME">Home</a></li>
                  <li><a href="#ABOUT">About</a></li>
                  <li><a href="#WHYME">Why Me?</a></li>
                  <li><a href="#FAQS">FAQs</a></li>
                  <li><a href="#CONTACT">CONTACT</a></li>

           </ul>
                </>
            )}

           <ul className="linksul flex gap-10 text-md items-center justify-center lg:visible invisible">
{           <li><a href="#HOME">Home</a></li>
}                  <li><a href="#ABOUT">About</a></li>
                  <li><a href="#WHYME">Why Me?</a></li>
                  <li><a href="#FAQS">FAQs</a></li>
                  <li><a href="#CONTACT">Contact</a></li>
           </ul>
        </div>
        <div className="flex items-center justify-center gap-1 w-51">
            {isLoggedIn ? (
                <a href="/profile" className="user-icon cursor-pointer">
                    <img
                        src={userProfile.profilePicture}
                        alt={userProfile.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                </a>
            ) : (
                <>
                    <button className="signup text-white w-28 h-10 rounded-md">
                        Register
                    </button>
                   <a href="/login">
                   <button className="login bg-white text-black w-28 h-10 rounded-md cursor-pointer hover:scale-110">
                        Login
                    </button>
                    </a> 
                </>
            )}
               <div className="lg:hidden z-1000 fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
        <nav className="flex justify-around items-center h-16">
        {   isLoggedIn ? (
                    <li className="text-black"><a href="/dashboard">Dashboard</a></li>
            ) : (        <li><a href="#HOME">Home</a></li>)
}  
          <a href="#ABOUT" className="flex flex-col items-center text-black">
            <span className="text-sm">About</span>
          </a>
          <a href="#WHYME" className="flex flex-col items-center text-black">
            <span className="text-sm">Why Me?</span>
          </a>
          <a href="#FAQS" className="flex flex-col items-center text-black">
            <span className="text-sm">FAQs</span>
          </a>
          <a href="#CONTACT" className="flex flex-col items-center text-black">
            <span className="text-sm">Contact</span>
          </a>
        </nav>
      </div>
        </div>
    </nav>);
};

export default NavBar;
