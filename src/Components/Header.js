"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Head from './Head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBars, } from "@fortawesome/free-solid-svg-icons";




const Header = () => {
    const [div, setDiv] = useState(false)
    const handleClick = () => {
        setDiv((prev) => !prev)
    }
    return (
        <>
            <Head>
                <script
                    // you might need to get a newer version
                    src="https://kit.fontawesome.com/fbadad80a0.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <div className='h-24 fixed top-0 w-full bg-black pb-3 z-10 md:hidden flex justify-center items-center'>
                <FontAwesomeIcon icon={faBars} className="absolute top-8 left-5 w-6" style={{ color: "white" }} onClick={handleClick}
                ></FontAwesomeIcon>
                <div className='text-lg font-semibold text-white'>BJ BARINGO</div>
            </div>
            {div && <div className='fixed top-24 w-full max-h-fit bg-black pb-3 z-10 text-white pl-4 md:hidden'>
                <p><Link href="/"> PODCAST</Link></p>
                <p><Link href="/">NEWSLETTER</Link></p>
                <p><Link href="/">BACKYARD RAV</Link></p>
                <p><Link href="/">ABOUT</Link></p>
            </div>}

            <div className='h-24 fixed top-0 w-full bg-black pb-3 z-10 max-sm:hidden'>
                <div className=" justify-between px-10 max-sm:px-2 flex text-base max-md:text-sm items-center h-1/2 text-white">
                    <p><Link href="/"> PODCAST</Link></p>
                    <p><Link href="/">NEWSLETTER</Link></p>
                </div>
                <div className=' bg-opacity-50 text-white text-base max-md:text-sm  justify-between flex items-center px-10 max-sm:px-2 h-1/2'>
                    <div className='justify-around flex items-center gap-8'>
                        <p><Link href="/">SHOP</Link></p>
                        <p><Link href="/">SERVICES</Link></p>
                    </div>
                    <div className='text-4xl max-md:text-xl font-semibold'>BJ BARINGO</div>
                    <div className='justify-around flex items-center gap-8'>
                        <p><Link href="/">BACKYARD RAV</Link></p>
                        <p><Link href="/">ABOUT</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
