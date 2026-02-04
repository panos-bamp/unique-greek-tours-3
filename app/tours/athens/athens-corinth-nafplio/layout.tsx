import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corinth, Epidaurus, Nafplio & Mycenae Day Tour from Athens | Unique Greek Tours",
  description: "Full-day private tour from Athens visiting the Corinth Canal, ancient Epidaurus theater, romantic Nafplio city, and legendary Mycenae. Experience Greece's greatest historical sites.",
  keywords: "Athens day tour, Corinth Canal, Epidaurus theater, Nafplio Greece, Mycenae tour, Peloponnese day trip, ancient Greece tour, Argolis tour",
  openGraph: {
    title: "Corinth, Epidaurus, Nafplio & Mycenae Day Tour from Athens",
    description: "Discover the Corinth Canal, ancient Epidaurus, romantic Nafplio, and legendary Mycenae on this full-day private tour from Athens.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Nafplio harbor at sunset with Bourtzi fortress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corinth, Epidaurus, Nafplio & Mycenae Day Tour",
    description: "Full-day tour from Athens to the greatest sites of the Argolis: Corinth Canal, Epidaurus, Nafplio, and Mycenae.",
    images: ["https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/athens/athens-corinth-nafplio",
  },
};

export default function CorinthNafplioTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Corinth Canal, Epidaurus, Nafplio & Mycenae Day Tour from Athens",
    description: "A full-day excursion from Athens to the most important archaeological and historical sites of the Argolis region. Visit the impressive Corinth Canal, the ancient theater of Epidaurus (UNESCO World Heritage), explore the romantic Venetian city of Nafplio, and discover the legendary kingdom of Mycenae with its Lion Gate and cyclopean walls.",
    image: [
      "https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-3.jpg"
    ],
    touristType: ["History Lovers", "Culture Enthusiasts", "Families", "Couples", "Photographers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Corinth Canal",
            description: "Marvel at this impressive 19th-century engineering feat connecting the Corinthian and Saronic Gulfs."
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Ancient Epidaurus",
            description: "Visit the UNESCO-listed ancient theater, one of the most famous archaeological monuments in Greece, and the Sanctuary of Asclepius."
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Nafplio Old Town",
            description: "Walk through the romantic Venetian city with its neoclassical buildings, Land Gate, Syntagma Square, Akronafplia acropolis, and Bourtzi fortress."
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Ancient Mycenae",
            description: "Explore the legendary kingdom of Agamemnon with the Lion Gate, cyclopean walls, and vaulted tombs of the Mycenaean civilization."
          }
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "350",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://unique-greek-tours-3.vercel.app/tours/athens/athens-corinth-nafplio",
      validFrom: "2024-01-01"
    },
    provider: {
      "@type": "TouristInformationCenter",
      name: "Unique Greek Tours",
      url: "https://unique-greek-tours-3.vercel.app",
      image: "https://unique-greek-tours-3.vercel.app/images/corinth-nafplio-tour-hero-1.jpg",
      priceRange: "€€€",
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
      name: "Athens to Argolis, Greece",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Attica",
        addressCountry: "Greece"
      }
    },
    duration: "PT11H",
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
