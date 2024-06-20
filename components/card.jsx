import React from "react";
import "./custom.css";
export const Card = () => {
  return (
    <div className="grid grid-cols-2  md:flex md:justify-center gap-2 md:gap-8 lg:gap-12 py-10 px-4 md:px-8 lg:px-16">
      {/* <div className="grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-8 lg:gap-16 py-10 px-4 md:px-8 lg:px-16"> */}
      <div className="bg-white   md:w-[175px] lg:w-[200px]  py-4 lg:py-6 px-2 lg:px-3 rounded-md shadow-xl flex flex-col items-center">
        {/*       <div className="bg-white  py-4 lg:py-6 px-2 lg:px-3 rounded-md shadow-lg flex flex-col items-center"> */}
        <img
          src="/amenities1.jpeg"
          alt="amenities1"
          className="  hover:scale-105 duration-300 border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"
        />
        <h1 className="text-sm text-[#00357B] text-center font-semibold mt-4 max-w-[125px]">
          Floating Pools
        </h1>
      </div>
      <div className="bg-white md:w-[175px] lg:w-[200px]  py-4 lg:py-6 px-2 lg:px-3 rounded-md shadow-xl flex flex-col items-center">
        <img
          src="/amenities2.jpeg"
          alt="amenities2"
          className="  hover:scale-105 duration-300 border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"
        />
        <h1 className="text-sm text-[#00357B] text-center font-semibold mt-4 max-w-[125px]">
          Spacious Cabins Like Rooms
        </h1>
      </div>
      <div className="bg-white md:w-[175px] lg:w-[200px]  py-4 lg:py-6 px-2 lg:px-3 rounded-md shadow-xl flex flex-col items-center">
        <img
          src="/amenities3.jpeg"
          alt="amenities3"
          className="  hover:scale-105 duration-300 border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"
        />
        <h1 className="text-sm text-[#00357B] text-center font-semibold mt-4 max-w-[125px]">
          Sea Facing Swimming Pools
        </h1>
      </div>
      <div className="bg-white md:w-[175px] lg:w-[200px]  py-4 lg:py-6 px-2 lg:px-3 rounded-md shadow-xl flex flex-col items-center">
        <img
          src="/amenities4.png"
          alt="amenities4"
          className="  hover:scale-105 duration-300 border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"
        />
        <h1 className="text-sm text-[#00357B] text-center font-semibold mt-4 max-w-[125px]">
          Gymnasium & Fitness
        </h1>
      </div>
    </div>
  );
};

/*
// return (
  // <div className='flex justify-evenly md:px-0 lg:px-[100px] py-10'>
  //     <div className='inline-block py-4 lg:py-6  px-2 lg:px-3 rounded-md shadow-lg'>
  //       <img src="/amenities1.jpeg" alt="amenities1" className='border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px]  lg:w-[150px] lg:h-[150px]' />
  //         <h1 className='text-sm text-[#00357B]  text-center font-semibold flex justify-center mt-4 max-w-[125px]'>Floating Pools</h1>
  //     </div>
  //     <div className='inline-block py-4 lg:py-6  px-2 lg:px-3 rounded-md shadow-lg'>
  //       <img src="/amenities2.jpeg" alt="amenities2" className='border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px]  lg:w-[150px] lg:h-[150px]' />
  //         <h1 className='text-sm text-[#00357B]  text-center font-semibold flex justify-center mt-4 max-w-[125px]'>Spacious Cabins Like Rooms</h1>
  //     </div>
  //     <div className='inline-block py-4 lg:py-6  px-2 lg:px-3 rounded-md shadow-lg'>
  //       <img src="/amenities3.jpeg" alt="amenities3" className='border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px]  lg:w-[150px] lg:h-[150px]' />
  //         <h1 className='text-sm text-[#00357B]  text-center font-semibold flex justify-center mt-4 max-w-[125px]'>Sea Facing Swimming Pools</h1>
  //     </div>
  //     <div className='inline-block py-4 lg:py-6  px-2 lg:px-3 rounded-md shadow-lg'>
  //       <img src="/amenities4.png" alt="amenities4" className='border-4 border-[#D9D9D9] rounded-full object-cover overflow-hidden w-[125px] h-[125px]  lg:w-[150px] lg:h-[150px]' />
  //         <h1 className='text-sm text-[#00357B] text-center font-semibold flex justify-center mt-4 max-w-[125px]'>Gymnasium & FItness</h1>
  //     </div>
  //     </div>
  // )
*/
