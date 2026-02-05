"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, X, Star, Trophy, Flame, Columns, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/kalamata-olympia-tour-hero-1.jpg",
  "/images/kalamata-olympia-tour-hero-2.jpg",
  "/images/kalamata-olympia-tour-hero-3.jpg",
];

const highlights = [
  "Visit the birthplace of the Olympic Games",
  "Explore the Temple of Zeus ruins",
  "See where the Olympic flame is lit",
  "Walk through the ancient Olympic Stadium",
  "Visit the Archaeological Museum with Olympic artifacts",
  "UNESCO World Heritage site",
];

const included = [
  "Return private transportation",
  "Liability insurance",
  "All taxes",
];

const excluded = [
  "Licensed guide (available upon request)",
  "Entrance fees to archaeological sites",
  "Personal expenses",
];

export default function NafplioAncientOlympiaTour() {
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
            <span className="text-primary">Ancient Olympia Day Trip</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Ancient Olympia tour"
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
                Ancient Olympia Day Trip from Nafplio
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> Full day
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
                  <span className="font-semibold">Pick-up:</span> 7:30 AM
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Journey to the birthplace of the Olympic Games, one of the most significant archaeological sites in 
                  Greece. This full-day excursion takes you across the Peloponnese to ancient Olympia, a UNESCO World 
                  Heritage site where athletes competed for glory over 2,700 years ago.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Walk through the magnificent ruins of the Sanctuary of Zeus, where the colossal statue—one of the 
                  Seven Wonders of the Ancient World—once stood. Visit the ancient stadium where Olympic champions were 
                  crowned with olive wreaths, and stand at the starting line where the first Olympic races began.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  See the altar where the Olympic flame is still lit for every modern Olympics, maintaining a tradition 
                  that spans millennia. Explore the ruins of temples, training facilities, and treasuries built by 
                  city-states to honor their victorious athletes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Visit the renowned Archaeological Museum housing spectacular artifacts including the Hermes of 
                  Praxiteles and the Nike of Paionios. The journey through scenic countryside makes this a memorable 
                  full-day adventure into the heart of ancient Greek civilization.
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

              {/* Important Information */}
              <div className="bg-sand-50 rounded-2xl p-8 mb-12">
                <h2 className="font-display text-2xl text-primary mb-4">Important Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <strong>Full-day tour - approximately 10-11 hours including travel time</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <strong>Comfortable shoes and sun protection essential</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <strong>Licensed guide highly recommended to bring ancient Olympics to life</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <strong>Full refund or change of date in case of adverse weather conditions</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €290
                    </div>
                    <div className="text-sm text-gray-600">per group</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">Full day</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Pick-up Time:</span>
                      <span className="font-semibold text-gray-900">7:30 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                  </div>

                  <a
                    href="https://fareharbor.com/embeds/book/uniquegreektours/items/269599/?flow=4827171&from-ssl=yes&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Fprivate_tours%2Fancient-olympia-from-nafplion%2F&ga=UA-138348961-1%2C209837950.1765224973%3B&language=en-us&u=7e462d24-c50a-4c5d-918e-674a3b00b338"
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
          src="/images/kalamata-olympia-tour-hero-3.jpg"
          alt="Book your Ancient Olympia tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Walk Where Olympians Competed
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your Ancient Olympia tour and experience the birthplace of the Olympic Games and Western athletic tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/embeds/book/uniquegreektours/items/269599/?flow=4827171&from-ssl=yes&ga4t=AW-748580769%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.uniquegreektours.com%2Fen%2Fprivate_tours%2Fancient-olympia-from-nafplion%2F&ga=UA-138348961-1%2C209837950.1765224973%3B&language=en-us&u=7e462d24-c50a-4c5d-918e-674a3b00b338"
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
