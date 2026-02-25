import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.uniquegreektours.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // ===== Static Pages =====
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0, lastModified },
    { url: `${BASE_URL}/tours/`, changeFrequency: "weekly", priority: 0.9, lastModified },
    { url: `${BASE_URL}/about/`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${BASE_URL}/contact/`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${BASE_URL}/transfers/`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${BASE_URL}/plan-trip/`, changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: `${BASE_URL}/blog/`, changeFrequency: "weekly", priority: 0.8, lastModified },
    { url: `${BASE_URL}/terms/`, changeFrequency: "yearly", priority: 0.3, lastModified },
    { url: `${BASE_URL}/privacy/`, changeFrequency: "yearly", priority: 0.3, lastModified },
  ];

  // ===== Destination Pages =====
  const destinations = [
    "nafplio",
    "athens",
    "kalamata",
    "gythio",
    "portoheli",
    "poros",
  ];

  const destinationPages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${BASE_URL}/tours/${dest}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    lastModified,
  }));

  // ===== Individual Tour Pages =====
  const tours = [
    // Nafplio (20 tours)
    "nafplio/nafplio-city-tour",
    "nafplio/nafplio-mycenae-epidavros",
    "nafplio/nafplio-corinth-epidavros-tour",
    "nafplio/nafplio-sparta-mystras-tour",
    "nafplio/nafplio-ancient-olympia-tour",
    "nafplio/nafplio-monemvasia-tour",
    "nafplio/nafplio-argos-cultural-tour",
    "nafplio/nafplio-food-tasting-tour",
    "nafplio/nafplio-culture-taste-tour",
    "nafplio/nafplio-cooking-class",
    "nafplio/nafplio-winetasting-tour-nemea",
    "nafplio/nafplio-oil-tasting-epidavros-tour",
    "nafplio/nafplio-beekeeping-tour",
    "nafplio/nafplio-malevi-tour",
    "nafplio/nafplio-hiking-karathona-beach",
    "nafplio/nafplio-hiking-mycenae",
    "nafplio/nafplio-hiking-vytina-elati",
    "nafplio/nafplio-hiking-lousios",
    "nafplio/nafplio-kayak-tour",
    "nafplio/nafplio-sunken-kayak-tour",
    // Athens (2 tours)
    "athens/athens-city-tour",
    "athens/athens-delphi-tour",
    // Kalamata (5 tours)
    "kalamata/kalamata-ancient-olympia-tour",
    "kalamata/kalamata-olive-oil-tour",
    "kalamata/kalamata-food-tasting-tour",
    "kalamata/kalamata-mani-tour",
    "kalamata/kalamata-navarino-tour",
    // Gythio (3 tours)
    "gythio/gythio-diros-caves-tour",
    "gythio/gythio-monemvasia-tour",
    "gythio/gythio-sparta-mystras-tour",
    // Porto Heli (3 tours)
    "portoheli/portoheli-epidavros-mycenae-tour",
    "portoheli/portoheli-food-wine-tour",
    "portoheli/portoheli-sailing-tour",
    // Poros (5 tours)
    "poros/poros-city-tour",
    "poros/poros-hike-dana-tour",
    "poros/poros-kayak-to-eros-tour",
    "poros/poros-bike-tour",
    "poros/poros-winery-tour",
  ];

  const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${BASE_URL}/tours/${tour}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified,
  }));

  // ===== Blog Posts =====
  // When you add new blog posts in Sanity, add their slugs here
  // then rebuild the site for them to appear in the sitemap.
  const blogSlugs = [
    "adventure-tours-peloponnese",
    "acrocorinth",
    "ancient-argos",
    "ancient-messini",
    "archaeological-site-of-mycenae",
    "argos-greece",
    "arvanitia-beach",
    "asclepieion-of-epidaurus",
    "athens-airport",
    "athens-to-nafplio",
    "athens-to-porto-heli",
    "basic-greek-words",
    "beaches-near-porto-heli",
    "best-beaches-near-nafplio",
    "best-greek-foods",
    "best-hiking-trails-near-porto-heli",
    "best-places-to-visit-in-greece",
    "best-things-to-do-in-nafplio",
    "best-time-to-visit-greece",
    "camping-in-tolo-greece",
    "cooking-classes-in-mani-peninsula",
    "cultural-experiences-in-peloponnese",
    "cyclopean-walls-of-mycenae",
    "diolkos",
    "diros-caves",
    "do-you-tip-in-greece",
    "driving-in-greece",
    "epidaurus-festival",
    "epidaurus",
    "euphoria-retreat",
    "facts-about-sparta-in-ancient-greece",
    "fun-facts-about-greece",
    "geraki-castle",
    "greece-blue-and-white",
    "greek-coffee",
    "greek-easter-traditions",
    "greek-mythology-monsters",
    "greek-mythology",
    "greek-traditional-music",
    "greek-wine",
    "history-of-nafplio",
    "history-of-olympia",
    "is-greece-safe",
    "kalamata-greece",
    "legend-of-troy",
    "mani-peninsula",
    "monemvasia",
    "mycenae-ancient-ruins",
    "mystras",
    "nafplio-museums",
    "nafplio-travel-guide",
    "olive-oil-history",
    "olympia-ancient-games",
    "peloponnese-travel-guide",
    "things-to-do-in-porto-heli",
    "travel-tips-greece",
    "venetian-castles-greece",
    "weather-in-greece",
    "what-to-pack-greece",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified,
  }));

  return [...staticPages, ...destinationPages, ...tourPages, ...blogPages];
}
