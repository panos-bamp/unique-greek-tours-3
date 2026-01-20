import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Three Peaks City Tour | Hiking & Sightseeing Experience",
  description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
  keywords: "Poros city tour, Poros hiking, three peaks Poros, Clock Tower Poros, Saronic Gulf views, Poros sightseeing, Greek island hiking",
  openGraph: {
    title: "Poros Three Peaks City Tour | Hiking & Sightseeing Experience",
    description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
    images: [
      {
        url: "https://uniquegreektours.com/images/city-tour-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Poros Three Peaks City Tour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Three Peaks City Tour | Hiking & Sightseeing Experience",
    description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower.",
    images: ["https://uniquegreektours.com/images/city-tour-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://uniquegreektours.com/tours/poros/poros-city-tour",
  },
};

export default function PorosCityTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Poros Three Peaks City Tour",
    description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
    image: "https://uniquegreektours.com/images/city-tour-hero-1.jpg",
    touristType: ["Couples", "Families", "Adventure Seekers", "Culture Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Agioi Anargyroi Chapel",
          description: "First peak with magnificent views of the Saronic Gulf"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ottoman Stone Windmill",
          description: "Historic windmill from the Ottoman Empire period"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Traditional Courtyard",
          description: "Local lemonade tasting in a traditional setting"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Clock Tower",
          description: "The iconic landmark of Poros island"
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "45",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
    provider: {
      "@type": "TourProvider",
      name: "Unique Greek Tours",
      url: "https://uniquegreektours.com"
    },
    location: {
      "@type": "Place",
      name: "Poros Island, Greece",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poros",
        addressRegion: "Saronic Gulf",
        addressCountry: "Greece"
      }
    },
    duration: "PT2H30M"
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
