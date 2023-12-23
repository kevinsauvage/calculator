import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CalculatorProvider from "./contexts/CalculatorContext";
import ParticlesComponent from "./components/Particles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculator App",
  description:
    "A calculator app built with Next.js, Typescript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-center`}
      >
        <ParticlesComponent />
        <CalculatorProvider>{children}</CalculatorProvider>
      </body>
    </html>
  );
}
