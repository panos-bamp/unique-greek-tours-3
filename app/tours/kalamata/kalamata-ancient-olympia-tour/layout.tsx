import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancient Olympia Tour from Kalamata - Birthplace of Olympics | Unique Greek Tours",
  description: "Visit Ancient Olympia from Kalamata. See the original Olympic stadium, Temple of Zeus, and Hermes of Praxiteles. 7-hour guided tour through the birthplace of the Olympic Games with licensed guide.",
  keywords: "Ancient Olympia tour, Kalamata excursion, Olympic Games birthplace, Temple of Zeus, Hermes Praxiteles, Peloponnese tours, Greek history tour",
  openGraph: {
    title: "Ancient Olympia Tour - Walk Where Olympic History Began",
    description: "Explore the birthplace of the Olympic Games from Kalamata. Visit the ancient stadium, Temple of Zeus, and world-class archaeological museum.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kalamata-olympia-tour-hero-1.jpg", width: 1200, height: 630, alt: "Ancient Olympia Tour from Kalamata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient Olympia Tour from Kalamata",
    description: "Visit the birthplace of the Olympic Games. See the ancient stadium, Temple of Zeus, and famous sculptures.",
    images: ["https://uniquegreektours.com/images/kalamata-olympia-tour-hero-1.jpg"],
  },
};

export default function KalamataOlympiaTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Ancient Olympia Tour from Kalamata",
          "description": "Visit Ancient Olympia, birthplace of the Olympic Games. See the ancient stadium, Temple of Zeus with its Seven Wonders statue, and the Archaeological Museum featuring Hermes of Praxiteles.",
          "image": ["https://uniquegreektours.com/images/kalamata-olympia-tour-hero-1.jpg", "https://uniquegreektours.com/images/kalamata-olympia-tour-hero-2.jpg", "https://uniquegreektours.com/images/kalamata-olympia-tour-hero-3.jpg"],
          "touristType": ["History Lover", "Cultural Tourist", "Sports Enthusiast", "Archaeological Tourist"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Ancient Olympic Stadium", "description": "Walk through the stadium where Olympic Games were born." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Temple of Zeus", "description": "Explore ruins of temple housing the 13.5m golden statue." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Archaeological Museum", "description": "Marvel at Hermes of Praxiteles and outstanding artifacts." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Alpheios Valley Drive", "description": "Scenic drive through beautiful Peloponnese landscapes." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Ancient Greek Art", "description": "See temples depicting beauty and harmony of Greek art." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "140", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "validFrom": "2026-01-01", "url": "https://uniquegreektours.com/tours/kalamata/kalamata-ancient-olympia-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "priceRange": "€€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT7H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
