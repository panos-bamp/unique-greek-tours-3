"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, X, Landmark, Theater, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/mycenae-tour-hero-1.jpg",
  "/images/mycenae-tour-hero-2.jpg",
  "/images/mycenae-tour-hero-3.jpg",
];

const highlights = [
  "Ancient theater of Epidavros",
  "Mycenae archaeological site",
  "Charming Nafplio old town",
  "UNESCO World Heritage sites",
  "Professional transportation",
  "Full day cultural immersion",
];

const included = [
  "Return transportation",
  "Liability insurance",
  "All taxes",
];

const excluded = [
  "Licensed guide (available upon request)",
  "Entrance fees",
  "Personal expenses",
];

export default function PortoHeliEpidavrosTour() {
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
            <Link href="/tours/porto-heli" className="hover:text-primary">Porto Heli Tours</Link>
            <span>/</span>
            <span className="text-primary">Epidavros, Mycenae & Nafplio Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Epidavros, Mycenae & Nafplio Tour"
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
                Epidavros, Mycenae & Nafplio Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> Full day
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
                  Explore three of the Peloponnese's most significant sites on this comprehensive full-day tour from 
                  Porto Heli. Visit the legendary ancient theater of Epidavros, the mighty citadel of Mycenae, and 
                  the charming Venetian town of Nafplio, experiencing thousands of years of Greek history and culture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Begin at the ancient theater of Epidavros, a UNESCO World Heritage site famous for its perfect 
                  acoustics and stunning architecture. Marvel at the engineering genius of the ancient Greeks as you 
                  explore this remarkably well-preserved 4th-century BC theater that still hosts performances today.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Continue to Mycenae, the legendary kingdom of Agamemnon and center of the Mycenaean civilization 
                  that dominated Greece 3,500 years ago. Walk through the iconic Lion Gate, explore the massive 
                  fortification walls, and visit the royal tombs. Discover the archaeological treasures that inspired 
                  Homer's epic tales.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  End your day in beautiful Nafplio, Greece's first capital. Stroll through the charming old town 
                  with its neoclassical architecture, Venetian fortresses, and scenic harbor. Enjoy free time for 
                  lunch, shopping, or simply soaking in the romantic atmosphere of this captivating seaside town 
                  before returning to Porto Heli.
                </p>
              </div>

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
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €230
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">Full day</span>
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
                    href="https://fareharbor.com/embeds/book/uniquegreektours/items/359220/?back=https://www.uniquegreektours.com/en/tour/porto-heli-anc-epidavros-mycenae-nafplion-tour/&flow=482722&g4=yes"
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

      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/mycenae-tour-hero-3.jpg"
          alt="Book your archaeological tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Journey Through Ancient Greece
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your tour and discover the legendary sites of the Argolis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/embeds/book/uniquegreektours/items/359220/?back=https://www.uniquegreektours.com/en/tour/porto-heli-anc-epidavros-mycenae-nafplion-tour/&flow=482722&g4=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Book This Tour
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/tours/porto-heli"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-sand-50 transition-all shadow-lg font-semibold text-lg"
            >
              View All Porto Heli Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
