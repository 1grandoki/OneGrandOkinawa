import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/public/Images/7.1.png";
import React from "react";
import { BsFillSquareFill, BsFillTriangleFill } from "react-icons/bs";
import Link from "next/link";

type Props = {};

export default function Section5({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 py-12 w-full text-center">
      <Image
        src={image}
        alt={"background"}
        height={1000}
        width={1000}
        className="object-cover w-full h-full z-0"
      />
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
        className="gap-y-6 z-10 flex-col absolute top-12 md:text-xl flex items-center justify-start font-medium"
      >
        <p>對於長期來沖繩度假/生活/商務的高端人士，</p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Link
              target="_blank"
              target="_blank"
              href="https://one-grand-okinawa.myshopify.com/pages/premium"
              className="bg-[#accda0] uppercase rounded-lg flex text-sm items-center justify-center py-3 w-28 underline active:scale-95 transition-all duration-200 font-Mont text-lime-900"
            >
              Premium
            </Link>
          </div>
          <div className="flex flex-col items-end justify-start gap-y-6">
            <p>我們有會員會籍的選項</p>
            <p>最高可解鎖全系車型</p>
            <p>全年半價使用</p>
          </div>
        </div>
        {/* <Link target="_blank" 
          target="_blank"
          href="https://one-grand-okinawa.myshopify.com/pages/premium"
        >
          <BsFillSquareFill className="hover:scale-110 transition-all duration-200 active:scale-100 w-6 h-6 text-black" />
        </Link> */}
      </motion.h1>
    </div>
  );
}
