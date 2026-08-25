"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const OurMission = () => {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse justify-center items-center gap-5 md:py-20 py-10 px-1 bg-deepBlue/5">
      <div className="w-full flex flex-col justify-center items-center">
        <Image
          src={
            "https://i.pinimg.com/736x/a3/e7/2f/a3e72f7d9f7a938b33386403282b96ab.jpg"
          }
          alt="About us"
          className="md:w-[60%] w-full rounded-md mx-auto"
          width={"100"}
          height={"100"}
        />
      </div>
      <div className="w-full flex flex-col gap-6 text-start">
        <div className="md:w-[70%] flex flex-col gap-3">
          <h1 className="text-3xl text-deepBlue font-semibold italic underline underline-offset-2">
            Wondering what we do?
          </h1>
          <p className="text-deepBlue md:text-lg text-sm">
            One of the fastest way to get your dream apartment can only be
            through us Because
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-row items-center gap-2">
            <FaStar className="text-deepBlue text-lg" />
            <p className="text-deepBlue text-lg">
              We brought far located apartment to your notice through our
              platform
            </p>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <FaStar className="text-deepBlue text-lg" />
            <p className="text-deepBlue text-lg">
              We brought far located apartment to your notice through our
              platform
            </p>
          </div>
          <div className="w-full flex flex-row items-center gap-2">
            <FaStar className="text-deepBlue text-lg" />
            <p className="text-deepBlue text-lg">
              We brought far located apartment to your notice through our
              platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
