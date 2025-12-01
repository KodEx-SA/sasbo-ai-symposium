import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import SEOHead from "@/components/SEOHead";
import "./globals.css";

// Techno font for headings
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

// Keep Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasbo AI Symposium 2026 | Shaping the Future of Work in South Africa",
  description:
    "Join labour leaders, financial experts, and policymakers at the 2026 Sasbo AI Symposium. Exploring ethical AI integration in South Africa's financial sector. Register now for this groundbreaking event in Johannesburg.",
  keywords: [
    "AI Symposium",
    "Sasbo",
    "South Africa",
    "Financial Sector",
    "AI Conference",
    "Artificial Intelligence",
    "Labour Union",
    "Johannesburg Conference",
    "AI Ethics",
    "Worker Protection",
  ],
  openGraph: {
    title: "Sasbo AI Symposium 2026",
    description:
      "Shaping the Future of Work in South Africa's Financial Sector",
    type: "website",
    locale: "en_ZA",
    siteName: "Sasbo AI Symposium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasbo AI Symposium 2026",
    description:
      "Shaping the Future of Work in South Africa's Financial Sector",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sasbo.org.za/ai-symposium", // Update with actual URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <SEOHead />
      </head>
      <body className={`${orbitron.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
