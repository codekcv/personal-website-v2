import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import MagneticCursor from "@/components/effects/MagneticCursor";
import { GlobalFloatingParticles } from "@/components/effects/GlobalFloatingParticles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Portfolio - Full Stack Developer",
  description: "Award-winning portfolio showcasing modern web applications built with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <GlobalFloatingParticles />
          <MagneticCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
