import Image from 'next/image'
import React from 'react'

import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'


function page() {
    return (
        <div className="min-h-screen max-w-screen relative">
            <div className="border-t-2  border-white py-2 h-80 max-lg:h-[25rem] px-10 max-sm:px-2 top-24 flex flex-col  justify-center  pb-16  bg-black absolute w-full ">
                <div className="text-white pl-20 max-md:pl-10 text-[46px] font-bold font-['Poppins']">Newsletter</div>
                <div className="text-white pl-20 max-md:pl-10 text-xl font-normal font-['Poppins'] ">A curated collection of 20 newsletters websites for inspiration and references. Each review includes a full screenshot of the website design along with noteworthy features. These Landing Pages promote
                    email newsletters and most likely feature an embedded newsletter sign up box.</div>
            </div>

            <div className='flex flex-col justify-center items-center pb-10 absolute  w-full top-80 max-lg:top-[24rem]'>
                <div className=' max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='flex items-center justify-center '>
                        <div className='w-[30%] h-[18rem]   max-sm:w-[90%] max-sm:mx-auto shadow-md pb-2  '>
                            <div className=" bg-[url('../../public/new.jpg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900  text-sm font-semibold font-['Poppins']  text-center uppercase">Everything u need to know about design</div>

                        </div>
                        <div className='w-[30%] h-[18rem] shadow-md pb-2 '>
                            <div className=" bg-[url('../../public/secondnew.jpg')] bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className='flex-2 border-4 '>
                                <div className="text-gray-900   text-sm font-semibold font-['Poppins'] text-center uppercase">People and Blogs</div>
                            </div>


                        </div>
                        <div className='w-[30%] h-[18rem] shadow-md pb-2'>
                            <div className=" bg-[url('../../public/thirdnew.jpg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className="text-gray-900  text-sm  font-semibold font-['Poppins'] text-center uppercase">Your design inspiration</div>

                        </div>
                    </div>
                </div>




                <div className="text-black text-[24px] font-semibold font-['Poppins'] mt-10 w-full text-center">Contact me</div>
                <div className='flex flex-col justify-center items-center gap-2 w-full'>
                    <input className=" bg-white border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
                    <button className='bg-black rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white'>
                        submit
                    </button>
                </div>
                <div className='border-t-2 w-full  py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10 mt-5'>
                    <p className='w-2/3 text-end max-sm:text-center text-black max-sm:w-full'>Copyright © 2023  BJ Baringo. All rights reserved.</p>
                    <div className='inline-flex max-sm:justify-center justify-end items-center w-1/3 gap-4 text-black'>
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


        </div>

    )
}

export default page
