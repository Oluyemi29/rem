"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:items-start items-center md:gap-5 gap-14 py-10 bg-deepYellow md:px-5 px-0">
      <div className="w-full flex flex-col md:items-start items-center gap-4">
        <Image
          src={"/brand.png"}
          alt="BrandLogo"
          width={"100"}
          height={"100"}
          className="w-20 h-20"
        />
        <p className="text-2xl text-white font-bold">REM</p>
      </div>
      <div className="w-full flex flex-col md:items-start items-center md:gap-16 gap-8">
        <h1 className="md:text-lg text-sm font-semibold text-white">
          Information
        </h1>
        <div className="w-full text-start flex flex-col md:items-start items-center gap-5">
          <p className="text-sm text-white">Home</p>
          <p className="text-sm text-white">About</p>
          <p className="text-sm text-white">Services</p>
          <p className="text-sm text-white">Contact Us</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:items-start items-center md:gap-16 gap-8">
        <h1 className="md:text-lg text-sm font-semibold text-white">
          Helpful Links
        </h1>
        <div className="w-full text-start flex flex-col md:items-start items-center gap-5">
          <p className="text-sm text-white">Servics</p>
          <p className="text-sm text-white">Support</p>
          <p className="text-sm text-white">Terms and Condition</p>
          <p className="text-sm text-white">Policy Privacy</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:items-start items-center md:gap-16 gap-8">
        <h1 className="md:text-lg text-sm font-semibold text-white">
          Our Services
        </h1>
        <div className="w-full text-start flex flex-col md:items-start items-center gap-5">
          <p className="text-sm text-white">Buy</p>
          <p className="text-sm text-white">Rent</p>
          <p className="text-sm text-white">Shortlet and Condition</p>
          <p className="text-sm text-white">Payment</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:items-start items-center md:gap-16 gap-8">
        <h1 className="md:text-lg text-sm font-semibold text-white">
          Contact Us
        </h1>
        <div className="w-full text-start flex flex-col md:items-start items-center gap-5">
          <p className="text-sm text-white">+2349112233477</p>
          <p className="text-sm text-white">+2349144256664</p>
          <p className="text-sm text-white">info@realestate.com</p>
          <div className="w-max flex flex-row gap-5 md:items-start items-center">
            <div className="w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center">
              <FaFacebookF className="text-deepYellow text-xl" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center">
              <FaTwitter className="text-deepYellow text-xl" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center">
              <MdEmail className="text-deepYellow text-xl" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center">
              <FaYoutube className="text-deepYellow text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
