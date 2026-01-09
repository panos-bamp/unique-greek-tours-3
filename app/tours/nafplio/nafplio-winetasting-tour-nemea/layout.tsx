import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nemea Wine Tasting Tour - Greek Wine Experience | Unique Greek Tours",
  description: "Discover Nemea's legendary wines on this full-day tour from Nafplion. Visit ancient stadium, explore 2 award-winning wineries, taste Agiorgitiko wines, and learn wine-making secrets. 6-hour wine journey.",
  keywords: "Nemea wine tour, Greek wine tasting, Agiorgitiko wine, wine tour from Nafplion, Nemea wineries, ancient Nemea, wine tourism Greece, Peloponnese wine region",
  openGraph: {
    title: "Nemea Wine Tasting Tour - Ancient Sites & Award-Winning Wines",
    description: "Visit the ancient stadium of Nemea and tour two prestigious wineries. Taste exceptional Greek wines and discover the secrets of Nemea's famous Agiorgitiko grape.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/wine-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Nemea Wine Tasting Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nemea Wine Tasting Tour - Greek Wine Experience",
    description: "Explore ancient Nemea and taste legendary Greek wines at award-winning wineries. Full-day wine tour from Nafplion.",
    images: ["https://uniquegreektours.com/images/wine-tour-hero-1.jpg"],
  },
};

export default function WineTourLayout({
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
            "name": "Nemea Wine Tasting Tour",
            "description": "Visit the ancient stadium of Nemea and tour two award-winning wineries in the famous Nemea wine region. Learn about wine production and taste exceptional Agiorgitiko wines.",
            "image": [
              "https://uniquegreektours.com/images/wine-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/wine-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/wine-tour-hero-3.jpg"
            ],
            "touristType": ["Wine Enthusiast", "History Lover", "Cultural Tourist", "Food & Wine Tourist"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Stadium of Nemea",
                    "description": "Visit the ancient stadium built in 4th century BC and Temple of Zeus, site of the Nemean Games."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Award-Winning Wineries",
                    "description": "Tour two prestigious wineries in Nemea renowned for exceptional wines."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Wine Production Process",
                    "description": "Learn about vintage process, wine-making stages, and Agiorgitiko grape cultivation."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Professional Wine Tasting",
                    "description": "Taste various local wine varieties and learn about Nemea's unique terroir."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Expert Wine Education",
                    "description": "Discover wine-making secrets from passionate local vintners and sommeliers."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "120",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-winetasting-tour-nemea"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/wine-tour-hero-1.jpg",
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
            "duration": "PT6H",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
