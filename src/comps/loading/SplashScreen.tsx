import { atom, useAtom } from "jotai";
import { useRef } from "react";

import gsap from "gsap";

export const initAtom = atom({
  initClient: false,
  initLoaded: false,
  initReady: false,
  initEnter: false,
});

const SplashScreen = () => {
  const [initA, setInitA] = useAtom(initAtom);
  const splash = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    gsap.to(splash.current, {
      yPercent: -100,
      duration: 2,
      ease: "sine.out",
      onComplete: () => {
        setInitA((prev) => ({ ...prev, initEnter: true }));
        splash.current?.remove();
      },
    });
  };

  return (
    <div
      ref={splash}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-light`}
    >
      <button onClick={handleClick}>CLICK</button>
    </div>
  );
};

export default SplashScreen;
