import Property from "@/components/property/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties - Real Estate Management",
};

const page = () => {
  return (
    <div className="w-full">
      <Property />
    </div>
  );
};

export default page;
