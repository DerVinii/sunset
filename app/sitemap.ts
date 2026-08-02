import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const pfade = [
  "",
  "/location",
  "/catering",
  "/mieten",
  "/hochzeit",
  "/firmenfeier",
  "/private-feier",
  "/ueber-uns",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pfade.map((p) => ({
    url: `${site.domain}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
