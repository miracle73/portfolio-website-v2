import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='h-24 fixed top-0 w-full bg-black pb-3 z-10 '>
            <div className=" justify-between px-10 flex text-base items-center h-1/2 text-white">
                <p><Link href="/"> PODCAST</Link></p>
                <p><Link href="/">NEWSLETTER</Link></p>
            </div>
            <div className=' bg-opacity-50 text-white text-base justify-between flex items-center px-10 max-sm:px-2 h-1/2'>
                <div className='justify-around flex items-center gap-8'>
                    <p><Link href="/">SHOP</Link></p>
                    <p><Link href="/">SERVICES</Link></p>
                </div>
                <div className='text-4xl font-semibold'>BJ BARINGO</div>
                <div className='justify-around flex items-center gap-8'>
                    <p><Link href="/">BACKYARD RAV</Link></p>
                    <p><Link href="/">ABOUT</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Header
