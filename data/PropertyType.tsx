import { PropertyTypesProps } from "@/types/Property";
import { FaHouse } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { BsHousesFill } from "react-icons/bs";
import { MdBungalow } from "react-icons/md";

export const PropertyTypesData: PropertyTypesProps[] = [
  {
    id: "1",
    type: "Houses",
    count: "35 Properties",
    icon: FaHouse,
  },
  {
    id: "2",
    type: "Apartment",
    count: "44 Properties",
    icon: GiFamilyHouse,
  },
  {
    id: "3",
    type: "Offices",
    count: "18 Properties",
    icon: ImOffice,
  },
  {
    id: "4",
    type: "Duplex",
    count: "62 Properties",
    icon: BsHousesFill,
  },
  {
    id: "5",
    type: "Bungalow",
    count: "42 Properties",
    icon: MdBungalow,
  },
] as PropertyTypesProps[];
