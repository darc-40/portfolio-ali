import React from "react";
import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[619px] 
    hover:opacity-100 opacity-40 cursor-pointer transmition-opacity duration-200 overflow-hidden snap-end bg-[#292929] p-6"
    >
      <motion.img
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-20 w-20  rounded-full border border-[#F7AB8A] object-cover object-center xl:h-[100px] xl:w-[100px] "
        src=""
        alt="expimage"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO REACT CITY</h4>
        <p className="font-bold font-2xl mt-1 uppercase">react city</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <img
            className="h-16 w-16 rounded-full border border-[#43e710]"
            src=""
            alt="techpic"
          />
          <img
            className="h-16 w-16 rounded-full border border-[#43e710]"
            src=""
            alt="techpic"
          />
          <img
            className="h-16 w-16  rounded-full border border-[#43e710]"
            src=""
            alt="techpic"
          />
          <img
            className="h-16 w-16  rounded-full border border-[#43e710]"
            src=""
            alt="techpic"
          />
        </div>
        <p className="uppercase py-4 text-gray-300">
          started when ... ended....
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sammury points</li>
          <li>sammury points</li>
          <li>sammury points</li>
          <li>sammury points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
