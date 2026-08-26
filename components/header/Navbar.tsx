"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <div className="w-full flex flex-row justify-between items-center h-16 bg-deepBlue/5 md:px-12 px-1">
        <Link href={"/"} className="w-max">
          <Image
            src={"/rem.png"}
            alt="BrandLogo"
            width={"100"}
            height={"100"}
            className="w-16 h-16"
          />
        </Link>
        {/* <h1 className="text-deepBlue font-bold text-lg">REM</h1> */}
        <div className="md:flex hidden flex-row gap-10 items-center text-sm text-deepBlue ">
          <Link
            href={"/"}
            className={`hover:underline underline-offset-2 hover:font-semibold transition-all duration-500 ease-in-out cursor-pointer ${pathName === "/" && "font-semibold underline underline-offset-2"}`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`hover:underline underline-offset-2 hover:font-semibold transition-all duration-500 ease-in-out cursor-pointer ${pathName === "/about" && "font-semibold underline underline-offset-2"}`}
          >
            About
          </Link>
          <Link
            href={"/service"}
            className={`hover:underline underline-offset-2 hover:font-semibold transition-all duration-500 ease-in-out cursor-pointer ${pathName === "/service" && "font-semibold underline underline-offset-2"}`}
          >
            Service
          </Link>
          <Link
            href={"/contact"}
            className={`hover:underline underline-offset-2 hover:font-semibold transition-all duration-500 ease-in-out cursor-pointer ${pathName === "/contact" && "font-semibold underline underline-offset-2"}`}
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-row md:gap-5 gap-3 items-center">
          <Link
            href={"/signin"}
            className="text-deepYellow text-sm hover:scale-105 transition-all duration-500 ease-in-out font-semibold cursor-pointer md:block hidden"
          >
            Sign in
          </Link>
          <p>{showMenu}</p>
          <Link href={"/signup"}>
            <button className="text-white bg-deepYellow text-sm md:w-32 w-24 h-10 rounded-md cursor-pointer">
              Sign up
            </button>
          </Link>
          <div className="w-max p-0.5 cursor-pointer bg-transparent md:hidden block">
            {showMenu ? (
              <FaXmark
                size={30}
                className="text-deepBlue"
                onClick={() => setShowMenu(false)}
              />
            ) : (
              <IoMdMenu
                size={30}
                className="text-deepBlue"
                onClick={() => setShowMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${showMenu ? "flex" : "hidden"} flex-col gap-7 bg-deepBlue/90 absolute w-full h-auto py-10 px-2 z-20 transition-all ease-in-out duration-500`}
      >
        <Link
          onClick={() => closeMenu()}
          href={"/"}
          className="text-sm text-white"
        >
          Home
        </Link>
        <Link
          onClick={() => closeMenu()}
          href={"/about"}
          className="text-sm text-white"
        >
          About
        </Link>
        <Link
          onClick={() => closeMenu()}
          href={"/service"}
          className="text-sm text-white"
        >
          Services
        </Link>
        <Link
          onClick={() => closeMenu()}
          href={"/contact"}
          className="text-sm text-white"
        >
          Contact us
        </Link>
        <Link
          onClick={() => closeMenu()}
          href={"/signin"}
          className="text-sm text-white"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
