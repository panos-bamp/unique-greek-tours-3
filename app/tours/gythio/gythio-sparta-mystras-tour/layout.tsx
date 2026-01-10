import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparta & Mystras Tour from Gythio - Ancient Warriors & Byzantine Glory | Unique Greek Tours",
  description: "Visit legendary Sparta and UNESCO Mystras from Gythio. Archaeological Museum, Olive Oil Museum, Byzantine churches and palaces. 5-6 hour guided private tour.",
  keywords: "Sparta tour, Mystras tour, Gythio excursion, UNESCO World Heritage, Byzantine churches, Greek olive oil museum, Sparta archaeological museum, Peloponnese tours",
  openGraph: {
    title: "Sparta & Mystras Tour from Gythio - Legends & Heritage",
    description: "Explore legendary Sparta and UNESCO-listed Mystras with a professional guide.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-1.jpg", width: 1200, height: 630, alt: "Sparta and Mystras Tour from Gythio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparta & Mystras Tour from Gythio",
    description: "Walk in the footsteps of Spartan warriors and explore Byzantine splendor.",
    images: ["https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-1.jpg"],
  },
};

export default function GythioSpartaMystrasTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Sparta & Mystras Tour from Gythio",
          "description": "Visit legendary Sparta and UNESCO World Heritage Mystras. Tour the Archaeological Museum with Neolithic to Roman artifacts, Museum of Greek Olive Oil, and Byzantine churches and palaces of Mystras.",
          "image": ["https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-1.jpg", "https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-2.jpg", "https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-3.jpg"],
          "touristType": ["History Lover", "Culture Enthusiast", "Family", "Small Groups", "Couples"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Legendary Sparta", "description": "Tour the epic city with licensed guide, learning about legendary warriors and history." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Archaeological Museum", "description": "Explore artifacts from sanctuaries spanning Neolithic to Roman times." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Museum of Greek Olive Oil", "description": "Journey through olive oil culture and technology from prehistoric times." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "UNESCO Mystras", "description": "Explore post-Byzantine churches, palaces and ruins of this World Heritage site." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Traditional Village Lunch", "description": "Optional stop at traditional tavern for authentic local cuisine." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "130", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/gythio/gythio-sparta-mystras-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/gythio-sparta-mystras-tour-hero-1.jpg", "priceRange": "€€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT6H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
