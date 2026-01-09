import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navarino Bay Mini Cruise from Kalamata - Boat Tour & Swimming | Unique Greek Tours",
  description: "Cruise the turquoise waters of Navarino Bay from Kalamata. Swim at secluded spots, visit historic Sphaktiria island, spot sea turtles and dolphins. 5-hour private boat tour with certified captain.",
  keywords: "Navarino Bay cruise, Kalamata boat tour, Sphaktiria island, swimming tour Greece, Battle of Navarino, Peloponnese boat trip, sea turtle watching",
  openGraph: {
    title: "Navarino Bay Mini Cruise - Turquoise Waters & History",
    description: "Private boat cruise through historic Navarino Bay. Swimming, island exploration, and wildlife spotting.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kalamata-navarino-tour-hero-1.jpg", width: 1200, height: 630, alt: "Navarino Bay Mini Cruise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navarino Bay Mini Cruise from Kalamata",
    description: "Turquoise waters, historic islets, swimming, and wildlife - an unforgettable Mediterranean cruise.",
    images: ["https://uniquegreektours.com/images/kalamata-navarino-tour-hero-1.jpg"],
  },
};

export default function KalamataNavarinoTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Mini Cruise Tour in Navarino Bay",
          "description": "Unique cruise experience in turquoise Navarino Bay waters. Visit Sphaktiria island, Chelonaki islet monument, swim in crystal waters, spot sea turtles and dolphins. Historic bay of Battle of Navarino 1827.",
          "image": ["https://uniquegreektours.com/images/kalamata-navarino-tour-hero-1.jpg", "https://uniquegreektours.com/images/kalamata-navarino-tour-hero-2.jpg", "https://uniquegreektours.com/images/kalamata-navarino-tour-hero-3.jpg"],
          "touristType": ["Beach & Sun Seeker", "History Lover", "Nature Lover", "Adventure Seeker"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Private Boat Cruise", "description": "Comfortable cruise with certified captain through Navarino Bay." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Crystal Clear Swimming", "description": "Swim in turquoise waters at secluded spots." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Sphaktiria Island", "description": "Explore the natural wave breaker island with dramatic landscapes." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Chelonaki Islet Monument", "description": "Visit memorial to fallen British officers from Battle of Navarino." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Wildlife Encounters", "description": "Spot sea turtles and dolphins in their natural habitat." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "120", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/kalamata/kalamata-navarino-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "priceRange": "€€€", "telephone": "+30-27520-24444" },
          "duration": "PT5H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
