"use client";

import { PropertyTypesData } from "@/data/PropertyType";

const PropertyTypes = () => {
  return (
    <div className="w-full md:my-10 my-7 flex flex-col md:gap-10 gap-5 justify-center items-center md:px-10 px-1">
      <h1 className="text-deepBlue md:text-4xl text-2xl font-semibold underline underline-offset-2">
        Apartment Types
      </h1>
      <div className=" w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        {PropertyTypesData.map((eachProperty, index) => {
          return (
            <div
              key={index}
              className="w-full shadow-md shadow-deepBlue/60 flex flex-col justify-center items-center h-36 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-deepBlue flex flex-col justify-center items-center">
                <eachProperty.icon className="text-white text-2xl" />
              </div>
              <h1 className="text-sm font-semibold text-deepBlue">
                {eachProperty.type}
              </h1>
              <p className="text-sm text-deepBlue/60">{eachProperty.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypes;
