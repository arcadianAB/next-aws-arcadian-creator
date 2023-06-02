"use client";

import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ProjectItem from "./ProjectItem";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, m, motion } from "framer-motion";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Project 1",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Project 2",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Project 3",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/3",
  },
  {
    id: 4,
    title: "Project 4",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/4",
  },
  {
    id: 5,
    title: "Project 5",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/5",
  },
  {
    id: 6,
    title: "Project 6",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/6",
  },
  {
    id: 7,
    title: "Project 7",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/7",
  },
  {
    id: 8,
    title: "Project 8",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/8",
  },
  {
    id: 9,
    title: "Project 9",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/9",
  },
  {
    id: 10,
    title: "Project 10",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/10",
  },

  //repeat

  {
    id: 1,
    title: "Project 1",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Project 2",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Project 3",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/3",
  },
  {
    id: 4,
    title: "Project 4",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/4",
  },
  {
    id: 5,
    title: "Project 5",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/5",
  },
  {
    id: 6,
    title: "Project 6",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/6",
  },
  {
    id: 7,
    title: "Project 7",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/7",
  },
  {
    id: 8,
    title: "Project 8",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/8",
  },
  {
    id: 9,
    title: "Project 9",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/9",
  },
  {
    id: 10,
    title: "Project 10",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.",
    img: "https://picsum.photos/200/300",
    link: "/projects/10",
  },
];

export type IProjectItem = (typeof projects)[0];

const HomeProjects = () => {
  const section = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLUListElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [active, setActive] = useState(false);
  const [activeProject, setActiveProject] = useState<IProjectItem>(projects[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!container.current) return;
      const images = gsap.utils
        .toArray(container.current.children)
        .map((li: any) => li.querySelector("img")!);

      const tl = gsap.timeline({
        defaults: { ease: "linear" },
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(images, {
        objectPosition: "100% 100%",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (active) {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out4" },
      });
      tl.to(activeRef.current, {
        x: "0%",
        duration: 0.5,
      });
      tl.to(
        section.current,
        {
          x: "-100%",
          duration: 0.5,
        },
        "-=25%"
      );
    } else {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out4" },
      });
      tl.to(section.current, {
        x: "0%",
        duration: 0.5,
      });
      tl.to(
        activeRef.current,
        {
          x: "100%",
          duration: 0.5,
        },
        "-=25%"
      );
    }
  }, [active]);

  const handleClick = useCallback((project: IProjectItem | null) => {
    if (!section.current || !activeRef.current) return;
    if (project) {
      setActive(true);
      setActiveProject(project);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <>
      <div
        ref={section}
        className="group relative row-span-4 overflow-auto bg-yellow-100 text-left text-dark lg:h-full"
      >
        <ul ref={container} className="flex py-[1rem] lg:flex-col">
          {projects.map((project, i) => (
            <li key={project.id + project.title} className="group relative">
              <ProjectItem
                handleClick={handleClick}
                active={active}
                activeProject={activeProject}
                project={project}
              />
            </li>
          ))}
        </ul>
        {active && (
          <span
            onClick={() => {
              handleClick(null);
            }}
            className={`absolute right-0
            top-0 rounded-bl-lg
            px-[2rem] py-[1rem]
            opacity-0 group-hover:opacity-100
          lg:bg-dark
           lg:text-yellow-100 lg:hover:cursor-pointer
          `}
          >
            close
          </span>
        )}
      </div>
      <div
        ref={activeRef}
        className="fixed bottom-0 left-[50%] right-0 top-0 hidden translate-x-[100%] flex-col items-center justify-center bg-light text-dark lg:flex"
      >
        <h1>{activeProject.title}</h1>
        <p>{activeProject.summary} </p>
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            src={activeProject.img}
            alt={activeProject.title}
            width={200}
            height={300}
          />
        </Suspense>
      </div>
    </>
  );
};

export default HomeProjects;
