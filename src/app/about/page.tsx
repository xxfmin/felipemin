"use client";

import { useEffect, useState } from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const technicalSkills: SkillCategory[] = [
  {
    category: "languages",
    skills: ["JavaScript", "Python", "Java", "C", "C++"],
  },
  {
    category: "frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "backend",
    skills: ["Node.js", "Express.js", "FastAPI", "PHP"],
  },
  {
    category: "databases",
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    category: "ml/data",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Matplotlib"],
  },
  {
    category: "tools",
    skills: ["Git", "Docker", "Vercel", "JWT"],
  },
];

const funFacts = [
  "I speak 4 languages: English, Korean, Portuguese, and Spanish",
  "I can solve a Rubik's cube in under 40 seconds",
  "Favorite country visited is Japan",
  "I don't like french fries",
];

export default function About() {
  const [showIntro, setShowIntro] = useState(false);
  const [showSections, setShowSections] = useState<boolean[]>([]);

  useEffect(() => {
    // Initialize visibility states
    setShowSections(new Array(3).fill(false));

    // Staggered animations
    setTimeout(() => setShowIntro(true), 100);

    // Show each section with delay
    [0, 1, 2].forEach((index) => {
      setTimeout(() => {
        setShowSections((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 + index * 150);
    });
  }, []);

  return (
    <div className="h-full p-8 md:p-[6%] w-full flex flex-col md:flex-row items-start justify-start space-y-10 md:space-y-0 max-w-full">
      {/* Left side*/}
      <div
        className="w-full md:w-[20vw] md:mr-[12%] space-y-4 flex-shrink-0"
        style={{
          opacity: showIntro ? 1 : 0,
          visibility: showIntro ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p>
          Born and raised in Brazil with South Korean roots, I’ve always lived
          at the intersection of vibrant cultures. My family preserved aspects
          of Korean tradition within Brazil’s unique energy, shaping a
          perspective rooted in diversity and contrast.
        </p>
        <p>
          Moving to the U.S. at 12 expanded my worldview and deepened my
          appreciation for new people, ideas, and ways of thinking. It taught me
          to adapt quickly and thrive in unfamiliar environments.
        </p>
        <p>
          That curiosity eventually led me to computer science. I’m driven by
          its rapid progress and limitless possibilities, and I find joy in
          learning, building, and pushing the boundaries of what I can create.
        </p>
      </div>

      {/* Right side*/}
      <div className="flex-1 w-full md:max-w-[40vw] md:mr-[6%] space-y-8">
        {/* Education */}
        <section
          className="border-b border-gray-800 pb-6"
          style={{
            opacity: showSections[0] ? 1 : 0,
            visibility: showSections[0] ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h2 className="text-white font-serif text-xl mb-3">Education</h2>
          <div>
            <p className="text-gray-300">
              B.S. Computer Science @ University of Central Florida
            </p>
            <p className="text-gray-400 text-sm">Expected: May 2026</p>
          </div>
        </section>

        {/* Tech stack */}
        <section
          className="border-b border-gray-800 pb-6"
          style={{
            opacity: showSections[1] ? 1 : 0,
            visibility: showSections[1] ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h2 className="text-white font-serif text-xl mb-4">Tech Stack</h2>
          <div className="space-y-3">
            {technicalSkills.map((category) => (
              <div key={category.category} className="flex flex-wrap gap-2">
                <span className="text-gray-500 text-sm font-mono w-20">
                  {category.category}:
                </span>
                <div className="flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-gray-400 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fun facts */}
        <section
          style={{
            opacity: showSections[2] ? 1 : 0,
            visibility: showSections[2] ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h2 className="text-white font-serif text-xl mb-3">Random Bits</h2>
          <ul className="space-y-2 list-disc list-inside">
            {funFacts.map((fact, index) => (
              <li key={index} className="text-gray-400 text-sm">
                {fact}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
