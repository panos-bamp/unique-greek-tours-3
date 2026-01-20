"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Bike, Mountain, Waves, TreePine, ArrowRight } from "lucide-react";

const gallery = [
  "/images/bike-tour-hero-1.jpg",
  "/images/bike-tour-hero-2.jpg",
  "/images/bike-tour-hero-3.jpg",
];

const highlights = [
  "Explore Poros on premium electric mountain bikes",
  "Visit the ancient Temple of Poseidon ruins",
  "Rest under the plane trees of Vrysoula",
  "Off-road adventure with panoramic island views",
  "Swimming break at a beautiful beach",
  "Professional instructor and all equipment included",
];

const included = [
  "Professional bike instructor",
  "Electric mountain bike",
  "Helmet and safety equipment",
  "Liability insurance",
  "All taxes",
  "Full refund in case of adverse weather",
];

export default function BikeTour() {
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
            <span className="text-primary">Mountain E-Bike Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Poros E-Bike Tour" fill className="object-cover" priority />
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
                Mountain E-Bike Tour
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
                  <MapPin className="h-5 w-5 text-accent" /><span><strong>Start:</strong> Poros Port</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The tour of Poros takes place through dirt and asphalt routes with three main stops — at the Monastery, 
                  the Temple of Poseidon, and Vrysoula. Starting from the port of Poros, we tour Sfairia before heading 
                  to our first stop at the Monastery.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The uphill route to the Temple of Poseidon is about 2km — the most challenging but most rewarding part 
                  of our route. From there, an easy downhill section leads to Vrysoula where we rest under the coolness 
                  of the plane trees before entering the off-road section towards the Russian Naval Station.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Bike className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">The Monastery Stop</h3>
                      <p className="text-gray-600">First scenic stop after touring Sfairia. Take in the peaceful atmosphere before the uphill climb begins.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Temple of Poseidon</h3>
                      <p className="text-gray-600">Reach the ancient temple ruins after a 2km uphill climb — the most challenging but most rewarding part with incredible views.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <TreePine className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Vrysoula Rest Stop</h3>
                      <p className="text-gray-600">Enjoy a relaxing break under the shade of ancient plane trees before continuing your adventure.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Waves className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Beach Break & Off-Road</h3>
                      <p className="text-gray-600">Off-road section with views from above, plus a beach stop for snorkeling and relaxation before returning to port.</p>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€55</div>
                    <div className="text-sm text-gray-600">per person (2hr session)</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">2-Hour Session:</span><span className="font-semibold">€55/person</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">4-Hour Session:</span><span className="font-semibold">€95/person</span>
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
          <Image src="/images/bike-tour-hero-2.jpg" alt="Mountain biking Poros" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Ready for Adventure?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Experience Poros from a different perspective on our thrilling e-bike adventure through ancient trails and stunning viewpoints.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
