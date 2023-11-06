"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import image from "@/public/Images/17.jpg";
import Car_Card from "../Cars/car_Card";
import { getCollection } from "@/lib/Shopify";
import { Body } from "@/lib/Shopify/types";

type Props = {};

export default function Section6({}: Props) {
  const [Data, setData] = useState<Body | null>(null);
  useEffect(() => {
    const Fetch = async () => {
      const result = await getCollection();
      if (result?.status === 200) {
        setData(result);
      }
    };
    Fetch();
  }, []);
  return (
    <div className="flex font-Zen overflow-hidden text-[14px] sm:text-lg font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 px-6 py-12 w-full text-center">
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
        <Image src={logo} alt={"Logo"} fill className="opacity-70" />
      </motion.div>
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
        className="gap-y-6 flex-col text-lg md:text-2xl flex items-center justify-start w-full font-medium"
      >
        <p>2， 度假觀光 及 行政商務出行</p>
        <p>等私人訂製行程</p>
      </motion.h1>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
        }}
        className="relative w-full h-full"
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
          className="w-full absolute top-[4%] flex items-center justify-center"
        >
          <h1 className="uppercase truncate text-xs sm:text-lg font-light font-Kanit z-10 text-[#0e4b66]">
            One grand oki
          </h1>
        </motion.div>
        <Image
          src={image}
          alt={"background"}
          width={1000}
          height={1000}
          className="object-cover w-full h-full z-0"
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.4,
        }}
        className="gap-y-3 py-5 flex flex-col items-center text-[14px] sm:text-lg text-center justify-start"
      >
        <p>精選生活 ，尊享不凡</p>
        <br />
        <p>每一細節精心打造，</p>
        <p>從專車接送、超豪華住宿</p>
        <p>旅途探索、遊艇派對、商務會面</p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
          {Data &&
            Data.body.data.collections.edges.map((edge: any, index: number) => {
              if ((edge.node.title as string).includes("Services"))
                return (
                  <Car_Card
                    key={index}
                    image={edge.node.products.edges[0].node.featuredImage.url}
                    carType={edge.node.title}
                  />
                );
            })}
        </div>
        <br />
        <p>精雕細琢並充滿想象力的全面行程訂製化</p>
        <p>確保您絕對絲滑的用戶體驗，全方位尊享</p>
      </motion.div>
    </div>
  );
}
