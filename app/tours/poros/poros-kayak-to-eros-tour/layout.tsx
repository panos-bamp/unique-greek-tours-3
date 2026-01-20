import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayak to Eros Island Poros - Sea Kayaking & Snorkeling | Unique Greek Tours",
  description: "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse on this unforgettable water adventure.",
  keywords: "Eros Island kayak, Poros kayaking, sea kayak Greece, Dascalio island, snorkeling Poros, water sports Saronic Gulf",
  openGraph: {
    title: "Kayak to Eros Island Poros - Sea Kayaking Adventure | Unique Greek Tours",
    description: "Paddle to the heart-shaped Eros Island near Poros. Sea kayaking, snorkeling, and Dana Lighthouse visit.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://unique-greek-tours-3.vercel.app/images/kayak-eros-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Kayak to Eros Island - sea kayaking adventure near Poros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayak to Eros Island Poros - Sea Kayaking Adventure",
    description: "Paddle to the romantic heart-shaped Eros Island with snorkeling and Dana Lighthouse visit.",
    images: ["https://unique-greek-tours-3.vercel.app/images/kayak-eros-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-kayak-to-eros-tour",
  },
};

export default function KayakErosTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Kayak to Eros Island",
    description: "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse on this unforgettable water adventure.",
    image: [
      "https://unique-greek-tours-3.vercel.app/images/kayak-eros-hero-1.jpg",
      "https://unique-greek-tours-3.vercel.app/images/kayak-eros-hero-2.jpg",
      "https://unique-greek-tours-3.vercel.app/images/kayak-eros-hero-3.jpg"
    ],
    touristType: ["Couples", "Adventure Seekers", "Water Sports Enthusiasts", "Romance Travelers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristAttraction",
            name: "Kanali Meeting Point",
            description: "Equipment briefing and kayak preparation"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristAttraction",
            name: "Eros Island (Dascalio)",
            description: "Heart-shaped island with chapel, popular wedding destination"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristAttraction",
            name: "Snorkeling & Swimming",
            description: "Crystal clear waters exploration with equipment provided"
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "TouristAttraction",
            name: "Dana Lighthouse",
            description: "Historic lighthouse at channel entrance"
          }
        }
      ]
    },
    offers: [
      {
        "@type": "Offer",
        name: "2-Hour Session",
        price: "50",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-kayak-to-eros-tour"
      },
      {
        "@type": "Offer",
        name: "4-Hour Session",
        price: "85",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        url: "https://unique-greek-tours-3.vercel.app/tours/poros/poros-kayak-to-eros-tour"
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
