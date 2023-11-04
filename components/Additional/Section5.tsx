import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/public/Images/7.1.png";
import React from "react";

type Props = {};

export default function Section5({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[12px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 py-12 w-full text-center">
      <motion.h1
        viewport={{ once: true }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
        }}
        className="gap-y-6 z-10 flex-col absolute top-12 md:text-xl flex items-center justify-start w-full font-medium"
      >
        <p>對於長期來沖繩度假/生活/商務的高端人士，</p>
        <p>我們有會員會籍的選項</p>
        <p>最高可解鎖全系車型</p>
        <p>全年半價使用</p>
      </motion.h1>
      <Image
        src={image}
        alt={"background"}
        height={1000}
        width={1000}
        className="object-cover w-full h-full z-0"
      />
    </div>
  );
}
