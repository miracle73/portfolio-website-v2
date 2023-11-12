'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal';

import './style.css'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'



function page() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    const modal = (
        <Modal
            // className={"w-[50%] h-[50%] m-auto shadow-md border-none"}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Newsletter Modal"
            style={{
                overlay: {
                    backgroundColor: "white"
                },
                content: {
                    width: '50%',
                    height: '50%',
                    margin: 'auto',
                    padding: "10px",
                    border: "none",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
        >
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-4">
                    <div class="mx-auto max-w-screen-md sm:text-center">
                        <h2 class="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                        <p class="mx-auto mb-4 max-w-2xl font-light text-gray-500 md:mb-6 sm:text-xl dark:text-gray-400">Subscribe to read our newsletters</p>
                        <form action="#">
                            <div class="items-center mx-auto mb-2 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div class="relative w-full">
                                    <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    <button type="submit" class="py-2 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                                </div>
                            </div>
                            {/* <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div> */}
                        </form>
                    </div>
                </div>
            </section>

        </Modal>
    )
    return (
        <div className="min-h-screen max-w-screen relative font-font1">
            <div className="border-t-2  border-white py-2 h-80 max-lg:h-[25rem] max-sm:h-[32rem] px-10 max-sm:px-2 top-24 flex flex-col  justify-center  pb-16  bg-black absolute w-full ">
                <div className="text-white pl-20 max-md:pl-10 text-[46px] font-bold ">Newsletter</div>
                <div className="text-white pl-20 max-md:pl-10 text-xl font-normal ">A curated collection of 20 newsletters websites for inspiration and references. Each review includes a full screenshot of the website design along with noteworthy features. These landing pages promote
                    email newsletters and most likely feature an embedded newsletter sign up box.</div>
            </div>

            <div className='flex flex-col justify-center items-center pb-10  absolute  w-full top-80 max-lg:top-[24rem] max-sm:top-[31rem]'>
                <div className=' max-sm:px-2 px-10 mt-5 w-full'>
                    <div className='flex items-center max-sm:flex-col justify-center '>
                        <div className='w-[30%] max-sm:border-2 h-[18rem]   max-sm:w-[90%] max-sm:mx-auto shadow-md pb-2  '>
                            <div className=" bg-[url('../../public/new.jpg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className='flex items-center justify-center  h-[22.2%] ' onClick={openModal}>
                                <div className="text-gray-900  text-sm font-semibold   text-center uppercase">Everything u need to know about design</div>
                            </div>
                            {modalIsOpen && modal}
                        </div>
                        <div className='w-[30%] max-sm:border-2 h-[18rem] max-sm:w-[90%] max-sm:mx-auto shadow-md pb-2 '>
                            <div className=" bg-[url('../../public/secondnew.jpg')] bg-cover hover:cursor-pointer  h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className='flex items-center justify-center  h-[22.2%]  ' onClick={openModal}>
                                <div className="text-gray-900   text-sm font-semibold text-center uppercase">People and Blogs</div>
                            </div>
                            {modalIsOpen && modal}

                        </div>
                        <div className='w-[30%] max-sm:border-2 max-sm:w-[90%] max-sm:mx-auto h-[18rem] shadow-md pb-2'>
                            <div className=" bg-[url('../../public/thirdnew.jpg')] bg-cover hover:cursor-pointer h-56 flex hover:bg-blend-multiply hover:bg-gray-500">
                                {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}

                            </div>
                            <div className='flex items-center justify-center  h-[22.2%]  ' onClick={openModal}>
                                <div className="text-gray-900  text-sm  font-semibold  text-center uppercase">Your design inspiration</div>
                            </div>

                            {modalIsOpen && modal}
                        </div>
                    </div>
                </div>
                <div className="text-black text-[24px] font-semibold  mt-10 w-full text-center">Contact me</div>
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
