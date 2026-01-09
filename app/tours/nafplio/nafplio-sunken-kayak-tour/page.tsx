"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Anchor, Landmark, Waves, UtensilsCrossed, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/nafplio-sunken-kayak-tour-hero-1.jpg",
  "/images/nafplio-sunken-kayak-tour-hero-2.jpg",
  "/images/nafplio-sunken-kayak-tour-hero-3.jpg",
];

const highlights = [
  "Ancient Sunken City from 1200 BC",
  "Small Ancient Theatre of Epidavros (4th century BC)",
  "Pristine isolated beaches",
  "Snorkeling over ancient ruins",
  "Traditional eco-farm visit",
  "Homemade traditional Greek lunch",
];

const included = [
  "Single or double sea kayaks and all equipment",
  "English speaking kayak guide",
  "Snorkeling equipment",
  "Homemade cooked traditional meal & refreshments",
  "Photos and videos sent at a later date",
  "GoPro camera provided for your use",
  "Transfer from and back to Nafplio",
  "Liability insurance & taxes",
];

export default function NafplioSunkenKayakTour() {
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
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Ancient Sunken City Kayak Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Ancient Sunken City Kayak Tour" fill className="object-cover" priority />
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
                Ancient Sunken City Kayak Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 6 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Small groups, families
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Spring to Autumn
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Start:</span> Old Epidavros Port
                </div>
              </div>

              <div className="mb-8 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <p className="text-cyan-800 font-semibold">
                  <Waves className="inline h-5 w-5 mr-2" />
                  All ages and experience levels welcome | GoPro provided
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Ancient Sunken City Tour combines the famous Ancient Sunken City, the Small Ancient Theatre 
                  of Epidavros, with breathtaking and wild scenery, pine trees hanging above the turquoise coloured 
                  waters of Argolida's coastline and wonderful secluded beaches for our stops.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Departing from the port of Old Epidavros, we follow the coastline - an untouched and sublime 
                  landscape, passing by dense vegetation, stopping at pristine isolated beaches along the way 
                  towards our historical sites. Our first site is the Small Ancient Theatre of Epidavros, built 
                  in the 4th century B.C.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our second site is none other than the Ancient Sunken City built 1200 BC, also known as Argolida's 
                  Lost Atlantis. In some places the ancient breakwater is still preserved. Only two meters in depth, 
                  this makes it a terrific location for underwater site-seeing, snorkelling, and underwater pictures.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After admiring the ruins, we visit Athina Eco-farm where we enjoy local traditional delicacies 
                  produced the same way they were during ancient times. Then we paddle to a pristine beach for our 
                  homemade lunch. After snorkelling and sunbathing, we paddle back with all senses satisfied.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Anchor className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Sunken City (1200 BC)</h3>
                      <p className="text-gray-600 leading-relaxed">Explore Argolida's Lost Atlantis - at only 2 meters depth, perfect for snorkeling over ancient ruins and underwater photography.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Landmark className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Theatre of Epidavros</h3>
                      <p className="text-gray-600 leading-relaxed">Visit the Small Ancient Theatre built in the 4th century BC, a remarkable archaeological site along the coast.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Waves className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Pristine Beaches & Snorkeling</h3>
                      <p className="text-gray-600 leading-relaxed">Stop at secluded beaches along the wild coastline, swim in crystal-clear turquoise waters, and snorkel over ancient ruins.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <UtensilsCrossed className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Eco-Farm & Traditional Food</h3>
                      <p className="text-gray-600 leading-relaxed">Visit Athina Eco-farm for traditional delicacies made the ancient Greek way, then enjoy a homemade lunch on a pristine beach.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">GoPro & Photo Memories</h3>
                      <p className="text-gray-600 leading-relaxed">Use our provided GoPro camera to capture your adventure - all photos and videos sent to you afterward.</p>
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
                <h2 className="font-display text-3xl text-primary mb-6">What is Included</h2>
                <div className="bg-sand-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-sand-200">
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€95</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">6 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Start Point:</span>
                      <span className="font-semibold text-gray-900">Old Epidavros</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold text-green-600">All Levels</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Meals:</span>
                      <span className="font-semibold text-gray-900">Lunch Included</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg">
                    Book This Tour
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-4">Reserve now and pay later</p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for personalized assistance</p>
                  <a href="tel:+302752024444" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                    Call (+30) 27520 24444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nafplio-sunken-kayak-tour-hero-3.jpg" alt="Ancient Sunken City" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Discover Greece's Lost Atlantis</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Ancient Sunken City kayak tour and explore 3,200-year-old underwater ruins.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
