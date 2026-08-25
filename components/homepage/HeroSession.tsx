"use client";
import React from "react";

// https://images.pexels.com/photos/7147291/pexels-photo-7147291.jpeg
const HeroSession = () => {
  return (
    <div
      className="w-full md:h-132 h-120 bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7147291/pexels-photo-7147291.jpeg')",
      }}
    >
      <div className="absolute bg-deepBlue/60 w-full h-full" />
      <div className="relative w-full flex flex-col justify-center items-center h-full">
        <div className="w-auto ">
          <h1 className="text-white md:text-6xl text-3xl font-semibold text-center">
            Invest in your <br />
            Dream Home Today
          </h1>
          <p className="text-white mt-5 text-center md:text-lg text-sm">
            We provide you with all sort of luxury apartment globally, with
            price ranges and <br /> we ensure data protection and policy
          </p>
          <div className="md:w-max w-full md:px-0 px-5 md:mt-5mt-14 flex md:flex-row flex-col mx-auto md:gap-10 gap-6">
            <button className="text-white bg-deepYellow md:w-48 w-full md:h-12 h-14 rounded-md cursor-pointer">
              View Property
            </button>
            <button className="text-lg text-white md:w-48 w-full md:h-12 h-14 rounded-md border-2 border-white cursor-pointer">
              Create Account
            </button>
          </div>
        </div>
        <div className="mt-20 md:flex hidden flex-row bg-white gap-5 rounded-md p-3">
          <div className="bg-deepBlue/10 flex flex-col justify-center items-center text-center border-2 border-deepBlue/30 w-32 h-9 rounded-md">
            <p className="text-deepBlue">Buy</p>
          </div>
          <div className="bg-deepBlue/10 flex flex-col justify-center items-center text-center border-2 border-deepBlue/30 w-32 h-9 rounded-md">
            <p className="text-deepBlue">Rent</p>
          </div>
          <div className="bg-deepBlue/10 flex flex-col justify-center items-center text-center border-2 border-deepBlue/30 w-32 h-9 rounded-md">
            <p className="text-deepBlue">Shortlet</p>
          </div>
          <button className="text-white bg-deepYellow w-36 h-9 rounded-md cursor-pointer">
            Seearch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
