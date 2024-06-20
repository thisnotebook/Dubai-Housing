import React from "react";
import { Navbar } from "./Navbar";
import { Features } from "./features";
import { Amenities } from "./amenities";
import { Button } from "./button";
import { Carousel } from "./carousel";
import { Footer } from "./footer";
export const Landing = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/building.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062349] via-[#062f64] to-[#010c1a] opacity-[64%] "></div>
        </div>

        <div className="relative z-20 h-full flex justify-center py-4 text-white px-4 md:px-8">
          <Navbar />
        </div>
        <div className=" relative z-10  h-[500px]  md:top-10 text-white px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-y-[60px] max-gap-y-[120px] gap-[50px] justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start md:items-start justify-start  pl-8  ">
              <div className="mb-4 md:mb-8  ">
                <h1 className="  text-2xl md:text-4xl font-bold ">
                  HARBOUR LIGHTS
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold ">
                  DE{" "}
                  <span className="text-[#17ABFF]  cursor-default">
                    GRESOGONO
                  </span>
                </h2>
                <p className="mt-4  md:text-lg w-[70%] font-bold">
                  1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                </p>
              </div>
              <div className="flex flex-col  md:mb-8 ">
                <p className="hover:scale-105 duration-300 text-sm md:text-md mb-2  bg-black bg-opacity-[50%] p-1 border-solid border-l-4 border-[#17ABFF] ">
                  Rental Returns of{" "}
                  <span className="font-bold">UPTO 11%**</span>
                </p>
                <p className="hover:scale-105 duration-300 text-sm md:text-md  bg-black bg-opacity-[50%] p-1 border-solid border-l-4 border-[#17ABFF]">
                  Capital Appreciation of{" "}
                  <span className="font-bold">UPTO 32%**</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:w-[330px]   ">
              {" "}
              <div className="bg-[#5790BE] bg-opacity-0 backdrop-filter backdrop-blur-lg shadow-md p-6 rounded-lg  max-w-xs md:max-w-md ">
                <p className="mt-4 text-sm md:text-lg font-normal">
                  PRICING STARTS FROM
                </p>
                <p className="text-3xl md:text-4xl font-bold my-2">$425,000</p>
                <p className="text-md md:text-xl mt-2">AED 1.3 Million</p>
                <button className=" w-full  my-4 md:my-6 bg-[#17ABFF] hover:bg-blue-600 text-white font-bold py-2 px-3 md:px-4 rounded items-center hover:scale-105 duration-300">
                  GET A PRESENTATION
                </button>
                <hr className="bg-black bg-opacity-20 h-0.5 border-0 mb-4" />
                <p className="mt-2 text-xs md:text-sm  text-[#17ABFF] ">
                  Get an Expert&#39;s Presentation of Real Estate in Dubai for
                  Life and Investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Amenities />
      <Button />
      <Carousel />
      <Footer />
    </>
  );
};
