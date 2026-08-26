"use client";
import { Properties } from "@/data/Properties";
import React from "react";
import TrendingCard from "../cards/TrendingCard";

const Trending = () => {
  return (
    <div className="w-full my-16 flex flex-col md:gap-10 gap-7 justify-center items-center md:px-10 px-1">
      <h1 className="text-deepBlue md:text-4xl text-2xl font-semibold">
        Trending Apartment
      </h1>
      <div className="w-full overflow-x-auto no-scrollbar p-2">
        <div className="w-max flex flex-row gap-10">
          {Properties.slice(-10).map((eachProperties, index) => {
            return (
              <TrendingCard
                properties={eachProperties}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
