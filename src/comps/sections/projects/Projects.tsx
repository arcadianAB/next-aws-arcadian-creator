import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import HideShowList from "../list/HideShowList";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  "GUINEÉ VISION",
  "VISIT GUINEÉ",
  "BON VOYAGE HALLOWEEN",
  "BPAB",
  "HERBODYHERCHOICE",
  "ALI DAVOODI",
];

const list = [
  {
    title: "GUINEÉ VISION",
  },
  {
    title: "VISIT GUINEÉ",
  },
  {
    title: "BON VOYAGE HALLOWEEN",
  },
  {
    title: "BPAB",
  },
  {
    title: "HERBODYHERCHOICE",
  },
  {
    title: "ALI DAVOODI",
  },
];

const maskedList = [
  {
    title: "GUINEÉ VISION",
    description: "Data collection & 3D word cloud",
  },
  {
    title: "VISIT GUINEÉ",
    description: "Official website for tourism & investment in Guinea",
  },
  {
    title: "BON VOYAGE HALLOWEEN",
    description: "Information, ticketing & sales",
  },
  {
    title: "BPAB",
    description: "Company details, product showcase & contact",
  },
  {
    title: "HERBODYHERCHOICE",
    description: "Non-profit e-commerce platform",
  },
  {
    title: "ALI DAVOODI",
    description: "Digital Business Card for Art Director",
  },
];

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement
  >(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(title.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={container}
      className="relative flex h-full w-full flex-col items-start justify-center bg-dark py-[50vh]"
    >
      <h2 ref={title} className="px-[2rem] text-light">
        LATEST PROJECTS...
      </h2>
      <HideShowList list={list} maskedList={maskedList} />
    </div>
  );
};

export default Projects;
