import Signin from "@/components/signin/Signin";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Signin - Real Estate Management",
};

const page = () => {
  return (
    <div className="w-full">
      <Signin />
    </div>
  );
};

export default page;
