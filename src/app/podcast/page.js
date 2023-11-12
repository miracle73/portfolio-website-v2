'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Google from '../../../public/Google.png'
import Youtube from '../../../public/youtube.png'
import SoundCloud from '../../../public/soundcloud.png'
import Apple from '../../../public/apple.png'
import Spotify from '../../../public/spotify.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import dynamic from "next/dynamic";


function page() {
    const [count, setCount] = useState(0);

    const handleSeeMoreClick = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    useEffect(() => {
        let lastScrollX;
        if (process.browser) {
            lastScrollX = window.pageXOffset || window.scrollX;
            const slideer = document.getElementById("sliderItem")
            slideer && slideer.addEventListener('scroll', function (event) {
                let currentScrollX = window.pageXOffset || window.scrollX;
                if (lastScrollX !== currentScrollX) {
                    // Horizontal scrolling has occurred
                    // The scroll event code goes here
                    slideer.scrollLeft = slideer.scrollLeft + 500
                }
                lastScrollX = currentScrollX;
            });
        }
    }, []);


    return (
        <div className="min-h-screen max-w-screen relative font-font1" >
            <div className=" py-2 h-20 px-10 max-sm:px-2 mt-24 flex flex-col justify-center items-center pt-16">
                <div className="text-black text-[46px] max-lg:text-[36px] max-md:text-[26px] max-sm:text-xl font-bold ">Explore Our Podcasts</div>
                <div className="text-black text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-normal  ">Listen to our Latest Podcast</div>
            </div>
            <div className='flex flex-col justify-center items-center pb-10'>
                <div className='py-8 max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='bg-black rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>Career</div>
                    <div className='flex items-center justify-between relative'>
                        <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career1.jpeg')] bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 1</div>
                                <div className="text-gray-900  text-sm font-semibold   text-center">The Early days of your Career</div>

                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career2.jpeg')] bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 2</div>
                                <div className="text-gray-900   text-sm font-semibold  text-center">Career Change: How to Navigate and Manage the Risks</div>

                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career3.jpeg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Solving Stress at Work</div>

                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career3.jpeg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold text-center">Solving Stress at Work</div>

                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career3.jpeg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Solving Stress at Work</div>

                            </div>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/career3.jpeg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Solving Stress at Work</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-8 max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='bg-black rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>Relationships</div>
                    <div className='flex items-center justify-between relative ' >
                        <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                            <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                <div className=" bg-[url('../../public/relationship1.jpeg')]  bg-cover  h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 1</div>
                                <div className="text-gray-900  hover:self-center text-sm font-semibold   text-center">Love at First Sight</div>

                            </div>
                            <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%]  overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                <div className=" bg-[url('../../public/relationship2.jpeg')]  bg-cover hover:cursor-pointer  h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 2</div>
                                <div className="text-gray-900   text-sm font-semibold  text-center">How do U know U attracted the Right Partner</div>

                            </div>
                            <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                            </div>
                            <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                            </div>
                            <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                            </div>
                            <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                </div>
                                <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 3</div>
                                <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                            </div>
                        </div>
                    </div>
                </div>
                {Array.from({ length: count }, (_, i) => (
                    <div key={i} className='py-8 max-sm:px-2 px-10 mt-5 w-full'>
                        <div className='bg-black rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>Relationships</div>
                        <div className='flex items-center justify-between relative ' >
                            <div className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                                <div id="sliderItem" className='w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
                                    <div className=" bg-[url('../../public/relationship1.jpeg')]  bg-cover  h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 1</div>
                                    <div className="text-gray-900  hover:self-center text-sm font-semibold   text-center">Love at First Sight</div>

                                </div>
                                <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%]  overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                    <div className=" bg-[url('../../public/relationship2.jpeg')]  bg-cover hover:cursor-pointer  h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 2</div>
                                    <div className="text-gray-900   text-sm font-semibold  text-center">How do U know U attracted the Right Partner</div>

                                </div>
                                <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                    <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 3</div>
                                    <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                                </div>
                                <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                    <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold    text-center">Episode 3</div>
                                    <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                                </div>
                                <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                    <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                    <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                                </div>
                                <div id="sliderItem" className='mx-3 w-[30%] max-lg:w-[35%] max-sm:w-[55%] max-xsm:w-[65%] overflow-hidden  shadow-md pb-2 rounded-md inline-block hover:scale-105 ease-in-out duration-300'>
                                    <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex ">


                                    </div>
                                    <div className="text-gray-900   text-lg uppercase font-semibold   text-center">Episode 3</div>
                                    <div className="text-gray-900  text-sm  font-semibold  text-center">Creating Boundaries in Relationships</div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="px-4 mx-auto py-2 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <button className="text-white text-sm font-normal " onClick={handleSeeMoreClick}>
                        {count < 5 ? 'See more' : 'THE END'}
                    </button>
                </div>
            </div>

            <div className=' py-5'>
                <div className="text-black text-[24px] font-semibold  text-center max-md:px-5">Subscribe and listen on every major platform</div>
                <div className="text-center text-black text-xl font-normal  max-md:px-5">Our podcast is available on a growing number of platforms. Listen on your<br />prefered app to get the best experience.</div>
                <div className='flex flex-wrap justify-around items-center mt-5'>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="w-10 h-10" src={Apple} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal ">Listen on<br /></span><span className="text-black text-xl font-semibold ">Apple Podcasts</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="w-10 h-10" src={Youtube} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal ">Watch & Listen on<br /></span><span className="text-black text-xl font-semibold ">Youtube</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="w-10 h-10" src={Spotify} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal ">Listen on<br /></span><span className="text-black text-xl font-semibold ">Spotify</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="w-10 h-10" src={Google} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal ">Listen on<br /></span><span className="text-black text-xl font-semibold ">Google</span><span className="text-black text-sm font-normal "> </span><span className="text-black text-opacity-75 text-xl font-semibold ">Podcast</span></div>

                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="w-10 h-10" src={SoundCloud} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal ">Listen on<br /></span><span className="text-black text-xl font-semibold ">SoundCloud</span></div>
                    </div>
                </div>
            </div>
            {/* <div className="text-black text-[24px] font-semibold font-['Poppins'] mt-10 text-center">Contact me</div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <input className=" bg-white border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
                <button className='bg-black rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white'>
                    submit
                </button>
            </div>
            <div className='border-t-2  py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10 mt-5'>
                <p className='w-2/3 text-end max-sm:text-center text-black max-sm:w-full'>Copyright © 2023  BJ Baringo. All rights reserved.</p>
                <div className='inline-flex justify-end max-sm:justify-center items-center w-1/3 gap-4 text-black'>
                    <div>
                        <BiLogoFacebook />
                    </div>
                    <div>
                        < AiOutlineInstagram />
                    </div>

                   
                    <div>
                        < RiTwitterXFill />
                    </div>


                </div>
            </div> */}
        </div>

    )
}
export default dynamic(() => Promise.resolve(page), { ssr: false })

// export default page
