import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  return (
    <motion.div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'> Skills</h3>
        <h3 className='absolute top-36 tracking-[3px] uppercase text-gray-500 text-xl'>Hover over a skill to check proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>

        </div>
    </motion.div>
    
  )
}

export default Skills