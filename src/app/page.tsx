"use client";

import ListSection from "@/comps/sections/list/ListSection";
import SplashScreen, { initAtom } from "@/comps/loading/SplashScreen";
import { useAtom } from "jotai";
import { useRef } from "react";
import IntroSection from "@/comps/sections/intro/IntroSection";
import SummarySection from "@/comps/sections/summary/SummarySection";
import { ReactLenis } from "@studio-freight/react-lenis";
import WeHandle from "@/comps/sections/handle/WeHandle";
import Projects from "@/comps/sections/projects/Projects";
import Contact from "@/comps/sections/contact/Contact";
import UI from "@/comps/ui/UI";

export default function Home() {
  const [initA] = useAtom(initAtom);

  const main = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReactLenis root>
        <main
          ref={main}
          className={`relative w-full ${
            initA.initEnter ? "h-full" : "h-screen overflow-hidden"
          }`}
        >
          <SplashScreen />
          <UI />
          <IntroSection />
          <SummarySection />
          <ListSection />
          <WeHandle />
          <Projects />
          <Contact />
        </main>
      </ReactLenis>
    </>
  );
}
