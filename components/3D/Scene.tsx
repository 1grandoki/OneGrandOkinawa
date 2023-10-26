"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Environement from "./Environment";
import Loader from "./Loader/Loader";
import { Logo } from "@/components/3D/Models/Logo";
import gsap from "gsap";
import { Logo_Mobile } from "./Models/Logo_mobile";
type Props = {};

export default function Scene() {
  const [Z, setZ] = useState(3);
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
        camera.position.z = Z;
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

  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 640) {
      setZ(5);
    }
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 640;
  return (
    <Canvas
      camera={{ position: [0, 0, Z] }}
      shadows
      className="!absolute !top-0 -z-10 !left-0 w-full !h-full"
    >
      <Suspense fallback={<Loader></Loader>}>
        {/* <EffectS /> */}
        <Environement />
        {isMobile ? (
          <Logo_Mobile rotation={[Math.PI / 2, 0, 0]} />
        ) : (
          <Logo rotation={[Math.PI / 2, 0, 0]} />
        )}
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
