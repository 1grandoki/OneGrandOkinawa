import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

type Props = {
  start: () => void;
};

export default function LoadingScreen({ start }: Props) {
  const [Start, setStart] = useState<string>("opacity-100 saturate-100");
  const delay = async (ms: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        setStart("opacity-0 saturate-0");
        delay2(2000);
      }, ms)
    );
  };
  const delay2 = async (ms: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        start();
      }, ms)
    );
  };

  useEffect(() => {
    delay(4000);
  }, []);

  //variants
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        duration: 3,
        bounce: 0.2,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        duration: 3,
        bounce: 0.2,
        delay: 0.5,
      },
    },
  };
  const children = {
    hidden: { y: 0, opacity: 1 },
    show: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 300,
        opacity: { y: 0.1 },
      },
    },
  };
  return (
    <motion.section
      variants={parent}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      className={`relative flex h-screen w-screen flex-col items-center justify-center transition-all duration-[1500ms]`}
    >
      <Logo variants={children} />

      <motion.div
        variants={children}
        className="font-medium  animate-pulse m-6 overflow-hidden small-caps"
      >
        Loading ...
      </motion.div>
    </motion.section>
  );
}
