import ExpertAgent from "@/components/homepage/ExpertAgent";
import FeaturedProperty from "@/components/homepage/FeaturedProperty";
import Homepage from "@/components/homepage/HeroSession";
import PropertyTypes from "@/components/homepage/PropertyTypes";
import Trending from "@/components/homepage/Trending";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <PropertyTypes />
      <FeaturedProperty />
      <ExpertAgent />
      <Trending />
    </div>
  );
}
