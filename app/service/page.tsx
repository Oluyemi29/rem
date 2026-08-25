import OurServices from "@/components/service/OurServices";
import Service from "@/components/service/Service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services - Real Estate Management",
};

const page = () => {
  return (
    <div className="w-full">
      <Service />
      <OurServices />
    </div>
  );
};

export default page;
