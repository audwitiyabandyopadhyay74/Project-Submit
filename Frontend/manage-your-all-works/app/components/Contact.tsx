"use client";
import React from "react";
import Hyperspeed from "./HyperSpeed";

const Contact = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "51cdab45-3379-407d-9ee1-b993be51547a",
        name: form.name.value, // Access the value using the name attribute
        email: form.email.value, // Access the value using the name attribute
        message: form.message.value, // Access the value using the name attribute
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  }

  return (
    <div
      className="h-[100vh] w-screen flex justify-center items-center gap-10 bg-black flex-wrap lg:flex-row flex-col"
      id="CONTACT"
    >
      <span className="text-5xl font-bold mt-[-20vh] z-100">Contact</span>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col h-[60vh] w-[25vw] rounded-4xl items-center justify-center gap-10 z-100"
      >
        <input
          type="text"
          name="name" // Added name attribute
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Name"
        />
        <input
          type="email"
          name="email" // Added name attribute
          className="text-black w-[80%] h-12 border-b-black border-b-4 outline-none"
          placeholder="Email"
        />
        <textarea
          name="message" // Added name attribute
          placeholder="Message"
          className="text-black w-[80%] h-24 border-b-black border-b-4 outline-none z-100"
        />
        <input
          type="submit"
          className="bg-black w-32 h-15 rounded-md cursor-pointer hover:scale-110"
          value="Send"
        />
      </form>
      <Hyperspeed />
    </div>
  );
};

export default Contact;