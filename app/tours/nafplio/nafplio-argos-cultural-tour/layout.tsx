import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argos Cultural Tour - Oldest City in Europe | Unique Greek Tours",
  description: "Discover Argos, Europe's oldest continuously inhabited city. Visit Lerna archaeological site, Elliniko Pyramid, ancient theater, and Byzantine museum. 5-hour cultural immersion from Nafplion through Mycenaean civilization.",
  keywords: "Argos tour, oldest city Europe, Mycenaean civilization, Lerna site, Elliniko Pyramid, ancient theater Argos, Byzantine Greece, archaeological tour",
  openGraph: {
    title: "Argos Cultural Tour - Journey Through Europe's Oldest City",
    description: "Explore Argos, the oldest city in continental Europe. Visit ancient sites including Lerna, Elliniko Pyramid, and the majestic ancient theater.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/argos-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Argos Cultural Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argos Cultural Tour - Oldest City in Europe",
    description: "Discover the timeless allure of Argos, a pivotal center of Mycenaean civilization. Visit ancient sites and explore millennia of Greek history.",
    images: ["https://uniquegreektours.com/images/argos-tour-hero-1.jpg"],
  },
};

export default function ArgosTourLayout({
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
            "name": "Argos Cultural Tour",
            "description": "Discover Argos, the oldest city in continental Europe and pivotal center of Mycenaean civilization. Visit Lerna archaeological site, Elliniko Pyramid, ancient theater, Byzantine museum, and St. Peter's Square.",
            "image": [
              "https://uniquegreektours.com/images/argos-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/argos-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/argos-tour-hero-3.jpg"
            ],
            "touristType": ["History Lover", "Cultural Tourist", "Archaeological Enthusiast", "Educational Tourist"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Lerna Archaeological Site",
                    "description": "Visit the legendary site where Hercules defeated the Lernaean Hydra."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Pyramid of Elliniko",
                    "description": "Marvel at one of Greece's most mysterious archaeological structures."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Zoodochos Pigi Church",
                    "description": "Visit the serene church in Kefalari village with natural springs."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Theater of Argos",
                    "description": "Explore one of Greece's largest ancient theaters with 20,000 capacity."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Market & Byzantine Museum",
                    "description": "Visit market remnants and Byzantine Museum showcasing Greek history."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "95",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-argos-cultural-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/argos-tour-hero-1.jpg",
              "priceRange": "€€",
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
            "duration": "PT5H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
