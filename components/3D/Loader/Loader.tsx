"use client";
import { transition } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";
import { animate } from "framer-motion";

export default function Loader() {
  const { progress } = useProgress();
  const [Opacity, setOpacity] = useState<string>("opacity-0");
  const [Progress, setProgress] = useState<number>(0);
  const [from, setFrom] = useState<number>(0);
  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  useEffect(() => {
    animate(from, progress, {
      type: "spring",
      bounce: 0.4,
      duration: 0.7,
      onUpdate: (latest: number) => setProgress(latest),
      onComplete: () => setFrom(progress),
    });
  }, [progress]);

  return (
    <Html
      //   zIndexRange={[-10, 0]}
      center
      className={`${Opacity} font-kanit pointer-events-none flex h-20 min-h-fit w-full flex-col items-center justify-center gap-y-1 text-sm font-thin transition-all duration-300`}
    >
      <div className="flex animate-pulse-slow2 flex-row gap-x-1">
        {Progress.toFixed(2)}% <span className="font-extralight">Loading</span>
      </div>
      <progress value={progress} max="100" className="h-1 w-32" />
    </Html>
  );
}
import React, { useEffect, useState } from "react";
