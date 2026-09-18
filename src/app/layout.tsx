import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800", "900"],
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
        className={`${inter.variable} ${montserrat.variable} bg-brand-light font-sans text-brand-slate antialiased`}
      >
        <LocalBusinessJsonLd />
        <Header />
        <main className="pb-mobile-cta">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
