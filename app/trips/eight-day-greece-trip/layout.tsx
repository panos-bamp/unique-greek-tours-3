import { Metadata } from "next";

export const metadata: Metadata = {
  title: "8-Day Classical Greece Tour - Athens, Meteora, Delphi, Olympia | Unique Greek Tours",
  description: "Experience the ultimate Classical Greece tour. Visit Athens Acropolis, Meteora monasteries, Delphi oracle, Ancient Olympia, Mycenae, Nafplion, and Epidavros on this comprehensive 8-day journey.",
  keywords: "8-day Greece tour, Classical Greece tour, Athens Meteora Delphi, Ancient Olympia tour, Nafplio tour, multi-day Greece tour, Greece itinerary, comprehensive Greece tour, UNESCO sites Greece",
  openGraph: {
    title: "8-Day Classical Greece Tour - Complete Ancient Sites Journey",
    description: "Experience the ultimate Classical Greece tour visiting Athens, Meteora, Delphi, Olympia, Nafplion, and more.",
    url: "https://unique-greek-tours-3.vercel.app/trips/eight-day-greece-trip",
    siteName: "Unique Greek Tours",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "8-Day Classical Greece Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "8-Day Classical Greece Tour",
    description: "Experience the ultimate Classical Greece tour visiting all major ancient sites",
    images: ["https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/trips/eight-day-greece-trip",
  },
};

export default function EightDayGreeceTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "8-Day Classical Greece Tour",
    "description": "Experience the ultimate Classical Greece tour. Visit Athens Acropolis, Meteora monasteries, Delphi oracle, Ancient Olympia, Mycenae, Nafplion, and Epidavros on this comprehensive 8-day journey through ancient Greek civilization.",
    "image": [
      "https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/eight-day-greece-hero-3.jpg"
    ],
    "touristType": ["History Lover", "Cultural Tourist", "Archaeological Tourist", "UNESCO Heritage Enthusiast", "Couples", "Small Groups"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "TouristAttraction",
          "name": "Acropolis of Athens",
          "description": "Explore the iconic Acropolis with the Parthenon, Erechtheion, and Temple of Athena Nike, plus the Acropolis Museum"
        },
        {
          "@type": "TouristAttraction",
          "name": "Meteora Monasteries",
          "description": "Visit the Byzantine monasteries perched atop towering rock formations, a UNESCO World Heritage Site"
        },
        {
          "@type": "TouristAttraction",
          "name": "Delphi",
          "description": "Discover the sacred sanctuary of Apollo and the famous oracle of Delphi, plus visit Arahova village"
        },
        {
          "@type": "TouristAttraction",
          "name": "Ancient Olympia",
          "description": "Walk through the birthplace of the Olympic Games, see the stadium, Temple of Zeus, and the Hermes statue"
        },
        {
          "@type": "TouristAttraction",
          "name": "Ancient Mycenae",
          "description": "Explore the legendary kingdom of Agamemnon with the Lion Gate and tomb of Atreus"
        },
        {
          "@type": "TouristAttraction",
          "name": "Nemea Wine Region",
          "description": "Enjoy wine tasting in the renowned Nemea wine region"
        },
        {
          "@type": "TouristAttraction",
          "name": "Nafplion",
          "description": "Stay in Greece's first capital, a romantic Venetian town with neoclassical architecture"
        },
        {
          "@type": "TouristAttraction",
          "name": "Ancient Theater of Epidavros",
          "description": "Visit the UNESCO theater with perfect acoustics and the healing sanctuary of Asclepius"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "url": "https://unique-greek-tours-3.vercel.app/trips/eight-day-greece-trip",
      "priceCurrency": "EUR",
      "price": "1850",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "provider": {
      "@type": "TouristInformationCenter",
      "name": "Unique Greek Tours",
      "image": "https://unique-greek-tours-3.vercel.app/images/logo.png",
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
    "duration": "P8D",
    "inLanguage": "en",
    "tourBookingPage": "https://unique-greek-tours-3.vercel.app/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      {children}
    </>
  );
}
