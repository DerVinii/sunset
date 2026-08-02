import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* /danke und die Referenz-Beispiele bleiben draußen: noindex-Seiten gehören nicht in die Sitemap. */
const pfade = [
  "",
  "/leistungen",
  "/referenzen",
  "/ablauf",
  "/ueber-uns",
  "/faq",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pfade.map((p) => ({
    url: `${site.domain}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
