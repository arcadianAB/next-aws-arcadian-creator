import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "../sections/grid/experience/Experience";
import BackgroundExperience from "./BackgroundExperience";

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] bg-light">
      <Canvas>
        <BackgroundExperience />
      </Canvas>
    </div>
  );
};

export default Background;
