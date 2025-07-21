import type { Metadata } from "next";
import "./globals.css";
import BackgroundNoise from "@/components/global/BackgroundNoise";
import MobileNav from "@/components/global/MobileNav";
import Sidebar from "@/components/global/Sidebar";

export const metadata: Metadata = {
  title: "Felipe Min",
  description: "Felipe Min's personal portfolio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Background Noise Effect */}
          <BackgroundNoise />

          {/* Shows only mobile */}
          <MobileNav />

          {/* Main content container */}
          <div className="relative min-h-screen md:h-[calc(100vh-2.5rem)]">
            {/* Sidebar for desktop view */}
            <div className="hidden md:block">
              <Sidebar />
            </div>

            {/* Main content */}
            <div className="min-h-screen md:h-full ml-0 md:ml-40 pt-16 md:pt-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
