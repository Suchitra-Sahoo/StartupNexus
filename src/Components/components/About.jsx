import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import design1 from "../images/startup-1993900_960_720-Photoroom.png";
gsap.registerPlugin(ScrollTrigger);


export default function About() {
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
    gsap.fromTo(el, { delay: 2, autoAlpha: 0 }, {
      duration: 3, autoAlpha: 1, ease: 'none', scrollTrigger: {
        trigger: el,
      }
    })

    const el1 = text.current;
    gsap.fromTo(el1, { delay: 1, translateY: "-142px", opacity: 0 }, {
      delay: 1, translateY: "0.75px", opacity: 1, duration: 2, scrollTrigger: {
        trigger: el1,
      }
    })
    const el2 = content1.current;
    gsap.fromTo(el2, { delay: 2, opacity: 0, translateY: "-10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el2,
      }
    })
    
    const el7 = content6.current;
    gsap.fromTo(el7, { delay: 2, opacity: 0, translateY: "10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el7,
      }
    })
    const el8 = btn.current;
    gsap.fromTo(el8, { delay: 2, opacity: 0, translateY: "10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el8,
      }
    })
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#1e1b4b] "
      id="About"
    >
      <div className="w-full lg:w-1/2 grid grid-cols-1">
        <div className=" h-64 w-full " ref={content1}>
          <img className="h-full w-full object-contain"  src={design1}></img>
        </div>
        
      </div>

      <div className="w-full lg:w-1/2  pl-10 pr-10   flex flex-col text-white ">
        <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 mt-10 " ref={heading}>
          {" "}
          About Us{" "}
        </h1>

        <p className="text-xm  leading-relaxed mb-5 text-[#E7E5E5] " ref={text}>
          Welcome to Startup Nexus, a revolutionary virtual incubator designed to transform how startups and investors connect. Our platform intelligently matches startups with the most suitable investors, resources, and mentorship opportunities through an innovative matching system. By analyzing detailed profiles of both startups and investors, Startup Nexus ensures that each connection is perfectly tailored to the needs and goals of both parties. Our mission is to foster collaboration, innovation, and growth by providing personalized support and insightful guidance. Experience the future of entrepreneurial success with Startup Nexus, where cutting-edge technology meets unparalleled opportunity, and ideas transform into reality.


        </p>
   <a href="#Feature"  ><button className="bg-[#dc2626] inline-flex justify-center items-center text-white w-[200px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg" ref={btn}>
          Learn more <span><FaLongArrowAltRight className='lg:mt-1 ml-2 mt-1' /></span>

        </button>
        </a>
      </div>
    </div>
  );
}