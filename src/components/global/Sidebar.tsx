"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/projects", label: "projects" },
    { href: "/experience", label: "experience" },
    { href: "/about", label: "about me" },
    { href: "/traveling", label: "traveling" },
  ];

  return (
    <aside className="absolute left-0 top-0 h-full w-40 border-r border-gray-800 flex flex-col p-[2%] z-20">
      {/* Title */}
      <div className="mb-10 font-['var(--font-eb-garamond)'] italic text-2xl font-light text-decoration-none outline-none border-none">
        <Link href="/" className="text-gray-400">
          F.M.
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
