"use client";
import ListSection from "@/comps/sections/list/ListSection";
import SplashScreen, { initAtom } from "@/comps/loading/SplashScreen";
import { useAtom } from "jotai";
import { useRef } from "react";
import IntroSection from "@/comps/sections/intro/IntroSection";
import SummarySection from "@/comps/sections/summary/SummarySection";
import { ReactLenis } from "@studio-freight/react-lenis";
import GridSection from "@/comps/sections/grid/GridSection";
import Background from "@/comps/background/Background";

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
          <Background />
          <SplashScreen />

          <IntroSection />
          <SummarySection />
          <ListSection />
          <GridSection />
        </main>
      </ReactLenis>
    </>
  );
}
