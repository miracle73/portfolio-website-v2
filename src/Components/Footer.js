import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className='bg-black mt-10 pt-5'>
            <div className="text-white text-[24px] font-semibold font-['Poppins']  w-full text-center">CONTACT ME</div>
            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                <input className=" bg-white hover:text-[#D6D6D6] border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
                <button className=' rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white hover:text-[#D6D6D6] hover:cursor-pointer'>
                    SUBMIT
                </button>
            </div>
            <div className='border-t-2 w-full  py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10 mt-5'>
                <p className='w-2/3 text-end max-sm:text-center text-white max-sm:w-full'>Copyright © 2023  BJ Baringo. All rights reserved.</p>
                <div className='inline-flex max-sm:justify-center justify-end items-center w-1/3 gap-4 text-white'>
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

export default Footer
