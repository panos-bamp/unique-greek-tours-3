"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Castle, Waves, Camera, UtensilsCrossed, Anchor, ArrowRight } from "lucide-react";

const gallery = [
  "/images/nafplio-kayak-tour-hero-1.jpg",
  "/images/nafplio-kayak-tour-hero-2.jpg",
  "/images/nafplio-kayak-tour-hero-3.jpg",
];

const highlights = [
  "Paddle past 4 different fortresses",
  "Visit iconic Bourtzi fort (built 1473)",
  "UNESCO World Heritage Palamidi views",
  "Akronafplia fortress cliffs",
  "Secluded beach refreshment stop",
  "Transfer to/from Karathonas beach",
];

const included = [
  "Single or double sea kayaks and all equipment",
  "English speaking kayak guide",
  "Snorkeling equipment",
  "Homemade cooked traditional meal & refreshments",
  "Photos and videos sent at a later date",
  "Transfer from and back to Nafplio",
  "Liability insurance & taxes",
];

export default function NafplioKayakTour() {
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
            <span className="text-primary">Medieval Castles Kayak Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Medieval Castles Nafplio Kayak Tour" fill className="object-cover" priority />
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
                Medieval Castles Nafplio Kayak Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 4 hours
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
                  <span className="font-semibold">Start:</span> Nafplio Port
                </div>
              </div>

              <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-semibold">
                  <Castle className="inline h-5 w-5 mr-2" />
                  Our Flagship Tour | 4 Fortresses | Global Originality
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our Medieval Castles Nafplio Sea Kayak Tour is probably our flagship tour, paddling from the 
                  first capital of modern Greece, with 4 different fortresses in our view. All of them rich in 
                  history and folklore stories from ancient times, to medieval and more recent times.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This is probably a global originality, and we are proud to offer this tour, at a breathtaking, 
                  dominant scenery. The first site we visit is the famous fort of Bourtzi, built in 1473, on a 
                  tiny inlet right in front of the port. The importance of this castle throughout the years and 
                  the battles it has seen, makes it an ideal location for the first historical tales and folklore.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  After enjoying the magnificent site, we paddle towards the old town of Nafplio, under the cannons 
                  of the Old Town's 1st line of fortification, while the UNESCO World Heritage fortress of Palamidi 
                  dominates the view right above it. As soon as we exit the port, we paddle along the ancient road 
                  of Nafplio, under Akronafplia fortress, and are rewarded with breathtaking views of dominant cliffs 
                  covered in succulent vegetation with the fortress as its crown at the top.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We continue along the coastline until we reach a small secluded beach for enjoying our delicacies 
                  and refreshment. Once refreshed, depending on weather conditions, we start paddling back or reach 
                  our base at Karathonas beach, where you can enjoy other watersports. There will be plenty of time 
                  for group and family photographs in the kayaks around the cliffs and forts.
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
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Bourtzi Fortress (1473)</h3>
                      <p className="text-gray-600 leading-relaxed">Paddle around the iconic island fortress built by the Venetians, learning historical tales and folklore from your guide.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Castle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Four Fortress Views</h3>
                      <p className="text-gray-600 leading-relaxed">Experience the unique sight of four fortresses including UNESCO World Heritage Palamidi and ancient Akronafplia.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Waves className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Stunning Cliffside Paddling</h3>
                      <p className="text-gray-600 leading-relaxed">Kayak under dramatic cliffs covered in lush vegetation, with ancient fortifications crowning the heights above.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <UtensilsCrossed className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Secluded Beach Stop</h3>
                      <p className="text-gray-600 leading-relaxed">Rest at a hidden beach to enjoy homemade traditional delicacies and refreshments with stunning views.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Photo Opportunities</h3>
                      <p className="text-gray-600 leading-relaxed">Capture incredible group and family photos in the kayaks with dramatic fortress and cliff backdrops.</p>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€75</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">4 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Start Point:</span>
                      <span className="font-semibold text-gray-900">Nafplio Port</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold text-green-600">All Levels</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Meals:</span>
                      <span className="font-semibold text-gray-900">Snacks Included</span>
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
          <Image src="/images/nafplio-kayak-tour-hero-3.jpg" alt="Nafplio Kayak Tour" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Paddle Through History</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book our flagship kayak tour and experience Nafplio's 4 fortresses from the water.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
