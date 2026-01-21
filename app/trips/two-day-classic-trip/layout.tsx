import { Metadata } from "next";

const tripUrl = "https://unique-greek-tours-3.vercel.app/trips/two-day-classic-trip";
const tripImage = "https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-1.jpg";

export const metadata: Metadata = {
  title: "2-Day Classic Tour in Nafplio from Athens | Mycenae & Epidavros",
  description: "Discover ancient Mycenae, the charming city of Nafplion, and the famous Epidavros Theater on this 2-day tour from Athens. Visit the Corinth Canal, explore Cyclopean Walls, and stroll through Venetian streets. Perfect for history lovers.",
  keywords: [
    "2-day Nafplio tour",
    "Mycenae tour from Athens",
    "Epidavros theater tour",
    "Argolida tour",
    "Nafplion weekend trip",
    "ancient Greece tour",
    "Corinth Canal tour",
    "Lion Gate Mycenae",
    "Asclepion Epidavros",
    "Peloponnese 2-day tour"
  ],
  openGraph: {
    title: "2-Day Classic Tour in Nafplio | Mycenae & Epidavros",
    description: "Explore ancient Mycenae, romantic Nafplion, and the world-famous Epidavros Theater. Two-day tour from Athens with guided visits and overnight stay.",
    url: tripUrl,
    siteName: "Unique Greek Tours",
    images: [
      {
        url: tripImage,
        width: 1600,
        height: 1067,
        alt: "Ancient Theater of Epidavros",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2-Day Classic Tour in Nafplio | Mycenae & Epidavros",
    description: "Discover ancient Mycenae and the famous Epidavros Theater on this 2-day tour from Athens with overnight in charming Nafplion.",
    images: [tripImage],
  },
  alternates: {
    canonical: tripUrl,
  },
};

export default function TwoDayClassicTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "2-Day Classic Tour in Nafplio",
    "description": "Explore the most important sights and monuments of Argolida and enjoy the charming city of Nafplion on this two-day tour from Athens. Visit ancient Mycenae, the Corinth Canal, and the famous Epidavros Theater.",
    "url": tripUrl,
    "image": tripImage,
    "touristType": ["History Enthusiast", "Culture Lover", "Architecture Enthusiast"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 1: Athens - Corinth - Mycenae - Nafplio",
            "description": "Visit the Corinth Canal, ancient Akrokorinthos, the Temple of Apollo, archaeological site of Mycenae with the Lion Gate and Cyclopean Walls, and arrive in Nafplion for overnight stay."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 2: Epidavros - Athens",
            "description": "Visit the ancient theater of Epidavros, one of the most famous archaeological monuments in Greece, and the sacred Asclepion before returning to Athens."
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "380",
      "priceRange": "€380-€850",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01"
    },
    "provider": {
      "@type": "TouristInformationCenter",
      "name": "Unique Greek Tours",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GR",
        "addressRegion": "Peloponnese"
      },
      "telephone": "+30-697-447-0780",
      "email": "info@uniquegreektours.com"
    },
    "duration": "P2D",
    "startTime": "08:30",
    "startDate": "2025-01-01",
    "endDate": "2025-12-31",
    "location": {
      "@type": "Place",
      "name": "Athens, Nafplio, Mycenae, Epidavros",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GR"
      }
    },
    "subTrip": [
      {
        "@type": "TouristAttraction",
        "name": "Corinth Canal",
        "description": "Engineering marvel connecting the Gulf of Corinth with the Saronic Gulf"
      },
      {
        "@type": "TouristAttraction",
        "name": "Ancient Mycenae",
        "description": "Archaeological site of the Mycenaean civilization with the famous Lion Gate and Cyclopean Walls"
      },
      {
        "@type": "TouristAttraction",
        "name": "Nafplion Old Town",
        "description": "Charming castle town with Venetian and Neoclassical architecture"
      },
      {
        "@type": "TouristAttraction",
        "name": "Ancient Theater of Epidavros",
        "description": "UNESCO World Heritage Site, one of the most perfect ancient Greek theaters with exceptional acoustics"
      }
    ],
    "includes": [
      "Return private transportation from Athens",
      "Pick up from hotel or meeting point",
      "Guided tour of archaeological sites (upon request)",
      "Overnight accommodation",
      "Liability insurance",
      "All taxes"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
