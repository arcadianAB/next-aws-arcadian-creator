import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const list = [
  {
    title: "One-Of-A-Kind",
  },
  {
    title: "Digital Experiences",
  },
  {
    title: "Flexible & Scalable",
  },
];

const maskedList = [
  {
    title: "No Templates",
    description: "Wordpress, Shopify, Wix, etc.",
  },
  {
    title: "Websites & Designs",
    description: "Your website is your digital storefront.",
  },
  {
    title: "Full Support",
    description: "We're here for as long as you need.",
  },
];

const ListSection = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
          markers: false,
        },
      });

      tl.from(container.current, {
        scale: 0.5,
        borderRadius: "8rem",
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={container}
      className="relative flex h-[105vh] w-full items-center bg-dark"
    >
      <ul className="flex w-full flex-col p-[1rem]">
        {list.map((item, i) => (
          <li
            className="group relative flex w-full justify-between bg-dark text-[5vw] text-light "
            key={`${item.title}-${i}`}
          >
            <div
              className="absolute bottom-0 
            flex h-0 w-full 
            origin-bottom 
            justify-between overflow-hidden 
          bg-light px-[1rem] 
          text-dark shadow-light 
            transition-all duration-500 group-hover:h-full
            "
            >
              <p>{maskedList[i].title}</p>
              <p className="self-center text-[2.5vw]">
                {maskedList[i].description}
              </p>
            </div>
            <p className="px-[1rem]">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
