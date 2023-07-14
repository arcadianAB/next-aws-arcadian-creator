import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HideShowList from "./HideShowList";
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
  const title = useRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement
  >(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        scale: 0.5,
        borderRadius: "8rem",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
          markers: false,
        },
      });

      gsap.from(title.current, {
        opacity: 0,
        xPercent: 100,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center center",
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
      className="relative flex h-[105vh] w-full flex-col items-start justify-center bg-dark"
    >
      <h2 ref={title} className="px-[2rem] text-light">
        WHAT WE DO...
      </h2>
      <HideShowList list={list} maskedList={maskedList} />
    </div>
  );
};

export default ListSection;
