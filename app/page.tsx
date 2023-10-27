"use client";
import Image from "next/image";
import Scene from "@/components/3D/Scene";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import Car_Series from "@/components/Cars/Car_Series";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center mx-auto justify-center text-teal-950">
      <Hero />

      {/* 2nd Section */}
      <Car_Series />
    </div>
  );
}
