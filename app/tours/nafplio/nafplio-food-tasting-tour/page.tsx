"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, X, Utensils, Wine, Camera, Heart, ArrowRight } from "lucide-react";

const gallery = [
  "/images/nafplio-food-tour-hero-1.jpg",
  "/images/nafplio-food-tour-hero-2.jpg",
  "/images/nafplio-food-tour-hero-3.jpg",
];

const highlights = [
  "Taste authentic Greek specialties",
  "Visit local markets and food shops",
  "Sample traditional cheeses and olive oil",
  "Enjoy Greek wine and ouzo",
  "Explore Nafplio's culinary heritage",
  "Expert food tour leader",
];

const included = [
  "Tour Leader",
  "Food tastings",
  "Liability insurance",
  "All taxes",
];

const excluded = [
  "Personal expenses",
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
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Food Tasting Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Nafplio Food Tasting Tour"
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

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Nafplio Food Tasting Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 4 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Type:</span> Private
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Discover the authentic flavors of Greece on this delicious walking food tour through romantic Nafplio. 
                  Taste local specialties, meet artisan producers, and learn about Greek culinary traditions from your 
                  expert food guide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Begin at the vibrant local market where vendors sell fresh produce, herbs, and regional delicacies. 
                  Visit a traditional bakery to sample freshly baked bread and savory pies. Stop at a family-run deli 
                  to taste local cheeses, cured meats, and premium olive oil.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Continue to a historic pastry shop for traditional Greek sweets paired with Greek coffee. Visit a 
                  wine cellar to taste regional wines and learn about Greek varietals. Enjoy ouzo or tsipouro with 
                  mezze at a local taverna.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Between tastings, explore Nafplio's charming old town, hearing stories about the city's history and 
                  food culture. This tour is perfect for food lovers wanting an authentic taste of Greece beyond the 
                  tourist restaurants.
                </p>
              </div>

              {/* Tour Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What is Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is NOT Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What is NOT Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {excluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">Price</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €100
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                    <div className="text-sm text-gray-600 mt-1">€70 per child</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">4 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">Year-round</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                  </div>

                  <a
                    href="https://fareharbor.com/embeds/book/uniquegreektours/items/269690/?flow=482721&from-ssl=yes&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Ftour%2Ffood-tasting-tour-nafplio%2F&ga=UA-138348961-1%2C209837950.1765224973%3B&language=en-us&u=7e462d24-c50a-4c5d-918e-674a3b00b338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                  >
                    Book Now
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Secure booking via FareHarbor
                  </p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Questions?
                  </h3>
                  <p className="text-sm mb-4 text-blue-100">
                    Contact us for custom requests or group bookings
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-sand-50 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/nafplio-food-tour-hero-3.jpg"
          alt="Book your food tasting tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Taste the Authentic Flavors of Greece
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your food tasting tour and discover why Greek cuisine is celebrated worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/embeds/book/uniquegreektours/items/269690/?flow=482721&from-ssl=yes&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Ftour%2Ffood-tasting-tour-nafplio%2F&ga=UA-138348961-1%2C209837950.1765224973%3B&language=en-us&u=7e462d24-c50a-4c5d-918e-674a3b00b338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Book This Tour
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/tours/nafplio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-sand-50 transition-all shadow-lg font-semibold text-lg"
            >
              View All Nafplio Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
