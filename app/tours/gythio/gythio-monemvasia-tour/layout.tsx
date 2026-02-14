import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monemvasia Castle Tour from Gythio - Medieval Fortress Exploration | Unique Greek Tours",
  description: "Explore the medieval castle town of Monemvasia from Gythio. Guided tour through Byzantine alleys, Venetian architecture, panoramic sea views, and local tastings. 6-hour private tour.",
  keywords: "Monemvasia tour, Gythio excursion, medieval castle Greece, Byzantine architecture, Venetian fortress, castle town tour, Peloponnese tours, guided tour Monemvasia",
  openGraph: {
    title: "Monemvasia Castle Tour from Gythio - Medieval Time Travel",
    description: "Explore Greece's most impressive medieval fortress town with a licensed guide.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-1.jpg", width: 1200, height: 630, alt: "Monemvasia Castle Tour from Gythio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monemvasia Castle Tour from Gythio",
    description: "Step back in time at Greece's stunning medieval fortress town.",
    images: ["https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-1.jpg"],
  },
};

export default function GythioMonemvasiaTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Monemvasia Castle Tour from Gythio",
          "description": "Explore the medieval castle town of Monemvasia with a professional licensed guide. Discover Byzantine monuments, Venetian architecture, romantic alleys, panoramic sea views, and local product tastings.",
          "image": ["https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-1.jpg", "https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-2.jpg", "https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-3.jpg"],
          "touristType": ["History Lover", "Culture Enthusiast", "Architecture Lover", "Couples", "Family"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Medieval Castle Town", "description": "Enter through the historic gateway into a perfectly preserved medieval world." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Byzantine & Venetian Heritage", "description": "Discover monuments showcasing Byzantine, Venetian, and Ottoman influences." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Professional Guided Tour", "description": "Licensed guide shares captivating stories of myths and knights." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Panoramic Sea Views", "description": "Enjoy breathtaking views of the Myrtoo Sea from the fortress." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Local Product Tasting", "description": "Taste local olives, olive oil, liqueurs, and regional specialties." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "220", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/gythio/gythio-monemvasia-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/gythio-monemvasia-tour-hero-1.jpg", "priceRange": "€€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT6H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
