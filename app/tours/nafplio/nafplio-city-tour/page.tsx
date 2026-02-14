"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Calendar,
  MapPin,
  Check,
  ArrowRight,
  Landmark,
  Building,
  Camera,
  Star,
} from "lucide-react";

const gallery = [
  "/images/nafplio-city-tour-hero-1.jpg",
  "/images/nafplio-city-tour-hero-2.jpg",
  "/images/nafplio-city-tour-hero-3.jpg",
];

const highlights = [
  "Walk through historic Land Gate",
  "Explore Psaromahalas Greek quarter",
  "Admire Venetian and Ottoman architecture",
  "Visit Syntagma Square with first Greek parliament",
  "Discover charming alleys and hidden corners",
  "Learn about Greece's first capital",
  "Food tastings at local spots",
  "Photo opportunities at every turn",
];

const included = [
  "Tour Leader",
  "Food tastings",
  "Liability insurance",
  "All taxes",
];

const notIncluded = [
  "Personal expenses",
];

export default function NafplioCityTourPage() {
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
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-accent transition-colors">
              Tours
            </Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-accent transition-colors">
              Nafplio
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">City Walking Tour</span>
          </div>
        </div>
      </div>

      {/* Hero Gallery */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="relative h-full">
          <Image
            src={gallery[currentImage]}
            alt="Nafplio City Walking Tour"
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Nafplio City Walking Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 2.5-3 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Private tour
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Pick-up:</span> 10:00 AM & 6:00 PM
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Discover Nafplio, the romantic city of Argolis, on a 3-hour walking tour ideal for those visiting the 
                  city for the first time. Walk through the historic Land Gate, the only entrance to the city during the 
                  Venetian occupation, and explore the charming Psaromahalas Greek quarter with its narrow alleys and 
                  traditional architecture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Visit Syntagma Square, home to Greece's first parliament, and admire the elegant Venetian and Ottoman 
                  buildings that line the streets. Your expert local guide will share fascinating stories about Nafplio's 
                  role as Greece's first capital and its rich history spanning thousands of years.
                </p>
              </div>

              {/* Tour Highlights */}
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

              {/* What is Included */}
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

              {/* Not Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Not Included</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="space-y-3">
                    {notIncluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="text-red-500">✕</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €80
                    </div>
                    <div className="text-sm text-gray-600">per person / €60 per child</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">2.5-3 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Meeting Point:</span>
                      <span className="font-semibold text-gray-900">Flexible</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Walking Tour</span>
                    </div>
                  </div>

                  <a
                    href="https://fareharbor.com/embeds/book/uniquegreektours/items/269608/?flow=no&from-ssl=yes&ga=UA-138348961-1%2C209837950.1765224973%3B&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Fprivate_tours%2Fdiscover-nafplio-city-tour%2F&u=7e462d24-c50a-4c5d-918e-674a3b00b338&language=en-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                  >
                    Book This Tour
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Reserve now and pay later
                  </p>
                </div>

                {/* Questions Card */}
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
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

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nafplio-city-tour-hero-3.jpg"
            alt="Explore Nafplio"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Explore Nafplio?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your walking tour and discover the romance and history of Greece's first capital.
          </p>
          <a
            href="https://fareharbor.com/embeds/book/uniquegreektours/items/269608/?flow=no&from-ssl=yes&ga=UA-138348961-1%2C209837950.1765224973%3B&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Fprivate_tours%2Fdiscover-nafplio-city-tour%2F&u=7e462d24-c50a-4c5d-918e-674a3b00b338&language=en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white inline-flex items-center gap-2"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
