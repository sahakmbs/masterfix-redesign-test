import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { PageTransition } from "@/components/motion/PageTransition";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  metadataBase: new URL("https://seattlemasterfix.com"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrument.variable} grain bg-parchment font-sans text-charcoal antialiased`}
      >
        <LocalBusinessJsonLd />
        <Header />
        <main className="pb-mobile-cta">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
