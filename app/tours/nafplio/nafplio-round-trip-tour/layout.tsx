import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mycenae, Ancient Corinth & Epidavros Grand Tour | Unique Greek Tours",
  description: "Visit three UNESCO World Heritage sites in one day. Explore Mycenae's Lion Gate, Ancient Corinth Temple, Corinth Canal, and Epidavros Theater. 9-hour comprehensive archaeological journey from Nafplion through Peloponnese.",
  keywords: "Mycenae Corinth Epidavros tour, three UNESCO sites, Lion Gate, Corinth Canal, ancient Greece tour, Peloponnese archaeology, Argolis tour, Greek civilization",
  openGraph: {
    title: "Mycenae, Corinth & Epidavros - Three UNESCO Sites in One Day",
    description: "Ultimate archaeological journey through Mycenae, Ancient Corinth, and Epidavros. Explore Lion Gate, Corinth Canal, and the world-famous ancient theater.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/round-trip-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Mycenae Corinth Epidavros Grand Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycenae, Corinth & Epidavros Grand Tour",
    description: "Three UNESCO archaeological sites in one comprehensive tour. Mycenae, Ancient Corinth, Corinth Canal, and Epidavros Theater.",
    images: ["https://uniquegreektours.com/images/round-trip-tour-hero-1.jpg"],
  },
};

export default function RoundTripTourLayout({
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
            "name": "Mycenae, Ancient Corinth & Epidavros Grand Tour",
            "description": "Comprehensive tour of three major UNESCO archaeological sites: Mycenae Kingdom of Agamemnon, Ancient Corinth with Temple of Apollo, Corinth Canal, and Epidavros Theater with perfect acoustics and Sanctuary of Asklepios.",
            "image": [
              "https://uniquegreektours.com/images/round-trip-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/round-trip-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/round-trip-tour-hero-3.jpg"
            ],
            "touristType": ["History Lover", "Archaeological Enthusiast", "UNESCO Site Visitor", "Cultural Tourist"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 6,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Mycenae Fortress",
                    "description": "Explore Agamemnon's kingdom through Lion Gate and royal tombs."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Corinth",
                    "description": "Visit Temple of Apollo and explore ancient agora marketplace."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Corinth Canal",
                    "description": "Stop at engineering marvel connecting Aegean and Ionian seas."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Epidavros Theater",
                    "description": "Experience world-famous theater with exceptional acoustics."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Sanctuary of Asklepios",
                    "description": "Explore ancient healing sanctuary dedicated to god of medicine."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Acrocorinth Fortress",
                    "description": "See fortress towering above Ancient Corinth ruins."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "150",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-round-trip-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/round-trip-tour-hero-1.jpg",
              "priceRange": "€€€",
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
            "duration": "PT9H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
