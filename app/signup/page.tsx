import Signup from "@/components/signup/Signup";
import { Metadata } from "next";
import React from "react";
// loading="eager"

export const metadata: Metadata = {
  title: "Signun - Real Estate Management",
};
const page = () => {
  return (
    <div className="w-full">
      <Signup />
    </div>
  );
};

export default page;
