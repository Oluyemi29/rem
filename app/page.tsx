import FeaturedProperty from "@/components/homepage/FeaturedProperty";
import Homepage from "@/components/homepage/HeroSession";
import PropertyTypes from "@/components/homepage/PropertyTypes";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <PropertyTypes />
      <FeaturedProperty />
    </div>
  );
}
