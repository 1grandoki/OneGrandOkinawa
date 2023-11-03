import { motion } from "framer-motion";
import React from "react";
import Scene from "../3D/Scene";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { BsChevronDoubleDown } from "react-icons/bs";
type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="flex-col gap-y-4 md:gap-y-8 mx-auto flex items-center min-h-screen justify-center max-w-[2500px] w-full h-screen relative">
        {/* <motion.h1
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
        </motion.h1> */}
        <Scene />
        <motion.h3
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
          className="font-Zen flex items-center justify-center md:gap-x-[6vw] gap-x-[5.5vw] w-full mt-[15vh] sm:mt-[35vh] text-center px-16 text-sm md:text-2xl font-medium"
        >
          <span>中</span>
          <span>央</span> <span>1</span>
          <span> 號</span>
          {/* Experience the Ultimate Adventure on the Stunning Island of Okinawa
          with our High-Quality Car Rentals */}
        </motion.h3>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
          className="aspect-square w-20 md:w-40 relative"
        >
          <Image src={logo} alt={"Logo"} fill className="stroke-teal-950" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
        >
          <BsChevronDoubleDown
            className={
              "absolute bottom-10 lg:bottom-10 -translate-x-1/2 left-1/2 animate-pulse text-teal-950 h-10 lg:w-12 w-10 lg:h-12"
            }
          />
        </motion.div>
      </div>
    </>
  );
}
