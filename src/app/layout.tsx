import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luornor Nathan Tettey | Software Engineer",
  description: "Portfolio of Luornor Nathan Tettey — software engineer (Django/DRF, React/Next.js).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
