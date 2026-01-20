import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hike to Dana Lighthouse Poros - Coastal Trail & Swimming | Unique Greek Tours",
  description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
  keywords: "Dana Lighthouse Poros, Poros hiking tour, Gerolimano beach, Saronic Gulf views, Greek lighthouse, Poros coastal trail",
  openGraph: {
    title: "Hike to Dana Lighthouse Poros - Coastal Trail & Swimming | Unique Greek Tours",
    description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning views, swimming, and seaside dining.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/hike-dana-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Dana Lighthouse Hike Poros - coastal hiking trail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hike to Dana Lighthouse Poros - Scenic Coastal Trail",
    description: "Discover the historic Dana Lighthouse on a scenic coastal hike through Poros island with swimming stops.",
    images: ["https://unique-greek-tours-3.vercel.app/images/hike-dana-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-hike-dana-tour",
  },
};

export default function HikeDanaTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Hike to Dana Lighthouse",
    description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
    image: [
      "https://unique-greek-tours-3.vercel.app/images/hike-dana-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/hike-dana-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/hike-dana-hero-3.jpg"
    ],
    touristType: ["Hikers", "Nature Lovers", "History Enthusiasts", "Beach Lovers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Mikro Neoreio Trail",
            description: "Start point leading to the back side of the island"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Dana Lighthouse",
            description: "Historic 1870 stone-built lighthouse restored by Laskaridis Foundation"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Gerolimano Beach",
            description: "Crystal clear swimming stop with stunning views"
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Vasilis Tavern",
            description: "Optional authentic Greek lunch at seaside tavern"
          }
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "55",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-hike-dana-tour"
    },
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
    duration: "PT3H",
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
