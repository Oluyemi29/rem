"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { email, password } = formData;

      if (!email || !password) {
        return;
      }
      const request = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const response = await request.json();
      if (response.success) {
        alert(response.message);
        return router.push("/properties");
      } else {
        return alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col py-10 justify-center items-center">
      <div className="w-full flex flex-row items-center gap-5">
        <div className="w-full md:block hidden">
          <Image
            src={"/up.jpg"}
            alt="Image"
            width={"100"}
            height={"100"}
            className="w-2/3 rounded-md mx-auto"
            loading="eager"
          />
        </div>
        <form
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => handleSubmit(e)}
          className="w-full flex flex-col md:gap-3 gap-5 md:px-0 px-2"
        >
          <div className="flex flex-row justify-center gap-1 md:w-1/2 w-full">
            <h1 className="md:text-2xl text-2xl md:my-10 my-5 font-semibold underline underline-offset-2 text-deepBlue">
              Sign In
            </h1>
          </div>

          <div className="flex flex-col gap-1 md:w-1/2 w-full">
            <p className="text-sm text-deepBlue">Email</p>
            <input
              type="email"
              className="w-full h-12 border-2 px-3 rounded-md text-sm border-deepBlue bg-deepBlue/5"
              placeholder="Email"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e)
              }
            />
          </div>
          <div className="flex flex-col gap-1 md:w-1/2 w-full">
            <p className="text-sm text-deepBlue">Password</p>
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-12 border-2 pl-3 pr-10 rounded-md text-sm border-deepBlue bg-deepBlue/5"
                placeholder="Password"
                name="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
              />
              <div className="w-max absolute top-3 right-4 z-20">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="md:w-1/2 w-full h-12 bg-deepYellow rounded-md text-white mt-10"
          >
            Submit
          </button>
          <p className="text-[0.8rem]">
            Dont have an account?{" "}
            <Link
              href={"/signup"}
              className="text-blue-800 italic underline underline-offset-2 text-[0.8rem] font-semibold"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
