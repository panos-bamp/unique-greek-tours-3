import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porto Heli Private Sailing Tours - Spetses, Hydra & Nafplio | Unique Greek Tours",
  description: "Private sailing charters from Porto Heli exploring the Greek Riviera, Spetses, Hydra, and Nafplio. Full-day luxury cruises with swimming, snorkeling, and island hopping.",
  keywords: "Porto Heli sailing, private yacht charter Greece, Spetses cruise, Hydra sailing tour, Nafplio boat trip, Greek Riviera sailing, Argosaronic Gulf",
  openGraph: {
    title: "Porto Heli Private Sailing Tours - Spetses, Hydra & Nafplio | Unique Greek Tours",
    description: "Private sailing charters from Porto Heli exploring the Greek Riviera, Spetses, Hydra, and Nafplio with swimming and island hopping.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/sailing-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Porto Heli Sailing Tour - private yacht charter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto Heli Private Sailing Tours",
    description: "Luxury private sailing charters exploring Spetses, Hydra, Nafplio and the Greek Riviera.",
    images: ["https://unique-greek-tours-3.vercel.app/images/sailing-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/portoheli/portoheli-sailing-tour",
  },
};

export default function SailingTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Porto Heli Private Sailing Tours",
    description: "Private sailing charters from Porto Heli exploring the Greek Riviera, Spetses, Hydra, and Nafplio. Full-day luxury cruises with swimming, snorkeling, and island hopping.",
    image: [
      "https://unique-greek-tours-3.vercel.app/images/sailing-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/sailing-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/sailing-hero-3.jpg"
    ],
    touristType: ["Couples", "Families", "Luxury Travelers", "Island Hoppers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Porto Heli Riviera Option",
            description: "Cruise the famous Riviera Coastline to cosmopolitan Spetses"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Dokos & Hydra Option",
            description: "Snorkeling at world's oldest shipwreck site, visit car-free Hydra"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Nafplio Option",
            description: "Sail to Greece's first capital with swimming stops at Romvi and Daskalio"
          }
        }
      ]
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "800",
      highPrice: "1500",
      offerCount: "3",
      availability: "https://schema.org/InStock",
      url: "https://unique-greek-tours-3.vercel.app/tours/portoheli/portoheli-sailing-tour"
    },
    provider: {
      "@type": "TouristInformationCenter",
      name: "Unique Greek Tours",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto Heli",
        addressRegion: "Argolida",
        addressCountry: "GR"
      },
      telephone: "+30-27540-24444",
      email: "info@uniquegreektours.com"
    },
    duration: "PT8H",
    inLanguage: "en",
    tourBookingPage: "https://unique-greek-tours-3.vercel.app/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
