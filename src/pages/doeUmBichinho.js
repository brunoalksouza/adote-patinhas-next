import CustomHead from "@/components/CustomHead";
import Footer from "@/components/Footer";
import LabelPage from "@/components/LabelPage";
import Navbar from "@/components/Navbar";
import RegisterCard from "@/components/RegisterCard";
import { Inter } from "next/font/google";

export default function DoeUmBichinho() {
  return (
    <>
      <CustomHead title="Doações" />
      <Navbar />
      <div className="bg-[#A5C282] py-4 ">
        <LabelPage titlePage="DOE UM BICHINHO " />
        <RegisterCard />
      </div>
      <Footer />
    </>
  );
}
