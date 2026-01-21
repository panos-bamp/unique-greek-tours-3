import { Metadata } from "next";

const tripUrl = "https://unique-greek-tours-3.vercel.app/trips/eight-day-greece-trip";
const tripImage = "https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-1.jpg";

export const metadata: Metadata = {
  title: "8-Day Classical Greece Tour | Athens, Meteora, Delphi, Olympia & Nafplio",
  description: "Explore the glory of ancient Greece on an 8-day journey through Athens, Meteora monasteries, Delphi oracle, Ancient Olympia, Mycenae, and Nafplion. Comprehensive multi-day tour with expert guides, luxury transport, and handpicked accommodations.",
  keywords: [
    "8-day Greece tour",
    "Classical Greece tour",
    "Meteora tour",
    "Delphi archaeological site",
    "Ancient Olympia tour",
    "Acropolis tour Athens",
    "Nafplio multi-day tour",
    "Mycenae tour",
    "Greece cultural tour",
    "UNESCO sites Greece",
    "Greek history tour",
    "Peloponnese tour"
  ],
  openGraph: {
    title: "8-Day Classical Greece Tour | Complete Ancient Greece Experience",
    description: "Discover Athens, Meteora's hanging monasteries, Delphi's oracle, Ancient Olympia, and Mycenae on this comprehensive 8-day classical Greece tour with expert guides.",
    url: tripUrl,
    siteName: "Unique Greek Tours",
    images: [
      {
        url: tripImage,
        width: 1600,
        height: 1067,
        alt: "Ancient Athens Acropolis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "8-Day Classical Greece Tour | Athens to Nafplio",
    description: "Experience the best of ancient Greece: Acropolis, Meteora, Delphi, Olympia, Mycenae & more on this 8-day guided tour.",
    images: [tripImage],
  },
  alternates: {
    canonical: tripUrl,
  },
};

export default function EightDayGreeceTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "8-Day Classical Greece Tour",
    "description": "Embark on an unforgettable journey through Classical Greece, visiting the most famous monuments and archaeological sites. Experience Athens' Acropolis, Meteora's hanging monasteries, Delphi's oracle, Ancient Olympia's birthplace of Olympic Games, Mycenae's ancient civilization, and romantic Nafplion.",
    "url": tripUrl,
    "image": tripImage,
    "touristType": ["History Enthusiast", "Culture Lover", "Architecture Enthusiast", "UNESCO Heritage Seeker"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 1: Athens Arrival",
            "description": "Pick up from Athens airport and check-in to hotel. Relax and enjoy the evening."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 2: Athens Acropolis & City Tour",
            "description": "Visit the Acropolis (Parthenon, Propylaia, Erechtheion, Temple of Athena Nike), Acropolis Museum, and walking tour through Plaka neighborhood and historical center."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 3: Meteora Monasteries",
            "description": "Journey to Kalambaka and visit Meteora's hanging monasteries, Byzantine artwork, and watch the breathtaking sunset."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 4: Delphi Oracle",
            "description": "Visit Arahova village and Delphi archaeological site (Temple of Apollo, Theater, Athens Treasury, Castalia Spring) and Delphi Museum."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 5: Ancient Olympia",
            "description": "Tour the birthplace of Olympic Games, Olympic Stadium, Temple of Zeus, and Archaeological Museum with Hermes of Praxiteles statue."
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 6: Mycenae & Nafplio",
            "description": "Explore Mycenae (Lion Gate, Cyclopean Walls, tomb of Atreus), wine tasting in Nemea, and arrive in romantic Nafplion."
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 7: Epidavros & Nafplion",
            "description": "Visit Ancient Theater of Epidavros, sacred Asclepion, and walking tour of Nafplion old town with Venetian architecture."
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "TouristAttraction",
            "name": "Day 8: Return to Athens",
            "description": "Transfer back to Athens or Athens airport according to schedule."
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "1850",
      "priceRange": "€1,850-€3,200",
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
    "duration": "P8D",
    "startTime": "08:30",
    "startDate": "2025-01-01",
    "endDate": "2025-12-31",
    "location": {
      "@type": "Place",
      "name": "Athens, Meteora, Delphi, Olympia, Nafplio",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GR"
      }
    },
    "subTrip": [
      {
        "@type": "TouristAttraction",
        "name": "Acropolis of Athens",
        "description": "UNESCO World Heritage Site featuring the Parthenon, Propylaia, Erechtheion, and Temple of Athena Nike"
      },
      {
        "@type": "TouristAttraction",
        "name": "Acropolis Museum",
        "description": "World-class museum with marble masterpieces and Parthenon sculptures"
      },
      {
        "@type": "TouristAttraction",
        "name": "Meteora Monasteries",
        "description": "UNESCO site with Byzantine monasteries perched on towering rock formations"
      },
      {
        "@type": "TouristAttraction",
        "name": "Delphi Archaeological Site",
        "description": "Ancient sanctuary of Apollo, known as the navel of the world in antiquity"
      },
      {
        "@type": "TouristAttraction",
        "name": "Ancient Olympia",
        "description": "Birthplace of the Olympic Games with Temple of Zeus and Olympic Stadium"
      },
      {
        "@type": "TouristAttraction",
        "name": "Ancient Mycenae",
        "description": "Mycenaean civilization site with Lion Gate and Cyclopean Walls"
      },
      {
        "@type": "TouristAttraction",
        "name": "Epidavros Theater",
        "description": "UNESCO site, perfectly preserved ancient theater with exceptional acoustics"
      },
      {
        "@type": "TouristAttraction",
        "name": "Nafplion Old Town",
        "description": "Most romantic Greek city with Venetian architecture and castle"
      }
    ],
    "includes": [
      "Return private transportation from Athens",
      "Pick up from hotel or meeting point",
      "Professional licensed guide for archaeological sites",
      "7 nights accommodation in selected hotels",
      "Liability insurance",
      "All taxes and fees"
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
