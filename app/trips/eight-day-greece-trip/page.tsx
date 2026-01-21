"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, ArrowRight } from "lucide-react";

const gallery = [
  "/images/eight-day-greece-hero-1.jpg",
  "/images/eight-day-greece-hero-2.jpg",
  "/images/eight-day-greece-hero-3.jpg",
];

const highlights = [
  "Acropolis of Athens and Acropolis Museum",
  "Traditional taverna dinner in Plaka",
  "Meteora monasteries and sunset views",
  "Delphi archaeological site and oracle",
  "Mountain village of Arahova",
  "Ancient Olympia stadium and Temple of Zeus",
  "Hermes statue by Praxiteles",
  "Ancient Mycenae and Lion Gate",
  "Wine tasting in Nemea region",
  "Overnight in romantic Nafplion",
  "Ancient Theater of Epidavros",
  "Multiple UNESCO World Heritage Sites",
];

const included = [
  "7 nights accommodation in selected hotels",
  "Daily breakfast",
  "Private transportation throughout the tour",
  "English-speaking professional driver/guide",
  "Pick up and drop off from your hotel in Athens",
  "Entrance fees to archaeological sites",
  "Wine tasting in Nemea",
  "Liability insurance",
  "All taxes and road tolls",
];

export default function EightDayGreeceTrip() {
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
      <div className="bg-sand-50 py-4 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/trips" className="hover:text-primary">MULTI-DAY TRIPS</Link>
            <span>/</span>
            <span className="text-primary">8-Day Classical Greece Tour</span>
          </div>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="8-day classical greece tour gallery"
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
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                8-Day Classical Greece Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>8 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Private tour</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Year-round</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Athens hotel</span>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4 leading-relaxed">
                  <p>
                    Embark on an unforgettable 8-day journey through Classical Greece, visiting the most famous monuments and archaeological sites of ancient Greek civilization.
                  </p>
                  <p>
                    This comprehensive tour takes you from the vibrant capital of Athens to the awe-inspiring monasteries of Meteora, the sacred oracle of Delphi, the birthplace of the Olympic Games at Ancient Olympia, and the legendary sites of Mycenae and Epidavros. Along the way, you'll stay in charming towns, taste authentic Greek cuisine, and experience the perfect blend of history, culture, and natural beauty.
                  </p>
                  <p>
                    Starting in Athens, you'll explore the iconic Acropolis and its magnificent museum before heading north to witness the breathtaking cliff-top monasteries of Meteora. Journey to Delphi, home of the ancient oracle, then visit the picturesque mountain town of Arahova. Continue to Ancient Olympia, where the Olympic flame still burns, before exploring the Mycenaean treasures and tasting wines in Nemea.
                  </p>
                  <p>
                    Your journey concludes with a stay in romantic Nafplion, Greece's first capital, followed by a visit to the perfectly preserved theater of Epidavros. This tour offers the complete Classical Greece experience, combining UNESCO World Heritage Sites, stunning landscapes, local gastronomy, and authentic Greek hospitality.
                  </p>
                </div>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Athens: Acropolis & Museum</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Explore the iconic Acropolis with the Parthenon, Erechtheion, and Temple of Athena Nike. Visit the world-class Acropolis Museum and stroll through the charming Plaka neighborhood.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Meteora: Monasteries in the Sky</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Marvel at the Byzantine monasteries perched atop towering rock formations. Visit multiple monasteries and witness spectacular sunset views over this UNESCO World Heritage Site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Delphi: The Oracle's Sanctuary</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Discover the sacred sanctuary of Apollo and the famous oracle of Delphi. Explore the archaeological museum and visit the mountain village of Arahova.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Ancient Olympia: Birthplace of Olympics</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Walk through the ancient Olympic stadium, visit the Temple of Zeus, and admire the famous Hermes statue in the archaeological museum.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Mycenae & Nemea Wine Tasting</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Explore the legendary kingdom of Agamemnon with the Lion Gate and tomb of Atreus, followed by wine tasting in the renowned Nemea wine region.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Nafplion & Epidavros</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Stay in romantic Nafplion and visit the ancient theater of Epidavros with its perfect acoustics and the healing sanctuary of Asclepius.
                    </p>
                  </div>
                </div>
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
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-primary">
                  **Flexible itinerary that can be customized to your preferences**
                </p>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-sand-50 p-6 rounded-2xl shadow-lg sticky top-24">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">From</p>
                  <p className="font-display text-5xl font-bold text-primary mb-1">€1,850</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">8 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Meeting Point</p>
                      <p className="font-semibold">Athens hotel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Period</p>
                      <p className="font-semibold">All year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Tour Type</p>
                      <p className="font-semibold">Private</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center mb-4"
                >
                  Book This Tour
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="text-center text-sm text-gray-600 mb-6">
                  Reserve now and pay later
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-primary mb-2">Questions?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Contact our team for personalized assistance
                  </p>
                  <a
                    href="tel:+302752024444"
                    className="text-accent hover:text-accent-dark text-sm font-semibold"
                  >
                    Call (+30) 27520 24444
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">5.0</span>
                  </div>
                  <p className="text-sm text-gray-600">Based on 150+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/eight-day-greece-hero-3.jpg"
          alt="Book 8-Day Classical Greece Tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Explore Classical Greece?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Book your 8-Day Classical Greece Tour and discover the wonders of ancient civilization with expert local guides.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
