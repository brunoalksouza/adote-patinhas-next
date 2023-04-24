import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Filter from "@/components/Filter";
import CardUser from "@/components/CardUser";

export default function Test() {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#A5C282]">
      <Navbar />
      <div className="flex-wrap mx-auto flex max-w-7xl justify-between flex-1">
        <CardUser />
      </div>

      <Footer />
    </div>
  );
}
