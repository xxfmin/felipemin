"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import ChaosLink from "@/components/ui/ChaosLink";

export default function Odyssey() {
  const [showContent, setShowContent] = useState(false);
  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Typescript",
    "Tailwind CSS",
    "MongoDB",
    "JWT Auth",
    "Google Maps API",
    "Google Gemini AI",
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
            <h1 className="text-4xl font-serif text-white">Odyssey</h1>
            <div className="space-x-6">
              <ChaosLink href="https://odyssey-seven-chi.vercel.app/">
                demo
              </ChaosLink>
              <ChaosLink href="https://github.com/xxfmin/odyssey">
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
              src="/projects/odyssey-home.png"
              alt="Odyssey Landing Page"
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

          <p>
            I wanted my first full-stack project to be about something I am
            passionate about, so I decided to make a travel itinerary builder
            that allows users to map out their trips, explore destinations, and
            track expenses.
          </p>

          <div className="space-y-3">
            <p>Trip page example: </p>
            <Image
              src="/projects/odyssey-main.png"
              alt="Odyssey Tokyo Trip"
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

          <div className="space-y-3">
            <p>Exploring activities from the trip destination: </p>
            <Image
              src="/projects/odyssey-activities.png"
              alt="Odyssey Tokyo Activities"
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

          <div className="space-y-3">
            <p>Expense tracking: </p>
            <Image
              src="/projects/odyssey-expenses.png"
              alt="Odyssey Tokyo Activities"
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
