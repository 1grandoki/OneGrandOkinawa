import { motion } from "framer-motion";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";

type Props = {};

export default function Section3({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 px-6 py-12 w-full text-center">
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0,
        }}
        className="font-Zen !text-lg"
      >
        <span className="font-Mont">One Grand Okinawa</span>
        <br />
        沖繩中央1號
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.4,
        }}
        className="gap-y-3 flex flex-col items-center text-center justify-start"
      >
        <p>代表著雅緻與奢華的交融</p>
        <p>每一次的選擇不僅僅是一種服務，</p>
        <p>更是對高緯生活藝術的追求與極致用戶體驗的呈現。</p>
        <p>在這個天堂一般的海島，</p>
        <p>帶給您難忘且美麗的回憶是我們唯一的目標</p>
      </motion.div>

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
        className="aspect-square w-20 md:w-40 py-16 relative"
      >
        <Image src={logo} alt={"Logo"} fill className="stroke-teal-950" />
      </motion.div>
    </div>
  );
}
