import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ScrollScene = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useFrame(() => {
    if (!meshRef.current) return;
    const offset = scroll.offset - 1;
    meshRef.current.rotation.x = Math.PI * offset;
    meshRef.current.rotation.y = Math.PI * offset;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
};

export default ScrollScene;
