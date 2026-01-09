import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mycenae & Epidavros Tour - Ancient Wonders | Unique Greek Tours",
  description: "Visit two UNESCO World Heritage sites in one day. Explore Mycenae's Lion Gate and royal tombs, then see Epidavros' famous ancient theater with perfect acoustics. 6-hour archaeological journey from Nafplion through Mycenaean civilization.",
  keywords: "Mycenae tour, Epidavros theater, Lion Gate, Agamemnon palace, UNESCO sites Greece, ancient theater, Peloponnese archaeology, Mycenaean civilization, Sanctuary Asklepios",
  openGraph: {
    title: "Mycenae & Epidavros Tour - Two UNESCO Sites in One Day",
    description: "Explore the mythical Kingdom of Agamemnon at Mycenae and experience the perfect acoustics of Epidavros ancient theater. Two UNESCO World Heritage sites.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/mycenae-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Mycenae & Epidavros Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycenae & Epidavros Tour - UNESCO World Heritage Sites",
    description: "Visit Mycenae's Lion Gate and Epidavros' ancient theater with perfect acoustics. Two of Greece's most important archaeological sites in one tour.",
    images: ["https://uniquegreektours.com/images/mycenae-tour-hero-1.jpg"],
  },
};

export default function MycenaeEpidavrosTourLayout({
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
            "name": "Mycenae & Epidavros Tour",
            "description": "Visit two UNESCO World Heritage sites: Mycenae, the mythical Kingdom of Agamemnon with Lion Gate and royal tombs, and Epidavros with its world-famous ancient theater and Sanctuary of Asklepios.",
            "image": [
              "https://uniquegreektours.com/images/mycenae-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/mycenae-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/mycenae-tour-hero-3.jpg"
            ],
            "touristType": ["History Lover", "Cultural Tourist", "Archaeological Enthusiast", "UNESCO Site Visitor"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Mycenae Acropolis",
                    "description": "Explore the mythical Kingdom of Agamemnon and Mycenaean civilization center."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Lion Gate",
                    "description": "Walk through the monumental Lion Gate with massive Cyclopean walls."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Royal Tombs",
                    "description": "Visit the impressive tombs of Atreus and Clytemnestra."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Theatre of Epidavros",
                    "description": "Experience the world-famous theater with perfect acoustics, built in 330 BC."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Sanctuary of Asklepios",
                    "description": "Visit the ancient healing sanctuary dedicated to god of medicine."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "130",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-mycenae-epidavros"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/mycenae-tour-hero-1.jpg",
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
            "duration": "PT6H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
