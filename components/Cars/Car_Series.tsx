import React, { useEffect, useState } from "react";
import Car_Card from "./car_Card";
import { motion } from "framer-motion";
import { getCollection } from "@/lib/Shopify";
import { Body, Collection } from "@/lib/Shopify/types";
type Props = {};

export default function Car_Series({}: Props) {
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
    <div className="flex overflow-hidden flex-col items-start max-w-[1200px] mx-auto justify-start gap-y-6 px-6 py-12 w-full">
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
        className="gap-y-6 text-[12px] md:text-lg font-Zen flex-col flex items-center justify-start w-full font-medium"
      >
        <p>我們主營</p>
        <p>豪車，中古性能車及超跑的租賃與包車</p>
      </motion.h1>
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
        {Data &&
          Data.body.data.collections.edges.map((edge: any, index: number) => {
            if (edge.node.title != "izyrent")
              return (
                <Car_Card
                  key={index}
                  image={edge.node.products.edges[0].node.featuredImage.url}
                  carType={edge.node.title}
                />
              );
          })}
        {/* <Car_Card image={img3.src} carType={"JDM"} />
        <Car_Card image={img2.src} carType={"Executive"} />
        <Car_Card image={img4.src} carType={"Exotic"} />
        <Car_Card image={img1.src} carType={"Hyper"} /> */}
      </div>
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
        className="font-Zen gap-y-6 text-[12px] md:text-lg flex-col flex items-center justify-start w-full font-medium"
      >
        <p>豪車租賃涵蓋四大級別，</p>
        <p>每一款嚴選車型都是歷代經典中的經典，</p>
        <p>為滿足您不同的使用場景和心情，</p>
        <p>交車流程簡單快捷，</p>
      </motion.h1>
    </div>
  );
}
