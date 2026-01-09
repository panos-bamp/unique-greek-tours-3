import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villages of Mani Tour from Kalamata - Kardamyli & Coastal Beauty | Unique Greek Tours",
  description: "Explore coastal Mani villages from Kalamata. Visit Balcony of Kardamyli, natural port of Agios Nikolaos, and historic Kardamyli village. 4-hour scenic tour through dramatic Mani peninsula.",
  keywords: "Mani villages tour, Kardamyli tour, Kalamata excursion, Mani peninsula, Greek coastal villages, Patrick Leigh Fermor, Peloponnese tours",
  openGraph: {
    title: "Villages of Mani Tour - Discover the Wild Peloponnese",
    description: "Explore dramatic Mani coastline, visit Kardamyli village, and enjoy spectacular views from the Balcony of Kardamyli.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kalamata-mani-tour-hero-1.jpg", width: 1200, height: 630, alt: "Villages of Mani Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villages of Mani Tour from Kalamata",
    description: "Scenic coastal tour through Mani villages, Kardamyli, and dramatic viewpoints.",
    images: ["https://uniquegreektours.com/images/kalamata-mani-tour-hero-1.jpg"],
  },
};

export default function KalamataManiTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Villages of Mani Tour",
          "description": "Explore coastal Mani villages. Visit Balcony of Kardamyli with Meropi island views, natural port of Agios Nikolaos, and historic Kardamyli - home of writer Patrick Leigh Fermor.",
          "image": ["https://uniquegreektours.com/images/kalamata-mani-tour-hero-1.jpg", "https://uniquegreektours.com/images/kalamata-mani-tour-hero-2.jpg", "https://uniquegreektours.com/images/kalamata-mani-tour-hero-3.jpg"],
          "touristType": ["Nature Lover", "Cultural Tourist", "Photography Enthusiast"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Balcony of Kardamyli", "description": "Spectacular panoramic views of coastline and Meropi island." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Island of Meropi Views", "description": "Beautiful island views from dramatic Mani coastline." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Natural Port of Agios Nikolaos", "description": "Charming natural harbor with crystal-clear waters." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Kardamyli Village", "description": "Historic village, former home of Patrick Leigh Fermor." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Scenic Coastal Drive", "description": "Dramatic Mani peninsula scenery with photo opportunities." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "85", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/kalamata/kalamata-mani-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT4H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
