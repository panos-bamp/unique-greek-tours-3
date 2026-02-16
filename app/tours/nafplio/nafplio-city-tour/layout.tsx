import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio City Walking Tour - Romantic Old Town | Unique Greek Tours",
  description: "Discover romantic Nafplio on a 3-hour walking tour. Explore Land Gate, Psaromahalas quarter, Syntagma Square, and charming alleys with food tastings. €80 per person.",
  keywords: "Nafplio walking tour, Nafplio old town, Greece first capital, Venetian architecture, Syntagma Square Nafplio, Psaromahalas, romantic Greece, Nafplio guided tour",
  openGraph: {
    title: "Nafplio City Walking Tour - Explore Greece's Most Romantic Town",
    description: "Walk through historic Nafplio, Greece's first capital. Discover Venetian gates, Ottoman heritage, and charming alleys on this 3-hour guided tour with food tastings.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Nafplio City Walking Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafplio City Walking Tour - Romantic Old Town",
    description: "Explore charming Nafplio on foot with food tastings. Visit historic sites and learn about Greece's first capital.",
    images: ["https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://uniquegreektours.com/tours/nafplio/nafplio-city-tour",
  },
};

export default function NafplioCityTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Nafplio City Walking Tour",
    description: "Discover romantic Nafplio on 3-hour walking tour with food tastings. Walk through Land Gate, explore Psaromahalas Greek quarter, admire Venetian and Ottoman architecture, visit Syntagma Square with first Greek parliament, and wander picturesque alleys.",
    image: [
      "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
      "https://uniquegreektours.com/images/nafplio-city-tour-hero-2.jpg",
      "https://uniquegreektours.com/images/nafplio-city-tour-hero-3.jpg"
    ],
    touristType: ["Cultural Tourist", "History Lover", "Architecture Enthusiast", "Photography Enthusiast"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Land Gate Entrance",
            description: "Walk through historic Land Gate, only entrance during Venetian occupation."
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Psaromahalas Quarter",
            description: "Explore traditional Greek quarter with narrow alleys and local architecture."
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Syntagma Square",
            description: "Visit Greece's first parliament building and admire Venetian architecture."
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Old Town Alleys",
            description: "Wander charming streets with food tastings at local spots."
          }
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "80",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://fareharbor.com/embeds/book/uniquegreektours/items/269608/",
      validFrom: "2024-01-01"
    },
    provider: {
      "@type": "TouristInformationCenter",
      name: "Unique Greek Tours",
      url: "https://uniquegreektours.com",
      image: "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tsokri 2",
        addressLocality: "Argos",
        addressRegion: "Peloponnese",
        postalCode: "21200",
        addressCountry: "GR"
      },
      telephone: "+30-27520-24444",
      email: "info@uniquegreektours.com"
    },
    location: {
      "@type": "Place",
      name: "Nafplio, Greece",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nafplio",
        addressRegion: "Argolida",
        addressCountry: "Greece"
      }
    },
    duration: "PT3H",
    inLanguage: "en",
    tourBookingPage: "https://fareharbor.com/embeds/book/uniquegreektours/items/269608/"
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
