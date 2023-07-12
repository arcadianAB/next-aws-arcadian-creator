import { PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useRef } from "react";
import { Group, Mesh, Vector3 } from "three";
import { Logo } from "./Logo";

const Experience = () => {
  const scroll = useRef<any>(null);
  // const mesh = useRef<Mesh>(null);
  const group = useRef<Group>(null);

  useLenis((state: any) => {
    scroll.current = state;
  });

  useFrame(({ mouse }, delta) => {
    if (group.current) {
      // group.current.rotation.y = scroll.current.progress * 10;
      // group.current.rotation.x = scroll.current.progress * 10;
      group.current.rotation.z = scroll.current.progress * 10;
      // group.current.position.lerp(new Vector3(mouse.x, mouse.y, 0), delta);
    }
  });
  return (
    <>
      <pointLight position={[10, 10, 10]} />
      <PresentationControls>
        {/* <mesh ref={mesh}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <group ref={group}>
          <Logo />
        </group>
      </PresentationControls>
    </>
  );
};

export default Experience;
