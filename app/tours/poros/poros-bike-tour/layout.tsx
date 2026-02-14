import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Mountain E-Bike Tour - Temple of Poseidon Cycling | Unique Greek Tours",
  description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views. Off-road adventure with beach break included.",
  keywords: "Poros e-bike tour, mountain biking Poros, Temple of Poseidon cycling, Poros island bike tour, electric bike Greece",
  openGraph: {
    title: "Poros Mountain E-Bike Tour - Temple of Poseidon Cycling",
    description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and enjoy off-road adventures with stunning views.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/bike-tour-hero-1.jpg", width: 1200, height: 630, alt: "Poros E-Bike Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Mountain E-Bike Tour",
    description: "Explore Poros by e-bike with visits to Temple of Poseidon and stunning viewpoints.",
    images: ["https://uniquegreektours.com/images/bike-tour-hero-1.jpg"],
  },
};

export default function BikeTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Poros Mountain E-Bike Tour",
          "description": "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views. Off-road adventure with beach break included.",
          "image": ["https://uniquegreektours.com/images/bike-tour-hero-1.jpg", "https://uniquegreektours.com/images/bike-tour-hero-2.jpg", "https://uniquegreektours.com/images/bike-tour-hero-3.jpg"],
          "touristType": ["Cyclists", "Adventure Seekers", "Active Travelers", "Nature Enthusiasts"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Poros Port & Sfairia", "description": "Starting point and island tour beginning." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "The Monastery", "description": "First scenic stop with peaceful atmosphere." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Temple of Poseidon", "description": "Historic ancient temple ruins with incredible views." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Vrysoula", "description": "Rest stop under ancient plane trees." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Russian Naval Station", "description": "Off-road section with panoramic island views." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "85", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/poros/poros-bike-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/bike-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT2H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
