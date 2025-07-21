"use client";

import { useEffect, useState } from "react";
import ChaosLink from "../ui/ChaosLink";
import Planet from "../misc/Planet";

export default function HomeContent() {
  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showPara4, setShowPara4] = useState(false);
  const [showDivider, setShowDivider] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);

  useEffect(() => {
    // Automatically start the staggered animation on component mount
    setTimeout(() => setShowPara1(true), 200); // First paragraph
    setTimeout(() => setShowPara2(true), 400); // Second paragraph
    setTimeout(() => setShowPara3(true), 600); // Third paragraph
    setTimeout(() => setShowPara4(true), 800); // Fourth paragraph
    setTimeout(() => setShowDivider(true), 1000); // HR divider
    setTimeout(() => setShowSocials(true), 1200); // Social links
    setTimeout(() => setShowPlanet(true), 1400); // Planet last
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-full px-8 md:px-0">
      {/* Left content area*/}
      <div className="flex-1 flex flex-col justify-center md:pl-[5%] max-w-full md:pb-0">
        <div
          className="flex flex-col space-y-6 md:space-y-8 max-w-full md:max-w-2xl w-full md:w-[30vw] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            lineHeight: "clamp(1.4, 1.6, 1.7)",
          }}
        >
          {/* Content */}
          <div
            className="space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-6"
            style={{
              opacity: showPara1 || showPara2 || showPara3 || showPara4 ? 1 : 0,
              visibility:
                showPara1 || showPara2 || showPara3 || showPara4
                  ? "visible"
                  : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <p
              style={{
                opacity: showPara1 ? 1 : 0,
                visibility: showPara1 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              I like building where software meets the real world, and tiny
              optimizations or insights can make a big difference. I’ve chased
              this feeling across research opportunities, hackathons, and
              full-stack apps I built from scratch. Oh, and I study CS at the{" "}
              <ChaosLink href="https://www.cs.ucf.edu/">
                University of Central Florida
              </ChaosLink>
              .
            </p>
            <p
              style={{
                opacity: showPara2 ? 1 : 0,
                visibility: showPara2 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              Previously, I have interned at{" "}
              <ChaosLink href="https://www.intel.com/content/www/us/en/homepage.html">
                Intel
              </ChaosLink>{" "}
              twice doing{" "}
              <ChaosLink href="https://www.intel.com/content/www/us/en/security/security-practices/security-research/offensive-research.html">
                security reseach
              </ChaosLink>{" "}
              and worked as a Solutions Architect intern at{" "}
              <ChaosLink href="https://www.accenture.com/us-en">
                Accenture
              </ChaosLink>{" "}
              to integrate Microsoft Teams at{" "}
              <ChaosLink href="https://its.fsu.edu/article/fsu-its-accenture-internship-program">
                FSU
              </ChaosLink>
              . My favorite personal{" "}
              <ChaosLink href="/projects">projects</ChaosLink> were making a
              multi-agent AI platform that combine vision and language a tool
              for individuals with color vision deficiency.
            </p>

            <p
              style={{
                opacity: showPara3 ? 1 : 0,
                visibility: showPara3 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              I’ve learned to love the mess that comes with real projects:
              hitting a wall and rethinking everything. That’s where the good
              stuff happens. I don’t pretend to know it all, but I ask the right
              questions, and I’m not afraid to rebuild until it’s right.
            </p>

            <p
              style={{
                opacity: showPara4 ? 1 : 0,
                visibility: showPara4 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              In my free time, I love{" "}
              <ChaosLink href="/traveling">traveling</ChaosLink>, trying new
              food spots with my girlfriend, and rock climbing with friends.
            </p>
          </div>

          <hr
            className="border-gray-800 w-full md:w-[30vw]"
            style={{
              opacity: showDivider ? 1 : 0,
              visibility: showDivider ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          />

          {/* Social Links at bottom */}
          <div
            className="social-links-bottom space-y-1 sm:space-y-2 text-sm sm:text-base"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
              opacity: showSocials ? 1 : 0,
              visibility: showSocials ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <p className="flex flex-row gap-2 items-center">
              <span>linkedin</span>
              <ChaosLink href="https://www.linkedin.com/in/felipe-min/">
                /felipe-min ↗
              </ChaosLink>
            </p>

            <p className="flex flex-row gap-2 items-center">
              <span>github</span>
              <ChaosLink href="https://github.com/xxfmin">@xxfmin ↗</ChaosLink>
            </p>

            <p className="flex flex-row gap-2 items-center">
              <span>spotify</span>
              <ChaosLink href="https://open.spotify.com/user/felipemin">
                @felipemin ↗
              </ChaosLink>
            </p>
          </div>
        </div>
      </div>

      {/* Right side ASCII art */}
      <div className="hidden md:flex items-center justify-center mt-12 md:mt-0 md:pr-[8%]">
        <div
          id="Planet"
          style={{
            opacity: showPlanet ? 1 : 0,
            visibility: showPlanet ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Planet />
        </div>
      </div>
    </div>
  );
}
