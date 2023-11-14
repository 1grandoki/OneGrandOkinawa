import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image from "@/public/Images/8.png";

type Props = {};

export default function Section7({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start !text-teal-950 w-full text-center">
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
        className="py-12 w-full h-12 bg-gradient-to-t from-white to-transparent "
      ></motion.div>
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
        className="aspect-square flex flex-col items-center justify-start gap-y-5 w-full py-16 relative"
      >
        <motion.div className="w-full absolute top-[5%] flex items-center justify-center">
          <h1 className="uppercase truncate text-xs sm:text-lg font-light font-Kanit z-10 text-[#0e4b66]">
            One grand oki
          </h1>
        </motion.div>
        <Image
          src={image}
          alt={"background"}
          fill
          className="object-cover w-full h-full z-0"
        />
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
        className="py-0 w-full h-36 bg-gradient-to-t to-[#f3f3f3] from-transparent "
      ></motion.div>
    </div>
  );
}
