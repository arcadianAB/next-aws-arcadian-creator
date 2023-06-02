import { Environment } from "@react-three/drei";
import React from "react";

const Staging = () => {
  return (
    <>
      <directionalLight
        intensity={0.5}
        color={"#f5f5f5"}
        position={[5, 5, 5]}
      />
    </>
  );
};

export default Staging;
