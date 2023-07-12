import { Canvas } from "@react-three/fiber";

import Experience from "./experience/Experience";

const GridSection = () => {
  return (
    <div className="h-[200vh] w-full">
      <div className="sticky top-0 grid h-screen w-full grid-cols-2 overflow-auto ">
        <div></div>
        <Canvas
          className="h-full w-full overflow-auto
        border-y-2 border-l-2 border-light"
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
};

export default GridSection;
