"use client";
import React from 'react';
// import { motion, useScroll, useTransform } from "motion/react";

const WhatWillYouGet: React.FC = () => {
  // const { scrollYProgress } = useScroll();
  const MAHADEV = -450;
  // const translateY = useTransform(scrollYProgress, [0, 1], [0, MAHADEV]);

  return (
    <div className="w-screen h-[100vh] flex items-center justify-center" id="ABOUT">
      <div className="flex flex-col h-max w-max gap-10">
        <div className="flex items-center justify-center">
          <span className="text-5xl font-bold">About</span>
          {/* <motion.div
            className="max-w-[418px] h-[6vh] rounded-full bg-white"
            style={{ y: translateY }}
          ></motion.div> */}
        </div>
        <p className="w-[100%] h-max text text-center px-[20%]">
          THIS PROJECT IS FOR THE HACKETHON SO THIS SECTION DOESN&apos;T CONTAIN A REAL THING, IT CONTAINS EXAMPLE TEXT.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus deleniti, incidunt odio corrupti ratione quos enim facilis officia itaque, odit alias nisi labore recusandae nemo perferendis aliquam? 
          Labore quod expedita aut obcaecati molestiae, impedit quis sit minus. Magnam voluptate illum dolores perferendis, aut itaque rerum mollitia optio aliquam consectetur nisi soluta obcaecati praesentium molestiae aperiam aspernatur illo eius voluptatum culpa id dignissimos quam ullam recusandae! 
          Aspernatur, saepe! Minima quidem pariatur fugiat animi inventore, soluta accusantium incidunt est maxime. Deserunt consequatur tempora rerum voluptates ducimus quisquam. Provident illo architecto voluptatem nihil! Non quod molestias, cumque sint modi praesentium asperiores iure.
        </p>
      </div>
    </div>
  );
};

export default WhatWillYouGet;
