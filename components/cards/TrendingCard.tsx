"use client";

import { PropertyProps } from "@/types/Property";
import Image from "next/image";
import Link from "next/link";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";

type Property = {
  properties: PropertyProps;
  index: number;
};

const TrendingCard = ({ properties }: Property) => {
  return (
    <div className="md:w-100 w-76 shadow-md shadow-deepBlue/50 rounded-md ">
      <div className="w-full md:h-84 h-60">
        <Image
          src={properties.images[0]}
          alt={properties.name}
          className="w-full h-full rounded-tr-md rounded-tl-md"
          width={"100"}
          height={"100"}
          loading="eager"
        />
      </div>
      <div className="w-full p-3">
        <p className="text-lg  text-black font-semibold">{properties.name}</p>
        <p className="text-sm">{properties.description}</p>

        <div className="w-full md:grid hidden grid-cols-2 gap-5 my-5">
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
        {/* <div className="w-full flex flex-col gap-1.5">
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
        </div> */}

        {/* price  */}
        <div className="w-full mt-10 flex flex-row justify-between items-center">
          <p className="text-sm">
            {new Intl.NumberFormat("en-NG", {
              currency: "NGN",
              style: "currency",
            }).format(properties.price)}
          </p>
          <Link
            href={`/properties/${properties.id}`}
            className="text-deepYellow text-sm font-semibold rounded-md cursor-pointer"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
