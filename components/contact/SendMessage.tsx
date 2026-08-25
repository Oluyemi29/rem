"use client";
import React, { useState } from "react";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="w-full flex flex-col py-10 justify-center items-center bg-deepBlue/5">
      <h1 className="md:text-4xl text-2xl md:my-10 my-5 font-semibold underline underline-offset-2">
        Send Us A Message
      </h1>
      <form
        onSubmit={() => handleSubmit()}
        className="md:w-2/4 w-full flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm">First Name</p>
          <input
            type="text"
            className="w-full h-12 border-2 px-3 rounded-md text-sm"
            placeholder="First name"
            name="firstName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Last Name</p>
          <input
            type="text"
            className="w-full h-12 border-2 px-3 rounded-md text-sm"
            placeholder="First name"
            name="lastName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Email</p>
          <input
            type="email"
            className="w-full h-12 border-2 px-3 rounded-md text-sm"
            placeholder="Email"
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Message</p>
          <textarea
            className="w-full h-44 border-2 p-4 rounded-md text-sm"
            placeholder="Message"
            name="message"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e)
            }
          />
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-deepYellow rounded-md text-white mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
