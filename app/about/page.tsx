import AboutUs from "@/components/about/AboutUs";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Real Estate Management",
};

const page = () => {
  return (
    <div className="w-full">
      <AboutUs />
      <OurMission />
      <OurTeam />
    </div>
  );
};

export default page;
