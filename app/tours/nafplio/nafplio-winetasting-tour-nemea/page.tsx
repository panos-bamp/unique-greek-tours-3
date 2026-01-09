"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Wine, Grape, MapPinned, Award, ArrowRight } from "lucide-react";

const gallery = [
  "/images/wine-tour-hero-1.jpg",
  "/images/wine-tour-hero-2.jpg",
  "/images/wine-tour-hero-3.jpg",
];

const highlights = [
  "Visit the ancient stadium of Nemea and Temple of Zeus",
  "Tour two award-winning wineries in Nemea region",
  "Learn about the vintage process and wine-making stages",
  "Discover the secrets of Nemea's famous Agiorgitiko grape",
  "Professional wine tasting of local varieties",
  "Expert guidance on wine production and history",
];

const included = [
  "English-speaking tour leader",
  "Guided tour of archaeological sites (upon request)",
  "Return private transportation from Nafplion",
  "Pick up from your hotel or meeting point",
  "Entrance fees to wineries",
  "Professional wine tasting sessions",
  "Visit to ancient stadium of Nemea",
  "Liability insurance",
  "All taxes",
];

export default function NafplioWineTastingTour() {
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
            <span className="text-primary">Nemea Wine Tasting Tour</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Wine tour gallery"
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
                Nemea Wine Tasting Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 6 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Small groups
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Pick-up:</span> 10:00 AM
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our day begins by meeting with you and traveling towards the area of Nemea, where we begin 
                  our tour at the ancient stadium of Nemea, built in the 4th century BC, next to the temple of Zeus. 
                  This legendary site once hosted the Nemean Games, one of the four major athletic festivals of ancient Greece.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Next, we will visit two award-winning wineries in the area, where we will learn about the vintage 
                  process, the wine-making stages and see the way wine is produced. The Nemea region is renowned for 
                  its indigenous Agiorgitiko grape, which produces some of Greece's finest red wines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We will share with you all the secrets of wine, through tasting some of the various local varieties. 
                  Our tour ends with a return trip to our pick-up destination, leaving you with memories of ancient 
                  history and the rich flavors of Nemea wines.
                </p>
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-accent rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Please note:</strong> This tour is not suitable for children under 18 years old due to alcohol tasting.
                  </p>
                </div>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <MapPinned className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Ancient Stadium of Nemea
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visit the ancient stadium built in 4th century BC and the Temple of Zeus, site of the legendary Nemean Games.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Award-Winning Wineries
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Tour two prestigious wineries in Nemea, renowned for their exceptional wines and traditional production methods.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Grape className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Wine Production Process
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Learn about the vintage process, wine-making stages, and discover how Nemea's famous Agiorgitiko wines are crafted.
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
                        Professional Wine Tasting
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Taste various local wine varieties and learn to identify the unique characteristics of Nemea's terroir.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Expert Wine Education
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Discover the secrets of wine-making from passionate local vintners and sommeliers who share their expertise.
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
                <h2 className="font-display text-3xl text-primary mb-6">What is Included</h2>
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
                      €120
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">6 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Pick-up Time:</span>
                      <span className="font-semibold text-gray-900">10:00 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Age limit:</span>
                      <span className="font-semibold text-gray-900">18+ years</span>
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
            src="/images/wine-tour-hero-3.jpg"
            alt="Nemea vineyards"
            fill
            className="object-cover brightness-50"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Taste Nemea's Finest Wines?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Nemea Wine Tasting Tour today and discover the legendary wines of ancient Greece 
            with our expert guides.
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
