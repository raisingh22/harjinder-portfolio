import type { Metadata } from "next";
import { Space_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harjinder Singh — Mobile Software Engineer",
  description:
    "React Native & React.js Developer with 4+ years of experience building scalable cross-platform mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
