"use client";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center my-10">
      <h1 className="text-4xl text-deepBlue italic underline underline-offset-2">
        Meet Our Team
      </h1>
      <div className="w-full flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="w-auto h-auto flex flex-col gap-2 items-center justify-center">
          <Image
            src={
              "https://i.pinimg.com/736x/32/3a/51/323a514284a8f09a4c276a4b824ff894.jpg"
            }
            alt="CEO"
            className="w-72 h-72 rounded-full border-2 border-deepBlue"
            width={"100"}
            height={"100"}
          />
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-lg text-deepBlue">Mr Richard Edward</p>
            <p className="text-sm font-bold text-deepBlue">C.E.O</p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-col gap-2 items-center justify-center">
          <Image
            src={
              "https://i.pinimg.com/736x/05/6c/85/056c85d23f30445c4ad7889967e6d9a1.jpg"
            }
            alt="CEO"
            className="w-72 h-72 rounded-full border-2 border-deepBlue"
            width={"100"}
            height={"100"}
          />
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-lg text-deepBlue">Mrs Joy Franklin</p>
            <p className="text-sm font-bold text-deepBlue">HR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
