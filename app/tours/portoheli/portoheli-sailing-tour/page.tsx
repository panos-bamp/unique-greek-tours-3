"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Anchor, Ship, Navigation, ArrowRight } from "lucide-react";

const gallery = [
  "/images/sailing-hero-1.jpg",
  "/images/sailing-hero-2.jpg",
  "/images/sailing-hero-3.jpg",
];

const included = [
  "English-speaking skipper",
  "Snacks & refreshments",
  "Towels",
  "Snorkeling equipment & Sea toys",
  "Liability",
  "Taxes",
];

export default function PortoHeliSailingTour() {
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
            <Link href="/tours/porto-heli" className="hover:text-primary">Porto Heli Tours</Link>
            <span>/</span>
            <span className="text-primary">Sailing and Tours from Porto Heli</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Sailing and Tours from Porto Heli" fill className="object-cover" priority />
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
                Sailing and Tours from Porto Heli
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 8 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Departure:</span> 10:30 or 11:00 AM
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Type:</span> Private
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Spring to Autumn
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
                  Prepare for a day of fun and relaxation on the waves.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Choose from three stunning route options, each offering a unique way to experience the 
                  breathtaking coastline and islands around Porto Heli.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Sailing Options</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Anchor className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option: Porto Heli Riviera</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Cruise alongside the famous Riviera Coastline taking in sights that will take your breath 
                        away: unexplored coves, verdant landscapes and the aristocratic allure of the coastline set 
                        the tone. During your journey you have the opportunity to enjoy refreshing dips wherever you 
                        please, customizing your journey to include your personal favorites. It is then off to 
                        Spetses, one of Greece's most cosmopolitan and picturesque destinations, perfect for carefree 
                        strolls in its quaint town. Your journey ends with the return to Porto Heli.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Ship className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option: Dokos & Hydra</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Make the most of the available snorkeling equipment and explore the depths of Dokos' waters, 
                        home to what is considered the world's oldest shipwreck, or enjoy carefree moments with sea 
                        toys. Once back on deck, fresh towels await as you travel to Skintos Bay, an ideal shelter 
                        from strong winds and a stunning sight. Next up is the cosmopolitan island of Hydra, a 
                        striking no-car zone, ideal for exploration: wander through alleyways lined with elegant 
                        stone mansions, enjoy a tasty lunch or head for beautiful beaches such as St Nicholas before 
                        cruising back to Porto Heli.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Navigation className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option: Nafplio</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Select your preferred point of embarkation in Porto Heli and sail to Nafplio, Greece's very 
                        first capital and a historically significant destination full of archaeological sites. Take 
                        in the beauty of the scenery as you sail towards the former epicenter of the country and make 
                        the most of your charter's onboard amenities. Once in Nafplio, visit museums and the 
                        impressive fortress, stroll on the seafront promenade, or enjoy local treats. Keen to spend 
                        more time at sea? Sail towards the islets of Romvi and Daskalio or the village of Tolo before 
                        reaching the beaches of Kondyli and Kantia. Your journey ends with the return to Porto Heli.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
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
                  <div className="mt-6 pt-6 border-t border-green-200">
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
                    <div className="text-sm text-gray-600 mb-2">Pricing</div>
                    <div className="font-display text-2xl font-bold text-primary-dark">Contact for Quote</div>
                    <div className="text-sm text-gray-600 mt-2">Custom quotes based on route and group size</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">8 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Departure:</span>
                      <span className="font-semibold text-gray-900">10:30 or 11:00 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-semibold text-gray-900">Spring to Autumn</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Private</span>
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
          <Image src="/images/sailing-hero-3.jpg" alt="Sailing from Porto Heli" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Set Sail to Paradise</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your private sailing experience and discover the Greek islands.
          </p>
          <Link href="/tour-request" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
