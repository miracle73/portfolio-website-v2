"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Head from './Head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBars, } from "@fortawesome/free-solid-svg-icons";
// import dynamic from "next/dynamic";




const Header = () => {
    const [div, setDiv] = useState(false)
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 2000);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleClick = () => {
        setDiv((prev) => !prev)
    }
    const handleAboutClick = (e) => {
        e.preventDefault();
        if (windowWidth > 768) {
            window.location.hash = 'about';
        } else {
            window.location.href = '/about';
        }
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
            {div && <div className='fixed top-20 w-full max-h-fit bg-black pb-3 z-10 text-white pl-4 sm:hidden text-sm' onClick={handleClick}>
                <p><Link href="/podcast"> PODCAST</Link></p>
                <p ><Link href="/newsletter">NEWSLETTER</Link></p>
                <p><Link href="/">BACKYARD RAV</Link></p>
                <p><Link href="/about">ABOUT</Link></p>
                <p><Link href="/services">SERVICES</Link></p>
            </div>}

            <div className='h-24 fixed top-0 w-full bg-black py-3 z-10 max-sm:hidden'>

                <div className=' bg-opacity-50 text-white text-base max-xmd:text-sm max  justify-between flex items-center px-10 max-lg:px-5 max-md:px-3 max-sm:px-2 h-full'>
                    <div className='justify-around flex items-center gap-8 max-lg:gap-4 max-xmd:gap-3 max-md:gap-2 max-lg:justify-evenly'>
                        <p><Link href="/">SHOP</Link></p>
                        <p><Link href="/services">SERVICES</Link></p>
                        <p><Link href="/podcast"> PODCAST</Link></p>
                    </div>
                    <div className='text-4xl max-lg:text-2xl max-md:text-xl font-semibold flex flex-col items-center justify-center gap-4'><p>BJ BARINGO</p>
                        <p className='text-xl max-md:text-lg font-normal'>DJ Showman</p></div>
                    <div className='justify-around flex items-center gap-8 max-lg:gap-4 max-xmd:gap-3 max-md:gap-2 max-lg:justify-evenly'>
                        <p><Link href="/">BACKYARD RAV</Link></p>
                        <p><Link href={windowWidth > 768 ? "/#about" : "/about"}>ABOUT</Link></p>
                        <p><Link href="/newsletter">NEWSLETTER</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// export default dynamic(() => Promise.resolve(Header), { ssr: false })
export default Header
