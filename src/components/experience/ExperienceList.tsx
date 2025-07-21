"use client";

import { useEffect, useState } from "react";

import { experienceData, Experience } from "@/data/experienceData";
import ChaosLink from "../ui/ChaosLink";

interface ExperienceItemProps {
  experience: Experience;
  isVisible: boolean;
}

function ExperienceItem({ experience, isVisible }: ExperienceItemProps) {
  return (
    <div
      className="border-b border-gray-800 pb-6 w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col space-y-2 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-white font-serif text-lg md:text-xl">
            {experience.link ? (
              <ChaosLink href={experience.link}>{experience.company}</ChaosLink>
            ) : (
              experience.company
            )}
          </h3>
          <span className="text-gray-500 text-sm font-mono">
            {experience.period}
          </span>
        </div>
        <p className="text-gray-400 text-sm italic">{experience.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
export default function ExperienceList() {
  const [showDescription, setShowDescription] = useState(false);
  const [showExperiences, setShowExperiences] = useState<boolean[]>([]);

  useEffect(() => {
    setShowExperiences(new Array(experienceData.length).fill(false));
    const timer1 = setTimeout(() => setShowDescription(true), 100);

    experienceData.forEach((_, index) => {
      setTimeout(() => {
        setShowExperiences((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 250 + index * 75);
    });

    return () => clearTimeout(timer1);
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
        <p>
          I&apos;ve learned the most by jumping into unfamiliar problems and
          figuring things out along the way. Each role pushed me out of my
          comfort zone.
        </p>
        <p>
          Security research demanded rigorous analysis of existing methodologies
          and challenging established assumptions. Consulting required
          translating complex technical concepts into actionable business
          strategies.
        </p>
        <p>
          I started asking better questions and realizing that strong
          collaboration usually matters more than perfect execution.
        </p>
        <p>
          Each experience added something different to how I think about
          building.
        </p>
      </div>

      {/* Experience Layout */}
      <div className="flex-1 w-full md:max-w-[40vw] md:mr-[6%] justify-start">
        <div className="space-y-6 md:space-y-8 w-full">
          {experienceData.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              isVisible={showExperiences[index] || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
