import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import logonew from "../images/latestlogo1.png";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const content1 = React.createRef(); 

  useEffect(() => {
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:1, opacity:0, translateY:"10px"} , {delay:1, opacity:1,translateY:"1px", duration: 1, scrollTrigger:{
        trigger: el2,
      }})
    }, [ ] )
  return (
    <>
      <div className=" bg-slate-800 text-white mt-20 relative overflow-y-hidden pt-12 pb-12 md:pb-24 px-4 overflow-x-hidden" ref={content1}>
        <div className="grid grid-cols-1   md:grid-cols-4 md:ml-20 gap-x-20 gap-y-12 md:mr-20">
          <div className="md:mb-20  md:col-span-2 ">
            <div className="flex  text-center md:text-left justify-center md:justify-start">
              <img
                src={logonew}
                alt=""
                className="h-28 text-center -mt-8"
              />
            </div>
            <p className=" text-center md:text-left mx-auto md:mx-0 max-w-lg ">
            Empowering startups and investors through tailored connections. Experience seamless matchmaking and innovative support with Startup Nexus. Where your entrepreneurial vision meets its perfect match.
            </p>
          </div>

          <div className="flex flex-col  list-none ">
            <h2 className="text-2xl  font-bold flex justify-center md:justify-start ">
              Social Links
            </h2>
            <li className="leading-10 mt-4 ">
              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <div
                    className=" text-center bg-white text-black p-2 w-fit rounded-full  mr-2 h-8"
                  >
                    <FaInstagram />
                  </div>
                  <span className="mt-[-5px]">Instagram</span> 
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <div
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaLinkedinIn />
                  </div>
                  <span className="mt-[0.65rem]">Linkedin</span>
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <div
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaDiscord />
                  </div>
                  <span className="mt-[0.65rem]">Discord</span>
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <div
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaGithub />
                  </div>
                  <span className="mt-[0.65rem]">GitHub</span>
                </div>
              </ul>
            </li>
          </div>

          <div className="flex flex-col  list-none">
            <h2 className="text-2xl font-bold flex justify-center md:justify-start ">
              Quick Links
            </h2>
            <ul className="leading-10 mt-4 ">
              <li className="flex justify-center md:justify-start">
                <a href="#Home">Home</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#About">About Us</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Card">Our Services</a>
              </li>
              <li className="flex justify-center md:justify-start ">
                <a href="#Feature">Features</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Workshop">Book Demo</a>
              </li>
            
              <li className="flex justify-center md:justify-start">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full absolute -bottom-5 sm:-bottom-7 md:-bottom-9 lg:-bottom-12">
          <h1 className="w-full flex justify-center text-slate-700 mt-4 text-center text-[2.2rem] font-bold sm:text-[3.8rem] md:mt-0 md:text-[4.2rem] lg:text-[6rem] sm:font-extrabold mb-8">
            STARTUP NEXUS
          </h1>
        </div>
      </div>
    </>
  );
}
