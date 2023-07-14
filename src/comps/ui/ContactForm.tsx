import { atom } from "jotai";
import React, { useEffect } from "react";
import gsap from "gsap";

export const contactAtom = atom({
  open: false,
});

const ContactForm = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const form = React.useRef<HTMLFormElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {});

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container}>
      <form ref={form}>{/* //form goes here */}</form>
    </div>
  );
};

export default ContactForm;
