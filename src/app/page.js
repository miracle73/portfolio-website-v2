import Image from 'next/image'
import Link from 'next/link'
import secondPicture from '../../public/secondPicture.png'
import thirdPicture from '../../public/thirdPicture.png'
import fourthPicture from '../../public/person.png'
import dotGrid from '../../public/dotGrid.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen bg-neutral-700">
      <div className='h-20 '>
        <div className=" justify-between px-10 flex items-center h-1/2 text-white">
          <p><Link href="/"> Podcast</Link></p>
          <p><Link href="/">Newsletter</Link></p>
        </div>
        <div className='bg-purple-600 bg-opacity-50 text-white text-sm justify-between flex items-center px-10 max-sm:px-2 h-1/2'>
          <div className='justify-around flex items-center gap-8'>
            <p><Link href="/">Shop</Link></p>
            <p><Link href="/">Services</Link></p>
          </div>
          <div className='justify-around flex items-center gap-8'>
            <p><Link href="/">Backyard rav</Link></p>
            <p><Link href="/">About</Link></p>
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
      <div className=' py-8 px-10 max-lg:hidden'>
        <div className='bg-purple-600 rounded-md px-5 max-w-fit mb-8 text-white'>ABOUT ME</div>
        <div className='flex '>
          <div className='w-1/2  '>
            <div className=" text-white text-xl font-normal font-['Poppins'] w-full">Hey there! I'm Joe, and I'm thrilled to welcome you to my Portfolio. I'm a passionate storyteller, a lifelong explorer of ideas, and your host on this audio journey.
              I've always been captivated by the power of the spoken word and the magic of a well-told story. Whether it's diving into fascinating conversations with thought leaders, sharing personal anecdotes, or exploring niche interests, I'm here to make your listening experience enriching and enjoyable.
              When I'm not behind the microphone, you can find me making Marketing Research. I draw inspiration from the everyday, and I'm excited to share those insights with you.
              Join me on this podcast as we embark on a voyage of discovery, where we'll explore, learn, and laugh together. Feel free to reach out, connect, and share your thoughts – your voice is an essential part of this community.
              Thanks for being a part of this journey, and I can't wait to have you as a listener. So, let's dive in and make some audio magic together!</div>
          </div>
          <div className='w-1/2  flex flex-col '>
            <div className=' flex items-center m-auto '>
              <Image src={fourthPicture} alt="second Picture" className=''></Image>

            </div>

          </div>
        </div>


      </div>
      <div className='py-8 max-sm:px-2 px-10'>
        <div className='bg-purple-600 rounded-md px-5 max-w-fit mb-8 max-sm:mb-2 text-white'>LATEST EPISODES</div>
        <div className="text-white text-[44px] max-lg:text-[34px] max-md:text-[24px] max-sm:mb-2 max-sm:text-[18px] font-semibold font-[' Poppins']">Listen to our newest Episodes</div>
        <div className='flex justify-between items-center mb-5'>
          <div className='text-white'>Podcast</div>
          <div className="p-2.5 bg-purple-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-normal font-['Poppins']">See more</div>
          </div>
        </div>
        <div className='flex items-center justify-between '>
          <div className='w-[30%] max-sm:w-[90%] max-sm:mx-auto shadow-md pb-5 rounded-md'>
            <div className="bg-[url('../../public/thirdPicture.png')] mb-5 bg-cover  h-56">

            </div>
            <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div>
            <div className="text-white text-xl font-semibold font-['Poppins'] mb-5">Will AI Change The Way Creatives Work</div>
            <div className="text-white text-lg font-normal font-['Lato']">In the rapidly evolving landscape of technology, Artificial Intelligence (AI) is making profound impacts across various industries...<span className="text-purple-600 text-lg font-normal font-['Lato']">Listen to Episodes</span></div>
          </div>
          <div className='w-[30%] max-sm:hidden  shadow-md pb-5 rounded-md'>
            <div className="bg-[url('../../public/thirdPicture.png')] mb-5 bg-cover   h-56">

            </div>
            <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div>
            <div className="text-white text-xl font-semibold font-['Poppins'] mb-5">Will AI Change The Way Creatives Work</div>
            <div className="text-white text-lg font-normal font-['Lato']">In the rapidly evolving landscape of technology, Artificial Intelligence (AI) is making profound impacts across various industries...<span className="text-purple-600 text-lg font-normal font-['Lato']">Listen to Episodes</span></div>
          </div>
          <div className='w-[30%] max-sm:hidden shadow-md pb-5 rounded-md'>
            <div className="bg-[url('../../public/thirdPicture.png')] mb-5 bg-cover  h-56">

            </div>
            <div className="text-white text-2xl font-normal font-['Poppins'] mb-5">EPISODES 1</div>
            <div className="text-white text-xl font-semibold font-['Poppins'] mb-5">Will AI Change The Way Creatives Work</div>
            <div className="text-white text-lg font-normal font-['Lato']">In the rapidly evolving landscape of technology, Artificial Intelligence (AI) is making profound impacts across various industries...<span className="text-purple-600 text-lg font-normal font-['Lato']">Listen to Episodes</span></div>
          </div>
        </div>
        <div className="text-white text-[24px] font-semibold font-['Poppins'] mt-20 text-center">Contact me</div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <input className=" bg-white border border-zinc-300 px-8" type="text" placeholder="Enter your email address" />
          <button className='bg-purple-600 rounded-lg justify-center mx-auto px-2 py-1 text-center inline-flex text-white'>
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
