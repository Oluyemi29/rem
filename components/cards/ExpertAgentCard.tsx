"use client";

import { ExpertAgentTypes } from "@/types/agent";
import Image from "next/image";

type Property = {
  properties: ExpertAgentTypes;
  index: number;
};

const ExpertAgentCard = ({ properties }: Property) => {
  return (
    <div className="md:w-72 w-72 shadow-md shadow-deepBlue/50 rounded-md ">
      <div className="w-full md:h-56 h-60">
        <Image
          src={properties.image}
          alt={properties.name}
          className="w-full h-full rounded-tr-md rounded-tl-md"
          width={"100"}
          height={"100"}
          loading="eager"
        />
      </div>
      <div className="w-full p-3">
        <p className="text-lg  text-black font-semibold">{properties.name}</p>
        <p className="text-sm">{properties.companyName}</p>

        {/* price  */}
        <div className="w-full mt-5 flex flex-row justify-between items-center">
          <p className="text-sm">{properties.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertAgentCard;
