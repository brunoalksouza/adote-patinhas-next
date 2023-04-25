import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LabelPage from "@/components/LabelPage";
import RegisterCard from "@/components/RegisterCard";

export default function DoeUmBichinho() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#A5C282] py-4 ">
        <LabelPage titlePage="Doe um bichinho " />
        <RegisterCard />
      </div>
      <Footer />
    </div>
  );
}
