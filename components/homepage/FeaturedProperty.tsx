"use client";
import { Properties } from "@/data/Properties";
import React from "react";
import PropertyCard from "../cards/PropertyCard";

const FeaturedProperty = () => {
  return (
    <div className="w-full my-10 flex flex-col md:gap-10 gap-7 justify-center items-center md:px-10 px-1">
      <h1 className="text-deepBlue md:text-4xl text-2xl font-semibold underline underline-offset-2">
        Featured Property
      </h1>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10">
        {Properties.map((eachProperties, index) => {
          return (
            <PropertyCard
              properties={eachProperties}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProperty;
