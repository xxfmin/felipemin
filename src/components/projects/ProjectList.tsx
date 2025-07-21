"use client";

import { useEffect, useState } from "react";

import { projectData, Project } from "@/data/projectsData";
import ChaosLink from "../ui/ChaosLink";

interface ProjectItemProps {
  project: Project;
  isVisible: boolean;
}

function ProjectItem({ project, isVisible }: ProjectItemProps) {
  return (
    <div
      className="border-b border-gray-800 pb-6 w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-6 w-full">
        <span className="text-gray-500 text-sm font-mono flex-shrink-0 md:block">
          {project.number}.
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-serif italic text-lg md:text-xl mb-2 hover:text-gray-300 transition-colors leading-tight">
            <ChaosLink href={project.link}>{project.title} →</ChaosLink>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectList() {
  const [showDescription, setShowDescription] = useState(false);
  const [showProjects, setShowProjects] = useState<boolean[]>([]);

  useEffect(() => {
    // Initialize show states for projects
    setShowProjects(new Array(projectData.length).fill(false));

    // Start animations with faster delays
    const timer1 = setTimeout(() => setShowDescription(true), 100);

    // Stagger project reveals with faster timing
    projectData.forEach((_, index) => {
      const timer = setTimeout(() => {
        setShowProjects((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 250 + index * 75);
    });

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="p-8 md:p-[6%] w-full flex flex-col md:flex-row items-start space-y-10 md:space-y-0 max-w-full">
      {/* Description */}
      <div
        className="work-description w-full md:w-[20vw] md:mr-[12%] space-y-6 flex-shrink-0"
        style={{
          opacity: showDescription ? 1 : 0,
          visibility: showDescription ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p>Mostly building tools that scratch my own itch.</p>
        <div className="pl-2 space-y-2 text-sm">
          <div className="flex">
            <span className="mr-2">→</span>
            <span>
              started with Odyssey because I wanted to learn how to make
              full-stack apps
            </span>
          </div>
          <div className="flex">
            <span className="mr-2">→</span>
            <span>
              built Delta Palette to test with my mom (she's color vision
              deficient)
            </span>
          </div>
          <div className="flex">
            <span className="mr-2">→</span>
            <span>
              Sous happened while figuring out how to make AI useful, not just
              impressive
            </span>
          </div>
        </div>
        <p>
          Some projects are deployed, some teach me what not to do next time.
          Both are worth it.
        </p>
        <p>
          Code lives on{" "}
          <ChaosLink href="https://github.com/xxfmin">github</ChaosLink> if you
          want to peek under the hood.
        </p>
        <p className="hidden md:block text-sm text-gray-500">
          clean interfaces make me happy
        </p>
      </div>

      {/* Projects Layout */}
      <div className="flex-1 w-full md:max-w-[40vw] md:mr-[6%] justify-start">
        <div className="space-y-6 md:space-y-8 w-full">
          {projectData.map((project, index) => (
            <ProjectItem
              key={project.number}
              project={project}
              isVisible={showProjects[index] || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
