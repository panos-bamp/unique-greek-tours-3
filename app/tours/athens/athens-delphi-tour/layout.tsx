import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour to Delphi from Athens - Full Day Private Trip | Unique Greek Tours",
  description: "Visit UNESCO World Heritage Site Delphi from Athens. Explore Temple of Apollo, ancient oracle, Theatre, Tholos of Athena, Archaeological Museum, and charming Arachova village. 8-hour tour.",
  keywords: "Delphi tour from Athens, Delphi day trip, Oracle of Delphi, Temple of Apollo, Delphi Museum, Arachova village, Athens excursion, Delphi private tour, Greek archaeology tour",
  openGraph: {
    title: "Tour to Delphi from Athens - Center of the Ancient World",
    description: "Full-day private trip to Delphi. UNESCO World Heritage Site with Temple of Apollo, Theatre, Museum, and traditional village of Arachova.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/athens-delphi-tour-hero-1.jpg", width: 1200, height: 630, alt: "Tour to Delphi from Athens" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour to Delphi from Athens",
    description: "8-hour private tour to the ancient oracle at Delphi with licensed guide, museum visit, and Arachova village stop.",
    images: ["https://uniquegreektours.com/images/athens-delphi-tour-hero-1.jpg"],
  },
};

export default function AthensDelphiTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Tour to Delphi from Athens",
          "description": "Full-day private excursion to Delphi, the center of the ancient world. Visit the UNESCO World Heritage Site including Temple of Apollo, Theatre of Delphi, Athens Treasury, Castalia Spring, Tholos of Athena Pronaia. Explore the magnificent Delphi Archaeological Museum and stop at the traditional mountain village of Arachova for a heartful meal.",
          "image": ["https://uniquegreektours.com/images/athens-delphi-tour-hero-1.jpg", "https://uniquegreektours.com/images/athens-delphi-tour-hero-2.jpg", "https://uniquegreektours.com/images/athens-delphi-tour-hero-3.jpg"],
          "touristType": ["Cultural Tourist", "History Enthusiast", "Archaeology Lover", "Day Tripper"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Scenic Drive Through Viotia", "description": "Comfortable private transfer through central Greece to mystical Delphi." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Temple of Apollo & Oracle", "description": "Explore the sanctuary where the famous Oracle of Delphi delivered prophecies." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Theatre & Tholos of Athena", "description": "Marvel at the ancient theatre and iconic circular Tholos of Athena Pronaia." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Delphi Archaeological Museum", "description": "Artifacts dating to Neolithic Age including the famous Charioteer of Delphi." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Arachova Village", "description": "Traditional mountain village with scenic views and authentic Greek tavern." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "180", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/athens/athens-delphi-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/athens-delphi-tour-hero-1.jpg", "priceRange": "€€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT8H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
