import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monemvasia Castle Town Tour - Medieval Byzantine Wonder | Unique Greek Tours",
  description: "Explore Monemvasia, the Gibraltar of Greece. Walk through medieval alleys, visit Byzantine churches, see Venetian and Ottoman architecture. Full-day tour to one of Greece's most romantic destinations from Nafplion. 10-hour journey.",
  keywords: "Monemvasia tour, castle town Greece, Byzantine architecture, medieval Greece, Monemvasia from Nafplion, romantic getaway Greece, Gibraltar of Greece",
  openGraph: {
    title: "Monemvasia Castle Town - Medieval Byzantine Fortress & Romantic Alleys",
    description: "Discover the mythical castle-town of Monemvasia. Explore Byzantine monuments, romantic alleys, and panoramic sea views. One of Greece's top destinations.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/monemvasia-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Monemvasia Castle Town Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monemvasia Castle Town Tour - Medieval Byzantine Wonder",
    description: "Step into the medieval past at Monemvasia castle-town. Explore Byzantine, Venetian, and Ottoman architecture on this romantic full-day tour.",
    images: ["https://uniquegreektours.com/images/monemvasia-tour-hero-1.jpg"],
  },
};

export default function MonemvasiaTourLayout({
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
            "name": "Monemvasia Castle Town Tour",
            "description": "Visit the mythical castle-town of Monemvasia carved into a 300m rock. Explore medieval alleys, Byzantine monuments with Venetian and Ottoman influences, and enjoy panoramic sea views.",
            "image": [
              "https://uniquegreektours.com/images/monemvasia-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/monemvasia-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/monemvasia-tour-hero-3.jpg"
            ],
            "touristType": ["History Lover", "Romantic Traveler", "Cultural Tourist", "Photography Enthusiast"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Medieval Castle Town",
                    "description": "Enter through main gateway into preserved medieval town carved into 300m rock."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Byzantine Heritage",
                    "description": "Discover Byzantine monuments with Venetian and Ottoman influences."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Romantic Alleys",
                    "description": "Wander through cobblestone alleys with stone houses and churches."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Panoramic Sea Views",
                    "description": "Enjoy breathtaking views of Myrtoo Sea from fortress walls."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Historical Journey",
                    "description": "Experience centuries of history from Byzantine to Ottoman rule."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "180",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-monemvasia-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/monemvasia-tour-hero-1.jpg",
              "priceRange": "€€€€",
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
