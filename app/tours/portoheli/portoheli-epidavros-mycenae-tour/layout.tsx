import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epidavros, Mycenae & Nafplio Tour from Porto Heli | Unique Greek Tours",
  description: "Full-day tour from Porto Heli to Ancient Epidavros theatre, Mycenae archaeological site and Nafplio. Visit UNESCO sites, Lion's Gate, royal tombs. 9-hour private tour.",
  keywords: "Porto Heli Epidavros tour, Mycenae tour, Ancient theatre Epidavros, Lion's Gate, Nafplio tour, Argolida archaeological sites, UNESCO Greece",
  openGraph: {
    title: "Epidavros, Mycenae & Nafplio Tour from Porto Heli",
    description: "Explore 2 UNESCO World Heritage sites and Greece's first capital in one day.",
    type: "website",
    locale: "en_US",
    siteName: "Unique Greek Tours",
    images: [{ url: "https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-1.jpg", width: 1200, height: 630, alt: "Porto Heli Epidavros Mycenae Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto Heli Archaeological Tour",
    description: "Visit Epidavros, Mycenae and Nafplio - 3,500 years of Greek history.",
    images: ["https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-1.jpg"],
  },
};

export default function PortoHeliEpidavrosMycenaeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Ancient Epidavros, Mycenae & Nafplio Tour from Porto Heli",
          "description": "Full-day private tour visiting Ancient Theatre of Epidavros (330 BC), Asclepieion healing center, UNESCO Mycenae with Lion's Gate and royal tombs, and free time in picturesque Nafplio.",
          "image": ["https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-1.jpg", "https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-2.jpg", "https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-3.jpg"],
          "touristType": ["History Lover", "Culture Seeker", "Archaeology Enthusiast", "Family"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": "Ancient Theatre of Epidavros", "description": "Marvel at the 330 BC theatre with perfect acoustics." }},
              { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": "Asclepieion Sanctuary", "description": "Visit the ancient healing center dedicated to Apollo." }},
              { "@type": "ListItem", "position": 3, "item": { "@type": "TouristAttraction", "name": "Mycenae Archaeological Site", "description": "Explore the kingdom of Agamemnon with Lion's Gate and Cyclopean walls." }},
              { "@type": "ListItem", "position": 4, "item": { "@type": "TouristAttraction", "name": "Royal Tombs", "description": "See the tholos tombs of Atreus and Clytemnestra." }},
              { "@type": "ListItem", "position": 5, "item": { "@type": "TouristAttraction", "name": "Nafplio Free Time", "description": "Explore Greece's first capital at your own pace." }}
            ]
          },
          "offers": { "@type": "Offer", "price": "200", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://uniquegreektours.com/tours/portoheli/portoheli-epidavros-mycenae-tour" },
          "provider": { "@type": "TouristInformationCenter", "name": "Unique Greek Tours", "image": "https://uniquegreektours.com/images/portoheli-epidavros-mycenae-tour-hero-1.jpg", "priceRange": "€€", "address": { "@type": "PostalAddress", "streetAddress": "Tsokri 2", "addressLocality": "Argos", "addressRegion": "Peloponnese", "postalCode": "21200", "addressCountry": "GR" }, "telephone": "+30-27520-24444", "email": "info@uniquegreektours.com" },
          "duration": "PT9H",
          "inLanguage": "en"
        })
      }} />
      {children}
    </>
  );
}
