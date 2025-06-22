import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelezara Vejseloski",
  description: "Zelezara Vejseloski",
};

export const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
