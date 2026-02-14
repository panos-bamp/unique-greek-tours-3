import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poros Three Peaks City Tour - Hiking & Sightseeing | Unique Greek Tours",
  description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
  keywords: "Poros city tour, Poros hiking, three peaks Poros, Clock Tower Poros, Saronic Gulf views, Poros sightseeing, Greek island hiking",
  openGraph: {
    title: "Poros Three Peaks City Tour - Hiking & Sightseeing",
    description: "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/city-tour-hero-1.jpg", width: 1200, height: 630, alt: "Poros Three Peaks City Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Three Peaks City Tour",
    description: "Connect the three peaks of Poros island with stunning Saronic Gulf views, historic landmarks, and local hospitality.",
    images: ["https://uniquegreektours.com/images/city-tour-hero-1.jpg"],
  },
};

export default function PorosCityTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Poros Three Peaks City Tour",
          "description": "Connect the three peaks of Poros island on a scenic hiking tour. Visit Agioi Anargyroi chapel, Ottoman windmill, and the iconic Clock Tower with stunning Saronic Gulf views.",
          "image": ["https://uniquegreektours.com/images/city-tour-hero-1.jpg", "https://uniquegreektours.com/images/city-tour-hero-2.jpg", "https://uniquegreektours.com/images/city-tour-hero-3.jpg"],
          "touristType": ["Couples", "Families", "Adventure Seekers", "Culture Enthusiasts"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 4,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Agioi Anargyroi Chapel", "description": "First peak with magnificent views of the Saronic Gulf and Galatas canal." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Ottoman Stone Windmill", "description": "Historic windmill from the Ottoman Empire period." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Traditional Courtyard", "description": "Local lemonade tasting in a traditional Greek setting." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Clock Tower", "description": "The iconic landmark and trademark of Poros island." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "60", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/poros/poros-city-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/city-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT2H30M",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
