import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Multi-Day Tours in Greece | Unique Greek Tours",
  description: "Design your perfect Greek adventure with our custom multi-day tours. Personalized itineraries, flexible durations, and expert local guides for an unforgettable journey through Greece.",
  keywords: "custom Greece tours, personalized Greek tours, bespoke Greece travel, tailored Greek itinerary, custom multi-day tours Greece, private Greece tours",
  openGraph: {
    title: "Custom Multi-Day Tours in Greece | Unique Greek Tours",
    description: "Design your perfect Greek adventure with personalized itineraries and expert local guides.",
    type: "website",
    url: "https://uniquegreektours.com/trips/custom-trip",
    images: [
      {
        url: "/images/hero-collage.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Greece Tours"
      }
    ]
  }
};

export default function CustomTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Custom Multi-Day Tours in Greece",
            "description": "Personalized multi-day tours throughout Greece tailored to your interests, pace, and preferences.",
            "provider": {
              "@type": "TouristInformationCenter",
              "name": "Unique Greek Tours",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tsokri 2",
                "addressLocality": "Argos",
                "addressRegion": "Peloponnese",
                "postalCode": "21200",
                "addressCountry": "GR"
              },
              "telephone": "+30-27520-24444",
              "email": "info@uniquegreektours.com"
            },
            "touristType": "Custom & Bespoke Tours",
            "tourBookingPage": "https://uniquegreektours.com/contact"
          }),
        }}
      />
      {children}
    </>
  );
}
