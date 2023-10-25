"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Environement from "./Environment";
import Loader from "./Loader/Loader";
import { Model } from "@/components/3D/Models/Logo";
import gsap from "gsap";
type Props = {};

export default function Scene() {
  const CameraControls = () => {
    useFrame((state) => {
      state.camera.lookAt(0, 0, 0);
      // state.camera.position.z = 4;
    });
    const { camera } = useThree();
    const [oldx, setOldX] = useState(0);
    const [oldy, setOldY] = useState(0);
    const onMouseMove = (e: MouseEvent) => {
      if (typeof window !== "undefined") {
        var centerX = window.innerWidth * 0.5;
        var centerY = window.innerHeight * 0.5;
        let changeX = e.clientX - centerX;
        let changeY = e.clientY - centerY;
        gsap.to(camera.position, {
          x: changeX / 1000,
          y: changeY / 1000,
          duration: 1,
          ease: "power2.out",
        });
        camera.position.z = 3;
      }
    };

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("mousemove", onMouseMove);

        // cleanup function
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }
    }, []);
    return (
      <>
        {/* <OrbitControls
          enablePan={false}
          enableDamping
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 + Math.PI / 20}
          minPolarAngle={0}
          maxAzimuthAngle={Infinity}
          minAzimuthAngle={-Infinity}
        /> */}
      </>
    );
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      shadows
      className="!absolute !top-0 -z-10 !left-0 w-full !h-full"
    >
      <Suspense fallback={<Loader></Loader>}>
        {/* <EffectS /> */}
        <Environement />
        <Model rotation={[Math.PI / 2, 0, 0]} />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}
const EffectS = () => {
  return (
    <>
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={2}
          height={300}
        ></Bloom>
      </EffectComposer>
    </>
  );
};
