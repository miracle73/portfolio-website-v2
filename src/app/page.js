import Image from 'next/image'
import Link from 'next/link'
import secondPicture from '../../public/secondPicture.png'
import thirdPicture from '../../public/thirdPicture.png'
import fourthPicture from '../../public/about2.jpeg'

import dotGrid from '../../public/dotGrid.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen bg-black">
      <div className='h-20 '>
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
      <div className="h-[40rem] bg-[url('../../public/firstPicture.png')] flex bg-cover">
        {/* <Image src={firstPicture} alt="background picture" className='h-[40rem]' /> */}
        {/* <div className='self-center mx-auto text-white w-2/3 flex flex-col'>
          <p className=" text-center text-[64px] max-lg:text-[44px] max-md:text-[34px] max-sm:text-[24px] font-semibold font-[' Poppins'] mb-5 ">The #1 Podcast for Creators & Creatives</p>
          <p className="text-center text-xl  max-md:text-lg max-sm:text-base font-normal font-[' Poppins'] mb-5">We cover the latest & greatest News from the Creative Field.</p>

        </div> */}

      </div>
      <div className='mt-10 py-8 px-10 max-lg:hidden'>

        <div className='flex '>

          <div className="w-1/2 text-white text-xl font-normal font-['Poppins'] italic">
            <div className='bg-blue-400 rounded-md px-5 max-w-fit mb-8 text-white'>ABOUT ME</div>
            <div className="  mb-3">Hey there! I'm BJ Baringo, and I'm thrilled to welcome you to my Portfolio. I'm a passionate storyteller, a lifelong explorer of ideas, and your host on this audio journey.
              I've always been captivated by the power of the spoken word and the magic of a well-told story.
            </div>
            <div className="mt-5 ">Whether it's diving into fascinating conversations with thought leaders, sharing personal anecdotes, or exploring niche interests, I'm here to make your listening experience enriching and enjoyable.</div>
          </div>
          <div className='w-1/2  flex flex-col'>
            <div className=' flex items-center m-auto '>

              <Image src={fourthPicture} alt="second Picture" className='w-96 h-80'></Image>

            </div>

          </div>
        </div>


      </div>
      <div className='py-8 max-sm:px-2 px-10'>
        <div className='bg-blue-400 rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white hover:cursor-pointer'>LATEST EPISODES</div>
        <div className="text-white text-[44px] max-lg:text-[34px] max-md:text-[24px] max-sm:mb-2 max-sm:text-[18px] font-semibold font-[' Poppins'] mb-5">Listen to my latest podcasts</div>

        <div className='flex items-center justify-between '>
          <div className='w-[30%] max-sm:w-[90%] max-sm:mx-auto shadow-2xl pb-5 rounded-md hover:cursor-pointer'>
            <div className="bg-[url('../../public/podcast1.jpeg')] mb-5 bg-cover  h-56 flex">
              {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}
              <div className="text-white  hover:self-center text-xl font-semibold font-['Poppins'] mb-5 self-end mx-auto text-center">The Role of Finance in Relationships</div>
            </div>


          </div>
          <div className='w-[30%] max-sm:hidden  shadow-md pb-5 rounded-md'>
            <div className="bg-[url('../../public/podcast2.jpeg')] mb-5 bg-cover hover:cursor-pointer  h-56 flex">
              {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}
              <div className="text-white hover:self-center text-xl font-semibold font-['Poppins'] mb-5 self-end mx-auto text-center">Career Change: How to Navigate and Manage the Risks</div>
            </div>


          </div>
          <div className='w-[30%] max-sm:hidden shadow-md pb-5 rounded-md'>
            <div className="bg-[url('../../public/podcast3.jpeg')] mb-5 bg-cover hover:cursor-pointer h-56 flex">
              {/* <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div> */}
              <div className="text-white text-xl hover:self-center font-semibold font-['Poppins'] mb-5 self-end mx-auto text-center">Do You Love Yourself</div>
            </div>


          </div>
        </div>
        <div className="text-white text-[24px] font-semibold font-['Poppins'] mt-20 text-center">Contact me</div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <input className=" bg-white border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
          <button className='bg-blue-400 rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white'>
            submit
          </button>
        </div>

      </div>
      <div className='border-t-2 py-5 flex max-sm:flex-col max-sm:gap-4 items-center px-10'>
        <p className='w-2/3 text-end max-sm:text-center text-white max-sm:w-full'>Copyright © 2023 Joe Podcast. All rights reserved.</p>
        <div className='inline-flex justify-end items-center w-1/3 gap-4 text-white'>
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

    </main >
  )
}
