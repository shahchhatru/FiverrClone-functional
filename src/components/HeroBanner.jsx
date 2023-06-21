import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const HeroBanner = () => {
  const router = useRouter()
  const [image,setImage]=useState(6);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setImage(image>=6?1:image+1);
      console.log(image)

      return ()=>clearInterval(interval)
    },10000)

  },[image])
  return (
    <div className='h-[680px] relative bg-cover'>
      <div className='absolute top-0 right-0 w-[110vw]  h-full transition-opacity z-0'>
        <Image alt="hero" src='/bg-hero1.webp' fill  className={`${image===1?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 
        <Image alt="hero" src='/bg-hero2.webp' fill  className={`${image===2?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 
        <Image alt="hero" src='/bg-hero3.webp' fill  className={`${image===3?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 
        <Image alt="hero" src='/bg-hero4.webp' fill  className={`${image===4?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 
        <Image alt="hero" src='/bg-hero5.webp' fill  className={`${image===5?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 
        <Image alt="hero" src='/bg-hero6.webp' fill  className={`${image===6?'opacity-100':'opacity-0'} transition-all  duration-1000`}  /> 

</div>
<div className="z-10 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20 ">
  <h1 className="text-white text-6xl leading-snug">
      Find the perfect &nbsp; <i>Freelance</i> <br/> services for your business
      
  </h1>
  <div className="flex align-middle">
    <div className="relative">
      <input type="text" className="h-14 w-[450px] pl-10 rounded-md" placeholder={`Try building mobile app`} />

    </div>
    <button className="bg-[#1dbf73] text-white px-12 text-lg font-semibold rounded-r-md">
      Search
    </button>
  </div>
  <div className="text-white flex gap-4 ">
      Popular{" "}
      <ul className="flex gap-5 ">
        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Website Design
        </li>
         <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          App Development
        </li>
         <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Logo Design
        </li>
         <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          AI services
        </li>
      </ul>
  </div>
</div>
    </div>
  )
}

export default HeroBanner