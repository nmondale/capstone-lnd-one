import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Cardo, DM_Sans } from "next/font/google";
import TimeProviderWrapper from "../components/TimeProviderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
});

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Lock and Dam One",
  description:
    "An interactive exploration of Lock and Dam One on the Mississippi River, examining its historical, social, and environmental impact through digital art and research.",
  keywords: [
    "Mississippi River",
    "Lock and Dam One",
    "Environmental Art",
    "Digital Installation",
    "River Infrastructure",
  ],
  openGraph: {
    title: "Lock and Dam One",
    description:
      "An interactive exploration of Lock and Dam One on the Mississippi River",
    type: "website",
    locale: "en_US",
    siteName: "Lock and Dam One Project",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock and Dam One",
    description:
      "An interactive exploration of Lock and Dam One on the Mississippi River",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${dmSans.variable} ${geistMono.variable} ${cardo.variable} antialiased`}
        suppressHydrationWarning
      >
        <TimeProviderWrapper>
          <div className="bg-main min-h-screen">{children}</div>
        </TimeProviderWrapper>
      </body>
    </html>
  );
}
