import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hike to Dana Lighthouse Poros | Scenic Coastal Trail & Swimming",
  description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
  keywords: "Dana Lighthouse Poros, Poros hiking tour, Gerolimano beach, Saronic Gulf views, Greek lighthouse, Poros coastal trail",
  openGraph: {
    title: "Hike to Dana Lighthouse Poros | Scenic Coastal Trail & Swimming",
    description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
    images: [{ url: "https://uniquegreektours.com/images/hike-dana-hero-1.jpg", width: 1600, height: 1067, alt: "Dana Lighthouse Hike Poros" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hike to Dana Lighthouse Poros | Scenic Coastal Trail",
    description: "Discover the historic Dana Lighthouse on a scenic coastal hike through Poros island.",
    images: ["https://uniquegreektours.com/images/hike-dana-hero-1.jpg"],
  },
  alternates: { canonical: "https://uniquegreektours.com/tours/poros/poros-hike-dana-tour" },
};

export default function HikeDanaTourLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Hike to Dana Lighthouse",
    description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
    image: "https://uniquegreektours.com/images/hike-dana-hero-1.jpg",
    touristType: ["Hikers", "Nature Lovers", "History Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Mikro Neoreio", description: "Start point leading to the back of the island" },
        { "@type": "ListItem", position: 2, name: "Dana Lighthouse", description: "Historic 1870 stone lighthouse" },
        { "@type": "ListItem", position: 3, name: "Gerolimano Beach", description: "Swimming stop at beautiful beach" },
        { "@type": "ListItem", position: 4, name: "Vasilis Tavern", description: "Optional lunch at seaside tavern" }
      ]
    },
    offers: { "@type": "Offer", price: "55", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    provider: { "@type": "TourProvider", name: "Unique Greek Tours", url: "https://uniquegreektours.com" },
    location: { "@type": "Place", name: "Poros Island, Greece" },
    duration: "PT3H"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {children}
    </>
  );
}
