import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VDJT27S1YL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VDJT27S1YL');
          `}
        </Script>
        
        {/* NativeBanner Ad */}
        <Script
          async="async"
          data-cfasync="false"
          src="//pl27160036.profitableratecpm.com/9264b32f2c322b50c937d621949c4054/invoke.js"
          strategy="afterInteractive"
        />
        
        {/* SocialBar Ad */}
        <Script
          type="text/javascript"
          src="//pl27160043.profitableratecpm.com/a5/7f/d9/a57fd975ece4186b713973afa2392c7e.js"
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* NativeBanner Ad Container */}
        <div id="container-9264b32f2c322b50c937d621949c4054"></div>
        
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
