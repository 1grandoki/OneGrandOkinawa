import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image from "@/public/Images/6.jpg";

type Props = {};

export default function Section4({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 py-12 w-full text-center">
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
        className="aspect-square w-full py-16 relative"
      >
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
          className="w-full absolute top-0 flex items-center justify-center"
        >
          <h1 className="uppercase truncate font-light font-Kanit py-1 text-white font-Mont z-10 ">
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
    </div>
  );
}
