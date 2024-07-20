import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);


export default function Features() {

    const heading = React.createRef();
    const image1 = React.createRef();
    const image2 = React.createRef();
    const image3 = React.createRef();
    const content1 = React.createRef();
    const content2 = React.createRef();
    const content3 = React.createRef();

    useEffect(() => {

        const el = heading.current;
        gsap.fromTo(el, { delay: 2, autoAlpha: 0 }, {
            duration: 3, autoAlpha: 1, ease: 'none', scrollTrigger: {
                trigger: el,
            }
        })

        const el1 = image1.current;
        gsap.fromTo(el1, { delay: 1, translateX: "-142px", opacity: 0 }, {
            delay: 1, translateX: "0.75px", opacity: 1, duration: 2, scrollTrigger: {
                trigger: el1,
            }
        })
        const el2 = image2.current;
        gsap.fromTo(el2, { delay: 1, translateX: "-142px", opacity: 0 }, {
            delay: 1, translateX: "0.38px", opacity: 1, duration: 2, scrollTrigger: {
                trigger: el2,
            }
        })
        const el3 = image3.current;
        gsap.fromTo(el3, { delay: 1, translateX: "-142px", opacity: 0 }, {
            delay: 1, translateX: "0.55px", opacity: 1, duration: 2, scrollTrigger: {
                trigger: el3,
            }
        })
        const el4 = content1.current;
        gsap.fromTo(el4, { delay: 2, opacity: 0, translateX: "-10px" }, {
            delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
                trigger: el4,
            }
        })
        const el5 = content2.current;
        gsap.fromTo(el5, { delay: 2, opacity: 0, translateX: "-10px" }, {
            delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
                trigger: el5,
            }
        })
        const el6 = content3.current;
        gsap.fromTo(el6, { delay: 2, opacity: 0, translateX: "-10px" }, {
            delay: 2, opacity: 1, translateX: "1px", duration: 2, scrollTrigger: {
                trigger: el6,
            }
        })
    }, [])



    return (
        <>
            <div className=' mx-auto mt-20 mb-8 md:mb-12 lg:mb-16' id='Feature'>
                <h1 className='heading text-4xl sm:text-6xl font-bold text-[#020842] ml-16 md:ml-32 mt-8' ref={heading}>Why Nexus Startup?</h1>

                <div className='grid gap-10 md:gap-12 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 md:mt-20 lg:ml-32 lg:mr-32 ml-12 mr-12'>

                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='mb-4 md:mb-20 flex flex-col relative'>

                            </div>
                            <div ><img src="https://thumbor-cdn.b2match.com/8qF-UQRPSwMhOB5ntdQZJcZ8vvQ=/fit-in/1500x1070/filters:quality(95):no_upscale()/https://cdn.b2match.com/uploads/recommender_page_section_2_3f0d1f50ec/recommender_page_section_2_3f0d1f50ec.png" alt="" className=' h-40 w-40 z-0 hover:transition-all ' ref={image1} /></div>
                        </div>


                        <div className='leading-loose' >
                            <h3 className='text-4xl font-bold text-[#020842]'>AI-Powered</h3>
                            <h3 className='text-4xl font-bold mt-3 md:mt-0 mb-2 md:mb-4 text-[#020842]' ref={content1}>Matching System</h3>
                            <p className=' text-sm'><b>Our platform leverages advanced AI algorithms to precisely match startups with the most compatible investors, mentors, and resources. By analyzing comprehensive profiles and data, our intelligent system ensures that every connection is optimally suited to the specific needs and ambitions of both startups and investors.</b></p>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='mb-4 md:mb-20 flex flex-col relative'>

                            </div>
                            <div ><img src="https://www.aimtechnologies.co/wp-content/uploads/2024/01/Data-Visualization-Report.png" alt="" className=' h-50 w-50 z-0 hover:transition-all ' ref={image2} /></div>
                        </div>


                        <div className='leading-loose' >
                            <h3 className='text-4xl font-bold text-[#020842]'>Dynamic Profile</h3>
                            <h3 className='text-4xl font-bold mb-4 text-[#020842]' ref={content2}>Insights</h3>
                            <p className=' text-sm'><b>Utilize our AI-driven insights to enhance and manage your profiles. Startups and investors benefit from detailed analytics and recommendations based on their profiles, helping them present their best selves and make informed decisions for successful collaborations.</b></p>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='mb-4 md:mb-20 flex flex-col relative'>

                            </div>
                            <div ><img src="https://blog.commbox.io/hs-fs/hubfs/Imported_Blog_Media/50-1-1024x600.jpg?width=1024&height=600&name=50-1-1024x600.jpg" alt="" className=' h-40 w-55 z-0 hover:transition-all ' ref={image3} /></div>
                        </div>


                        <div className='leading-loose' >
                            <h3 className='text-4xl font-bold text-[#020842]'>Tailored Support</h3>
                            <h3 className='text-4xl font-bold mb-4 text-[#020842]' ref={content3}>& Resources</h3>
                            <p className=' text-sm'><b>Receive personalized recommendations and access to a wealth of resources tailored to your unique requirements. Whether it's funding opportunities, mentorship, or industry-specific tools, our AI system curates and delivers the most relevant support to drive growth and innovation.</b></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}