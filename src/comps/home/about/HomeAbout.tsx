import React from "react";
import About from "./sections/AboutSection";
import AboutSection from "./sections/AboutSection";
import { NumbersSection } from "./sections/NumbersSection";
import { ContactSection } from "./sections/ContactSection";

const HomeAbout = () => {
  return (
    <div className="h-full w-full overflow-auto p-[1rem] text-left">
      <section className="flex flex-col gap-[1rem] lg:w-[80%]">
        <AboutSection />
        <NumbersSection />
        <ContactSection />
      </section>
    </div>
  );
};

export default HomeAbout;
