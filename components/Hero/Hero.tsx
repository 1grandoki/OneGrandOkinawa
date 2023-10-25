import { motion } from "framer-motion";
import React from "react";
import Scene from "../3D/Scene";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div
        className="
     flex-col gap-y-8 mx-auto flex items-center min-h-screen justify-center w-full h-screen relative"
      >
        <motion.h1
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
          }}
          className={`font-Goth font-extrabold leading-tight title text-center md:w-[60vw] mx-2`}
        >
          Discover Okinawa with Our Premium
          <br /> Car Rental Services
        </motion.h1>
        <motion.h3
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
          className="font-light text-center mx-2 text-xs sm:text-base"
        >
          Experience the Ultimate Adventure on the Stunning Island of Okinawa
          with our High-Quality Car Rentals
        </motion.h3>
        <Scene />
      </div>
    </>
  );
}
