import React from "react";
import { motion } from "framer-motion";

function Bachgoundcircle() {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}
    animate={{
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      scale:[1,2,2,3,1],
      borderRadius:['20%','20%','50%','80%','20%']
    }}
    transition={{
      duration:[2.5]
    }}
    className="relative flex justify-center items-center mt-52">
      <div className="absolute border border-[#333333] h-[200px] w-[200px] animate-ping rounded-full mt-80"/>
      <div className="absolute border border-[rgb(36,36,36)] h-[350px] w-[350px]  rounded-full mt-52 " />
      {/* <div className="absolute border border-[#333333] h-[500px] w-[500px]  rounded-full mt-52 " /> */}
      <div className="absolute border border-[#F7AB8A] h-[600px] w-[600px]  rounded-full mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#333232] h-[800px] w-[800px]  rounded-full mt-52 p-4 " />
    </motion.div>
  );
}

export default Bachgoundcircle;
