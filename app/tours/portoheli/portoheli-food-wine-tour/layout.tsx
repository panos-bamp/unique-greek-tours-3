import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wine Tasting & City Food Tour from Porto Heli | Unique Greek Tours",
  description: "Full-day wine and food tour from Porto Heli. Visit award-winning Nemea winery, explore historic Nafplio, taste Greek delicacies, ouzo and tsipouro. 7-hour guided experience.",
  keywords: "Porto Heli wine tour, Nemea winery, Nafplio food tour, Greek wine tasting, Argolida wine, ouzo tsipouro, Greek gastronomy tour",
  openGraph: {
    title: "Wine Tasting & City Food Tour from Porto Heli",
    description: "Award-winning winery visit, historic Nafplio tour, and Greek gastronomy experience.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-1.jpg", width: 1200, height: 630, alt: "Porto Heli Wine & Food Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto Heli Wine & Food Tour",
    description: "Visit award-winning wineries and taste Greek gastronomy.",
    images: ["https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-1.jpg"],
  },
};

export default function PortoHeliFoodWineTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Wine Tasting & City Food Tour in Nafplio from Porto Heli",
          "description": "Full-day wine and food tour visiting award-winning Nemea winery, historic Nafplio walking tour, Greek deli experience with local delicacies, and wine cellar with ouzo and tsipouro tasting.",
          "image": ["https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-1.jpg", "https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-2.jpg", "https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-3.jpg"],
          "touristType": ["Wine Lover", "Food Enthusiast", "Culture Seeker", "Couples"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Award-Winning Winery", "description": "Tour vineyards and taste premium Greek wines with expert guidance." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Historic Nafplio Tour", "description": "Guided walking tour through Greece's first capital city." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Greek Deli Experience", "description": "Taste local cheeses, sausages, olive oils and olives." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Wine Cellar Visit", "description": "Sample ouzo and tsipouro at a traditional wine cellar." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Scenic Drive", "description": "Enjoy beautiful views of the Argolic plain countryside." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "180", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/portoheli/portoheli-food-wine-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/portoheli-food-wine-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT7H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
