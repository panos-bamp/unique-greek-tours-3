"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, ArrowRight } from "lucide-react";

const gallery = [
  "/images/two-day-classic-hero-1.jpg",
  "/images/two-day-classic-hero-2.jpg",
  "/images/two-day-classic-hero-3.jpg",
];

const highlights = [
  "Visit the Corinth Canal and Akrokorinthos",
  "Explore Ancient Mycenae and the Lion Gate",
  "Walk through the Cyclopean Walls",
  "See the tomb of Atreus",
  "Overnight stay in romantic Nafplion",
  "Visit the Ancient Theater of Epidavros",
  "Explore the sacred Asclepion",
  "UNESCO World Heritage Sites",
];

const included = [
  "Return private transportation from Athens",
  "Pick up from your hotel or from our meeting point",
  "Guided tour of archaeological sites (upon request)",
  "Overnight stay",
  "Liability insurance",
  "All taxes",
];

export default function TwoDayClassicTrip() {
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
            <span className="text-primary">2-Day Classic Tour in Nafplio</span>
          </div>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="2-day classic tour gallery"
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
                2-Day Classic Tour in Nafplio
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>2 days</span>
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
                    On this two-day tour beginning from Athens, you will have the opportunity to admire the most important sights and monuments of Argolida and enjoy the charming city of Nafplion.
                  </p>
                  <p>
                    Starting from Athens, we will travel to the Corinth Canal and visit the archaeological site of Akrokorinthos, the famous temple of Apollo and the steps of Apostle Paul. We continue towards Argolida and our next stop is the archaeological site of Mycenae, where we will travel to the kingdom of mythical Agamemnon and discover where the Mycenaean civilization developed, one of the most brilliant cultures of Greek prehistory.
                  </p>
                  <p>
                    The fortification of the Acropolis with the famous Cyclopean Walls, the Gate of Lions, the monumental entrance to the palaces and the mythical vaulted tomb of Atreus are just some of the outstanding attractions of the area.
                  </p>
                  <p>
                    Towards midday, we will arrive at Nafplion. You will check in your hotel and the rest of the day is free to stroll around the beautiful city. You will walk through cobbled streets surrounded by Venetian and Neoclassical buildings, exploring the local restaurants, shops and cafes of this fascinating castle town.
                  </p>
                  <p>
                    The next day we will head to Epidavros and visit the ancient theater, one of the most famous archaeological monuments in Greece. The place has been dedicated to deities with healing abilities since prehistoric times. At the end of the Classical Age (330 BC) the ancient theater was also built, the most perfect and famous ancient Greek theater, which combines elegance with perfect acoustics. In 1988, the theater was included, along with the entire Asklepiion, on the UNESCO World Heritage List.
                  </p>
                  <p>
                    We will then transfer you back to Athens to end an amazing two-days tour!
                  </p>
                </div>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Corinth Canal & Akrokorinthos</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Visit the impressive Corinth Canal and explore the archaeological site of Akrokorinthos with the temple of Apollo and the steps of Apostle Paul.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Ancient Mycenae</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Discover the kingdom of mythical Agamemnon with the famous Cyclopean Walls, the Gate of Lions, and the tomb of Atreus.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Nafplion Old Town</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Explore Greece's first capital with its Venetian architecture, charming cobbled streets, and romantic atmosphere.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Ancient Theater of Epidavros</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Visit the UNESCO World Heritage theater with perfect acoustics and the sacred Asclepion healing center.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-primary mb-2">Overnight in Nafplion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Stay overnight in romantic Nafplion, with free time to explore local restaurants, shops and cafes.
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
                  **Full refund or change of date in case of adverse weather conditions**
                </p>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-sand-50 p-6 rounded-2xl shadow-lg sticky top-24">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">From</p>
                  <p className="font-display text-5xl font-bold text-primary mb-1">€380</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">2 days</p>
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
                  <p className="text-sm text-gray-600">Based on 100+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/two-day-classic-hero-3.jpg"
          alt="Book 2-Day Classic Tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Discover Ancient Greece?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Book your 2-Day Classic Tour and explore the wonders of Mycenae and Epidavros with an expert local guide.
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
