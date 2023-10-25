import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
type Props = {
  image: string;
  carType: string;
};

export default function Car_Card({ image, carType }: Props) {
  return (
    <Link
      href={"#"}
      className="flex group cursor-pointer flex-col items-start justify-start gap-y-2 font-medium"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.2,
        }}
        className="w-full overflow-hidden relative"
      >
        <Image
          src={image}
          alt={"card"}
          width={600}
          height={600}
          className="group-hover:scale-110 object-cover w-full group-hover:rotate-2 transition-all duration-1000"
        />
        <div className="bg-black/0 group-hover:bg-black/50 opacity-0 group-hover:opacity-100 duration-500 transition-all absolute top-0 left-0 w-full h-full flex items-center justify-center">
          View more details
        </div>
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
        className="flex-1 overflow-hidden flex items-center justify-start gap-x-1"
      >
        {carType}
        <div className="overflow-hidden pr-3">
          <BsArrowRight
            className={
              "-translate-x-2 group-hover:translate-x-1 transition-all duration-200"
            }
          />
        </div>
      </motion.div>
    </Link>
  );
}
