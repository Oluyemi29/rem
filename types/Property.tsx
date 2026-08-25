import { IconType } from "react-icons";

export type PropertyTypesProps = {
  id: string;
  type: string;
  count: string;
  icon: IconType;
};

export type Category = "buy" | "rent" | "shortlet";

export type PropertyProps = {
  id: string;
  name: string;
  images: string[];
  type: Category;
  location: string;
  description: string;
  bedroom?: number;
  bathroom?: number;
  kitchen?: number;
  price: number;
  method: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
};
