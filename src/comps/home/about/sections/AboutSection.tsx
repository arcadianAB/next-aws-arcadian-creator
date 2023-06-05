import { Paragraph } from "@/comps/text/Paragraph";
import { SubHeader } from "@/comps/text/SubHeader";
import React from "react";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod dolorum voluptatibus quos natus quas.";

const AboutSection = () => {
  return (
    <div>
      <SubHeader text="ABOUT" />
      <Paragraph text={text} />
    </div>
  );
};

export default AboutSection;
