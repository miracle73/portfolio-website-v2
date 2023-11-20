import Image from 'next/image'
import React from 'react'
import firstTestimonial from '../../../public/firstTestimonial.png'
import secondTestimonial from '../../../public/secondTestimonial.png'
import thirdTestimonial from '../../../public/thirdTestimonial.png'
import fourthTestimonial from '../../../public/fourthTestimonial.png'
import coverly from '../../../public/coverly.png'
import adidas from '../../../public/adidas.png'
import travex from '../../../public/travex.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import Header from '@/Components/Header'

const page = () => {
    return (
        <div className="min-h-screen max-w-screen relative font-font1">
            <Header />
            <div className=" py-2 h-20 px-10 max-sm:px-2 mt-24 flex flex-col justify-center items-center pt-5">
                <div className="text-black text-[36px] max-lg:text-[36px]  max-md:text-3xl max-sm:text-2xl font-bold ">My Creative Expertise</div>

            </div>


            <div className='flex flex-wrap items-center justify-around py-5 max-sm:py-2 gap-8 my-10 max-sm:my-5 max-sm:px-5'>
                <div className="w-[40%] max-sm:w-[45%] max-xsm:w-[70%] max-xsm:mx-auto max-xsm:h-fit max-xsm:p-2 h-40 max-md:h-60 max-sm:h-80 flex-col justify-center  gap-1 px-5 py-2 inline-flex bg-neutral-50 rounded-lg border border-slate-300">
                    <div className=" text-stone-950 text-2xl text-center font-semibold ">Event Hosting</div>
                    <div className=" text-neutral-500 text-base text-center font-normal ">Elevate your event to the next level with our professional Event Host services. With our expertise in orchestrating the event flow and fostering audience engagement, we guarantee a memorable event that leaves a lasting impression.</div>
                </div>
                <div className="w-[40%] max-sm:w-[45%] max-xsm:w-[70%] max-xsm:mx-auto max-xsm:h-fit max-xsm:p-2  h-40 max-md:h-60 max-sm:h-80 flex-col justify-center  gap-1 px-5 py-2 inline-flex bg-neutral-50 rounded-lg border border-slate-300">
                    <div className=" text-stone-950 text-2xl text-center font-semibold ">Content Creation</div>
                    <div className=" text-neutral-500 text-base text-center font-normal ">Need help with brainstorming and creating compelling content? We offer content strategy and scriptwriting services to keep your audience engaged.</div>
                </div>
                <div className="w-[40%] max-sm:w-[45%] max-xsm:w-[70%] max-xsm:mx-auto max-xsm:h-fit max-xsm:p-2 h-40 max-md:h-60 max-sm:h-80 flex-col justify-center  gap-1 px-5 py-2 inline-flex bg-neutral-50 rounded-lg border border-slate-300">
                    <div className=" text-stone-950 text-2xl text-center font-semibold ">Marketing & Promotion</div>
                    <div className=" text-neutral-500 text-base text-center font-normal ">Expand the reach of your business and services with our marketing and promotion services, including social media campaigns and audience growth strategies.</div>
                </div>
                <div className="w-[40%] max-sm:w-[45%] max-xsm:w-[70%] max-xsm:mx-auto max-xsm:h-fit max-xsm:p-2 h-40 max-md:h-60 max-sm:h-80 flex-col justify-center  gap-1 px-5 py-2 inline-flex bg-neutral-50 rounded-lg border border-slate-300">
                    <div className=" text-stone-950 text-2xl text-center font-semibold ">Media Production</div>
                    <div className=" text-neutral-500 text-base text-center font-normal ">Elevate the quality and impact of your services with our media production services. We provide all the required resources to give your business that unique brans that resonates with your target audience</div>
                </div>
            </div>
            <div className=" text-center text-stone-950 text-[34px] max-md:text-[24px] max-sm:text-xl font-semibold  ">What Others Are Saying...</div>
            <div className='flex items-center justify-around flex-wrap'>
                <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2 max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex my-10">
                    <div className=" flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                            <Image className="w-[60px] h-[60px] rounded-[50px]" src={firstTestimonial} />
                            <div className="self-stretch text-black text-base font-semibold ">Designer Bamifemi</div>
                            <div className="self-stretch text-neutral-500 text-xs font-normal ">CEO, Bamifemi Arts</div>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2   max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                    <div className=" flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                            <Image className="w-[60px] h-[60px] rounded-[50px]" src={secondTestimonial} />
                            <div className="self-stretch text-black text-base font-semibold ">Mentor Mark</div>
                            <div className="self-stretch text-neutral-500 text-xs font-normal ">Demi-god of HNG </div>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%] max-xsm:h-fit max-xsm:p-2  max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                    <div className=" flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch text-neutral-500 text-sm font-normal ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        <div className="self-stretch flex-col justify-center items-start gap-1 flex">
                            <Image className="w-[60px] h-[60px] rounded-[50px]" src={thirdTestimonial} />
                            <div className="self-stretch text-black text-base font-semibold ">Designer Erica</div>
                            <div className="self-stretch text-neutral-500 text-xs font-normal ">Finest Girl in Africa</div>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] max-md:w-[40%] max-xsm:w-[46%]  max-xsm:h-fit max-xsm:p-2  max-lg:h-[24rem] max-md:h-64 max-sm:h-[21rem] px-4 py-2 bg-white rounded-2xl border border-slate-300 justify-center items-center inline-flex">
                    <div className=" flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch text-neutral-500 text-sm font-normal  ">I've been podcasting for years, and working with this podcast services team has truly been a game-changer.  I can't recommend them enough. If you're serious about your podcast, these folks are the ones to turn to.</div>
                        <div className="self-stretch flex-col justify-center items-start gap-1 flex ">
                            <Image className="w-[60px] h-[60px] rounded-[50px]" src={fourthTestimonial} />
                            <div className="self-stretch text-black text-base font-semibold ">Babalawo Iguana</div>
                            <div className="self-stretch text-neutral-500 text-xs font-normal ">President, Amebo Association</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' py-5'>
                <div className=" text-stone-950 text-[32px] max-md:text-[22px] max-sm:text-xl font-semibold  px-10 max-md:px-5 max-sm:px-3 mt-10">OUR BRANDS/SPONSORS</div>
                <div className='flex flex-wrap justify-around items-center mt-5'>
                    <div className="w-[30%] bg-white rounded-[14.57px] justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="" src={coverly} />

                    </div>
                    <div className="w-[30%] bg-white rounded-[14.57px]  justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="" src={adidas} />

                    </div>
                    <div className="w-[30%] bg-white rounded-[14.57px] justify-center items-center inline-flex px-2 gap-2 my-1">
                        <Image className="" src={travex} />

                    </div>
                </div>
            </div>
            <div className='border-t-2  w-full  py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10 mt-5'>
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
    )
}

export default page
