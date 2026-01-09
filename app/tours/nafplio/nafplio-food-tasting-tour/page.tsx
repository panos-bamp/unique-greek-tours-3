"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Wine, Coffee, Utensils, ArrowRight } from "lucide-react";

const gallery = [
  "/images/food-tour-hero-1.jpg",
  "/images/food-tour-hero-2.jpg",
  "/images/food-tour-hero-3.jpg",
];

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

export default function NafplioFoodTastingTour() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Nafplio Food Tasting Tour</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Food tour gallery"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "w-8 bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Nafplio Food Tasting Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 3 - 3.5 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Max 12 people
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Pick-up:</span> 10AM & 6PM
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Discover the rich culinary heritage of Nafplion with an unforgettable food-tasting journey 
                  led by a knowledgeable local guide. Stroll through the city's most iconic landmarks, stopping 
                  to indulge in handpicked flavors from carefully selected artisan shops.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Begin with a perfectly brewed Greek coffee, then savor an array of traditional cheeses, cold 
                  meats, olives, olive oil, and sweet treats with yogurt at a charming grocery store. Wander 
                  through Nafplion's picturesque central square, surrounded by Venetian neoclassical gems, 
                  before arriving at an elegant cellar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Here, a wine sommelier will introduce you to the world of Greek wines, ouzo, and tsipouro, 
                  tracing their roots back to ancient times. Conclude this sensory experience at Nafplion's 
                  scenic port, soaking in the view of the historic Bourtzi castle, as the aromas and tastes 
                  of this culinary adventure linger.
                </p>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Coffee className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Greek Coffee Experience
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Begin your culinary journey with a perfectly brewed traditional Greek coffee at a historic café.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Utensils className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Artisan Grocery Store
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visit a charming local deli to sample traditional cheeses, cold meats, olives, premium olive oil, 
                        and sweet treats with Greek yogurt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Historic Center Walk
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Stroll through Nafplion's picturesque central square, surrounded by Venetian neoclassical 
                        architecture and iconic landmarks.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Wine className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Wine Cellar Experience
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Discover Greek wines, ouzo, and tsipouro with an expert sommelier in an elegant cellar, 
                        learning about their ancient origins.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Scenic Port Views
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Conclude at Nafplion's beautiful port with stunning views of the historic Bourtzi castle, 
                        reflecting on your culinary adventure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
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
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What's Included</h2>
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

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
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
                      <span className="font-semibold text-gray-900">3 - 3.5 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Pick-up Times:</span>
                      <span className="font-semibold text-gray-900">10AM & 6PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
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
                    Reserve now and pay later
                  </p>
                </div>

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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/food-tour-hero-3.jpg"
            alt="Greek culinary experience"
            fill
            className="object-cover brightness-50"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready for a Culinary Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Nafplio Food Tasting Tour today and discover the authentic flavors of Greece 
            with our expert local guides.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
