"use client";
import Image from "next/image";
import { Dela_Gothic_One } from "next/font/google";
import Scene from "@/components/3D/Scene";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import Car_Series from "@/components/Cars/Car_Series";

const goth = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center mx-auto justify-center text-white">
      <Hero />

      {/* 2nd Section */}
      <Car_Series />
    </div>
  );
}
