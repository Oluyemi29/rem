import React from "react";

const ContactUs = () => {
  return (
    <div
      className="w-full md:h-110 h-60 bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/03/fb/2a/03fb2a4c10d5da6ef503191841008651.jpg')",
      }}
    >
      <div className="absolute bg-deepBlue/60 w-full h-full" />
      <div className="relative w-full flex flex-col justify-center items-center h-full">
        <div className="w-auto flex flex-col justify-center items-center gap-1">
          <h1 className="text-white text-5xl font-bold">Contact Us </h1>
          <p className="md:text-lg text-sm text-white">
            Fill the below form to contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
