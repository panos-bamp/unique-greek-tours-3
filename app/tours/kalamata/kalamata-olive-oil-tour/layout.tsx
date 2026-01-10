import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Castle Olive Oil Tasting Tour Kalamata - Greek Olive Culture | Unique Greek Tours",
  description: "Experience Greek olive oil culture at the 13th century Castle of Androus. Olive walk, treasure hunt, mill tours, expert tasting workshop, and traditional meal. 4-hour immersive tour from Kalamata.",
  keywords: "Kalamata olive oil tour, Castle Androus, olive oil tasting, Greek olive culture, Messinian olives, olive mill tour, Kalamata tours",
  openGraph: {
    title: "Castle Olive Oil Tasting Tour - Discover Greek Liquid Gold",
    description: "Visit a 13th century castle, explore olive mills, and taste premium extra virgin olive oils with certified experts.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-1.jpg", width: 1200, height: 630, alt: "Castle Olive Oil Tasting Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Olive Oil Tasting Tour Kalamata",
    description: "Medieval castle, olive mill tours, expert tasting, and traditional food pairing experience.",
    images: ["https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-1.jpg"],
  },
};

export default function KalamataOliveOilTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "The Castle Olive Oil Tasting Tour",
          "description": "Experience Greek olive oil culture at 13th century Castle of Androus. Treasure hunt olive walk, traditional and modern mill tours, expert tasting of 3 extra virgin oils by certified taster, and light meal with olive oil dishes.",
          "image": ["https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-1.jpg", "https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-2.jpg", "https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-3.jpg"],
          "touristType": ["Food & Wine Enthusiast", "Cultural Tourist", "Culinary Tourist"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Castle of Androus", "description": "13th century medieval castle with panoramic Messinian valley views." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Olive Walk & Treasure Hunt", "description": "45-minute interactive walk among olive groves." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Mill Tours", "description": "Visit traditional and modern olive mills." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Expert Olive Oil Tasting", "description": "30-minute tasting of 3 extra virgin oils by certified taster." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Food Pairing Experience", "description": "Light meal with traditional olive oil based dishes." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "95", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/kalamata/kalamata-olive-oil-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/kalamata-olive-oil-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT4H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
