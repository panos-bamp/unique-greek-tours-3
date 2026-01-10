import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiking to Karathona Beach from Nafplio - Coastal Trail | Unique Greek Tours",
  description: "Coastal hike from Syntagma Square to Karathona Beach. Walk under Venetian fortresses, cross Arvanitia beach, enjoy Argolic Gulf views, end at Saint Nicholas chapel. 2-hour guided tour.",
  keywords: "Karathona beach hiking, Nafplio coastal walk, Arvanitia beach, Venetian fortresses, Saint Nicholas chapel, Argolic Gulf, Palamidi, Akronafplia",
  openGraph: {
    title: "Hiking to Karathona Beach - Coastal Adventure in Nafplio",
    description: "Scenic coastal hike beneath Venetian fortresses with stunning Argolic Gulf views.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-1.jpg", width: 1200, height: 630, alt: "Hiking to Karathona Beach Nafplio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking to Karathona Beach Nafplio",
    description: "Walk the stunning coastal path from Nafplio to Karathona Beach.",
    images: ["https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-1.jpg"],
  },
};

export default function NafplioHikingKarathonaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Hiking to Karathona Beach - Agios Nikolaos",
          "description": "Coastal hiking from Syntagma Square to Karathona Beach. Walk under Venetian fortresses of Akronafplia and Palamidi, cross Arvanitia beach, enjoy Argolic Gulf views, end at Saint Nicholas chapel on the rocks.",
          "image": ["https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-3.jpg"],
          "touristType": ["Nature Lover", "Beach Lover", "Hiking Enthusiast", "Family"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Under Venetian Fortresses", "description": "Walk beneath impressive Akronafplia and Palamidi fortresses." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Historic Cobblestone Walkways", "description": "Follow famous seaside cobblestone paths connecting coastal areas." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Arvanitia Beach Crossing", "description": "Cross the entire picturesque Arvanitia beach." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Argolic Gulf Views", "description": "Enjoy stunning panoramic views throughout the journey." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Chapel of Saint Nicholas", "description": "End at the chapel built on rocks above the sea." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "45", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-hiking-karathona-beach" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/nafplio-hiking-karathona-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT2H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
