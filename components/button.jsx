import React from 'react'

export const Button = () => {
  return (
    <div className='text-center md:text-right gap-[10px] my-2 w-[95%] '>
        <button className='hover:scale-105 duration-300  rounded-lg px-8 py-3  font-semibold text-center text-sm text-white bg-[#00357B] mr-4' >EXTERIORS</button>
        <button className='hover:scale-105 duration-300  rounded-lg px-8 py-3  font-semibold text-center text-sm text-[#00357B] bg-white border-2 mr-4 border-[#00357B]'>INTERIORS</button>
    </div>
  )
}
