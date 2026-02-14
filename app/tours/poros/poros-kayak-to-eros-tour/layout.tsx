import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayak to Eros Island Poros - Sea Kayaking & Snorkeling | Unique Greek Tours",
  description: "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse on this unforgettable water adventure.",
  keywords: "Eros Island kayak, Poros kayaking, sea kayak Greece, Dascalio island, snorkeling Poros, water sports Saronic Gulf",
  openGraph: {
    title: "Kayak to Eros Island Poros - Sea Kayaking Adventure",
    description: "Paddle to the heart-shaped Eros Island near Poros. Sea kayaking, snorkeling, and Dana Lighthouse visit.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kayak-eros-hero-1.jpg", width: 1200, height: 630, alt: "Kayak to Eros Island Poros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayak to Eros Island Poros",
    description: "Paddle to the romantic heart-shaped Eros Island with snorkeling and Dana Lighthouse visit.",
    images: ["https://uniquegreektours.com/images/kayak-eros-hero-1.jpg"],
  },
};

export default function KayakErosTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Kayak to Eros Island",
          "description": "Paddle to the heart-shaped Eros Island near Poros. Enjoy sea kayaking, snorkeling, swimming, and visit the Dana Lighthouse on this unforgettable water adventure.",
          "image": ["https://uniquegreektours.com/images/kayak-eros-hero-1.jpg", "https://uniquegreektours.com/images/kayak-eros-hero-2.jpg", "https://uniquegreektours.com/images/kayak-eros-hero-3.jpg"],
          "touristType": ["Couples", "Adventure Seekers", "Water Sports Enthusiasts", "Romance Travelers"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 4,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Kanali Meeting Point", "description": "Equipment briefing and kayak preparation." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Eros Island (Dascalio)", "description": "Heart-shaped island with chapel, popular wedding destination." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Snorkeling & Swimming", "description": "Crystal clear waters exploration with equipment provided." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Dana Lighthouse", "description": "Historic stone-built lighthouse at channel entrance." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "70", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/poros/poros-kayak-to-eros-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/kayak-eros-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT2H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
