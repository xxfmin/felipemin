"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import ChaosLink from "@/components/ui/ChaosLink";

export default function DeltaPalette() {
  const [showContent, setShowContent] = useState(false);
  const technologies = [
    "Next.js",
    "React",
    "Typescript",
    "Tailwind CSS",
    "Oklab",
    "color-blind simulation",
    "Culori",
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
            <h1 className="text-4xl font-serif text-white">Delta Palette</h1>
            <div className="space-x-6">
              <ChaosLink href="https://delta-palette.vercel.app/">
                demo
              </ChaosLink>
              <ChaosLink href="https://github.com/xxfmin/delta-palette">
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
              src="/projects/deltapalette-home.png"
              alt="Delta Palette"
              width={1200}
              height={800}
              className="w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </div>

          <p className="text-gray-400 mb-8">
            My mom has{" "}
            <ChaosLink href="https://www.color-blindness.com/deuteranopia-red-green-color-blindness/">
              deuteranopia
            </ChaosLink>{" "}
            (form of color vision deficiency), and on our trips she'd always
            squint at transit maps, unable to tell the lines apart. That is
            because she has difficulty distinguishing between red and green
            colors.
          </p>

          <p>
            Hence, the goal of this project was to create a color blind-focused
            accessibility tool that generates clearer, more inclusive color
            palettes.
          </p>

          <div className="flex flex-row w-full gap-x-3">
            <div className="w-1/2">
              <Image
                src="/projects/map-normal.png"
                alt="map no cvd"
                width={800}
                height={600}
                quality={90}
                className="rounded-lg shadow-lg w-full h-auto mb-2"
              />
              <p className="text-center">How I see it</p>
            </div>

            <div className="w-1/2">
              <Image
                src="/projects/map-cvd.jpg"
                alt="map with cvd"
                width={800}
                height={600}
                quality={90}
                className="rounded-lg shadow-lg w-full h-auto mb-2"
              />
              <p className="text-center">How she sees it</p>
            </div>
          </div>
          <p>
            <span className="text-white font-bold">Then I realized: </span>if I
            could generate palettes optimized for both normal vision and
            deuteranopia, I could try to make maps more usable.
          </p>

          <div className="flex flex-col gap-y-3">
            <p>
              When I set out to built this generator, I knew I had to figure out
              3 things:
            </p>
            <ol className="list-decimal list-inside ml-4 gap-y-1 ">
              <li>
                A color space where numbers match perception →{" "}
                <ChaosLink href="https://bottosson.github.io/posts/oklab/">
                  Oklab
                </ChaosLink>
              </li>
              <li>
                A simulation of color vision deficiency (CVD) →{" "}
                <ChaosLink href="https://bottosson.github.io/posts/oklab/">
                  Culori
                </ChaosLink>{" "}
                for color conversions,{" "}
                <ChaosLink href="https://bottosson.github.io/posts/oklab/">
                  color-blind
                </ChaosLink>{" "}
                to simulate CVD
              </li>
              <li>
                An optimization that keeps colors “far apart” →{" "}
                <ChaosLink href="https://www.mathworks.com/matlabcentral/fileexchange/70215-maximally-distinct-color-generator">
                  Maximin Optimization
                </ChaosLink>
              </li>
            </ol>
          </div>
          <div className="space-y-3">
            <p>
              Experiment with my friend with partial red-green color blindness:
            </p>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/cG8QBCUJcv0"
                title="Testing Delta Palette with Sunny :)"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
