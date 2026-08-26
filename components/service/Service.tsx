"use client";
import React from "react";

const Service = () => {
  return (
    <div
      className="w-full md:h-100 h-60 bg-center bg-cover bg-no-repeat relative"
      //   style={{
      //     backgroundImage:
      //       "url('https://i.pinimg.com/736x/a3/e7/2f/a3e72f7d9f7a938b33386403282b96ab.jpg')",
      //   }}
    >
      <div className="relative w-full flex flex-col justify-center items-center h-full">
        <div className="w-auto flex flex-col justify-center items-center gap-1">
          <h1 className="text-deepBlue text-5xl font-bold">Our Service</h1>
          <p className="md:text-lg text-sm text-center mt-2 text-deepBlue">
            We provide reliable real estate solutions designed to make buying,
            selling, renting, and <br className="md:block hidden" /> managing
            properties easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
