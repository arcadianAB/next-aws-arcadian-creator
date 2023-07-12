import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const words =
  "A small Gothenburg based group with a love for technology, design & memorable online experiences".split(
    " "
  );

const SummarySection = () => {
  const text = React.useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray(text.current!.children);
      gsap.from(chars, {
        duration: 0.5,
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 0.5,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="lg:w-[60%] lg:text-7xl 2xl:text-8xl">
        <p ref={text}>
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block font-bold">
              {word}
              <span>&nbsp;</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SummarySection;
