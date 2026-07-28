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
    default: `${site.name} — Location, Catering & Equipment in ${site.region}`,
    template: `%s | ${site.name}`,
  },
  description: `Feiern in ${site.region}: Eventlocation, Catering & Partyservice, Bierwagen- und Equipment-Verleih, Eventplanung — alles aus einer Hand. Klare Preise, Angebot bis zum nächsten Werktag 12 Uhr.`,
};

/** LocalBusiness-Schema (Plan Kap. 8) — wichtigstes Signal für Local Pack & AEO. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  url: site.domain,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.region,
    addressCountry: "DE",
  },
  areaServed: `${site.region} (Location ${site.serviceAreas.location.radiusKm} km, Catering ${site.serviceAreas.catering.radiusKm} km, Equipment ${site.serviceAreas.equipment.radiusKm} km)`,
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-17:00",
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
