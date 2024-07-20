import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContactPageSubmitBtn = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) {
      toast.error("Name is required field");
      return;
    }
    if (!email) {
      toast.error("Email is required field");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Enter valid email address");
      return;
    }
    if (!subject) {
      toast.error("Subject is required field");
      return;
    }
    if (!message) {
      toast.error("Message is required field");
      return;
    }
    // Backend code for sending mails can be added here
  };

  const heading = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(heading.current, { autoAlpha: 0 }, { duration: 3, autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: heading.current } });
    gsap.fromTo(content1.current, { opacity: 0, translateX: "-10px" }, { opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content1.current } });
    gsap.fromTo(content2.current, { opacity: 0, translateY: "10px" }, { opacity: 1, translateY: "1px", duration: 2, scrollTrigger: { trigger: content2.current } });
    gsap.fromTo(content3.current, { opacity: 0, translateY: "10px" }, { opacity: 1, translateY: "1px", duration: 2, scrollTrigger: { trigger: content3.current } });
    gsap.fromTo(content4.current, { opacity: 0, translateY: "10px" }, { opacity: 1, translateY: "1px", duration: 2, scrollTrigger: { trigger: content4.current } });
  }, []);

  return (
      <div id="Contact" className="flex flex-col md:flex-row px-4 md:px-8"> 
        <ToastContainer />
        <div className="flex-1 bg-white p-4 md:p-8 md:ml-4">
          <Opensource />
        </div>
  
        <div  className="flex-1 bg-indigo-950 rounded-xl shadow-md max-w-5xl w-full md:w-1/2 flex flex-col py-8 md:py-20 px-4 md:px-8 md:ml-auto mt-16 pt-8">

          <h2 className="text-2xl font-semibold text-white mb-4" ref={heading}>Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-white text-sm font-bold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-300 transition-all" onClick={handleContactPageSubmitBtn}>Submit</button>
          </form>
        </div>
      </div>
    );
  };
const Opensource = () => {
  const handleTextClick = (url) => {
    window.location.href = url;
  };

  const heading = useRef(null);
  const text = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);

  useEffect(() => {
    gsap.fromTo(heading.current, { delay: 2, autoAlpha: 0 }, { duration: 3, autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: heading.current } });
    gsap.fromTo(text.current, { delay: 1, translateX: "-142px", opacity: 0 }, { delay: 1, translateX: "0.75px", opacity: 1, duration: 2, scrollTrigger: { trigger: text.current } });
    gsap.fromTo(content1.current, { delay: 2, opacity: 0, translateX: "-10px" }, { delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content1.current } });
    gsap.fromTo(content2.current, { delay: 2, opacity: 0, translateX: "10px" }, { delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content2.current } });
    gsap.fromTo(content3.current, { delay: 2, opacity: 0, translateX: "-10px" }, { delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content3.current } });
    gsap.fromTo(content4.current, { delay: 2, opacity: 0, translateX: "10px" }, { delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content4.current } });
    gsap.fromTo(content5.current, { delay: 2, opacity: 0, translateX: "-10px" }, { delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: { trigger: content5.current } });
  }, []);

  return (
    <div className="mx-auto mt-20 mb-24 mr-0 flex flex-col md:flex-row px-4 md:px-8" id="Open-source"> {/* Added padding here */}
      
      <div className="w-full md:w-2/6 order-1 md:order-2">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex flex-col rounded-lg bg-[#1e1b4b] m-4 rotate-6" ref={content1}>
            <div className="w-80 h-14 rounded-lg bg-[#1e1b4b] cursor-pointer" > <p className="text-center text-white my-2">Unlock new opportunities with us</p> </div>
          </div>
          <div className="flex flex-col rounded-lg bg-[#dc2626] m-4 -rotate-6" ref={content2}>
            <div className="w-80 h-14 rounded-lg bg-[#dc2626] cursor-pointer" > <p className="text-center text-white my-2">Your next big idea starts here</p> </div>
          </div>
          <div className="flex flex-col rounded-lg bg-[#14b8a6] m-4 rotate-6" ref={content3}>
            <div className="w-80 h-14 rounded-lg bg-[#14b8a6] cursor-pointer" > <p className="text-center text-white my-2">Bridging visions and valuable connections</p> </div>
          </div>
          <div className="flex flex-col rounded-lg bg-[#16a34a] m-4 -rotate-6" ref={content4}>
            <div className="w-80 h-14 rounded-lg bg-[#16a34a] cursor-pointer" > <p className="text-center text-white my-2">Empower your startup with insights</p> </div>
          </div>
          <div className="flex flex-col rounded-lg bg-[#4d97ff] m-4 rotate-6" ref={content5}>
            <div className="w-80 h-14 rounded-lg bg-[#4d97ff] cursor-pointer" > <p className="text-center text-white my-2">Transforming potential into powerful partnerships</p> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
