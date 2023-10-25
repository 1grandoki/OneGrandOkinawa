import React from "react";
import Car_Card from "./car_Card";
import img1 from "@/public/Images/1.webp";
import img2 from "@/public/Images/2.webp";
import img3 from "@/public/Images/3.webp";
import img4 from "@/public/Images/4.webp";
import { motion } from "framer-motion";
type Props = {};

export default function Car_Series({}: Props) {
  return (
    <div className="flex overflow-hidden flex-col items-start  max-w-[1200px] mx-auto justify-start gap-y-6 px-6 py-12 w-full">
      <motion.h1
        viewport={{ once: true }}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
        }}
        className="text-3xl font-medium"
      >
        Car Series
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        <Car_Card image={img3.src} carType={"JDM"} />
        <Car_Card image={img2.src} carType={"Executive"} />
        <Car_Card image={img4.src} carType={"Exotic"} />
        <Car_Card image={img1.src} carType={"Hyper"} />
      </div>
    </div>
  );
}
