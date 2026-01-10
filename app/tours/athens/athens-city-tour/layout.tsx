import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athens City Tour, Acropolis & Museum - Private Guided Tour | Unique Greek Tours",
  description: "Explore Athens with an expert guide. Visit the UNESCO-listed Acropolis, Parthenon, Erechtheion, Temple of Zeus, and the new Acropolis Museum with 4,000 artifacts. 5-hour walking tour.",
  keywords: "Athens city tour, Acropolis tour, Parthenon guided tour, Acropolis Museum, Athens walking tour, Greek temple tour, Athens private tour, Syntagma Square, Evzones, Temple of Zeus",
  openGraph: {
    title: "Athens City Tour, Acropolis & Acropolis Museum",
    description: "Discover ancient Athens with an expert guide. UNESCO-listed Acropolis, Parthenon, Temple of Zeus, and world-class Acropolis Museum.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/athens-city-tour-hero-1.jpg", width: 1200, height: 630, alt: "Athens City Tour - Acropolis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athens City Tour, Acropolis & Museum",
    description: "5-hour private guided tour of Athens including Acropolis, Parthenon, and Acropolis Museum.",
    images: ["https://uniquegreektours.com/images/athens-city-tour-hero-1.jpg"],
  },
};

export default function AthensCityTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Athens City Tour, Acropolis & Acropolis Museum",
          "description": "Comprehensive Athens walking tour with expert licensed guide. Visit Syntagma Square, watch the Evzones changing of the guard, explore Temple of Zeus, Hadrian's Arch, the UNESCO-listed Acropolis monuments including Parthenon, Erechtheion, and Temple of Athena Nike, plus the world-class Acropolis Museum.",
          "image": ["https://uniquegreektours.com/images/athens-city-tour-hero-1.jpg", "https://uniquegreektours.com/images/athens-city-tour-hero-2.jpg", "https://uniquegreektours.com/images/athens-city-tour-hero-3.jpg"],
          "touristType": ["Cultural Tourist", "History Enthusiast", "Archaeology Lover"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 6,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Syntagma Square & Parliament", "description": "See the House of Parliament and watch the famous Evzones changing of the guard." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "National Garden & Zappeion Hall", "description": "Stroll through the lush National Garden and admire neoclassical architecture." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Temple of Zeus & Hadrian's Arch", "description": "Visit impressive Roman-era monuments." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Ancient Theaters", "description": "Theatre of Dionysus and Odeon of Herodes Atticus." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "The Acropolis", "description": "UNESCO World Heritage Site with Parthenon, Erechtheion, Temple of Athena Nike, Propylaia." }},
              { "@type": "ListItem", "position": 6, "item": { "@type": "TouristAttraction", "name": "Acropolis Museum", "description": "World-class museum with 4,000 artifacts and glass floors revealing excavations." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "120", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/athens/athens-city-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/athens-city-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT5H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
