"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import ChaosLink from "@/components/ui/ChaosLink";

export default function Sous() {
  const [showContent, setShowContent] = useState(false);
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer",
    "NextAuth.js",
    "OAuth",
    "MongoDB",
    "FastAPI",
    "Python",
    "PydanticAI",
    "Google Gemini AI",
    "Spoonacular API",
    "Zod",
  ];

  useEffect(() => {
    // Start animation with delay
    const timer = setTimeout(() => setShowContent(true), 200);

    // Cleanup timer
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen relative flex px-8 md:px-24 lg:px-48 xl:px-64 2xl:px-96">
      <div
        className="p-8 md:p-[6%] w-full flex flex-col"
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Back button */}
        <div className="mb-16">
          <Link
            href="/projects"
            className="text-gray-400 hover:text-white text-sm transition-colors inline-block border-b border-dotted border-gray-600 pb-1"
          >
            ← back to projects
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col space-y-8">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-4xl font-serif text-white">Sous</h1>
            <div className="space-x-6">
              <ChaosLink href="/projects/sous">demo coming soon</ChaosLink>
              <ChaosLink href="https://github.com/xxfmin/recipe-agent">
                source code
              </ChaosLink>
            </div>
          </div>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <p
                key={idx}
                className="inline-flex items-center px-2.5 py-0.5 text-xs font-mono text-gray-400 border border-gray-700 rounded-lg"
              >
                {tech}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/projects/sous-home.png"
              alt="Sous Landing Page"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
