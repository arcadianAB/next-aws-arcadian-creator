import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SummarySection = () => {
  const text = React.useRef<HTMLParagraphElement>(null);
  const textContainer = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray(text.current!.children);
      gsap.from(chars, {
        duration: 0.5,
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 0.5,
          markers: false,
        },
      });

      gsap.to(textContainer.current, {
        duration: 0.5,
        borderRadius: "4rem",
        yPercent: 20,
        scrollTrigger: {
          trigger: text.current,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
      });

      gsap.to(text.current, {
        duration: 0.5,
        borderRadius: "4rem",
        y: "2rem",
        scrollTrigger: {
          trigger: text.current,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex h-[150vh] w-full items-center justify-center p-[1rem]">
      <div className="w-full text-[5vh] sm:text-6xl lg:max-w-[80%] lg:text-7xl 2xl:max-w-[60%] 2xl:text-8xl">
        <div
          ref={textContainer}
          className="relative border-2 border-b-4 border-r-4 border-dark p-[1rem] font-bold lg:p-[2rem] "
        >
          <p
            ref={text}
            className="bg-dark-20 flex flex-wrap border-2 border-b-4 border-r-4 border-dark bg-blue-200 bg-dark/10 p-[1rem] lg:p-[4rem]"
          >
            <span>A&nbsp;</span>
            <span className="text-blue-600">GOTHENBURG&nbsp;</span>
            <span>BASED&nbsp;</span>
            <span>DIGITAL&nbsp;</span>
            <span>STUDIO&nbsp;</span>
            <span>BUILDING&nbsp;</span>
            <span>WEB&nbsp;</span>
            <span>EXPERIENCES&nbsp;</span>
            <span>FOR&nbsp;</span>
            <span>SMALL&nbsp;</span>
            <span>AND&nbsp;</span>
            <span>MEDIUM&nbsp;</span>
            <span>SIZED&nbsp;</span>
            <span>COMPANIES&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
