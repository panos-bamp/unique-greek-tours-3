"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Heart, Camera, Waves, Lighthouse, ArrowRight } from "lucide-react";

const gallery = [
  "/images/kayak-eros-hero-1.jpg",
  "/images/kayak-eros-hero-2.jpg",
  "/images/kayak-eros-hero-3.jpg",
];

const highlights = [
  "Paddle to the heart-shaped Eros Island (Dascalio)",
  "Visit a small chapel on a romantic island setting",
  "Perfect for couples - popular wedding destination",
  "Snorkeling in crystal clear Saronic waters",
  "Visit the historic Dana Lighthouse by kayak",
  "Professional instructor and all equipment included",
];

const included = [
  "Professional kayak instructor",
  "Sea kayaks and all equipment",
  "Snorkeling gear",
  "Liability insurance",
  "All taxes",
  "Full refund in case of adverse weather",
];

export default function KayakErosTour() {
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
            <span className="text-primary">Kayak to Eros Island</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Kayak to Eros Island" fill className="object-cover" priority />
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
                Kayak to Eros Island
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" /><span><strong>Duration:</strong> 2 or 4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" /><span><strong>Group:</strong> Min 2 people</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" /><span><strong>Season:</strong> Spring to Autumn</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" /><span><strong>Meeting:</strong> Kanali</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Meet your kayak instructor in Kanali for an unforgettable water adventure. After a briefing about equipment 
                  and route, we head towards the islet of Eros Island (Dascalio) — a small island with a charming chapel that, 
                  from above, looks like a heart. Many couples choose this beautiful island for their wedding!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Take photos in the calm and enchanting landscape with Poros in the background, then enjoy time for snorkeling, 
                  swimming, and a snack. Crossing the channel, we'll head to the stone-built Dana lighthouse at the entrance of 
                  the island before returning to base.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Paddle to Eros Island</h3>
                      <p className="text-gray-600">Kayak to the romantic heart-shaped island with its small chapel — a popular spot for weddings and proposals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Camera className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Photo Opportunities</h3>
                      <p className="text-gray-600">Capture stunning photos in the calm, enchanting landscape with Poros Town as your backdrop.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Waves className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Snorkeling & Swimming</h3>
                      <p className="text-gray-600">Enjoy time in the crystal-clear Saronic waters with snorkeling, swimming, and a relaxing snack break.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Lighthouse className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Dana Lighthouse Visit</h3>
                      <p className="text-gray-600">Cross the channel to visit the historic stone-built lighthouse at the entrance of Poros.</p>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€50</div>
                    <div className="text-sm text-gray-600">per person (2hr session)</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">2-Hour Session:</span><span className="font-semibold">€50/person</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">4-Hour Session:</span><span className="font-semibold">€85/person</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Season:</span><span className="font-semibold">Spring-Autumn</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Min Group:</span><span className="font-semibold">2 people</span>
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
          <Image src="/images/kayak-eros-hero-3.jpg" alt="Kayaking in Poros" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Paddle to Paradise</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Experience the magic of sea kayaking to Eros Island — perfect for couples and adventure seekers alike.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
