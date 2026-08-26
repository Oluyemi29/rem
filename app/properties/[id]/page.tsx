import PropertiesDetail from "@/components/property/PropertiesDetail";
import { Metadata } from "next";

type propertyParams = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: "Properties - Real Estate Management",
};

const page = async ({ params }: propertyParams) => {
  const { id } = await params;

  return (
    <div className="w-full">
      <PropertiesDetail id={id} />
    </div>
  );
};

export default page;
