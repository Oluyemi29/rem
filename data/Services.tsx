import { ServicesProps } from "@/types/services";
import { FaHouse } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { BsHousesFill } from "react-icons/bs";
import { MdBungalow } from "react-icons/md";

export const Services = [
  {
    id: "1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae?",
    image:
      "https://i.pinimg.com/1200x/4f/3b/95/4f3b950c63c31cc65bdca23409f5c573.jpg",
    name: "House Apartment",
    icon: FaHouse,
  },
  {
    id: "2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae?",
    image:
      "https://i.pinimg.com/1200x/5f/ff/56/5fff568305bc768c7b37046cc441e7ea.jpg",
    name: "Bungalow Apartment",
    icon: GiFamilyHouse,
  },
  {
    id: "3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae?",
    image:
      "https://i.pinimg.com/736x/1f/0f/8e/1f0f8e572e1faa3aace3077b955a9317.jpg",
    name: "Bungalow Apartment",
    icon: ImOffice,
  },
  {
    id: "4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae?",
    image:
      "https://i.pinimg.com/1200x/65/19/b2/6519b25a5dbbe6387b0a7166bd777b9f.jpg",
    name: "Bungalow Apartment",
    icon: BsHousesFill,
  },
  {
    id: "5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae?",
    image:
      "https://i.pinimg.com/736x/48/bf/10/48bf10719aaa00cd1d9837770484d859.jpg",
    name: "Bungalow Apartment",
    icon: MdBungalow,
  },
] as ServicesProps[];
