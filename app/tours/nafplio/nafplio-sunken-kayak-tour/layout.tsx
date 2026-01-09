import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancient Sunken City Kayak Tour - Greece's Lost Atlantis | Unique Greek Tours",
  description: "Kayak to the 1200 BC Ancient Sunken City near Epidavros. Snorkel over underwater ruins, visit ancient theatre, eco-farm, pristine beaches. 6-hour tour with lunch & GoPro included.",
  keywords: "Ancient Sunken City kayak, Epidavros kayak tour, underwater ruins Greece, Lost Atlantis Argolida, sea kayak Nafplio, snorkeling ancient ruins, Old Epidavros",
  openGraph: {
    title: "Ancient Sunken City Kayak Tour - Explore Greece's Lost Atlantis",
    description: "Kayak to 3,200-year-old underwater ruins and explore pristine Argolida coastline.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/nafplio-sunken-kayak-tour-hero-1.jpg", width: 1200, height: 630, alt: "Ancient Sunken City Kayak Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient Sunken City Kayak Tour",
    description: "Snorkel over 1200 BC underwater ruins on this unique kayak adventure.",
    images: ["https://uniquegreektours.com/images/nafplio-sunken-kayak-tour-hero-1.jpg"],
  },
};

export default function NafplioSunkenKayakLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Ancient Sunken City Kayak Tour",
          "description": "Kayak adventure to the 1200 BC Ancient Sunken City (Argolida's Lost Atlantis). Visit Small Ancient Theatre of Epidavros, snorkel over underwater ruins at 2m depth, enjoy eco-farm delicacies and homemade lunch on pristine beaches.",
          "image": ["https://uniquegreektours.com/images/nafplio-sunken-kayak-tour-hero-1.jpg", "https://uniquegreektours.com/images/nafplio-sunken-kayak-tour-hero-2.jpg", "https://uniquegreektours.com/images/nafplio-sunken-kayak-tour-hero-3.jpg"],
          "touristType": ["Adventure Seeker", "History Lover", "Family", "Water Sports Enthusiast"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Ancient Sunken City", "description": "Explore 1200 BC underwater ruins at 2m depth - perfect for snorkeling." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Small Ancient Theatre of Epidavros", "description": "Visit the 4th century BC coastal theatre." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Pristine Beaches & Snorkeling", "description": "Stop at secluded beaches and swim in turquoise waters." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Athina Eco-Farm", "description": "Taste traditional delicacies made the ancient Greek way." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Homemade Beach Lunch", "description": "Enjoy traditional lunch on a pristine isolated beach." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "95", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/nafplio/nafplio-sunken-kayak-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/unique-greek-tours-logo.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT6H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
