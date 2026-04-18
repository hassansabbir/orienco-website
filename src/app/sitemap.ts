import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { mainNavigation } from "@/constants/navigation";
import { mockCars } from "@/constants/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = mainNavigation.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const carRoutes = mockCars.map((car) => ({
    url: `${siteConfig.url}/cars/${car.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...carRoutes];
}
