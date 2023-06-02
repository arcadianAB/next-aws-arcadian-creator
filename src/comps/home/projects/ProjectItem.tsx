import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IProjectItem } from "./HomeProjects";

const ProjectItem = ({
  project,
  active,
  activeProject,
  handleClick,
}: {
  project: IProjectItem;
  active: boolean;
  activeProject: IProjectItem;
  handleClick: (project: IProjectItem | null) => void;
}) => {
  return (
    <div
      className={`h-full w-screen px-[2rem] pt-[1rem] text-left text-2xl lg:w-full `}
    >
      <div className="group mb-[0.5rem] flex w-full justify-between border-b border-dark">
        <h2
          className="lg:hover:cursor-pointer"
          onClick={() => {
            handleClick(project);
          }}
        >
          {project.title}
        </h2>
      </div>

      <Image
        className="h-[50vh] w-full object-cover object-left-top lg:hidden"
        src={project.img}
        alt={project.title}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProjectItem;
