"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Don't show footer on traveling page
  if (pathname.includes("/traveling")) {
    return null;
  }

  return (
    <footer className="relative md:fixed bottom-0 left-0 right-0 text-gray-400 text-xs border-gray-800 z-20">
      <div className="flex justify-end items-center px-6 py-4">
        <span>© 2025 made by felipe min</span>
      </div>
    </footer>
  );
}
