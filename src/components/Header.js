import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Header() {
  return (
    <div className='sticky top-0 flex items-center justify-between  mx-[5cm] z-20 xl:items-center p-6'>
        <div className='flex flex-row items-center'>
            {/* React social icon */}
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
            <SocialIcon  url='https://twitter.com/jaketrent' fgColor='grey' bgColor='transparent'/>
        </div>
        <div className='flex items-center text-gray-300 cursor-pointer'>
            <SocialIcon className=' cursor-pointer' 
            network='email'
            fgColor='grey'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>Get in touch</p>
        </div>
        
    </div>
  )
}

export default Header