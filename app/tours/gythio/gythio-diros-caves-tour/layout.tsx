import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diros Caves Tour from Gythio - Underground Boat Adventure | Unique Greek Tours",
  description: "Explore the magical Diros Caves from Gythio. Boat through 1,500m of underground caverns, marvel at stalactites and stalagmites, optional lunch at Limeni village. 4-hour private tour.",
  keywords: "Diros Caves tour, Gythio excursion, underground caves Greece, Mani Peninsula, boat cave tour, stalactites stalagmites, Limeni village, Peloponnese caves",
  openGraph: {
    title: "Diros Caves Tour from Gythio - Magical Underground Experience",
    description: "Boat through spectacular underground caves with stunning stalactites and crystal-clear waters.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/gythio-diros-caves-tour-hero-1.jpg", width: 1200, height: 630, alt: "Diros Caves Tour from Gythio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diros Caves Tour from Gythio",
    description: "Discover Greece's most spectacular underground caves on a magical boat journey.",
    images: ["https://uniquegreektours.com/images/gythio-diros-caves-tour-hero-1.jpg"],
  },
};

export default function GythioDirosCavesTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Diros Caves Tour from Gythio",
          "description": "Explore the magical Diros Caves with a boat journey through 1,500 meters of underground caverns. Marvel at stalactites, stalagmites, and crystal formations. Optional lunch at seaside Limeni village.",
          "image": ["https://uniquegreektours.com/images/gythio-diros-caves-tour-hero-1.jpg", "https://uniquegreektours.com/images/gythio-diros-caves-tour-hero-2.jpg", "https://uniquegreektours.com/images/gythio-diros-caves-tour-hero-3.jpg"],
          "touristType": ["Nature Lover", "Adventure Seeker", "Family", "Couples"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Underground Boat Journey", "description": "Glide through 1,200 meters of subterranean waterways on a guided boat tour." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Stalactites & Stalagmites", "description": "Marvel at impressive white formations and sparkling crystals formed over millennia." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Scenic Mani Drive", "description": "Enjoy beautiful drive through mountainous scenery and picturesque villages." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Ancient History", "description": "Learn about fossilized bones and ceramics indicating prehistoric habitation." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Optional Limeni Lunch", "description": "Stop at beautiful fishing village for local dishes by turquoise waters." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "95", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/gythio/gythio-diros-caves-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT4H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
