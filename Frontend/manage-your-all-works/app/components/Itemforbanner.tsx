"use client";
import React from 'react'
import Image from "next/image"
import exampleLogo from "../favicon.ico"
import { motion, useScroll, useTransform } from "motion/react"; // Corrected import

interface ItemforbannerProps {
  MaxTop?: number;
  X?: number;
  Y?: number;
  Speed?: number;
}

const Itemforbanner: React.FC<ItemforbannerProps> = (props) => {
  const { scrollYProgress } = useScroll(); // Destructure scrollYProgress
  const MAHADEV = props.MaxTop || -450;
  const translateYvalue = useTransform(scrollYProgress, [0, 1], [0, MAHADEV]); // Map scroll progress to upward motion
  const translateY = translateYvalue // Use the transformed value for y position

// const Y = Math.random() * 100; // Random Y position for each item
// console.log("Y", Y);
  // console.log("translateY", translateY);
  return (
    <motion.div
      className={`w-24 h-24 flex items-center justify-center absolute z-10 motiondiv`} // Updated z-index
      draggable={true}
      style={{
        y: translateY || props.Y, // Apply upward motion
        x: props.X,
        transition: `transform ${0.05}s ease-in-out`, // Minimal duration for the fastest transition
      }}
    >
      <Image src={exampleLogo} alt="Example logo" />
    </motion.div>
  );
}

export default Itemforbanner;