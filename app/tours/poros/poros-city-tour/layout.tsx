import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Three Peaks City Tour - Hiking & Sightseeing | Unique Greek Tours",
  description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
  keywords: "Poros city tour, Poros hiking, three peaks Poros, Clock Tower Poros, Saronic Gulf views, Poros sightseeing, Greek island hiking",
  openGraph: {
    title: "Poros Three Peaks City Tour - Hiking & Sightseeing | Unique Greek Tours",
    description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/city-tour-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Poros Three Peaks City Tour - panoramic views of Saronic Gulf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Three Peaks City Tour - Hiking & Sightseeing",
    description: "Connect the three peaks of Poros island with stunning Saronic Gulf views, historic landmarks, and local hospitality.",
    images: ["https://unique-greek-tours-3.vercel.app/images/city-tour-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-city-tour",
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
    image: [
      "https://unique-greek-tours-3.vercel.app/images/city-tour-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/city-tour-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/city-tour-hero-3.jpg"
    ],
    touristType: ["Couples", "Families", "Adventure Seekers", "Culture Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Agioi Anargyroi Chapel",
            description: "First peak with magnificent views of the Saronic Gulf and Galatas canal"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Ottoman Stone Windmill",
            description: "Historic windmill from the Ottoman Empire period"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Traditional Courtyard",
            description: "Local lemonade tasting in a traditional Greek setting"
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Clock Tower",
            description: "The iconic landmark and trademark of Poros island"
          }
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "45",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-city-tour"
    },
    provider: {
      "@type": "TouristInformationCenter",
      name: "Unique Greek Tours",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poros",
        addressRegion: "Saronic Gulf",
        addressCountry: "GR"
      },
      telephone: "+30-22980-24444",
      email: "info@uniquegreektours.com"
    },
    duration: "PT2H30M",
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
