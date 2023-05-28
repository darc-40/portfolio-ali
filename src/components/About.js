import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly items-center text-center md:text-left md:flex-row mx-auto  max-w-7xl px-10 "
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        // initial={{
        //   x: -400,
        //   opacity: 0,
        // }}
        // whileInView={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 1.5,
        // }}
        // viewport={{ once: true }}
        className=" md:mb-0  flex-shrink-0 h-56 w-56 rounded-full object-cover left-8 md:rounded-md 
        md:w-64 md:h-96 mt-20 border border-spacing-3 border-[#F7AB8A]"
        src="/images/screenshort.png"
        alt="img"
      />
      <div className=" space-y-10 px-0 md:px-10 ">
        <h3 className="font-semibold text-4xl">
          Here is a {""}{" "}
          <span className="underline decoration-[#F7AB8A]">little</span> {""}
          background
        </h3>
        <p className="text-base">
          {" "}
          I am a Software engineer in the field of software development(Full
          stack) doing both websites and mobile applications.I have got intesive
          skills on different front-end packages(Reactjs,Angular, .NET) &
          back-end as well(Python-django, C#) also databases(Postgressql,MySQL
          ). tudied in Moringa School plus a lot of self commitments and
          researches.
          <b />I am Currently working on WEB 3.0 knowledge and projects and I
          welcome you all to work with me to improve Tech industries.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
