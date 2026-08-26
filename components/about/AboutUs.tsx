import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full md:h-110 h-60 bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/a3/e7/2f/a3e72f7d9f7a938b33386403282b96ab.jpg')",
      }}
    >
      <div className="absolute bg-deepBlue/60 w-full h-full" />
      <div className="relative w-full flex flex-col justify-center items-center h-full">
        <div className="w-auto flex flex-col justify-center items-center gap-1">
          <h1 className="text-white text-5xl font-bold">About Us </h1>
          <p className="md:text-lg text-sm text-center mt-2 text-white">
            We are a trusted real estate management company dedicated to making
            property ownership, renting, <br className="md" /> and management simple and stress-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
