import Link from "next/link";
import { Clock, Users, Calendar, MapPin, Check, ArrowLeft, Star, Wine, Coffee, Utensils } from "lucide-react";

export const metadata = {
  title: "Nafplio Food Tasting Tour - Greek Culinary Experience | Unique Greek Tours",
  description: "Discover Nafplion's rich culinary heritage with our guided food tasting tour. Sample traditional Greek cheeses, wines, olive oils, and local delicacies at artisan shops. 3-hour gastronomic journey.",
  keywords: "Nafplio food tour, Greek food tasting, culinary tour Nafplion, wine tasting Greece, traditional Greek food, Peloponnese gastronomy, food walking tour",
  openGraph: {
    title: "Nafplio Food Tasting Tour - Authentic Greek Culinary Experience",
    description: "Explore Nafplion's culinary treasures with a local guide. Taste artisan cheeses, wines, olive oils, and traditional sweets in this unforgettable 3-hour food journey.",
    type: "product",
    locale: "en_US",
    siteName: "Unique Greek Tours",
  },
};

export default function NafplioFoodTastingTour() {
  const tourDetails = {
    location: "Nafplio",
    duration: "3 - 3.5 hours",
    pickupTimes: "10:00 AM & 6:00 PM",
    period: "All year",
    type: "For all ages",
    price: "€85 per person",
    groupSize: "Small groups (max 12 people)",
  };

  const highlights = [
    "Experience the gastronomic side of Nafplion",
    "Taste unique flavors and local spirits",
    "Learn about Greek wine and its history",
    "Check out the most popular sights of the city",
    "Visit artisan shops and traditional delicatessens",
    "Meet local producers and learn their stories",
  ];

  const included = [
    "English guided tour of Nafplion",
    "Pick up from your hotel or meeting point",
    "All food tastings and samples",
    "Wine, ouzo, and tsipouro tasting with sommelier",
    "Greek coffee experience",
    "Traditional cheeses, cold meats, and olives",
    "Local sweets and desserts",
    "Liability insurance",
    "All taxes",
  ];

  const itinerary = [
    {
      time: "Start",
      title: "Greek Coffee Experience",
      description: "Begin your culinary journey with a perfectly brewed traditional Greek coffee at a historic café.",
      icon: <Coffee className="h-6 w-6" />,
    },
    {
      time: "30 min",
      title: "Artisan Grocery Store",
      description: "Visit a charming local deli to sample traditional cheeses, cold meats, olives, premium olive oil, and sweet treats with Greek yogurt.",
      icon: <Utensils className="h-6 w-6" />,
    },
    {
      time: "1.5 hours",
      title: "Historic Center Walk",
      description: "Stroll through Nafplion's picturesque central square, surrounded by Venetian neoclassical architecture and iconic landmarks.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      time: "2 hours",
      title: "Wine Cellar Experience",
      description: "Discover Greek wines, ouzo, and tsipouro with an expert sommelier in an elegant cellar, learning about their ancient origins.",
      icon: <Wine className="h-6 w-6" />,
    },
    {
      time: "End",
      title: "Scenic Port Views",
      description: "Conclude at Nafplion's beautiful port with stunning views of the historic Bourtzi castle, reflecting on your culinary adventure.",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Nafplio Food Tasting Tour",
    "description": "Discover the rich culinary heritage of Nafplion with an unforgettable food-tasting journey led by a knowledgeable local guide.",
    "image": [
      "https://uniquegreektours.com/images/food-tour-hero-1.jpg",
      "https://uniquegreektours.com/images/food-tour-hero-2.jpg",
      "https://uniquegreektours.com/images/food-tour-hero-3.jpg"
    ],
    "touristType": ["Culinary Enthusiast", "Food Lover", "Wine Enthusiast"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristAttraction",
            "name": "Greek Coffee Experience",
            "description": "Begin your culinary journey with a perfectly brewed traditional Greek coffee at a historic café."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristAttraction",
            "name": "Artisan Grocery Store",
            "description": "Visit a charming local deli to sample traditional cheeses, cold meats, olives, premium olive oil, and sweet treats."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "TouristAttraction",
            "name": "Historic Center Walk",
            "description": "Stroll through Nafplion's picturesque central square, surrounded by Venetian neoclassical architecture."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "TouristAttraction",
            "name": "Wine Cellar Experience",
            "description": "Discover Greek wines, ouzo, and tsipouro with an expert sommelier in an elegant cellar."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "TouristAttraction",
            "name": "Scenic Port Views",
            "description": "Conclude at Nafplion's beautiful port with stunning views of the historic Bourtzi castle."
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "85",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "url": "https://uniquegreektours.com/tours/nafplio/nafplio-food-tasting-tour"
    },
    "provider": {
      "@type": "TouristInformationCenter",
      "name": "Unique Greek Tours",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Argos",
        "addressRegion": "Peloponnese",
        "addressCountry": "GR"
      },
      "telephone": "+30-27520-24444"
    },
    "duration": "PT3H30M",
    "inLanguage": "en",
    "tourBookingPage": "https://uniquegreektours.com/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col">
        {/* Hero Section with Image Gallery */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="absolute inset-0 grid grid-cols-3 gap-2">
            <div className="relative col-span-2">
              <img
                src="/images/food-tour-hero-1.jpg"
                alt="Traditional Greek food tasting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative grid grid-rows-2 gap-2">
              <img
                src="/images/food-tour-hero-2.jpg"
                alt="Greek culinary delights"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/food-tour-hero-3.jpg"
                alt="Wine and cheese tasting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <div className="container-custom">
              <Link
                href="/tours/nafplio"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Nafplio Tours
              </Link>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Nafplio Food Tasting Tour
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
                A Culinary Journey Through Nafplion's Gastronomic Heritage
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-primary text-white py-6">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 mb-2 text-accent" />
                <div className="text-sm text-blue-100">Duration</div>
                <div className="font-semibold">{tourDetails.duration}</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 mb-2 text-accent" />
                <div className="text-sm text-blue-100">Group Size</div>
                <div className="font-semibold">Small Groups</div>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="h-6 w-6 mb-2 text-accent" />
                <div className="text-sm text-blue-100">Availability</div>
                <div className="font-semibold">All Year</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2 text-accent" />
                <div className="text-sm text-blue-100">Location</div>
                <div className="font-semibold">Nafplio</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6 text-primary-dark">
                    About This Experience
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Discover the rich culinary heritage of Nafplion with an unforgettable food-tasting journey 
                      led by a knowledgeable local guide. Stroll through the city's most iconic landmarks, stopping 
                      to indulge in handpicked flavors from carefully selected artisan shops.
                    </p>
                    <p>
                      Begin with a perfectly brewed Greek coffee, then savor an array of traditional cheeses, cold 
                      meats, olives, olive oil, and sweet treats with yogurt at a charming grocery store. Wander 
                      through Nafplion's picturesque central square, surrounded by Venetian neoclassical gems, 
                      before arriving at an elegant cellar.
                    </p>
                    <p>
                      Here, a wine sommelier will introduce you to the world of Greek wines, ouzo, and tsipouro, 
                      tracing their roots back to ancient times. Conclude this sensory experience at Nafplion's 
                      scenic port, soaking in the view of the historic Bourtzi castle, as the aromas and tastes 
                      of this culinary adventure linger.
                    </p>
                  </div>
                </div>

                {/* Itinerary */}
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6 text-primary-dark">
                    Detailed Itinerary
                  </h2>
                  <div className="space-y-6">
                    {itinerary.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                              {item.time}
                            </span>
                            <h3 className="font-display text-xl font-bold text-primary-dark">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6 text-primary-dark">
                    Tour Highlights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6 text-primary-dark">
                    What's Included
                  </h2>
                  <div className="bg-sand-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {included.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-sand-200">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Star className="h-5 w-5 text-accent" />
                        <strong>Full refund or change of date in case of adverse weather conditions</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Booking Card */}
                  <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                    <div className="text-center mb-6 pb-6 border-b border-sand-200">
                      <div className="text-sm text-gray-600 mb-2">From</div>
                      <div className="font-display text-4xl font-bold text-primary-dark">
                        €85
                      </div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between py-2 border-b border-sand-100">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-900">{tourDetails.duration}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-sand-100">
                        <span className="text-gray-600">Pick-up Times:</span>
                        <span className="font-semibold text-gray-900">{tourDetails.pickupTimes}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-sand-100">
                        <span className="text-gray-600">Period:</span>
                        <span className="font-semibold text-gray-900">{tourDetails.period}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold text-gray-900">Max 12</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                    >
                      Book This Tour
                    </Link>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Reserve now & pay later
                    </p>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-primary text-white rounded-2xl p-6">
                    <h3 className="font-display text-xl font-bold mb-4">
                      Questions?
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Contact our team for personalized assistance
                    </p>
                    <a
                      href="tel:+302752024444"
                      className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Call (+30) 27520 24444
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Background Image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/food-tour-hero-3.jpg"
              alt="Greek culinary experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/90"></div>
          </div>
          
          <div className="container-custom relative z-10 text-center text-white">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready for a Culinary Adventure?
            </h2>
            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
              Book your Nafplio Food Tasting Tour today and discover the authentic flavors of Greece
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all font-semibold text-lg shadow-lg"
              >
                Book Now
              </Link>
              <Link
                href="/tours/nafplio"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                View All Nafplio Tours
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
