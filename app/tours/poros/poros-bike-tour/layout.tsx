import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Mountain E-Bike Tour - Temple of Poseidon Cycling | Unique Greek Tours",
  description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views. Off-road adventure with beach break included.",
  keywords: "Poros e-bike tour, mountain biking Poros, Temple of Poseidon cycling, Poros island bike tour, electric bike Greece",
  openGraph: {
    title: "Poros Mountain E-Bike Tour - Temple of Poseidon Cycling | Unique Greek Tours",
    description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and enjoy off-road adventures with stunning views.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/bike-tour-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Poros E-Bike Tour - mountain biking adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Mountain E-Bike Tour - Temple of Poseidon",
    description: "Explore Poros by e-bike with visits to Temple of Poseidon and stunning viewpoints.",
    images: ["https://unique-greek-tours-3.vercel.app/images/bike-tour-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-bike-tour",
  },
};

export default function BikeTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Poros Mountain E-Bike Tour",
    description: "Explore Poros by e-bike! Visit the Monastery, Temple of Poseidon, and Vrysoula with stunning island views. Off-road adventure with beach break included.",
    image: [
      "https://unique-greek-tours-3.vercel.app/images/bike-tour-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/bike-tour-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/bike-tour-hero-3.jpg"
    ],
    touristType: ["Cyclists", "Adventure Seekers", "Active Travelers", "Nature Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Poros Port & Sfairia",
            description: "Starting point and island tour beginning"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "The Monastery",
            description: "First scenic stop with peaceful atmosphere"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Temple of Poseidon",
            description: "Historic ancient temple ruins with incredible views"
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Vrysoula",
            description: "Rest stop under ancient plane trees"
          }
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "TouristAttraction",
            name: "Russian Naval Station",
            description: "Off-road section with panoramic island views"
          }
        }
      ]
    },
    offers: [
      {
        "@type": "Offer",
        name: "2-Hour Session",
        price: "55",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-bike-tour"
      },
      {
        "@type": "Offer",
        name: "4-Hour Session",
        price: "95",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-bike-tour"
      }
    ],
    provider: {
      "@type": "TouristInformationCenter",
      name: "Unique Greek Tours",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poros",
        addressRegion: "Saronic Gulf",
        addressCountry: "GR"
      },
      telephone: "+30-22980-24444",
      email: "info@uniquegreektours.com"
    },
    duration: "PT2H",
    inLanguage: "en",
    tourBookingPage: "https://unique-greek-tours-3.vercel.app/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
