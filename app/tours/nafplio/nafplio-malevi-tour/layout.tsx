import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malevi Monastery Tour - Sacred Mount Parnon | Unique Greek Tours",
  description: "Visit the Holy Monastery of Panagia Malevis on Mount Parnon. See the miraculous icon by Evangelist Luke, explore cedar forests, and experience Byzantine spirituality. 3-hour spiritual journey from Nafplion.",
  keywords: "Malevi Monastery, Mount Parnon, Byzantine monastery, religious tour Greece, Panagia Malevis, Peloponnese monasteries, spiritual tourism, Orthodox pilgrimage",
  openGraph: {
    title: "Malevi Monastery Tour - Sacred Byzantine Monastery on Mount Parnon",
    description: "Experience spiritual serenity at Holy Monastery of Malevi, founded in 717 AD. See the miraculous icon by Evangelist Luke and explore Mount Parnon's cedar forests.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/malevi-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Malevi Monastery Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malevi Monastery Tour - Sacred Mount Parnon",
    description: "Visit the Holy Monastery of Panagia Malevis and see the miraculous icon by Evangelist Luke. Spiritual journey through Mount Parnon.",
    images: ["https://uniquegreektours.com/images/malevi-tour-hero-1.jpg"],
  },
};

export default function MaleviTourLayout({
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
            "name": "Holy Monastery of Malevi Tour",
            "description": "Visit the Holy Monastery of Panagia Malevis on Mount Parnon slopes. See the miraculous icon by Evangelist Luke, explore cedar forests, and optional visits to nearby monasteries.",
            "image": [
              "https://uniquegreektours.com/images/malevi-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/malevi-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/malevi-tour-hero-3.jpg"
            ],
            "touristType": ["Religious Pilgrim", "Cultural Tourist", "Nature Lover", "History Enthusiast"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Holy Monastery Visit",
                    "description": "Experience the Holy Monastery of Panagia Malevis, founded in 717 AD."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Mount Parnon Journey",
                    "description": "Travel through cedar forests on Mount Parnon slopes."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Miraculous Icon",
                    "description": "See the miraculous icon of the Assumption by Evangelist Luke."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Optional Monastery Visits",
                    "description": "Visit Loukou Monastery and Monastery of Palaiopanagia."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Traditional Lunch Option",
                    "description": "Enjoy traditional lunch in surrounding mountain villages."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "90",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-malevi-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/malevi-tour-hero-1.jpg",
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
