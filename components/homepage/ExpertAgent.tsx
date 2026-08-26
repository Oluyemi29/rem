"use client";
import { ExpertAgentData } from "@/data/agent";
import ExpertAgentCard from "../cards/ExpertAgentCard";

const ExpertAgent = () => {
  return (
    <div className="w-full my-16 flex flex-col md:gap-10 gap-7 justify-center items-center md:px-10 px-1">
      <h1 className="text-deepBlue md:text-4xl text-2xl font-semibold">
        Expert Agents
      </h1>

      <div className="w-full overflow-x-auto no-scrollbar p-2">
        <div className="w-max flex flex-row gap-10">
          {ExpertAgentData.map((eachProperties, index) => {
            return (
              <ExpertAgentCard
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

export default ExpertAgent;
