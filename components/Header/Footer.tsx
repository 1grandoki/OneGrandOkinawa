"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="overflow-hidden bg-transparent py-10 flex items-center justify-center top-0 text-white mx-auto w-full select-none z-10 text-xs text-center sm:text-sm font-light">
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 15,
          stiffness: 50,
        }}
      >
        © IN 2023, ONE GRAND OKINAWA IS POWERED BY SHOPIFY TECHNOLOGY
      </motion.div>
    </div>
  );
}
