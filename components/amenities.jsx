import React from 'react'
import { Card } from './card'

export const Amenities = () => {
  return (
    <div className='p-4 mt-4 md:mt-8'> 
      <div className='flex justify-center pb-4'>
        <img src='/Harbour2.png' alt='harbour' className='h-[50px] md:h-[75px]'/>
      </div>
      <div className='flex flex-col justify-center items-center gap-y-2'>
        <h1 className='font-bold text-xl md:text-3xl text-[#00357B]'>FEATURES & AMENITIES</h1>
        <p className='text-sm md:text-md text-center px-[25px] md:px-[100px] lg:px-[200px]'>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
      </div>

      <div>
        <Card />
        <p className='text-xs md:text-sm text-center md:text-right text-gray-400 font-light'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
      </div>
    </div>
  )
}
