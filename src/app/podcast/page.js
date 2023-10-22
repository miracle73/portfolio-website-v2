import Image from 'next/image'
import React from 'react'
import Google from '../../../public/Google.png'
import Youtube from '../../../public/youtube.png'
import SoundCloud from '../../../public/soundcloud.png'
import Apple from '../../../public/apple.png'
import Spotify from '../../../public/spotify.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

function page() {
    return (
        <div className="min-h-screen max-w-screen relative">
            <div className=" py-2 h-20 px-10 max-sm:px-2 mt-24 flex flex-col justify-center items-center pt-16">
                <div className="text-black text-[46px] font-bold font-['Poppins']">Explore Our Podcasts</div>
                <div className="text-black text-xl font-normal font-['Poppins'] ">Listen to our Latest Podcast</div>
            </div>
            <div className='flex flex-col justify-center items-center pb-10'>
                <div className='py-8 max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='bg-black rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>Career</div>
                    <div className='flex items-center justify-between '>
                        <div className='w-[30%] relative overflow-hidden max-sm:w-[90%] max-sm:mx-auto shadow-md pb-2 rounded-md hover:cursor-pointer'>
                            <div className=" bg-[url('../../public/career1.jpeg')] bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 1</div>
                            <div className="text-gray-900  text-sm font-semibold font-['Poppins']  text-center">The Early days of your Career</div>

                        </div>
                        <div className='w-[30%]  overflow-hidden  shadow-md pb-2 rounded-md'>
                            <div className=" bg-[url('../../public/career2.jpeg')] bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 2</div>
                            <div className="text-gray-900   text-sm font-semibold font-['Poppins'] text-center">Career Change: How to Navigate and Manage the Risks</div>

                        </div>
                        <div className='w-[30%] overflow-hidden  shadow-md pb-2 rounded-md'>
                            <div className=" bg-[url('../../public/career3.jpeg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 3</div>
                            <div className="text-gray-900  text-sm  font-semibold font-['Poppins'] text-center">Solving Stress at Work</div>

                        </div>
                    </div>
                </div>
                <div className='py-8 max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='bg-black rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>Relationships</div>
                    <div className='flex items-center justify-between '>
                        <div className='w-[30%] relative overflow-hidden max-sm:w-[90%] max-sm:mx-auto shadow-md pb-2 rounded-md hover:cursor-pointer'>
                            <div className=" bg-[url('../../public/relationship1.jpeg')]  bg-cover  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 1</div>
                            <div className="text-gray-900  hover:self-center text-sm font-semibold font-['Poppins']  text-center">Love at First Sight</div>

                        </div>
                        <div className='w-[30%]  overflow-hidden  shadow-md pb-2 rounded-md'>
                            <div className=" bg-[url('../../public/relationship2.jpeg')]  bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 2</div>
                            <div className="text-gray-900   text-sm font-semibold font-['Poppins'] text-center">How do U know U attracted the Right Partner</div>

                        </div>
                        <div className='w-[30%] overflow-hidden  shadow-md pb-2 rounded-md'>
                            <div className=" bg-[url('../../public/relationship3.jpeg')]  bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900   text-lg uppercase font-semibold font-['Poppins']   text-center">Episode 3</div>
                            <div className="text-gray-900  text-sm  font-semibold font-['Poppins'] text-center">Creating Boundaries in Relationships</div>

                        </div>
                    </div>
                </div>


                <div className="px-4 mx-auto py-2 bg-blue-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['Poppins']">See more</div>
                </div>
            </div>

            <div className='bg-slate-100 py-5'>
                <div className="text-black text-[24px] font-semibold font-['Poppins'] text-center">Subscribe and listen on every major platform</div>
                <div className="text-center text-black text-xl font-normal font-['Poppins']">Our podcast is available on a growing number of platforms. Listen on your<br />prefered app to get the best experience.</div>
                <div className='flex justify-around items-center mt-5'>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2">
                        <Image className="w-10 h-10" src={Apple} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal font-['Poppins']">Listen on<br /></span><span className="text-black text-xl font-semibold font-['Poppins']">Apple Podcasts</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2">
                        <Image className="w-10 h-10" src={Youtube} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal font-['Poppins']">Watch & Listen on<br /></span><span className="text-black text-xl font-semibold font-['Poppins']">Youtube</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2">
                        <Image className="w-10 h-10" src={Spotify} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal font-['Poppins']">Listen on<br /></span><span className="text-black text-xl font-semibold font-['Poppins']">Spotify</span></div>
                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2">
                        <Image className="w-10 h-10" src={Google} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal font-['Poppins']">Listen on<br /></span><span className="text-black text-xl font-semibold font-['Poppins']">Google</span><span className="text-black text-sm font-normal font-['Poppins']"> </span><span className="text-black text-opacity-75 text-xl font-semibold font-['Poppins']">Podcast</span></div>

                    </div>
                    <div className=" bg-white rounded-[14.57px] border border-zinc-300 justify-center items-center inline-flex px-2 gap-2">
                        <Image className="w-10 h-10" src={SoundCloud} />
                        <div><span className="text-black text-opacity-75 text-sm font-normal font-['Poppins']">Listen on<br /></span><span className="text-black text-xl font-semibold font-['Poppins']">SoundCloud</span></div>
                    </div>
                </div>
            </div>
            <div className="text-black text-[24px] font-semibold font-['Poppins'] mt-10 text-center">Contact me</div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <input className=" bg-white border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
                <button className='bg-black rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white'>
                    submit
                </button>
            </div>
            <div className='border-t-2  py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10 mt-5'>
                <p className='w-2/3 text-end max-sm:text-center text-white max-sm:w-full'>Copyright © 2023  BJ Baringo. All rights reserved.</p>
                <div className='inline-flex justify-end items-center w-1/3 gap-4 text-black'>
                    <div>
                        <BiLogoFacebook />
                    </div>
                    <div>
                        < AiOutlineInstagram />
                    </div>

                    {/* < FaXTwitter /> */}
                    <div>
                        < RiTwitterXFill />
                    </div>


                </div>
            </div>
        </div>

    )
}

export default page
