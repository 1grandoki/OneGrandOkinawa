"use client";
import { motion } from "framer-motion";
import input from "postcss/lib/input";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
type Props = {};

export default function Newsletter({}: Props) {
  const [Email, setEmail] = useState<string>("");

  return (
    <div className="bg-transparent border-b-[1px] border-t-[1px] py-10 flex items-center justify-center border-white/10 top-0 text-white mx-auto w-full select-none z-10">
      <div className="flex flex-col items-center justify-center gap-y-1">
        <motion.div
          viewport={{ once: true }}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 15,
            stiffness: 50,
          }}
          className="text-lg"
        >
          Subscribe to our newsletter
        </motion.div>
        <motion.form
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 15,
            stiffness: 50,
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex-1 min-w-[320px]"
        >
          <div className="realtive w-full relative">
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              id={"email"}
              type="email"
              className="peer pt-3 pb-1 mt-4 px-3 w-full border-[1px] border-white/50 outline-none bg-[#41007b] focus:ring-1 ring-white/50 duration-300 transition-all"
            ></input>
            <label
              htmlFor="email"
              className={`absolute duration-300 transition-all origin-top-left top-1/2 left-3 ${
                Email != ""
                  ? "scale-75 -translate-y-[60%]"
                  : "-translate-y-[15%]"
              } font-light peer-focus:scale-75 peer-focus:-translate-y-[60%]`}
            >
              email
            </label>
            <button type="submit">
              <FiArrowRight className="w-5 h-5 text-white/90 active:scale-90 duration-100 transition-all absolute top-1/2 right-4 -translate-y-[14%]" />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
