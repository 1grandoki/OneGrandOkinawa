"use client";
import Image from "next/image";
import Scene from "@/components/3D/Scene";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import Car_Series from "@/components/Cars/Car_Series";
import Section1 from "@/components/Additional/Section1";
import Section2 from "@/components/Additional/Section2";
import Section3 from "@/components/Additional/Section3";
import Section4 from "@/components/Additional/Section4";
import Section5 from "@/components/Additional/Section5";
import Section6 from "@/components/Additional/Section6";
import Section7 from "@/components/Additional/Section7";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center mx-auto justify-center text-teal-950">
      <Hero />

      {/* 2nd Section */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Car_Series />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
