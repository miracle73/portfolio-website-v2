import React from 'react'
import fourthPicture from '../../../public/about2.jpeg'
import Image from 'next/image'
import Header from '@/Components/Header'

const page = () => {
    return (
        <div className="min-h-screen max-w-screen relative font-font1 " >
            <Header />
            <div className="border-t-2  border-white  top-24  absolute w-full pt-10 flex flex-col items-center">
                <div className=' flex items-center m-auto rounded-full '>

                    <Image src={fourthPicture} alt="second Picture" className='w-96 h-80 max-lg:w-72 max-lg:h-60 max-md:w-64 max-md:h-56 max-sm:w-56 max-sm:h-52 rounded-full '></Image>

                </div>
                <div className="  mb-3 text-center mt-10 px-10 max-lg:px-8 max-md:px-5 max-sm:px-3">Hey there! I'm BJ Baringo, and I'm thrilled to welcome you to my Portfolio. I'm a passionate storyteller, a lifelong explorer of ideas, and your host on this audio journey.
                    I've always been captivated by the power of the spoken word and the magic of a well-told story.
                </div>
                <div className=" mt-5 text-center px-10 max-lg:px-8 max-md:px-5 max-sm:px-3 pb-10">Whether it's diving into fascinating conversations with thought leaders, sharing personal anecdotes, or exploring niche interests, I'm here to make your listening experience enriching and enjoyable.</div>
            </div>
        </div>
    )
}

export default page
