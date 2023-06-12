import React from "react";
import { PhoneOutgoingIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid'

function Contact() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-evenly mx-auto md:flex-row text-left max-w-7xl px-10">
      <h4 className="absolute top-24 text-gray-500 tracking-[20px] uppercase text-2xl">
        Contact
      </h4>
      <div className="absolute top-36 flex flex-col space-y-4">
        <h4 className="text-center text-4xl font-semibold">
          I got waht you need{" "}
          <span className="underline decoration-[#F7AB8A]">Let's talk</span>
        </h4>
        <div className="space-y-10 items-center text-left">
            <div className="flex items-center justify-center space-x-5">
                <PhoneOutgoingIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]"/>
                <p className="text-2xl">+2547 0736643858</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
                <MailIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]"/>
                <p className="text-2xl">odhiamboalphonce23@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
                <LocationMarkerIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]"/>
                <p className="text-2xl">p.o.box ...../...-..</p>
            </div>
        </div>
        <form action="" className="flex flex-col mx-auto w-fit space-y-2">
            <div className="flex space-x-2">
                <input className="textInput" placeholder="name" type="text" name="" id="" />
                <input className="textInput" placeholder="email" type="email" name="" id="" />
            </div>
                <input className="textInput"type="text" placeholder="subject" name="" id="" />
             <textarea className="textInput"name="" placeholder="say something" id="" cols="2" rows="2"/>
            <button className="bg-[#F7AB0A]/40 py-2 px-10 rounded-md text-lg text-black font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
