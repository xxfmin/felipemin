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
    // Add CSS to hide audio controls
    const style = document.createElement("style");
    style.textContent = `
      video::-webkit-media-controls-volume-slider,
      video::-webkit-media-controls-mute-button,
      video::-webkit-media-controls-volume-slider-container,
      video::-webkit-media-controls-volume-control-container {
        display: none !important;
      }
      video::-moz-media-controls-volume-slider,
      video::-moz-media-controls-mute-button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

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

          <p>
            Sous is a multi-agent AI system using{" "}
            <ChaosLink href="https://ai.pydantic.dev/">PydanticAI</ChaosLink> to
            orchestrate vision and natural language processing agents, enabling
            context-aware input routing and structured output validation.
            Basically an intelligent cooking assistant that transforms everyday
            ingredients into personalized culinary experiences.
          </p>

          <p>
            The system handles diverse user inputs, from fridge photos to
            natural language queries, by routing them to specialized agents that
            work in concert to deliver tailored recipe recommendations and
            cooking guidance.
          </p>

          <div className="space-y-3">
            <p>Dashboard:</p>
            <video
              controls
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src="/projects/sous-dashboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-3">
            <p>Fridge analysis:</p>
            <video
              controls
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src="/projects/sous-fridgeagent.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Leverages{" "}
                <ChaosLink href="https://ai.google.dev/gemini-api/docs/image-understanding">
                  Gemini Vision
                </ChaosLink>{" "}
                to analyze fridge photos and extract ingredients with high
                accuracy
              </li>
              <li>
                Implements a multi-step workflow: image analysis → ingredient
                extraction → smart ingredient selection → recipe matching
              </li>
              <li>
                Provides real-time streaming updates showing progress through
                each analysis step
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p>Natural language recipe search:</p>
            <video
              controls
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source src="/projects/sous-recipequery.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Built an intent classification system that understands complex
                recipe queries like &quot;healthy vegetarian dinner without nuts
                in under 30 minutes&quot;
              </li>
              <li>
                Extracts multiple search parameters (cuisine, dietary
                restrictions, cooking time, ingredients) from natural language
              </li>
              <li>
                Integrates with{" "}
                <ChaosLink href="https://spoonacular.com/food-api">
                  Spoonacular API
                </ChaosLink>{" "}
                for comprehensive recipe database access
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p>Cooking related questions:</p>
            <video
              controls
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source
                src="/projects/sous-cookingquestions.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Implements a context-aware agent that answers cooking questions
                and provides culinary guidance
              </li>
            </ul>
          </div>

          <p className="text-gray-500">
            currently i&aposm trying to implement aws s3 and amazon tesseract so
            that users can save recipes by uploading a recipe image/doc
          </p>
        </div>
      </div>
    </div>
  );
}
