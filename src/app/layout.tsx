import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Header from '@/c/Header'
import Footer from '@/c/Footer'
import { Analytics } from '@vercel/analytics/react';

import { ToastContainer } from 'react-toastify'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipendra Sharma | Portfolio ",
  description: "Full‑stack developer focused on React, Node.js, PostgreSQL, and cloud infrastructure. I turn complex problems into simple, elegant products.",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Analytics/>
        <ToastContainer/>
        <Footer/>
      </body>
    </html>
  );
}
