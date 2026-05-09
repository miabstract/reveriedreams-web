import type { Metadata, Viewport } from "next";
import { Inter, Cormorant } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const siteUrl = "https://reveriedreams.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Reverie",
  description: "An AI-powered dream journal.",
  applicationName: "Reverie",
  keywords: [
    "dream journal",
    "dreams",
    "AI dream interpretation",
    "Reverie",
    "iOS dream app",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Reverie",
    title: "Reverie",
    description: "An AI-powered dream journal.",
    images: [
      {
        url: "/logos/wordmark.png",
        width: 1200,
        height: 630,
        alt: "Reverie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverie",
    description: "An AI-powered dream journal.",
    images: ["/logos/wordmark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0612",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight-base text-text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
