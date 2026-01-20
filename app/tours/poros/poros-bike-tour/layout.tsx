import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Mountain E-Bike Tour | Temple of Poseidon & Island Cycling",
  description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views. Off-road adventure with beach break included.",
  keywords: "Poros e-bike tour, mountain biking Poros, Temple of Poseidon cycling, Poros island bike tour, electric bike Greece",
  openGraph: {
    title: "Poros Mountain E-Bike Tour | Temple of Poseidon & Island Cycling",
    description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and enjoy off-road adventures.",
    images: [{ url: "https://uniquegreektours.com/images/bike-tour-hero-1.jpg", width: 1600, height: 1067, alt: "Poros E-Bike Tour" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Mountain E-Bike Tour",
    description: "Explore Poros by e-bike with visits to Temple of Poseidon and stunning viewpoints.",
    images: ["https://uniquegreektours.com/images/bike-tour-hero-1.jpg"],
  },
  alternates: { canonical: "https://uniquegreektours.com/tours/poros/poros-bike-tour" },
};

export default function BikeTourLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Poros Mountain E-Bike Tour",
    description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views and off-road adventure.",
    image: "https://uniquegreektours.com/images/bike-tour-hero-1.jpg",
    touristType: ["Cyclists", "Adventure Seekers", "Active Travelers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Poros Port & Sfairia", description: "Starting point and island tour" },
        { "@type": "ListItem", position: 2, name: "The Monastery", description: "First scenic stop" },
        { "@type": "ListItem", position: 3, name: "Temple of Poseidon", description: "Historic temple viewpoint" },
        { "@type": "ListItem", position: 4, name: "Vrysoula", description: "Rest under plane trees" },
        { "@type": "ListItem", position: 5, name: "Russian Naval Station viewpoint", description: "Panoramic island views" }
      ]
    },
    offers: [
      { "@type": "Offer", name: "2-Hour Session", price: "55", priceCurrency: "EUR" },
      { "@type": "Offer", name: "4-Hour Session", price: "95", priceCurrency: "EUR" }
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
