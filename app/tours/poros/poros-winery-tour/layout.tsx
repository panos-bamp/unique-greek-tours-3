import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methana Volcano & Winery Tour from Poros - Hiking & Wine Tasting | Unique Greek Tours",
  description: "Hike an active volcano crater on Methana peninsula, then enjoy wine tasting, vineyard tour, and Greek lunch at a local winery. Full-day tour from Poros.",
  keywords: "Methana volcano tour, Poros winery tour, Greek wine tasting, volcano hiking Greece, Peristera cave, Saronic Gulf tours",
  openGraph: {
    title: "Methana Volcano & Winery Tour from Poros",
    description: "Hike an active volcano crater then enjoy wine tasting and Greek lunch at a local winery. Full-day adventure.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/winery-tour-hero-1.jpg", width: 1200, height: 630, alt: "Volcano and Winery Tour Methana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Methana Volcano & Winery Tour from Poros",
    description: "Combine volcano hiking with wine tasting on this unique full-day adventure from Poros.",
    images: ["https://uniquegreektours.com/images/winery-tour-hero-1.jpg"],
  },
};

export default function WineryTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Methana Volcano & Winery Tour",
          "description": "Hike an active volcano crater on Methana peninsula, then enjoy wine tasting, vineyard tour, and Greek lunch at a local winery. Full-day tour from Poros.",
          "image": ["https://uniquegreektours.com/images/winery-tour-hero-1.jpg", "https://uniquegreektours.com/images/winery-tour-hero-2.jpg", "https://uniquegreektours.com/images/winery-tour-hero-3.jpg"],
          "touristType": ["Wine Lovers", "Nature Enthusiasts", "Hikers", "Food & Wine Travelers"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Hotel Pickup", "description": "Private transportation from your hotel in Poros." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Boat Trip to Methana", "description": "Scenic boat journey to the volcanic peninsula." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Methana Volcano Hike", "description": "Trek to active volcano crater with stunning views." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Wine Tasting & Vineyard Tour", "description": "Local winery visit with wine and food pairing lunch." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Optional: Peristera Cave", "description": "Swim in underground sea lake inside the cave." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "160", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/poros/poros-winery-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/winery-tour-hero-1.jpg", "priceRange": "€€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT6H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
