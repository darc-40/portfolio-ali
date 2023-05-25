import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div
    
    className='sticky top-0 flex items-center justify-between  mx-[5cm] z-20 xl:items-center p-6'>
        <motion.div 
        initial={{
            x: -500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
          duration:1.5  
        }}
        className='flex flex-row items-center'>
            {/* React social icon */}
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
        </motion.div>
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0
        }}
        animate={{ 
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5  
          }}
        className='flex items-center text-gray-300 cursor-pointer'>
            <SocialIcon className=' cursor-pointer' 
            network='email'
            fgColor='grey'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>Get in touch</p>
        </motion.div>
        
    </div>
  )
}

export default Header