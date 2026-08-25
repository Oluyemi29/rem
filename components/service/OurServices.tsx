"use client";
import { Services } from "@/data/Services";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="md:w-5/6 mx-auto w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 md:px-0 px-2 pb-14">
      {Services.map((eachService, index) => {
        return (
          <div
            key={index}
            className="w-full shadow-md shadow-deepBlue/50 rounded-md hover:scale-95 duration-500 transition-all ease-in-out"
          >
            <div className="w-full h-60">
              <Image
                src={eachService.image}
                alt={eachService.name}
                width={"100"}
                height={"100"}
                className="w-full h-full rounded-tr-md rounded-tl-md"
              />
            </div>
            <div className="w-full flex -mt-10 pb-5 flex-col gap-5 justify-center items-center p-3">
              <div className="w-16 h-16 rounded-full bg-white flex flex-col justify-center items-center">
                <eachService.icon className="text-deepBlue text-3xl" />
              </div>
              <p className="md:text-lg text-center text-sm text-deepBlue/80">
                {eachService.name}
              </p>
              <p className="md:text-lg text-center text-sm text-deepBlue/80">
                {eachService.description}
              </p>
              <button className="text-white bg-deepYellow w-32 text-sm h-10 rounded-md cursor-pointer">
                View More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurServices;
