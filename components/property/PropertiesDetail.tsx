"use client";
import { ExpertAgentData } from "@/data/agent";
import { Properties } from "@/data/Properties";
import Image from "next/image";
import React from "react";
type PropertiesDetailProps = {
  id: string;
};
const PropertiesDetail = ({ id }: PropertiesDetailProps) => {
  const property = Properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div className="w-full py-5 flex flex-col gap-5">
      <p className="font-bold md:text-2xl ">{property.name}</p>
      <div className="w-full flex md:flex-row flex-col md:h-132 h-136 gap-5 ">
        <div className="md:w-4/6 w-full flex md:flex-col flex-row ">
          <Image
            src={property.images[0]}
            alt={property.name}
            width={"100"}
            height={"100"}
            className="w-full md:h-132 h-100 rounded-md"
          />
        </div>
        <div className="md:w-2/6 w-full md:h-127 h-32 flex md:flex-col flex-row gap-5">
          <Image
            src={property.images[1]}
            alt={property.name}
            width={"100"}
            height={"100"}
            className="w-full md:h-1/2 rounded-md"
          />
          <Image
            src={property.images[2]}
            alt={property.name}
            width={"100"}
            height={"100"}
            className="w-full md:h-1/2 rounded-md"
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-5">
        <div className="md:w-3/4 w-full md:mt-10 flex flex-col gap-5 md:p-5 p-2">
          <p className="text-2xl font-semibold">{property.description}</p>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-row items-center justify-start gap-5">
              <p className="text-sm">{property.bedroom} bedroom |</p>
              <p className="text-sm">{property.bathroom} bathroom |</p>
              <p className="text-sm">{property.kitchen} kitchen</p>
            </div>
            <p className="text-sm">{property.reviewCount} reviews</p>
          </div>
          <hr className="w-full text-black bg-black" />

          <div className="w-full flex flex-row gap-5 items-center">
            <Image
              src={ExpertAgentData[0].image}
              alt={ExpertAgentData[0].name}
              width={"100"}
              height={"100"}
              className="w-12 h-12 rounded-full"
            />
            <div className="w-full flex flex-col gap-1">
              <p className="text-black text-sm font-semibold">
                Hosted by {ExpertAgentData[0].name}
              </p>
              <p className="text-sm">1 year hosting</p>
            </div>
          </div>
          <hr className="w-full text-black bg-black" />
          <p className="md:text-lg text-sm text-black">
            PrimeNest Properties is a professional real estate company focused
            on helping clients find, buy, sell, and rent quality residential and
            commercial properties. With a strong emphasis on customer
            satisfaction, transparency, and market expertise, the company
            provides personalized property solutions designed to meet the unique
            needs of homeowners, tenants, investors, and property developers.
            PrimeNest Properties works with a diverse range of properties, from
            modern apartments and family homes to luxury residences and
            investment opportunities. Their experienced agents guide clients
            throughout the entire property journey, helping them understand
            available options, evaluate properties, negotiate favorable deals,
            and make confident real estate decisions.
          </p>
        </div>
        <div className="md:w-1/4 w-full h-max shadow-md shadow-deepBlue/20 p-5 flex flex-col gap-5 rounded-md">
          <div className="w-full flex flex-row items-end gap-2">
            <p className="text-lg font-bold text-black">
              {new Intl.NumberFormat("en-NG", {
                currency: "NGN",
                style: "currency",
              }).format(property.price)}
            </p>
            <p className="text-sm mb-1">{property.method}</p>
          </div>

          <div className="w-full border border-black rounded-tr-md rounded-tl-md flex flex-row">
            <div className="w-full border border-black rounded-tl-md p-3">
              <p className="text-sm font-medium text-black">CHECK IN</p>
              <p className="text-sm">9/4/2026</p>
            </div>
            <div className="w-full border border-black rounded-tr-md p-3">
              <p className="text-sm font-medium text-black">CHECK OUT</p>
              <p className="text-sm">9/4/2027</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <p>Proceed to payment</p>
            <div className="w-full flex flex-col gap-5">
              <button className="text-white bg-deepYellow w-full h-14 rounded-full">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetail;
