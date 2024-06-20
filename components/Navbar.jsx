'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[90%]">
      <div className="flex justify-between items-center p-4 bg-white bg-opacity-0 backdrop-filter ">
        <div><img src='/Logo.png' alt="DAMAC Logo" className="h-3 md:h-4 lg:h-5" /></div>
       
        <div className=" text-sm lg:text-md text-[#17ABFF] hidden md:block hover:bg-[#17ABFF] hover:text-white  border-solid border-[#17ABFF] border-2 p-2 px-8 rounded-md  hover:scale-105 duration-300 cursor-pointer ">Enquire Now</div>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg shadow-md md:hidden">
          <div className="flex flex-col items-start p-4 gap-3 text-sm">
            
            
            <div className="text-md mt-2 hover:scale-105 duration-300">Enquire Now</div>
            <div className=" mt-2 hover:scale-105 duration-300">About us</div>
          
          </div>
        </div>
      )}
    </div>
  );
};
//seocnd color #00357B
//background color  #F4F9FF
// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white">
//       <div className="navbar-logo">
//         <img src='/Logo.png' alt="DAMAC Logo" className="h-10" />
//       </div>
//       <div className="hidden md:block">
//         <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">ENQUIRE NOW</a>
//       </div>
//       <div className="block md:hidden">
//         <div className="flex flex-col cursor-pointer">
//           <span className="block w-6 h-0.5 bg-black mb-1"></span>
//           <span className="block w-6 h-0.5 bg-black mb-1"></span>
//           <span className="block w-6 h-0.5 bg-black"></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
