import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { SmokeyCursor } from "@/app/components/SmokeyCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Luornor Nathan Tettey | Software Engineer",
  description:
    "Portfolio of Luornor Nathan Tettey - software engineer focused on Django/DRF, React, and production-ready product systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} relative overflow-x-hidden bg-transparent antialiased`}
      >
        <SmokeyCursor
          simulationResolution={128}
          dyeResolution={1024}
          densityDissipation={0.985}
          velocityDissipation={0.985}
          pressureIterations={12}
          splatRadius={0.2}
          splatForce={4800}
          colorUpdateSpeed={0.18}
          curl={24}
          opacity={0.78}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
