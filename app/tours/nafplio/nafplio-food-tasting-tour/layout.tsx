import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio Food Tasting Tour - Greek Culinary Experience | Unique Greek Tours",
  description: "Discover Nafplion's rich culinary heritage with our guided food tasting tour. Sample traditional Greek cheeses, wines, olive oils, and local delicacies at artisan shops. 3-hour gastronomic journey.",
  keywords: "Nafplio food tour, Greek food tasting, culinary tour Nafplion, wine tasting Greece, traditional Greek food, Peloponnese gastronomy, food walking tour",
  openGraph: {
    title: "Nafplio Food Tasting Tour - Authentic Greek Culinary Experience",
    description: "Explore Nafplion's culinary treasures with a local guide. Taste artisan cheeses, wines, olive oils, and traditional sweets in this unforgettable 3-hour food journey.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/food-tour-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Nafplio Food Tasting Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafplio Food Tasting Tour - Greek Culinary Experience",
    description: "Discover authentic Greek flavors with our expert-led food tasting tour in historic Nafplion.",
    images: ["https://uniquegreektours.com/images/food-tour-hero-1.jpg"],
  },
};

export default function FoodTourLayout({
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
            "name": "Nafplio Food Tasting Tour",
            "description": "Discover the rich culinary heritage of Nafplion with an unforgettable food-tasting journey led by a knowledgeable local guide. Sample traditional Greek cheeses, wines, olive oils, and local delicacies.",
            "image": [
              "https://uniquegreektours.com/images/food-tour-hero-1.jpg",
              "https://uniquegreektours.com/images/food-tour-hero-2.jpg",
              "https://uniquegreektours.com/images/food-tour-hero-3.jpg"
            ],
            "touristType": ["Culinary Enthusiast", "Food Lover", "Wine Enthusiast"],
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Greek Coffee Experience",
                    "description": "Begin your culinary journey with traditional Greek coffee at a historic café."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Artisan Grocery Store",
                    "description": "Sample traditional cheeses, cold meats, olives, and premium olive oil."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Historic Center Walk",
                    "description": "Explore Nafplion's central square with Venetian neoclassical architecture."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Wine Cellar Experience",
                    "description": "Discover Greek wines, ouzo, and tsipouro with an expert sommelier."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristAttraction",
                    "name": "Scenic Port Views",
                    "description": "Conclude at the beautiful port with views of Bourtzi castle."
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "85",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://uniquegreektours.com/tours/nafplio/nafplio-food-tasting-tour"
            },
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "image": "https://uniquegreektours.com/images/food-tour-hero-1.jpg",
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
            "duration": "PT3H30M",
            "inLanguage": "en",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
