import React from 'react'

export const Features = () => {
  return (
    <div>
    <div className="bg-[#F4F9FF]">
    <div className="py-3">
      <ul className=" hidden md:flex  justify-evenly  ">
        <li className="flex flex-col justify-center items-center gap-1  hover:scale-105 duration-300">
          <img src="/Group1.svg" alt="first image" className="w-10 lg:w-15"/>
          <p className="text-xs text-[#00357B]">BOOK WITH</p>
          <h1 className="font-bold text-lg text-[#00357B]">ONLY 10%</h1>
        </li>
        <li className="flex flex-col justify-center items-center gap-1  hover:scale-105 duration-300">
          <img src="/Group2.svg" alt="SECOND image" className="w-10 lg:w-15"/>
          <p className="text-xs text-[#00357B]">PAYMENT PLAN</p>
          <h1 className="font-bold text-lg text-[#00357B]">EASY 70/30</h1></li>
        <li className="flex flex-col justify-center items-center gap-1  hover:scale-105 duration-300">
        <img src="/Group3.svg" alt="third image" className="w-10 lg:w-15"/>
          <p className="text-xs text-[#00357B]">HANDOVER TO</p>
          <h1 className="font-bold text-lg text-[#00357B]">Q2 2027</h1>
        </li>
        <li className="flex flex-col justify-center items-center gap-1  hover:scale-105 duration-300">
        <img src="/Group4.svg" alt="fourth image" className="w-10 lg:w-15"/>
          <p className="text-xs text-[#00357B]">AREA STARTS FROM</p>
          <h1 className="font-bold text-lg text-[#00357B]">700 SQMT</h1>
        </li>
      </ul>


      <ul className=" flex md:hidden justify-evenly overflow-x-scroll gap-3">
        <li className=" min-w-[130px] flex flex-col justify-center items-center gap-1  ">
          <img src="/Group1.svg" alt="first image" className="w-10"/>
          <p className="text-xs text-[#00357B]">BOOK WITH</p>
          <h1 className="font-bold text-lg text-[#00357B]">ONLY 10%</h1>
        </li>
        <li className=" min-w-[130px] flex flex-col justify-center items-center gap-1  ">
          <img src="/Group2.svg" alt="SECOND image" className="w-10"/>
          <p className="text-xs text-[#00357B]">PAYMENT PLAN</p>
          <h1 className="font-bold text-lg text-[#00357B]">EASY 70/30</h1></li>
        <li className="min-w-[130px] flex flex-col justify-center items-center gap-1  ">
        <img src="/Group3.svg" alt="third image" className="w-10"/>
          <p className="text-xs text-[#00357B]">HANDOVER TO</p>
          <h1 className="font-bold text-lg text-[#00357B]">Q2 2027</h1>
        </li>
        <li className=" min-w-[130px] flex flex-col justify-center items-center gap-1  ">
        <img src="/Group4.svg" alt="fourth image" className="w-10"/>
          <p className="text-xs text-[#00357B]">AREA STARTS FROM</p>
          <h1 className="font-bold text-lg text-[#00357B]">700 SQMT</h1>
        </li>
      </ul>
    </div>
  </div>
  </div>
  )
}
