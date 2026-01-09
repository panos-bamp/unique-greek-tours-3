import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio City Walking Tour - Romantic Old Town | Unique Greek Tours",
  description: "Discover romantic Nafplio on a 3-hour walking tour. Explore Land Gate, Psaromahalas quarter, Syntagma Square, and charming alleys. Learn about Greece's first capital with expert guide. Perfect for first-time visitors.",
  keywords: "Nafplio walking tour, Nafplio old town, Greece first capital, Venetian architecture, Syntagma Square Nafplio, Psaromahalas, romantic Greece, Nafplio guided tour",
  openGraph: {
    title: "Nafplio City Walking Tour - Explore Greece's Most Romantic Town",
    description: "Walk through historic Nafplio, Greece's first capital. Discover Venetian gates, Ottoman heritage, and charming alleys on this 3-hour guided tour.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Nafplio City Walking Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafplio City Walking Tour - Romantic Old Town",
    description: "Explore charming Nafplio on foot. Visit historic sites, picturesque alleys, and learn about Greece's first capital from expert guide.",
    images: ["https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg"],
  },
};

export default function NafplioCityTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Nafplio City Walking Tour",
            "description": "Discover romantic Nafplio on 3-hour walking tour. Walk through Land Gate, explore Psaromahalas Greek quarter, admire Venetian and Ottoman architecture, visit Syntagma Square with first Greek parliament, and wander picturesque alleys.",
            "image": [
              "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/nafplio-city-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/nafplio-city-tour-hero-3.jpg"
            ],
            "touristType": ["Cultural Tourist", "History Lover", "Architecture Enthusiast", "Photography Enthusiast"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Land Gate Entrance",
                    "description": "Walk through historic Land Gate, only entrance during Venetian occupation."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Psaromahalas Quarter",
                    "description": "Explore oldest Greek quarter, only street for Greeks during Turkish rule."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Picturesque Alleys",
                    "description": "Wander charming alleys with ornate doors and timeless atmosphere."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Syntagma Square",
                    "description": "Visit heart of Nafplion with Venetian arsenal and first Greek parliament."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Historical Stories",
                    "description": "Learn about Greece's first capital and Venetian, Ottoman, Greek heritage."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "45",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-city-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/nafplio-city-tour-hero-1.jpg",
              "priceRange": "€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tsokri 2",
                "addressLocality": "Argos",
                "addressRegion": "Peloponnese",
                "postalCode": "21200",
                "addressCountry": "GR"
              },
              "telephone": "+30-27520-24444",
              "email": "info@uniquegreektours.com"
            },
            "duration": "PT3H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
