import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiking Vytina to Elati - Mount Mainalo Trail | Unique Greek Tours",
  description: "Easy 8.5km hike from Vytina to Elati on Mount Mainalo. Walk along Milaon River, see historic bridges and watermill, end at Byzantine Zoodochos Pigi church. Professional guide included.",
  keywords: "Vytina hiking, Elati trail, Mount Mainalo, Nafplio hiking tour, Peloponnese mountains, Greek hiking, Milaon River, Zoodochos Pigi church",
  openGraph: {
    title: "Hiking Vytina to Elati - Mountain Adventure from Nafplio",
    description: "Scenic mountain hike through one of Greece's finest trails on Mount Mainalo.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-hiking-vytina-tour-hero-1.jpg", width: 1200, height: 630, alt: "Hiking Vytina to Elati" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking Vytina to Elati",
    description: "Easy mountain hike through beautiful Mount Mainalo landscapes.",
    images: ["https://uniquegreektours.com/images/nafplio-hiking-vytina-tour-hero-1.jpg"],
  },
};

export default function NafplioHikingVytinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Hiking Vytina - Elati",
          "description": "Easy 8.5km mountain hike from Vytina to Elati on Mount Mainalo. Walk alongside Milaon River, discover Kokoros watermill, wooden bridge, stone Zazios bridge, and Byzantine Zoodochos Pigi church.",
          "image": ["https://uniquegreektours.com/images/nafplio-hiking-vytina-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-hiking-vytina-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-hiking-vytina-tour-hero-3.jpg"],
          "touristType": ["Nature Lover", "Adventure Seeker", "Family", "Hiking Enthusiast"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Mountain Town of Vytina", "description": "Start at one of Greece's most beautiful mountain towns at 1000m altitude." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Milaon River Trail", "description": "Walk alongside the scenic river and ravine with lush vegetation." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Historic Bridges & Watermill", "description": "See Kokoros watermill, wooden bridge, and stone Zazios bridge." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Byzantine Church", "description": "End at Zoodochos Pigi church built in Byzantine architectural style." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Mountain Scenery", "description": "Enjoy stunning photography opportunities throughout the trail." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "65", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-hiking-vytina-elati" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT3H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
