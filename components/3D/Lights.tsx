"use client";
import React from "react";

type Props = {};

export default function Lights({}: Props) {
  return (
    <>
      <ambientLight intensity={1} />
    </>
  );
}
