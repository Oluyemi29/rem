import ContactUs from "@/components/contact/ContactUs";
import SendMessage from "@/components/contact/SendMessage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Real Estate Management",
};
const page = () => {
  return (
    <div className="w-full">
      <ContactUs />
      <SendMessage />
    </div>
  );
};

export default page;
