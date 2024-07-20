import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import { FaChartLine, FaHandshake, FaSearchDollar, FaTools, FaUserGraduate } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

export default function Card() {
  const heading = React.createRef(); 
  const text = React.createRef();
  const content1 = React.createRef(); 
  const content2 = React.createRef(); 
  const content3 = React.createRef(); 
  const content4 = React.createRef(); 
  const content5 = React.createRef(); 
  const content6 = React.createRef(); 
  const btn = React.createRef(); 

  useEffect(() => {

      const el = heading.current;
      gsap.fromTo(el , {delay:2, autoAlpha: 0} , {duration:3 , autoAlpha:1, ease:'none' , scrollTrigger:{
        trigger: el,
      }})
    
      const el1 = text.current;
      gsap.fromTo(el1 , {delay:1, translateY:"-142px", opacity:0} , {delay:1, translateY:"0.75px" , opacity:1 , duration: 2 ,scrollTrigger:{
        trigger: el1,
      }})
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el2,
      }})
      const el3 = content2.current;
      gsap.fromTo(el3 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el3
      }})
      const el4 = content3.current;
      gsap.fromTo(el4 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el4,
      }})
      const el5 = content4.current;
      gsap.fromTo(el5 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el5,
      }})
      const el6 = content5.current;
      gsap.fromTo(el6 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el6,
      }})
      const el7 = content6.current;
      gsap.fromTo(el7 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el7,
      }})
      const el8 = btn.current;
      gsap.fromTo(el8 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el8,
      }})
    }, [ ] )

  return (
    <>
    <div className=" sm:py-20 bg-[#FCFAF2] py-12" id='Card'>

    
    <div className="flex justify-center " ref={heading}>
    <h1 className="text-[#1e1b4b] text-4xl md:text-7xl  w-fit font-bold  sm:mb-16 ">
        Our Services
      </h1>
    </div>

      <div className="flex justify-center items-center w-full">
       
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 sm:gap-x-8 gap-y-8">
      
          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content1}>
          <div className="group">
          <FaHandshake className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-4 transform group-hover:scale-125 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold  transform group-hover:scale-125 transition-transform duration-1000 ease-in-out">Personalized</h1>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold  transform group-hover:scale-125 transition-transform duration-1000 ease-in-out">Matching</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content2}>
          <div className="group">
          <FaSearchDollar  className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-4 transform group-hover:scale-125 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold transform group-hover:scale-125 transition-transform duration-1000 ease-in-out">Investor </h1>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold  transform group-hover:scale-125 transition-transform duration-1000 ease-in-out">Discovery</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content3}>
          <div className="group">
          <FaUserGraduate className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] group-hover:scale-125 transition-transform duration-1000 ease-in-out'/>
          <p class="text-white">blank</p>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-125 transition-transform duration-1000 ease-in-out">Mentorship</h1>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-125 transition-transform duration-1000 ease-in-out">Opportunities</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content4}>
          <div className="group">
          <FaTools className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-3 group-hover:scale-125 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-125 transition-transform duration-1000 ease-in-out">Resource</h1>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold  transform group-hover:scale-125 transition-transform duration-1000 ease-in-out">Allocation</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content5}>
          <div className="group">
          <FaChartLine className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] group-hover:scale-125 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-125 transition-transform duration-1000 ease-in-out">Insightful</h1>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-125 transition-transform duration-1000 ease-in-out">Analytics</h1>
          </div>
          </div>


        </div>
      </div>

    </div>
    </>
  );
}