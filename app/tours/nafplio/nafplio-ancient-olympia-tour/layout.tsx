import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancient Olympia Tour - Birthplace of Olympics | Unique Greek Tours",
  description: "Visit Ancient Olympia from Nafplion. See the original Olympic stadium, Temple of Zeus, Sanctuary, and Hermes of Praxiteles. Full-day archaeological tour with private transport. 10-hour journey through ancient Greek history.",
  keywords: "Ancient Olympia tour, Olympic Games birthplace, Olympia from Nafplion, ancient Greek sites, Temple of Zeus, Hermes Praxiteles, archaeological tour Greece, UNESCO World Heritage",
  openGraph: {
    title: "Ancient Olympia Tour - Experience the Birthplace of the Olympics",
    description: "Discover Ancient Olympia, birthplace of the Olympic Games. Visit the stadium, Temple of Zeus, and see the famous Hermes statue. Full-day private tour from Nafplion.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/olympia-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Olympia Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient Olympia Tour - Birthplace of Olympics",
    description: "Visit the ancient Olympic stadium and explore one of Greece's most important archaeological sites on this full-day tour from Nafplion.",
    images: ["https://uniquegreektours.com/images/olympia-tour-hero-1.jpg"],
  },
};

export default function OlympiaTourLayout({
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
            "name": "Ancient Olympia Tour",
            "description": "Visit Ancient Olympia, birthplace of the Olympic Games. See the ancient stadium, Temple of Zeus with the famous statue, archaeological museum with Hermes of Praxiteles, and explore ancient temples.",
            "image": [
              "https://uniquegreektours.com/images/olympia-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/olympia-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/olympia-tour-hero-3.jpg"
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
                    "name": "Ancient Olympic Stadium",
                    "description": "Walk on the track where the first Olympic Games took place."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Sanctuary of Zeus",
                    "description": "Visit the site of one of the seven wonders - the 13.5-meter golden statue of Zeus."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Archaeological Museum",
                    "description": "Admire the famous Hermes of Praxiteles and outstanding ancient artifacts."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Temples",
                    "description": "Explore temples showcasing ancient Greek art, harmony and balance."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Local Experience",
                    "description": "Free time at local cafes and restaurants in Olympia town."
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
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-ancient-olympia-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/olympia-tour-hero-1.jpg",
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
            "duration": "PT10H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
