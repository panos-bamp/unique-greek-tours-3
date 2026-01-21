import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2-Day Classic Tour in Nafplio - Mycenae & Epidavros | Unique Greek Tours",
  description: "Explore Ancient Greece on this 2-day tour from Athens. Visit the Corinth Canal, Mycenae with the Lion Gate, stay overnight in romantic Nafplion, and see the UNESCO theater of Epidavros.",
  keywords: "2-day Greece tour, Nafplio tour, Mycenae tour, Epidavros tour, Athens to Nafplio, Corinth Canal, Lion Gate, multi-day Greece tour, Argolida tour, overnight Greece tour",
  openGraph: {
    title: "2-Day Classic Tour in Nafplio - Mycenae & Epidavros",
    description: "Explore Ancient Greece on this 2-day tour from Athens. Visit Mycenae, stay in Nafplion, and see the theater of Epidavros.",
    url: "https://unique-greek-tours-3.vercel.app/trips/two-day-classic-trip",
    siteName: "Unique Greek Tours",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "2-Day Classic Tour in Nafplio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2-Day Classic Tour in Nafplio",
    description: "Explore Ancient Greece on this 2-day tour from Athens",
    images: ["https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/trips/two-day-classic-trip",
  },
};

export default function TwoDayClassicTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "2-Day Classic Tour in Nafplio",
    "description": "Explore Ancient Greece on this 2-day tour from Athens. Visit the Corinth Canal, Mycenae with the Lion Gate, stay overnight in romantic Nafplion, and see the UNESCO theater of Epidavros.",
    "image": [
      "https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/two-day-classic-hero-3.jpg"
    ],
    "touristType": ["History Lover", "Cultural Tourist", "Archaeological Tourist", "Couples", "Families"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "TouristAttraction",
          "name": "Corinth Canal",
          "description": "Visit the impressive Corinth Canal connecting the Aegean and Ionian seas"
        },
        {
          "@type": "TouristAttraction",
          "name": "Akrokorinthos",
          "description": "Explore the archaeological site with the temple of Apollo and the steps of Apostle Paul"
        },
        {
          "@type": "TouristAttraction",
          "name": "Ancient Mycenae",
          "description": "Discover the kingdom of Agamemnon with the Lion Gate, Cyclopean Walls, and tomb of Atreus"
        },
        {
          "@type": "TouristAttraction",
          "name": "Nafplion",
          "description": "Stay overnight in Greece's first capital with Venetian architecture and romantic atmosphere"
        },
        {
          "@type": "TouristAttraction",
          "name": "Ancient Theater of Epidavros",
          "description": "Visit the UNESCO World Heritage theater with perfect acoustics and the Asclepion sanctuary"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "url": "https://unique-greek-tours-3.vercel.app/trips/two-day-classic-trip",
      "priceCurrency": "EUR",
      "price": "380",
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
    "duration": "P2D",
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
