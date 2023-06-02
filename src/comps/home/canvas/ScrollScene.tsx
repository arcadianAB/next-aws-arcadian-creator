import { Environment, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Dragon } from "./Dragon";

const ScrollScene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Dragon />
      </Suspense>
    </>
  );
};

export default ScrollScene;
