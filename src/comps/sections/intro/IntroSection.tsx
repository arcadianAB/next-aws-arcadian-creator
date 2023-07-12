"use client";

import { MouseEvent, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useLongPress from "@/hooks/useLongPress";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const overlay = useRef<HTMLParagraphElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const foreground = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(overlay.current, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      "--clipSize": "200px",
      duration: 0.3,
      ease: "sine.out",
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    gsap.to(overlay.current, {
      "--x": "0%",
      "--y": "0%",
      "--clipSize": "100px",
      duration: 0.3,
      ease: "sine.out",
    });
  };

  const handleLongPress = (e: MouseEvent) => {
    gsap.to(overlay.current, {
      "--x": "50%",
      "--y": "50%",
      "--clipSize": "100%",
      duration: 0.3,
      ease: "sine.out",
    });
  };

  const onClick = (e: MouseEvent) => {
    gsap.to(overlay.current, {
      "--clipSize": "50%",
      duration: 0.3,
      ease: "sine.out",
    });
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(handleLongPress, onClick, defaultOptions);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(foreground.current, {
        borderRadius: "0 0 8rem 8rem",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      {...longPressEvent}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={container}
      className="h-full w-full "
    >
      <div
        ref={foreground}
        className="flex h-[105vh] w-full items-center justify-center bg-dark"
      >
        <p className="text-center text-[8vw] font-black text-light">
          ARCADIAN CREATOR
        </p>
      </div>
      <div
        ref={overlay}
        className="overlay flex h-[105vh] w-full items-center justify-center bg-light"
      >
        <p className="text-center text-[8vw] font-black text-dark">
          A DIGITAL CREATIVE
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
