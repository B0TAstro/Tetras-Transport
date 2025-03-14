// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site", // Update the title here later
  description: "A personal portfolio site built with Sanity and Next.js", // Update the description here later
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}