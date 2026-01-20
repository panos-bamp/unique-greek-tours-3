"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Mountain, Wine, Utensils, Waves, Car, ArrowRight } from "lucide-react";

const gallery = [
  "/images/winery-tour-hero-1.jpg",
  "/images/winery-tour-hero-2.jpg",
  "/images/winery-tour-hero-3.jpg",
];

const highlights = [
  "Hike to an active volcano crater on Methana peninsula",
  "Experience landscapes full of wild beauty and energy",
  "Wine tasting at a local Greek winery",
  "Wine and food pairing experience",
  "Guided vineyard tour",
  "Optional: Swim in Peristera cave's sea lake",
];

const included = [
  "Hotel pickup and drop-off",
  "Private return transportation",
  "Boat trip",
  "All wine tastings",
  "Lunch with wine pairing",
  "Local tour leader",
  "Liability insurance",
  "All taxes",
  "Full refund in case of adverse weather",
];

export default function WineryTour() {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="flex flex-col">
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">Tours</Link>
            <span>/</span>
            <Link href="/tours/poros" className="hover:text-primary">Poros</Link>
            <span>/</span>
            <span className="text-primary">Volcano & Winery Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Volcano and Winery Tour" fill className="object-cover" priority />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button key={index} onClick={() => setCurrentImage(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "w-8 bg-white" : "bg-white/60"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Volcano & Winery Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" /><span><strong>Duration:</strong> 6 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" /><span><strong>Group:</strong> Min 3 people</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" /><span><strong>Season:</strong> Year-round</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" /><span><strong>Location:</strong> Methana Peninsula</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We know that with every hike in nature, everyone gets much more than they seek. It is an adventure 
                  that fills your soul. Imagine taking a unique hike to the foothills or a crater of an active volcano 
                  on the Methana peninsula — a place full of energy and landscapes of wild beauty that will reward 
                  even the most demanding hiker.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After spending time in a crater and enjoying the wonderful views, we visit a local winery for wine 
                  tasting, wine and food pairing, a vineyard tour, and a delicious lunch. Optionally, visit the 
                  Peristera cave and swim in the amazing lake with fresh sea water inside!
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Car className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Hotel Pickup</h3>
                      <p className="text-gray-600">We pick you up from your hotel with private transportation and take a scenic boat trip to the Methana peninsula.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Volcano Crater Hike</h3>
                      <p className="text-gray-600">Trek to the foothills or crater of an active volcano. Experience the raw energy and wild beauty of this unique landscape.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Wine className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Wine Tasting Experience</h3>
                      <p className="text-gray-600">Visit a local Greek winery for wine tasting, learning about the region's wine production and viticulture traditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Utensils className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Vineyard Tour & Lunch</h3>
                      <p className="text-gray-600">Enjoy a guided vineyard tour followed by a wine and food pairing lunch featuring local Greek cuisine.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Waves className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Optional: Peristera Cave</h3>
                      <p className="text-gray-600">Swim in the amazing underground lake inside Peristera cave with fresh sea water — a truly magical experience.</p>
                    </div>
                  </div>
                </div>
              </div>

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
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">€150</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span><span className="font-semibold">6 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Includes:</span><span className="font-semibold">Transport & Meals</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Season:</span><span className="font-semibold">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Min Group:</span><span className="font-semibold">3 people</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg">
                    Book This Tour
                  </Link>
                </div>
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for assistance</p>
                  <a href="tel:+302298024444" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">Call Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/winery-tour-hero-3.jpg" alt="Winery tour" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">An Unforgettable Adventure</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Combine the thrill of volcano hiking with the pleasure of Greek wine tasting on this full-day experience.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
