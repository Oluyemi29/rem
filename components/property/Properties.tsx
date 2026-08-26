"use client";
import React, { useState } from "react";
import PropertyCard from "../cards/PropertyCard";
import { Properties } from "@/data/Properties";

const Property = () => {
  const [filteredProperty, setFilteredProperty] = useState(Properties);
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value) {
      const filtered = [...Properties].filter((eachProps) => {
        return (
          eachProps.name.toLowerCase().includes(value.toLowerCase()) ||
          eachProps.description.toLowerCase().includes(value.toLowerCase()) ||
          eachProps.location.toLowerCase().includes(value.toLowerCase()) ||
          eachProps.method.toLowerCase().includes(value.toLowerCase()) ||
          eachProps.type.toLowerCase().includes(value.toLowerCase()) ||
          eachProps.bathroom
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          eachProps.bedroom
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          eachProps.price
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          eachProps.kitchen
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          eachProps.rating
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          eachProps.reviewCount
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      });

      setFilteredProperty(filtered);
    } else {
      setFilteredProperty(Properties);
    }
  };
  return (
    <div className="w-full mb-10">
      <div className="w-full gap-5 flex flex-col">
        <div className="w-full my-5 flex flex-row items-center md:gap-10 gap-5 md:h-20 h-12">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full rounded-full h-full md:px-10 px-5 md:text-lg text-sm border-2 border-deepBlue/20 "
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {/* <button className="bg-deepYellow md:w-20 w-12 md:h-20 h-12 rounded-full flex flex-col justify-center items-center">
            <BiSearch className="text-white md:text-4xl text-lg" />
          </button> */}
        </div>
        {filteredProperty.length < 1 ? (
          <div className="w-full h-40 flex flex-col justify-center items-center">
            <p className="text-lg text-black">No property found</p>
          </div>
        ) : (
          <>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {filteredProperty.map((eachProperties, index) => {
                return (
                  <PropertyCard
                    properties={eachProperties}
                    index={index}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Property;
