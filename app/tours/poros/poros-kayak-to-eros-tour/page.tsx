"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Heart, Lighthouse, Fish, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/kayak-eros-hero-1.jpg",
  "/images/kayak-eros-hero-2.jpg",
  "/images/kayak-eros-hero-3.jpg",
];

const included = [
  "Professional kayak instructor",
  "Sea kayaks and all equipment",
  "Liability",
  "Taxes",
];

const excluded = [
  "Personal expenses",
];

export default function PorosKayakErosTour() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="flex flex-col">
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/poros" className="hover:text-primary">Poros Tours</Link>
            <span>/</span>
            <span className="text-primary">Kayak to Eros Island</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Kayak to Eros Island" fill className="object-cover" priority />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
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
                Kayak to Eros Island
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 2 or 4 hours session
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Small groups, families, couples (min 2 pax)
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Spring to Autumn
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Meet your kayak instructor in Kanali. After a briefing about our equipment and route, we will 
                  head towards the islet of Eros Island (Dascalio). Eros island is a small island with a small 
                  chapel. The island from above looks like a heart. Many couples choose that beautiful island for 
                  their wedding.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We will take photos in the calm and enchanting landscape with Poros in the background and we 
                  will have time for snorkeling, swimming and a snack. Then, crossing the channel, we will head 
                  to the stone-built "Dana" lighthouse at the entrance of the island.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  From there, we will leave for Neoreio and cross the channel to return to our base.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  * There will be the possibility of a second stop if deemed necessary. The routes and stops are 
                  indicative and will vary depending on the level of physical fitness of the clients and the 
                  weather conditions.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Heart className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Heart-Shaped Eros Island</h3>
                      <p className="text-gray-600 leading-relaxed">A small island with a chapel, shaped like a heart from above — a popular wedding destination.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Photos & Snorkeling</h3>
                      <p className="text-gray-600 leading-relaxed">Take photos in the calm, enchanting landscape with Poros in the background, with time for snorkeling, swimming and a snack.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Lighthouse className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Dana Lighthouse</h3>
                      <p className="text-gray-600 leading-relaxed">Cross the channel to visit the stone-built Dana lighthouse at the entrance of the island.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Fish className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Flexible Route</h3>
                      <p className="text-gray-600 leading-relaxed">Routes and stops vary depending on fitness level and weather, with possibility of additional stops.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="font-display text-2xl text-primary mb-4 flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                  <h3 className="font-display text-2xl text-primary mb-4">What's Not Included</h3>
                  <ul className="space-y-3">
                    {excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 flex-shrink-0">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-red-200">
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€70</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">2 or 4 hours session</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-semibold text-gray-900">Spring to Autumn</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Small groups, families, couples</span>
                    </div>
                  </div>

                  <Link href="/tour-request" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg">
                    Book This Tour
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-4">Reserve now and pay later</p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for personalized assistance</p>
                  <div className="space-y-2">
                    <a href="tel:+302751067616" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                      Call +30 27510 67616
                    </a>
                    <a href="tel:+306945890920" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm">
                      Vaggelis: +30 694 5890920
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kayak-eros-hero-3.jpg" alt="Kayak to Eros Island" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Paddle to Paradise</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your kayak tour and discover the hidden beauty of Eros Island.
          </p>
          <Link href="/tour-request" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
