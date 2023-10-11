import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import projects from "./project-list";

const leftList = (
  <>
    {projects.map((project) => {
      if (project.id % 2 !== 0) {
        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <Image
              src={project.image}
              height={project.height}
              width={project.width}
              alt={project.alt}
              className={project.shadow + " hover:scale-[1.1] duration-300"}
            />
          </motion.div>
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
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <Image
              src={project.image}
              height={project.height}
              width={project.width}
              alt={project.alt}
              className={project.shadow + " hover:scale-[1.1] duration-300"}
            />
          </motion.div>
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
