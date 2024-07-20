import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import bg1 from "../images/startup1.png";
import bg5 from "../images/startup2.png";
import bg2 from "../images/startup3.png";
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
  const heading = React.createRef();
  const content1 = React.createRef();
  const content2 = React.createRef();
  const content3 = React.createRef();
  const content4 = React.createRef();
  const content5 = React.createRef();
  const content6 = React.createRef();

  useEffect(() => {

    const el = heading.current;
    gsap.fromTo(el, { delay: 2, autoAlpha: 0 }, {
      duration: 3, autoAlpha: 1, ease: 'none', scrollTrigger: {
        trigger: el,
      }
    })
    const el2 = content1.current;
    gsap.fromTo(el2, { delay: 2, opacity: 0, translateX: "-10px" }, {
      delay: 1, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
        trigger: el2,
      }
    })
    const el3 = content2.current;
    gsap.fromTo(el3, { delay: 2, opacity: 0, translateX: "-10px" }, {
      delay: 1, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
        trigger: el3
      }
    })
    const el4 = content3.current;
    gsap.fromTo(el4, { delay: 2, opacity: 0, translateX: "-10px" }, {
      delay: 1, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
        trigger: el4,
      }
    })
    const el5 = content4.current;
    gsap.fromTo(el5, { delay: 2, opacity: 0, translateY: "10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el5,
      }
    })
    const el6 = content5.current;
    gsap.fromTo(el6, { delay: 2, opacity: 0, translateY: "10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el6,
      }
    })
    const el7 = content6.current;
    gsap.fromTo(el7, { delay: 2, opacity: 0, translateY: "10px" }, {
      delay: 2, opacity: 1, translateY: "1px", duration: 2, scrollTrigger: {
        trigger: el7,
      }
    })
  }, [])

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#fff7ed] "
      id="Home"
    >
      <div className="w-full lg:w-1/2  pl-10 pr-10 order-2 lg:order-1  flex flex-col text-[#1e1b4b]  ">
        <h1 className="text-5xl font-bold lg:text-9xl md:text-7xl lg:mb-10 text-center sm:text-left " ref={heading}>
          {" "}
       Startup Nexus{" "}
        </h1>
        Unlock your potential and discover meaningful opportunities at our dynamic platform, bridging aspiring talent with forward-thinking organizations. Join us in shaping the future of work, where innovation meets talent, and possibilities are limitless.
       

        <a
          href="#Card"
          className="bg-[#dc2626] inline-flex justify-center items-center gap-x-2 text-white w-[140px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg" ref={content3}
        >
          Get started

        </a>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 sm:none md:grid-row-3 lg:grid-row-3 pt-8  ">
        <div className="bg-[#fff7ed] h-54 w-full " ref={content4}>
          <img className=" h-full w-full " src={bg1}></img>
        </div>
        <div className="bg-[#fff7ed] h-54 w-full " ref={content5}>
          <img className=" h-full w-full  " src={bg5}></img>
        </div>

        <div className="bg-[#fff7ed] h-54 w-full hidden lg:block"></div>

        <div className=" bg-[#fff7ed] h-54 w-full hidden lg:block ">
          <img className="  h-full w-full" src={bg2} ref={content6}></img>{" "}
        </div>
      </div>
    </div>
  );
}