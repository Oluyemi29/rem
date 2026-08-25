"use client";

import { PropertyProps } from "@/types/Property";
import Image from "next/image";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";

type Property = {
  properties: PropertyProps;
  index: number;
};

const PropertyCard = ({ properties }: Property) => {
  return (
    <div className="w-full shadow-md shadow-deepBlue/50 rounded-md hover:scale-95 duration-500 transition-all ease-in-out">
      <div className="w-full md:h-84 h-60">
        <Image
          src={properties.images[0]}
          alt={properties.name}
          className="w-full h-full rounded-tr-md rounded-tl-md"
          width={"100"}
          height={"100"}
        />
      </div>
      <div className="w-full p-3">
        <p className="text-lg  text-deepBlue font-semibold">
          {properties.name}
        </p>
        <p className="text-sm">{properties.location}</p>

        <div className="w-full grid grid-cols-2 gap-5 my-5">
          <div className="flex flex-row gap-2 items-center">
            <FaBath className="text-deepBlue/80 text-xl" />
            <p className="text-sm text-deepBlue/80">
              {properties.bathroom} bathroom
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaBed className="text-deepBlue/80 text-xl" />
            <p className="text-sm text-deepBlue/80">
              {properties.bedroom} bedroom
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaKitchenSet className="text-deepBlue/80 text-xl" />
            <p className="text-sm text-deepBlue/80">
              {properties.kitchen} kitchen
            </p>
          </div>
        </div>

        {/* amentis  */}
        <div className="w-full flex flex-col gap-1.5">
          <p className="text-sm underline font-semibold text-deepBlue/80">
            Amenties
          </p>
          <div className="w-full flex flex-row items-center gap-5">
            {properties.amenities.map((eachAmenities, index) => {
              return (
                <p key={index} className="text-sm text-deepBlue/80">
                  {eachAmenities}
                </p>
              );
            })}
          </div>
        </div>

        {/* price  */}
        <div className="w-full mt-10 flex flex-row justify-between items-center">
          <p>
            {new Intl.NumberFormat("en-NG", {
              currency: "NGN",
              style: "currency",
            }).format(properties.price)}
          </p>
          <button className="text-white bg-deepYellow w-32 text-sm h-10 rounded-md cursor-pointer">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
