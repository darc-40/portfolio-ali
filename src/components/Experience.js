import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <div     className='flex flex-col relative h-screen justify-evenly items-center text-center md:text-left md:flex-row mx-auto  max-w-7xl px-10 '>
    
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400 text-2xl'>Experience</h3>
        <div className='absolute top-28 flex w-full space-x-5 overflow-x-scroll  snap-x snap-mandatory'>
            {/* Experience cards */}
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </div>
  )
}

export default Experience