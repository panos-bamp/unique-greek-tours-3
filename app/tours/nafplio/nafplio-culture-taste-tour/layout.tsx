import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio Culture & Taste Tour | History & Greek Food Tasting Experience",
  description: "Discover Nafplio's rich history and culinary treasures on our Culture & Taste Tour. Visit Palamidi Castle, explore Venetian architecture, taste local cheeses, olive oil, and wines from Nemea. Book your tour today!",
  keywords: "Nafplio culture tour, Nafplio food tasting, Palamidi castle tour, Greek wine tasting, Nafplio walking tour, Venetian architecture Greece, Nemea wine, Greek gastronomy tour",
  openGraph: {
    title: "Nafplio Culture & Taste Tour | History & Greek Food Tasting Experience",
    description: "Discover Nafplio's rich history and culinary treasures on our Culture & Taste Tour. Visit Palamidi Castle, explore Venetian architecture, taste local cheeses, olive oil, and wines from Nemea.",
    url: "https://uniquegreektours.com/tours/nafplio/nafplio-culture-taste-tour",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/culture-taste-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Nafplio Culture & Taste Tour - Charming Greek street with bougainvillea",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafplio Culture & Taste Tour | History & Greek Food Tasting",
    description: "Discover Nafplio's rich history and culinary treasures. Visit Palamidi Castle, explore Venetian architecture, taste local delicacies and wines from Nemea.",
    images: ["https://uniquegreektours.com/images/culture-taste-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://uniquegreektours.com/tours/nafplio/nafplio-culture-taste-tour",
  },
};

export default function NafplioCultureTasteTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Nafplio Culture & Taste Tour",
    "description": "Discover Nafplio's rich history and culinary treasures on this guided tour combining culture, Venetian architecture, and Greek gastronomy with tastings of local cheeses, olive oil, and Nemea wines.",
    "touristType": ["Cultural Tourism", "Food Tourism", "History Tourism"],
    "offers": {
      "@type": "Offer",
      "price": "95",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "url": "https://uniquegreektours.com/tours/nafplio/nafplio-culture-taste-tour"
    },
    "provider": {
      "@type": "TourOrganization",
      "name": "Unique Greek Tours",
      "url": "https://uniquegreektours.com",
      "telephone": "+302752024444",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nafplio",
        "addressRegion": "Argolis",
        "addressCountry": "GR"
      }
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Palamidi Castle",
          "description": "Explore the impressive 1714 Venetian fortress dominating Nafplio from its 216-meter hilltop"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Akronafplia Viewpoint",
          "description": "Enjoy breathtaking panoramic views and see the historic Bavarian clock"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Historic City Walk",
          "description": "Explore Syntagma Square, Venetian architecture, and Three Admirals' Square"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Greek Deli Tasting",
          "description": "Taste local cheeses, sausages, olive oils, and olives"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Wine Cellar Experience",
          "description": "Discover Greek wines from Nemea region with expert guidance"
        }
      ]
    },
    "duration": "PT5H",
    "maximumAttendeeCapacity": 12,
    "image": "https://uniquegreektours.com/images/culture-taste-hero-1.jpg",
    "location": {
      "@type": "Place",
      "name": "Nafplio",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nafplio",
        "addressRegion": "Argolis",
        "addressCountry": "Greece"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
