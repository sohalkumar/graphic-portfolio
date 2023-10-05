import Image from "next/image";
import React from "react";
import projects from "./project-list";

const leftList = (
  <>
    {projects.map((project) => {
      if (project.id % 2 !== 0) {
        return (
          <Image
            key={project.id}
            src={project.image}
            height={project.height}
            width={project.width}
            alt={project.alt}
            className={`shadow-${project.shadow}`}
          />
        );
      }
    })}
  </>
);

const rightList = (
  <>
    {projects.map((project) => {
      if (project.id % 2 === 0) {
        return (
          <Image
            key={project.id}
            src={project.image}
            height={project.height}
            width={project.width}
            alt={project.alt}
            className={`shadow-${project.shadow}`}
          />
        );
      }
    })}
  </>
);

const ProjectsList = () => {
  return (
    <>
      {/* left list column */}
      <div className="flex flex-col gap-[2rem] md:gap-[4rem] pt-5 md:pt-[13rem] md:pb-[6rem] items-center">
        {leftList}
      </div>

      {/* right list column */}
      <div className="flex flex-col gap-[2rem] md:gap-[4rem] pt-5 md:pt-[6rem] items-center">
        {rightList}
      </div>
    </>
  );
};

export default ProjectsList;
