import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/firmenfeier",
    "/hochzeit",
    "/private-feier",
    "/partyraum-mieten",
    "/leistungen",
    "/location",
    "/catering",
    "/partyservice",
    "/mieten",
    "/eventservice",
    "/preise",
    "/ueber-uns",
    "/kontakt",
  ];
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/firmenfeier" || route === "/mieten" ? 0.9 : 0.7,
  }));
}
