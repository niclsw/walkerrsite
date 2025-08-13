import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walkerr.net — Nick Walker",
  description: "Personal site of Nick Walker. Selected projects, writing, and contact.",
  metadataBase: new URL("https://walkerr.net"),
  openGraph: {
    title: "Walkerr.net — Nick Walker",
    description:
      "Personal site of Nick Walker. Selected projects, writing, and contact.",
    url: "https://walkerr.net",
    siteName: "Walkerr.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walkerr.net — Nick Walker",
    description:
      "Personal site of Nick Walker. Selected projects, writing, and contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MouseGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
