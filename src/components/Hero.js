import React from 'react';
import { Cursor,  useTypewriter} from 'react-simple-typewriter';
import Bachgoundcircle from './Bachgoundcircle';

function Hero() {
    const [text, count] = useTypewriter({
        words:[
            "Hi there, My name is Alphonce ",
            "Software Developer & Android security expert",
            "I love <coffee/> & <code/>"
        ],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='flex flex-col justify-center space-y-8  h-screen items-center text-center overflow-hidden'>
        <Bachgoundcircle/>
        <img 
        className='rounded-full object-cover w-32 h-32 relative mx-auto'
        src="" alt="pic" />
        <div className='z-20'>
        <h2 className='text-small uppercase text-gray-500 tracking-[15px] pb-2'>Software Engineer</h2>
        <h1 className='font-semibold text-3xl text-white lg:text-4xl px-10'>
            <span className='mr-2'>{text}</span>
            <Cursor cursorColor='#F7AB8A'/>
        </h1>
        <div className='pt-4'>
            <link></link>
            <button className='herobtn'>skills</button>
            <button className='herobtn'>About</button>
            <button className='herobtn'>Experience</button>
            <button className='herobtn'>Project</button>
        </div>
        </div>
        
    </div>
  )
}

export default Hero