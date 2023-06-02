import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen relative overflow-hidden items-center flex flex-col ">
      <h3 className="text-2xl tracking-[20px] absolute top-24 uppercase text-gray-500 text-left md:flex-row mx-auto max-w-full z-0 justify-evenly">
        projects
      </h3>
      <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projects */}
        {projects.map((project, i) => (
          <div className="snap-center w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
            <motion.img 
            initial={{y:-200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5}}
            src="/images/sanity.jpeg" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-bold">
                Case study {i + 1} of {projects.length}: NEXTFLIXCLONE
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
