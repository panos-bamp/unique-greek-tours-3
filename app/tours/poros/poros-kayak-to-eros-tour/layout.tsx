import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayak to Eros Island Poros | Sea Kayaking & Snorkeling Adventure",
  description: "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse on this unforgettable water adventure.",
  keywords: "Eros Island kayak, Poros kayaking, sea kayak Greece, Dascalio island, snorkeling Poros, water sports Saronic Gulf",
  openGraph: {
    title: "Kayak to Eros Island Poros | Sea Kayaking Adventure",
    description: "Paddle to the heart-shaped Eros Island near Poros. Sea kayaking, snorkeling, and Dana Lighthouse visit.",
    images: [{ url: "https://uniquegreektours.com/images/kayak-eros-hero-1.jpg", width: 1600, height: 1067, alt: "Kayak to Eros Island" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayak to Eros Island Poros | Sea Kayaking Adventure",
    description: "Paddle to the heart-shaped Eros Island near Poros with snorkeling and Dana Lighthouse visit.",
    images: ["https://uniquegreektours.com/images/kayak-eros-hero-1.jpg"],
  },
  alternates: { canonical: "https://uniquegreektours.com/tours/poros/poros-kayak-to-eros-tour" },
};

export default function KayakErosTourLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Kayak to Eros Island",
    description: "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse.",
    image: "https://uniquegreektours.com/images/kayak-eros-hero-1.jpg",
    touristType: ["Couples", "Adventure Seekers", "Water Sports Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Kanali Meeting Point", description: "Equipment briefing and preparation" },
        { "@type": "ListItem", position: 2, name: "Eros Island (Dascalio)", description: "Heart-shaped island with chapel" },
        { "@type": "ListItem", position: 3, name: "Snorkeling & Swimming", description: "Crystal clear waters exploration" },
        { "@type": "ListItem", position: 4, name: "Dana Lighthouse", description: "Historic lighthouse at channel entrance" }
      ]
    },
    offers: [
      { "@type": "Offer", name: "2-Hour Session", price: "50", priceCurrency: "EUR" },
      { "@type": "Offer", name: "4-Hour Session", price: "85", priceCurrency: "EUR" }
    ],
    provider: { "@type": "TourProvider", name: "Unique Greek Tours" },
    location: { "@type": "Place", name: "Poros Island, Greece" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {children}
    </>
  );
}
