"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Traveling() {
  const [showContent, setShowContent] = useState(false);

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
        className="p-8 md:p-[6%] w-full flex flex-col space-y-8"
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p>⚲ Japan</p>
        <Image
          src="/traveling/japan1.jpg"
          alt="japan1"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
        <Image
          src="/traveling/japan2.jpg"
          alt="japan2"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ South Korea</p>
        <Image
          src="/traveling/korea1.JPG"
          alt="korea1"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
        <Image
          src="/traveling/korea2.JPG"
          alt="korea2"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ Italy</p>
        <Image
          src="/traveling/rome.jpg"
          alt="rome"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ France</p>
        <Image
          src="/traveling/paris.jpg"
          alt="paris"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ Mexico</p>
        <Image
          src="/traveling/mexico.jpg"
          alt="mexico"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ Utah, USA</p>
        <Image
          src="/traveling/utah.jpg"
          alt="utah"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ California, USA</p>
        <Image
          src="/traveling/la.jpg"
          alt="la"
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />

        <p>⚲ Colorado, USA</p>
        <Image
          src="/traveling/colorado.jpg"
          alt="colorado"
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
    </div>
  );
}
