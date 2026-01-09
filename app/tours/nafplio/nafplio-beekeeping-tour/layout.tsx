import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio Beekeeping Tour - Honey & Bee Experience | Unique Greek Tours",
  description: "Discover the fascinating world of beekeeping in Nafplion. Visit a modern bee farm, wear professional attire, learn honey production, and taste organic Greek honey. Interactive 3-hour experience.",
  keywords: "Nafplio beekeeping tour, honey tasting Greece, bee farm visit, beekeeping experience, organic honey Peloponnese, educational tour, family activity Greece",
  openGraph: {
    title: "Nafplio Beekeeping Tour - Authentic Honey & Bee Experience",
    description: "Immerse yourself in the world of bees. Visit a beekeeping museum, wear protective gear, explore bee gardens, and taste organic Greek honey with expert beekeepers.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/beekeeping-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Nafplio Beekeeping Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafplio Beekeeping Tour - Honey & Bee Experience",
    description: "Discover beekeeping secrets and taste organic Greek honey in this hands-on educational tour from Nafplion.",
    images: ["https://uniquegreektours.com/images/beekeeping-tour-hero-1.jpg"],
  },
};

export default function BeekeepingTourLayout({
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
            "name": "Nafplio Beekeeping Tour",
            "description": "Immerse yourself in the enchanting realm of bees with our unique Beekeeping Tour from Nafplion. Visit a modern beekeeping facility, explore the museum, wear professional attire, and taste organic honey.",
            "image": [
              "https://uniquegreektours.com/images/beekeeping-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/beekeeping-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/beekeeping-tour-hero-3.jpg"
            ],
            "touristType": ["Family", "Nature Lover", "Educational Tourist", "Food Enthusiast"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Journey Through Orange Groves",
                    "description": "Travel through the scenic orange groves of the Argolic plain to the beekeeping facility."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Beekeeping Museum Visit",
                    "description": "Explore the history of beekeeping and observe bee society through a glass hive."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Hands-On Beekeeping Experience",
                    "description": "Don protective attire and enter the bee gardens to learn about bee nurturing and honey harvesting."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Honey Tasting Session",
                    "description": "Savor a variety of organic honeys and bee products in an educational tasting."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Expert Beekeeper Guidance",
                    "description": "Learn from professional beekeepers about honey production and bee society."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "75",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-beekeeping-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/beekeeping-tour-hero-1.jpg",
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
