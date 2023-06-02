import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Skill() {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <motion.img 
      className="w-20 h-20 rounded-full border border-gray-500 object-cover group-hover:grayscale filter transition duration-300 ease-in-out"
      src="/images/sanity.jpeg" alt="" />
      <div className="absolute opacity-0 group-hover:opacity-80  z-0 transition duration-300 ease-in-out rounded-full group-hover:bg-white h-20 w-20">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100 text-xl">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
