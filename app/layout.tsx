import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyBar } from "@/components/sticky-bar";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name}: Eventlocation, Buffet und Verleih in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: `Eventlocation in ${site.city} für rund 100 Gäste, mit Tanzfläche, großem Außenhof und Cocktailwagen. Dazu Buffet-Catering und Equipment zum Mieten.`,
};

/** LocalBusiness-Schema. Nur belegte Angaben: ohne Telefon, E-Mail und PLZ. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.domain,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.region,
    addressCountry: "DE",
  },
  areaServed: site.region,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
