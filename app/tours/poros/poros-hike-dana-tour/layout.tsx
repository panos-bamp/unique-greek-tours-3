import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hike to Dana Lighthouse Poros - Coastal Trail & Swimming | Unique Greek Tours",
  description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
  keywords: "Dana Lighthouse Poros, Poros hiking tour, Gerolimano beach, Saronic Gulf views, Greek lighthouse, Poros coastal trail",
  openGraph: {
    title: "Hike to Dana Lighthouse Poros - Coastal Trail & Swimming",
    description: "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning views, swimming, and seaside dining.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/hike-dana-hero-1.jpg", width: 1200, height: 630, alt: "Dana Lighthouse Hike Poros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hike to Dana Lighthouse Poros",
    description: "Discover the historic Dana Lighthouse on a scenic coastal hike through Poros island with swimming stops.",
    images: ["https://uniquegreektours.com/images/hike-dana-hero-1.jpg"],
  },
};

export default function HikeDanaTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Hike to Dana Lighthouse",
          "description": "Hike through Poros to the historic Dana Lighthouse built in 1870. Enjoy stunning Saronic Gulf views, swim at Gerolimano beach, and lunch at a seaside tavern.",
          "image": ["https://uniquegreektours.com/images/hike-dana-hero-1.jpg", "https://uniquegreektours.com/images/hike-dana-hero-2.jpg", "https://uniquegreektours.com/images/hike-dana-hero-3.jpg"],
          "touristType": ["Hikers", "Nature Lovers", "History Enthusiasts", "Beach Lovers"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 4,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Mikro Neoreio Trail", "description": "Start point leading to the back side of the island." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Dana Lighthouse", "description": "Historic 1870 stone-built lighthouse restored by Laskaridis Foundation." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Gerolimano Beach", "description": "Crystal clear swimming stop with stunning views." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Vasilis Tavern", "description": "Optional authentic Greek lunch at seaside tavern." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "60", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/poros/poros-hike-dana-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/hike-dana-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT3H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
