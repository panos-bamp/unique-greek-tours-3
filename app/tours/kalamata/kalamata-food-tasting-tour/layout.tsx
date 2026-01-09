import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalamata Food Tasting Tour - Authentic Greek Cuisine | Unique Greek Tours",
  description: "Experience Greek food like a local in Kalamata. Visit family stores, taste regional specialties, explore hidden historic areas, and enjoy light lunch. 3-hour culinary walking tour.",
  keywords: "Kalamata food tour, Greek food tasting, Messinian cuisine, local food experience, Greek culinary tour, Kalamata walking tour, traditional Greek food",
  openGraph: {
    title: "Kalamata Food Tasting Tour - Eat Like a Local",
    description: "Visit traditional family stores, taste regional Greek food, and explore hidden historic areas of Kalamata.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/kalamata-food-tour-hero-1.jpg", width: 1200, height: 630, alt: "Kalamata Food Tasting Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalamata Food Tasting Tour",
    description: "Authentic Greek food experience with local families, regional tastings, and traditional lunch.",
    images: ["https://uniquegreektours.com/images/kalamata-food-tour-hero-1.jpg"],
  },
};

export default function KalamataFoodTourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Kalamata Food Tasting Tour",
          "description": "Experience Greek food as a local. Visit traditional family stores, taste regional specialties, learn about Greek food culture evolution, explore non-touristic historic areas, and enjoy light traditional lunch.",
          "image": ["https://uniquegreektours.com/images/kalamata-food-tour-hero-1.jpg", "https://uniquegreektours.com/images/kalamata-food-tour-hero-2.jpg", "https://uniquegreektours.com/images/kalamata-food-tour-hero-3.jpg"],
          "touristType": ["Food & Wine Enthusiast", "Cultural Tourist", "Culinary Tourist"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Traditional Family Stores", "description": "Visit authentic family-owned shops with generations of tradition." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Regional Food Tastings", "description": "Sample traditional foods unique to Kalamata and Messinia." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Meet Local Artisans", "description": "Connect with people preserving Greek culinary heritage." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Hidden Historic Areas", "description": "Explore non-touristic parts of the historic center." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Traditional Light Lunch", "description": "Finish with satisfying local cuisine." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "75", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/kalamata/kalamata-food-tasting-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "priceRange": "€€", "telephone": "+30-27520-24444" },
          "duration": "PT3H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
