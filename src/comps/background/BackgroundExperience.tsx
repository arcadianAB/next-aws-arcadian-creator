import { DogPlane } from "./DogPlane";
import { Earth } from "./Earth";

const BackgroundExperience = () => {
  return (
    <>
      <pointLight position={[10, 10, 10]} />
      <DogPlane />
      <Earth />
    </>
  );
};

export default BackgroundExperience;
