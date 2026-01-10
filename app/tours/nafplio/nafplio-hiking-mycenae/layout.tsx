import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiking Mycenae to Prosymna - Ancient Ruins Trail | Unique Greek Tours",
  description: "Easy 5.5km hike from Ancient Mycenae to Prosymna village. Walk the ancient Corinth-Argos road, see Hellenistic tower, Roman baths, watermill. Stunning acropolis views. Professional guide.",
  keywords: "Mycenae hiking, Prosymna trail, Ancient Mycenae walk, Argolida hiking, Bronze Age trail, Nafplio hiking tour, ancient ruins hike",
  openGraph: {
    title: "Hiking Mycenae to Prosymna - Walk Ancient Greek Paths",
    description: "Easy hike from Mycenae citadel through olive groves with ancient ruins and stunning views.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-hiking-mycenae-tour-hero-1.jpg", width: 1200, height: 630, alt: "Hiking Mycenae to Prosymna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking Mycenae - Prosymna Trail",
    description: "Walk the ancient paths from Mycenae through historic ruins.",
    images: ["https://uniquegreektours.com/images/nafplio-hiking-mycenae-tour-hero-1.jpg"],
  },
};

export default function NafplioHikingMycenaeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Hiking Mycenae - Prosymna",
          "description": "Easy 5.5km hike from Ancient Mycenae citadel to Prosymna village. Walk the ancient Corinth-Argos road through olive groves, see Hellenistic tower, Roman baths, watermill and stone bridge. Stunning views of the Mycenaean acropolis.",
          "image": ["https://uniquegreektours.com/images/nafplio-hiking-mycenae-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-hiking-mycenae-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-hiking-mycenae-tour-hero-3.jpg"],
          "touristType": ["History Lover", "Nature Lover", "Hiking Enthusiast", "Family"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Ancient Mycenae Start", "description": "Begin at the legendary Bronze Age citadel." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Ancient Corinth-Argos Road", "description": "Walk the historic path used for centuries." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Ancient Ruins", "description": "Discover Hellenistic tower, Roman baths, and watermill." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Acropolis Views", "description": "Enjoy stunning panoramic views throughout the hike." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Prosymni Village", "description": "Finish at the charming Greek village." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "55", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-hiking-mycenae" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT3H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
