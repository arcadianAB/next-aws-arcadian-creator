"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import CanvasHeader from "./CanvasHeader";

const HomeCanvas = () => {
  return (
    <div className="relative h-screen w-full bg-gray-300 lg:row-span-3 lg:h-full">
      <CanvasHeader />
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};

export default HomeCanvas;
