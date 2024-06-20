'use client'
import React, {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

const slides = [
    {
        "src":"/frontview.jpeg",
        "alt": "frontview",
   },
    {
         "src":"/bathroom.jpeg",
         "alt": "bathroom",
    },
    {
        "src":"/bedroom.jpeg",
        "alt": "bedroom",
    },
    {
        "src":"/waitingarea.jpeg",
        "alt": "waitingarea",
    },
    {
        "src":"/pool.jpeg",
        "alt": "pool",
    },
];


export const Carousel = () => {
    const [item , setItem] = useState(0);
    const nextSlide = () =>{
        setItem((item+1)%slides.length);
       }
       const prevSlide = () =>{
       
        setItem((item - 1 + slides.length) % slides.length);

       }
  return (
    <div>
    <div className=' relative flex justify-center items-center w-[100%] h-[300px] md:h-[450px] lg:h-[600px] object-cover'>
       <img src="/left1.png" alt='left' onClick={prevSlide} className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]   absolute left-5 md:left-10 cursor-pointer filter drop-shadow-lg'/>
        {slides.map((slide, idx) => (
        <img
        className={` rounded-lg shadow-lg w-[100%] h-[100%] ${idx == item ? 'block' : 'hidden'}`}
         src={slide.src} alt={slide.alt} key={idx} />
      ))}
<img src="/right1.png" alt='right' onClick={nextSlide} className=' w-[20px] h-[20px] md:w-[30px] md:h-[30px] absolute right-5 md:right-10 cursor-pointer filter drop-shadow-lg'/>
<span className='flex absolute bottom-1'>
    {slides.map((_, idx)=>{
        return <button key={idx} onClick={()=>setItem(idx)} className={` h-[0.5rem] w-[0.5rem] rounded-full shadow-md my-1 mx-1 cursor-pointer ${item == idx ? "bg-white": "bg-gray-500"} `}></button>
    })}
</span>

      </div>

      <span className='flex overflow-x-auto scroll-snap-x-mandatory gap-1 md:gap-3 my-2 md:my-3 p-1 md:p-2 '>
    {slides.map((slide, idx)=>{
        return <img
        className={` scroll-snap-align-start flex-none rounded-md object-cover shadow-lg w-[100px] h-[75px] md:w-[300px] md:h-[175px] cursor-pointer hover:scale-105 duration-30`}
        onClick={()=>setItem(idx)}
        src={slide.src} alt={slide.alt} key={idx} />
    })}
</span>

      </div>
  )
}
