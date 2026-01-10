import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiking Lousios Gorge - Dimitsana to Ancient Gortyna | Unique Greek Tours",
  description: "Challenging 12km hike through Lousios Gorge from Dimitsana. Visit Byzantine cliff monasteries, Ancient Gortyna Asclepieion, swim in crystal-clear river. 6-hour guided adventure.",
  keywords: "Lousios Gorge hiking, Dimitsana trail, Byzantine monasteries, Philosophos monastery, Prodromos monastery, Ancient Gortyna, Peloponnese hiking",
  openGraph: {
    title: "Hiking Lousios Gorge - Wild Gorge & Byzantine Monasteries",
    description: "Dramatic gorge hiking with cliff monasteries and ancient ruins.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-hiking-lousios-tour-hero-1.jpg", width: 1200, height: 630, alt: "Hiking Lousios Gorge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lousios Gorge Hiking Adventure",
    description: "One of Greece's wildest gorges with Byzantine monasteries.",
    images: ["https://uniquegreektours.com/images/nafplio-hiking-lousios-tour-hero-1.jpg"],
  },
};

export default function NafplioHikingLousiosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Hiking Lousios Gorge - Dimitsana - Ancient Gortyna",
          "description": "Challenging 12km hike through one of Greece's wildest gorges. Start from historic Dimitsana, visit cliff monasteries Philosophos (963 AD) and Prodromos (1167 AD), explore Ancient Gortyna Asclepieion, swim in crystal-clear Lousios River.",
          "image": ["https://uniquegreektours.com/images/nafplio-hiking-lousios-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-hiking-lousios-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-hiking-lousios-tour-hero-3.jpg"],
          "touristType": ["Adventure Seeker", "Nature Lover", "History Lover", "Hiking Enthusiast"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Dimitsana Village", "description": "Start in picturesque village with stone mansions." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Byzantine Cliff Monasteries", "description": "Visit Philosophos (963 AD) and Prodromos (1167 AD)." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Ancient Asclepieion", "description": "Explore healing center of ancient Gortyna." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Lousios River Swim", "description": "Refreshing swim in crystal-clear waters." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Wild Gorge Scenery", "description": "Experience dramatic cliffs and lush vegetation." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "85", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-hiking-lousios" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT6H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
