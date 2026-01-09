import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancient Epidavros & Olive Oil Tasting Tour | Unique Greek Tours",
  description: "Visit Ancient Epidavros theater with perfect acoustics, explore the Sanctuary of Asklepios, and taste premium Greek olive oil. 6-hour cultural and culinary journey from Nafplion combining archaeology with authentic flavors.",
  keywords: "Epidavros theater tour, ancient Corinth, olive oil tasting Greece, Sanctuary Asklepios, Greek olive oil, Nafplion excursions, Peloponnese tours, ancient theater Greece",
  openGraph: {
    title: "Ancient Epidavros Theater & Authentic Olive Oil Tasting Tour",
    description: "Explore the famous ancient theater of Epidavros and taste premium Greek olive oil at a traditional production plant. Perfect blend of culture and culinary experience.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/corinth-epidavros-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Corinth Epidavros and Olive Oil Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epidavros Theater & Olive Oil Tasting Tour",
    description: "Visit the world-famous Epidavros ancient theater and taste authentic Greek olive oil. Unique cultural and culinary journey from Nafplion.",
    images: ["https://uniquegreektours.com/images/corinth-epidavros-tour-hero-1.jpg"],
  },
};

export default function CorinthEpidavrosTourLayout({
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
            "name": "Ancient Epidavros & Olive Oil Tasting Tour",
            "description": "Visit the ancient theater of Epidavros with perfect acoustics, explore the Sanctuary of Asklepios healing temple, tour an olive oil production plant, and taste premium Greek olive oil and delicacies.",
            "image": [
              "https://uniquegreektours.com/images/corinth-epidavros-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/corinth-epidavros-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/corinth-epidavros-tour-hero-3.jpg"
            ],
            "touristType": ["Cultural Tourist", "Food & Wine Enthusiast", "History Lover", "Archaeological Tourist"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Olive Oil Production Plant",
                    "description": "Tour authentic olive oil facility and learn traditional production methods."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Premium Olive Oil Tasting",
                    "description": "Taste exceptional Greek olive oils, olives, and delicacies."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Ancient Theater of Epidavros",
                    "description": "Experience world-famous theater with perfect acoustics, built 4th century BC."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Sanctuary of Asklepios",
                    "description": "Visit ancient healing temple dedicated to god of medicine."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Archaeological Exploration",
                    "description": "Explore ancient ruins and learn about Greek healing practices."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "110",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-oil-tasting-epidavros-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/corinth-epidavros-tour-hero-1.jpg",
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
