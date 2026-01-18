import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmhouse Cooking Class Nafplio | Traditional Greek Cuisine Experience",
  description: "Learn authentic Greek cooking in our charming farmhouse near Nafplio. Hands-on cooking class with fresh garden ingredients, pool access, and delicious lunch. Perfect for families, couples & groups. Book now!",
  keywords: "Greek cooking class, Nafplio cooking experience, traditional Greek recipes, farmhouse cooking, Greek cuisine workshop, cooking class Greece, Peloponnese food experience, learn Greek cooking",
  openGraph: {
    title: "Farmhouse Cooking Class Nafplio | Traditional Greek Cuisine Experience",
    description: "Learn authentic Greek cooking in our charming farmhouse near Nafplio. Hands-on cooking class with fresh garden ingredients, pool access, and delicious lunch.",
    url: "https://uniquegreektours.com/tours/nafplio/nafplio-cooking-class",
    siteName: "Unique Greek Tours",
    images: [
      {
        url: "https://uniquegreektours.com/images/cooking-class-hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Farmhouse Cooking Class - Fresh ingredients and traditional Greek cooking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmhouse Cooking Class Nafplio | Greek Cuisine Experience",
    description: "Learn authentic Greek cooking in our charming farmhouse near Nafplio. Hands-on class with fresh ingredients, pool access, and delicious lunch.",
    images: ["https://uniquegreektours.com/images/cooking-class-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://uniquegreektours.com/tours/nafplio/nafplio-cooking-class",
  },
};

export default function NafplioCookingClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Farmhouse Cooking Class",
    "description": "Learn authentic Greek cooking in our charming farmhouse near Nafplio. This immersive hands-on cooking class features fresh garden ingredients, traditional recipes, pool access for relaxation, and a delicious Greek lunch.",
    "provider": {
      "@type": "TourOrganization",
      "name": "Unique Greek Tours",
      "url": "https://uniquegreektours.com",
      "telephone": "+302752024444",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nafplio",
        "addressRegion": "Argolis",
        "addressCountry": "GR"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Adult",
        "price": "110",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "url": "https://uniquegreektours.com/tours/nafplio/nafplio-cooking-class"
      },
      {
        "@type": "Offer",
        "name": "Child (5-12 years)",
        "price": "80",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "url": "https://uniquegreektours.com/tours/nafplio/nafplio-cooking-class"
      }
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "duration": "PT4H",
      "location": {
        "@type": "Place",
        "name": "Farmhouse near Nafplio",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nafplio",
          "addressRegion": "Argolis",
          "addressCountry": "Greece"
        }
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Families", "Couples", "Food enthusiasts", "Corporate teams", "Student groups"]
    },
    "teaches": ["Traditional Greek cooking", "Greek recipes", "Mediterranean cuisine", "Farm-to-table cooking"],
    "image": "https://uniquegreektours.com/images/cooking-class-hero-1.jpg",
    "maximumAttendeeCapacity": 10
  };

  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Farmhouse Cooking Class",
    "description": "Learn authentic Greek cooking in our charming farmhouse near Nafplio with hands-on instruction, fresh garden ingredients, pool access, and a delicious Greek lunch.",
    "touristType": ["Food Tourism", "Cultural Tourism", "Culinary Tourism"],
    "offers": {
      "@type": "Offer",
      "price": "110",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TourOrganization",
      "name": "Unique Greek Tours",
      "url": "https://uniquegreektours.com"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hands-On Cooking Class",
          "description": "Learn to prepare authentic Greek dishes with expert guidance using fresh garden ingredients"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Traditional Recipes",
          "description": "Master savory pies, hearty stews, and traditional Greek desserts"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Relaxation Time",
          "description": "Enjoy the swimming pool and garden amenities while food cooks"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Delicious Lunch",
          "description": "Savor the dishes you prepared in the scenic garden setting"
        }
      ]
    },
    "duration": "PT4H",
    "maximumAttendeeCapacity": 10,
    "image": "https://uniquegreektours.com/images/cooking-class-hero-1.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />
      {children}
    </>
  );
}
