import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methana Volcano & Winery Tour from Poros | Hiking & Wine Tasting",
  description: "Hike an active volcano crater on Methana peninsula, then enjoy wine tasting, vineyard tour, and Greek lunch at a local winery. Full-day tour from Poros.",
  keywords: "Methana volcano tour, Poros winery tour, Greek wine tasting, volcano hiking Greece, Peristera cave, Saronic Gulf tours",
  openGraph: {
    title: "Methana Volcano & Winery Tour from Poros",
    description: "Hike an active volcano crater then enjoy wine tasting and Greek lunch at a local winery.",
    images: [{ url: "https://uniquegreektours.com/images/winery-tour-hero-1.jpg", width: 1600, height: 1067, alt: "Volcano and Winery Tour" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Methana Volcano & Winery Tour from Poros",
    description: "Combine volcano hiking with wine tasting on this unique full-day adventure.",
    images: ["https://uniquegreektours.com/images/winery-tour-hero-1.jpg"],
  },
  alternates: { canonical: "https://uniquegreektours.com/tours/poros/poros-winery-tour" },
};

export default function WineryTourLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Methana Volcano & Winery Tour",
    description: "Hike an active volcano crater on Methana peninsula, then enjoy wine tasting, vineyard tour, and Greek lunch at a local winery.",
    image: "https://uniquegreektours.com/images/winery-tour-hero-1.jpg",
    touristType: ["Wine Lovers", "Nature Enthusiasts", "Hikers", "Food & Wine Travelers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hotel Pickup", description: "Private transportation from your hotel" },
        { "@type": "ListItem", position: 2, name: "Methana Volcano Hike", description: "Trek to active volcano crater" },
        { "@type": "ListItem", position: 3, name: "Wine Tasting", description: "Local winery visit with tastings" },
        { "@type": "ListItem", position: 4, name: "Vineyard Tour & Lunch", description: "Wine and food pairing experience" },
        { "@type": "ListItem", position: 5, name: "Optional: Peristera Cave", description: "Swim in cave with sea lake" }
      ]
    },
    offers: { "@type": "Offer", price: "150", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    provider: { "@type": "TourProvider", name: "Unique Greek Tours" },
    location: { "@type": "Place", name: "Methana Peninsula, Greece" },
    duration: "PT6H"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {children}
    </>
  );
}
