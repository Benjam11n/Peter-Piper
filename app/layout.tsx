import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const newRocker = localFont({
  src: "./fonts/NewRockerVF.ttf",
  variable: "--font-new-rocker",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Peter Piper Luxury Chili",
  description: "Discover rare and exotic chilies for the distinguished palate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${newRocker.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
