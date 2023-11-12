"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Head from './Head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBars, } from "@fortawesome/free-solid-svg-icons";
// import dynamic from "next/dynamic";




const Header = () => {
    const [div, setDiv] = useState(false)

    const handleClick = () => {
        setDiv((prev) => !prev)
    }

    return (
        <div className='font-font1'>
            {/* <Head>
                <script
                    // you might need to get a newer version
                    src="https://kit.fontawesome.com/fbadad80a0.js"
                    crossOrigin="anonymous"
                ></script>
            </Head> */}
            <div className='h-24 fixed top-0 w-full bg-black pb-3 z-10 md:hidden flex justify-center items-center'>
                <FontAwesomeIcon icon={faBars} className="absolute top-8 left-5 w-6" style={{ color: "white" }} onClick={handleClick}
                ></FontAwesomeIcon>
                <div className='text-lg font-semibold text-white'>BJ BARINGO</div>
            </div>
            {div && <div className='fixed top-24 w-full max-h-fit bg-black pb-3 z-10 text-white pl-4 sm:hidden'>
                <p><Link href="/podcast"> PODCAST</Link></p>
                <p><Link href="/newsletter">NEWSLETTER</Link></p>
                <p><Link href="/">BACKYARD RAV</Link></p>
                <p><Link href="/">ABOUT</Link></p>
                <p><Link href="/services">SERVICES</Link></p>
            </div>}

            <div className='h-24 fixed top-0 w-full bg-black py-3 z-10 max-sm:hidden'>

                <div className=' bg-opacity-50 text-white text-base max-md:text-sm  justify-between flex items-center px-10 max-sm:px-2 h-full'>
                    <div className='justify-around flex items-center gap-8'>
                        <p><Link href="/">SHOP</Link></p>
                        <p><Link href="/services">SERVICES</Link></p>
                        <p><Link href="/podcast"> PODCAST</Link></p>
                    </div>
                    <div className='text-4xl max-md:text-xl font-semibold flex flex-col items-center justify-center gap-4'><p>BJ BARINGO</p>
                        <p className='text-xl max-md:text-lg font-normal'>DJ Showman</p></div>
                    <div className='justify-around flex items-center gap-8'>
                        <p><Link href="/">BACKYARD RAV</Link></p>
                        <p><Link href="/about">ABOUT</Link></p>
                        <p><Link href="/newsletter">NEWSLETTER</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// export default dynamic(() => Promise.resolve(Header), { ssr: false })
export default Header
