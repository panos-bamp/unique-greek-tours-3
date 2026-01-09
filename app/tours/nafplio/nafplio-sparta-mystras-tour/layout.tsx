import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparta & Mystras Tour - Ancient Warriors & Byzantine Glory | Unique Greek Tours",
  description: "Explore legendary Sparta, visit archaeological museum, discover the Olive Oil Museum, and tour UNESCO World Heritage Mystras with stunning Byzantine churches. 8-hour journey from Nafplion through ancient and medieval Greece.",
  keywords: "Sparta tour, Mystras UNESCO site, Byzantine Greece, Sparta archaeological museum, Greek olive oil museum, Laconia tours, Peloponnese history, medieval Greece",
  openGraph: {
    title: "Sparta & Mystras Tour - Ancient Warriors Meet Byzantine Splendor",
    description: "Visit legendary Sparta and explore UNESCO World Heritage Mystras fortified city with magnificent Byzantine frescoes. Journey through warrior culture and medieval glory.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/sparta-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sparta and Mystras Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparta & Mystras Tour - Ancient & Medieval Greece",
    description: "Explore ancient Sparta and UNESCO site Mystras. Visit museums, Byzantine churches, and enjoy breathtaking views from Mount Taygetos.",
    images: ["https://uniquegreektours.com/images/sparta-tour-hero-1.jpg"],
  },
};

export default function SpartaMystrasLayout({
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
            "name": "Sparta & Mystras Tour",
            "description": "Explore ancient Sparta archaeological museum, visit the Museum of Greek Olive Oil, and tour UNESCO World Heritage site Mystras with Byzantine churches, frescoes, and panoramic views from Mount Taygetos.",
            "image": [
              "https://uniquegreektours.com/images/sparta-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/sparta-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/sparta-tour-hero-3.jpg"
            ],
            "touristType": ["History Lover", "Cultural Tourist", "Byzantine Heritage Enthusiast", "UNESCO Site Visitor"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Sparta",
                    "description": "Explore legendary city of Sparta and archaeological museum with artifacts."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Archaeological Museum",
                    "description": "Discover collections from Neolithic to Roman times and Spartan sanctuaries."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Museum of Greek Olive Oil",
                    "description": "Journey through olive oil culture from antiquity to pre-industrial period."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Byzantine Mystras",
                    "description": "Explore UNESCO World Heritage fortified city with Byzantine churches and frescoes."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Panoramic Views",
                    "description": "Enjoy breathtaking Laconian plain views from Mount Taygetos slopes."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "140",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-sparta-mystras-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/sparta-tour-hero-1.jpg",
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
            "duration": "PT8H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
