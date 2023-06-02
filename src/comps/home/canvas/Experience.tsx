import { ScrollControls, Scroll } from "@react-three/drei";
import React from "react";
import Staging from "./Staging";

import ScrollScene from "./ScrollScene";

const Experience = () => {
  return (
    <>
      <Staging />
      <ScrollControls pages={3} damping={0.1}>
        <ScrollScene />
      </ScrollControls>
    </>
  );
};

export default Experience;
