import React from "react";
import Lights from "./Lights";
import {
  AccumulativeShadows,
  ContactShadows,
  RandomizedLight,
} from "@react-three/drei";
import { Environment as Env } from "@react-three/drei";
type Props = {};

export default function Environment({}: Props) {
  return (
    <>
      <Lights />
      <Env files={"/3d/kiara.hdr"} />
    </>
  );
}
