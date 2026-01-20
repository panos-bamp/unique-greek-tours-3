"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Mountain, Eye, Coffee, Landmark, ArrowRight } from "lucide-react";

const gallery = [
  "/images/city-tour-hero-1.jpg",
  "/images/city-tour-hero-2.jpg",
  "/images/city-tour-hero-3.jpg",
];

const highlights = [
  "Connect three peaks of Poros island in one tour",
  "Visit the chapel of Agioi Anargyroi with magnificent views",
  "Discover the historic Ottoman stone windmill",
  "Walk through traditional settlement alleys",
  "Taste local lemonade in a traditional courtyard",
  "End at the iconic Clock Tower landmark",
];

const included = [
  "Local tour leader",
  "Liability insurance",
  "All taxes",
  "Local lemonade tasting",
  "Full refund in case of adverse weather",
];

export default function PorosCityTour() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">Tours</Link>
            <span>/</span>
            <Link href="/tours/poros" className="hover:text-primary">Poros</Link>
            <span>/</span>
            <span className="text-primary">Three Peaks City Tour</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Poros Three Peaks City Tour"
            fill
            className="object-cover"
            priority
          />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "w-8 bg-white" : "bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Three Peaks City Tour Hiking
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span><strong>Duration:</strong> 2.5 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span><strong>Group:</strong> Min 2 people</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span><strong>Season:</strong> Year-round</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span><strong>Meeting:</strong> New Port</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Connect the three peaks of Poros island on this unique hiking tour, visiting some of the 
                  most significant points of interest while enjoying the best views the island has to offer. 
                  Along the way, visit a traditional yard where you can taste a local surprise—our treat 
                  to welcome you to our paradise!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Starting at the new port, we hike on the ring road of the island towards the first ridge 
                  where the chapel of Agioi Anargyroi offers magnificent views of the Saronic Gulf and the 
                  canal separating Poros from Galatas.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">First Peak: Agioi Anargyroi Chapel</h3>
                      <p className="text-gray-600">Hike to the first ridge where the chapel offers magnificent views of the Saronic Gulf and the canal separating Poros from Galatas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Landmark className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Second Peak: Ottoman Windmill</h3>
                      <p className="text-gray-600">Continue to the second point featuring a historic stone windmill from the Ottoman Empire, a testament to the island's rich history.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Coffee className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Traditional Courtyard Stop</h3>
                      <p className="text-gray-600">Descend through the charming alleys of the traditional settlement and enjoy refreshing local lemonade in a traditional courtyard.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Third Peak: The Clock Tower</h3>
                      <p className="text-gray-600">Finish at the island's trademark—the iconic Clock Tower—before descending to the old port of Poros.</p>
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">€45</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">2.5 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Meeting Point:</span>
                      <span className="font-semibold">New Port</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Season:</span>
                      <span className="font-semibold">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Min Group:</span>
                      <span className="font-semibold">2 people</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg">
                    Book This Tour
                  </Link>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for assistance</p>
                  <a href="tel:+302298024444" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/city-tour-hero-3.jpg" alt="Poros views" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Ready to Explore Poros?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Book your Three Peaks City Tour today and discover the best views and hidden gems of this beautiful island.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
