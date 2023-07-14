import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const work = React.useRef<HTMLDivElement>(null);
  const borderShadow = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(work.current, {
        borderRadius: "4rem",
        scrollTrigger: {
          trigger: work.current,
          start: "center bottom",
          end: `top center`,
          scrub: true,
          markers: false,
        },
      });

      gsap.to(borderShadow.current, {
        borderRadius: "4rem",
        x: "-2rem",
        y: "-2rem",
        scrollTrigger: {
          trigger: borderShadow.current,
          start: "center bottom",
          end: `top center`,
          scrub: true,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex h-screen items-center justify-center ">
      <div className="relative">
        <div
          ref={borderShadow}
          className="absolute inset-0 z-[-1] border-2 border-dark bg-light"
        />
        <div
          ref={work}
          className="select-none bg-dark p-[1rem] text-[10vw] font-bold text-light transition-transform duration-200 lg:active:translate-x-[-1rem] lg:active:translate-y-[-1rem]"
        >
          WORK WITH US
        </div>
      </div>
    </div>
  );
};

export default Contact;
