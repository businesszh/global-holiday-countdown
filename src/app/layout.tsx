import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { seoKeywords } from "@/lib/seo-keywords";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holiday Countdown Timer | Free Global Holiday Tracker",
  description: "Countdown to the next upcoming holidays from around the world. Track days until Christmas, New Year, Halloween, Thanksgiving, and many other global celebrations with precision.",
  keywords: seoKeywords,
  openGraph: {
    title: "Holiday Countdown Timer | Free Global Holiday Tracker",
    description: "Countdown to the next upcoming holidays from around the world. Track days until Christmas, New Year, Halloween, Thanksgiving, and many other global celebrations with precision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Countdown Timer | Free Global Holiday Tracker",
    description: "Countdown to the next upcoming holidays from around the world. Track days until Christmas, New Year, Halloween, Thanksgiving, and many other global celebrations with precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
