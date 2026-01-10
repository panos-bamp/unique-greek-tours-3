import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medieval Castles Nafplio Kayak Tour - 4 Fortresses by Sea | Unique Greek Tours",
  description: "Flagship kayak tour past 4 historic fortresses. Paddle around Bourtzi, under Palamidi and Akronafplia cliffs. Includes snorkeling, lunch, photos. 4-hour tour for all experience levels.",
  keywords: "Nafplio kayak tour, Bourtzi fortress kayak, Palamidi sea view, medieval castles kayak, Akronafplia, sea kayak Greece, Karathonas beach, Nafplio water sports",
  openGraph: {
    title: "Medieval Castles Nafplio Kayak Tour - Paddle Through History",
    description: "Our flagship tour - kayak past 4 fortresses in Greece's first capital city.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-kayak-tour-hero-1.jpg", width: 1200, height: 630, alt: "Medieval Castles Nafplio Kayak Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medieval Castles Nafplio Kayak Tour",
    description: "Paddle past 4 historic fortresses on this unique sea kayak adventure.",
    images: ["https://uniquegreektours.com/images/nafplio-kayak-tour-hero-1.jpg"],
  },
};

export default function NafplioKayakTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Medieval Castles Nafplio Kayak Tour",
          "description": "Flagship sea kayak tour from Greece's first capital, paddling past 4 historic fortresses. Visit Bourtzi (1473), paddle under UNESCO Palamidi and Akronafplia cliffs, enjoy secluded beaches with traditional refreshments.",
          "image": ["https://uniquegreektours.com/images/nafplio-kayak-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-kayak-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-kayak-tour-hero-3.jpg"],
          "touristType": ["Adventure Seeker", "History Lover", "Family", "Water Sports Enthusiast"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Bourtzi Fortress", "description": "Paddle around the iconic 1473 Venetian island fortress." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Four Fortress Views", "description": "See UNESCO Palamidi, Akronafplia, and Old Town fortifications." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Cliffside Paddling", "description": "Kayak under dramatic cliffs with ancient fortifications." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Secluded Beach Stop", "description": "Rest at hidden beach with traditional delicacies." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Karathonas Beach Option", "description": "Optional finish at Karathonas with watersports available." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "75", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-kayak-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/nafplio-kayak-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT4H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
