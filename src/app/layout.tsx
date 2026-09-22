import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/providers/theme-provider";
import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Dipendra Sharma", 
    type: "website",
    images: [
       {
         url: "/assets/profile.png"
       }
     ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  verification: {google: "-6pkHi3bGPEYcHlhs8vOHw1QNgHVWnIg2IyCIuz4u_8"}
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`} data-scroll-behavior="smooth">
      <link rel="manifest" href="manifest.json" />
      <body className="min-h-screen bg-base font-sans text-ink antialiased">
        <ThemeProvider>
          <Analytics />
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dipendra Sharma",
              alternateName: "Dipesh Sharma",
              url: "https://www.dipsharma.me",
              image: "https://www.dipsharma.me/assets/profile.png",
              sameAs: [
                "https://github.com/tech-dipesh",
                "https://linkedin.com/in/tech-dipesh",
                "https://leetcode.com/u/tech-dipesh",
                "https://codeforces.com/profile/dipeshnoobs"
              ],
              jobTitle: "Backend Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Chitkara University"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
