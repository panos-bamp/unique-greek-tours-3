"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Anchor, Compass, Waves, Ship, Sun, ArrowRight } from "lucide-react";

const gallery = [
  "/images/sailing-hero-1.jpg",
  "/images/sailing-hero-2.jpg",
  "/images/sailing-hero-3.jpg",
];

const highlights = [
  "Private sailing charter with English-speaking skipper",
  "Three route options: Riviera, Dokos/Hydra, or Nafplio",
  "Explore cosmopolitan Spetses and car-free Hydra",
  "Snorkeling at world's oldest shipwreck site (Dokos)",
  "Swimming stops at hidden coves and beautiful beaches",
  "Snacks, refreshments, towels and sea toys included",
];

const included = [
  "English-speaking skipper",
  "Snacks & refreshments",
  "Fresh towels",
  "Snorkeling equipment",
  "Sea toys (mattresses, noodles)",
  "Liability insurance",
  "All taxes",
  "Full refund in case of adverse weather",
];

export default function SailingTour() {
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
            <Link href="/tours/portoheli" className="hover:text-primary">Porto Heli</Link>
            <span>/</span>
            <span className="text-primary">Private Sailing Tours</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Porto Heli Sailing Tour" fill className="object-cover" priority />
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
                Private Sailing Tours from Porto Heli
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" /><span><strong>Duration:</strong> 8 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" /><span><strong>Type:</strong> Private Charter</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" /><span><strong>Season:</strong> Spring to Autumn</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" /><span><strong>Departure:</strong> 10:30 or 11:00</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Prepare for a day of fun and relaxation on the waves with our private sailing tours from Porto Heli. 
                  Choose from three stunning routes exploring the Greek Riviera, the cosmopolitan islands of Spetses 
                  and Hydra, or the historic first capital of Greece, Nafplio.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each journey includes swimming stops at hidden coves, snorkeling opportunities, and all the amenities 
                  you need for a perfect day at sea — from fresh towels to sea toys and refreshments.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Choose Your Adventure</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Compass className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option 1: Porto Heli Riviera</h3>
                      <p className="text-gray-600">Cruise alongside the famous Riviera Coastline taking in breathtaking sights: unexplored coves, verdant landscapes, and the aristocratic allure of the coastline. Enjoy refreshing dips wherever you please, then visit cosmopolitan Spetses for carefree strolls before returning to Porto Heli.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Anchor className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option 2: Dokos & Hydra</h3>
                      <p className="text-gray-600">Explore the depths of Dokos waters, home to what is considered the world's oldest shipwreck. Stop at Skintos Bay, then head to car-free Hydra — wander through alleyways lined with elegant stone mansions, enjoy lunch, and visit beautiful beaches like St. Nicholas before returning.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Ship className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Option 3: Nafplio</h3>
                      <p className="text-gray-600">Sail to Greece's very first capital, a historically significant destination full of archaeological sites. Visit museums, the impressive fortress, stroll the seafront promenade, or enjoy local treats. Add swimming stops at Romvi and Daskalio islets or the beaches of Kondyli and Kantia.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Sun className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Morning Departure</h3>
                      <p className="text-gray-600">Board your private charter at 10:30 or 11:00am from your preferred point in Porto Heli. Meet your English-speaking skipper and set sail for adventure.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Waves className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Swimming & Snorkeling</h3>
                      <p className="text-gray-600">Multiple stops for swimming in crystal-clear waters. Use our snorkeling equipment to explore underwater life, or relax with sea toys including mattresses and noodles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Anchor className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Island Exploration</h3>
                      <p className="text-gray-600">Dock at your chosen destination for free time to explore. Wander historic streets, enjoy local cuisine, visit landmarks, or simply soak in the atmosphere.</p>
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
                    <div className="text-sm text-gray-600 mb-2">Private Charter From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">€800</div>
                    <div className="text-sm text-gray-600">per boat (up to 8 guests)</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span><span className="font-semibold">8 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Departure:</span><span className="font-semibold">10:30 or 11:00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Season:</span><span className="font-semibold">Spring-Autumn</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Type:</span><span className="font-semibold">Private</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg">
                    Book This Tour
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Price varies by route and vessel
                  </p>
                </div>
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for assistance</p>
                  <a href="tel:+302754024444" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">Call Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/sailing-hero-3.jpg" alt="Sailing in Greece" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Set Sail for Adventure</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Experience the magic of the Greek Riviera, visit cosmopolitan islands, and create unforgettable memories on the water.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Your Sailing Tour <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
