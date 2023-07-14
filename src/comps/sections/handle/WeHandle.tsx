import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WeHandle = () => {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement
  >(null);
  const list = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const listItems = list.current?.querySelectorAll("li");
      if (!listItems) return;

      listItems.forEach((item, i) => {
        gsap.from(item, {
          scale: 2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom 80%",
            scrub: true,
            markers: false,
          },
        });
      });

      gsap.to(title.current, {
        borderRadius: "8rem",
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
      className="grid h-[300vh] w-full grid-cols-2 bg-dark text-light"
    >
      <div className="sticky top-0 row-span-3 flex h-screen w-full flex-col justify-center">
        <h2
          ref={title}
          className="break-words bg-light p-[1rem] text-[12vw] text-dark"
        >
          WE HANDLE
        </h2>
      </div>
      <div className="grid h-[300vh] w-full ">
        <ul
          ref={list}
          className="flex h-full w-full flex-col items-center justify-center gap-[4rem] text-[5vw] "
        >
          <li>THE DESIGN</li>
          <li>THE DEVELOPMENT</li>
          <li>THE SECURITY</li>
          <li>THE LAUNCH</li>
          <li>THE HOSTING</li>
          <li>THE MAINTENANCE</li>
        </ul>
      </div>
    </div>
  );
};

export default WeHandle;
