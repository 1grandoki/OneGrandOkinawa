import Image from "next/image";
import React from "react";
import map from "@/public/Images/5.2.png";
import { motion } from "framer-motion";
type Props = {};

export default function Section1({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-start max-w-[1200px] mx-auto justify-start gap-y-6 px-6 py-12 w-full">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.4,
        }}
        className="relative mx-auto md:w-[60%]"
      >
        <Image
          alt={"Okinawa map"}
          src={map}
          className="w-full object-contain"
          height={700}
          width={700}
        />
        <motion.h1
          viewport={{ once: true }}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.4,
          }}
          className="absolute top-[70%] left-[56%] text-lg truncate uppercase"
        >
          沖繩（<span className="font-Mont">okinawa</span>）
        </motion.h1>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.4,
        }}
        className="flex flex-col tracking-[.1em] items-start justify-start gap-y-3"
      >
        <p>是日本唯一的國際一級度假海島,</p>
        <p>東方夏威夷之稱的沖繩，</p>
        <p>給您不僅在自然景觀上媲美馬爾代夫，斐濟，巴釐島等</p>
        <p>綺麗的頂級海島風光</p>
        <br />
        <br />
        <br />
        <p>更神奇的是，在那翡翠綠的沖繩海面上，</p>
        <p>建立著多種多樣的琉球國王文化，日本本島文化，和純正</p>
        <p>的美國文化，</p>
        <p>各種交織碰撞且交融的背景下，</p>
        <p>讓沖繩成為世界上富有魅力獨一無二的存在，</p>
      </motion.div>
    </div>
  );
}
