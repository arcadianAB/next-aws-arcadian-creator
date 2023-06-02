"use client";

import { useEffect, useRef } from "react";

import SvgLogo from "@/lib/svgs/SvgLogo";
import gsap from "gsap";

const InitLoadingScreen = () => {
  const ref = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "expo.out",
          transformOrigin: "50% 100%",
        },
      });
      tl.to(ref.current, {
        scaleY: 0,
        delay: 0.5,
      })
        .to(ref.current, {
          scaleY: 1,
        })
        .to(ref.current, {
          scaleX: 0,
        })
        .to(ref.current, {
          scaleX: 1,
        })
        .to(ref.current, {
          scale: 0,
          duration: 1,
        })
        .to(
          section.current,
          {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              section.current?.remove();
            },
          },
          "<"
        );

      tl.repeat(-1);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={section}
      className="fixed inset-0 z-[10] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-amber-100 to-rose-400 p-[5%]"
    >
      <div ref={ref} className="h-full w-full">
        <SvgLogo color="#FEFFCC" />
      </div>
    </div>
  );
};

export default InitLoadingScreen;
