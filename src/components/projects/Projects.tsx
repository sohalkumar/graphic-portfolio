import Image from "next/image";
import png1 from "public/projects/1.png";
import png2 from "public/projects/2.png";
import png3 from "public/projects/3.png";
import png4 from "public/projects/4.png";
import React from "react";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-light-sap-green px-8 sm:px-[7.5rem] py-[5rem] sm:py-[8rem] overflow-x-hidden"
    >
      <h2 className="text-light-beige text-center font-extrabold text-[2.75rem] sm:text-[3rem] drop-shadow-2xl">
        PREVIOUS WORK
      </h2>

      <div className="flex flex-col md:flex-row justify-center border-t-2">
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
