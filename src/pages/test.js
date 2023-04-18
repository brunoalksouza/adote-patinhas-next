import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Filter from "@/components/Filter";

export default function Test() {
  return (
    <>
      <Navbar />
      <Filter/>
      <Card />
      <Footer />
    </>
  );
}
