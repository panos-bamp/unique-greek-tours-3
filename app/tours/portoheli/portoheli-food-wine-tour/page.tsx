"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Wine, UtensilsCrossed, Castle, Landmark, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/portoheli-food-wine-tour-hero-1.jpg",
  "/images/portoheli-food-wine-tour-hero-2.jpg",
  "/images/portoheli-food-wine-tour-hero-3.jpg",
];

const highlights = [
  "Visit an award-winning winery in Nemea",
  "Learn about unique Greek wine varieties",
  "Premium wine sampling with expert guidance",
  "Guided walking tour of historic Nafplio",
  "Taste local delicacies at a Greek Deli",
  "Sample ouzo and tsipouro at a wine cellar",
];

const included = [
  "English-speaking tour leader",
  "Return transportation from Porto Heli",
  "Pick up from your hotel",
  "Entrance into the winery",
  "Wine tasting experience",
  "Guided city tour of Nafplio",
  "Entrance to the deli and wine cellar",
  "Liability insurance & taxes",
];

export default function PortoHeliFoodWineTour() {
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
            <Link href="/tours/portoheli" className="hover:text-primary">Porto Heli Tours</Link>
            <span>/</span>
            <span className="text-primary">Wine Tasting & City Food Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Porto Heli Wine Tasting & Food Tour" fill className="object-cover" priority />
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
                Wine Tasting & City Food Tour in Nafplio
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 7 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Small groups, families, couples
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> All Year
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Pick-up:</span> 10:00 AM
                </div>
              </div>

              <div className="mb-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-800 font-semibold">
                  <Wine className="inline h-5 w-5 mr-2" />
                  Award-Winning Winery | Nemea Wine Region | Greek Gastronomy
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Porto Heli is conveniently located at the peninsula of Argolida. From there you have access to 
                  famous destinations of the region, but also to one of the biggest wine zones in Greece, Nemea. 
                  If you are a wine lover, don't miss the chance to visit an award-winning winery that will 
                  introduce you to the world of Greek wines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You will be picked up from your hotel and driving through the beautiful Argolic plain, you will 
                  end up in one of the best wineries in Greece. A wine expert will welcome you and show you around 
                  the vineyards and the facilities. You will learn about the unique Greek varieties and the 
                  winemaking procedure, enjoying a sampling of premium wines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Your next stop will be the picturesque and historic city of Nafplio. You will stroll around the 
                  beautiful alleys with your escort, who will talk about the long history of the city - stories 
                  that begin from the Venetians with imposing castles and magnificent architecture, to Modern Greece 
                  and Ioannis Kapodistrias, the first governor of Greece.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  During this charming tour you will stop at a typical Greek Deli, where you will taste local 
                  delicacies, such as tasty cheeses and sausages, different flavors of olive oil and several 
                  varieties of olives. You will also visit a fully upgraded wine cellar and taste the famous 
                  ouzo and tsipouro. The tour ends with your return to Porto Heli after a day full of history, 
                  culture and taste.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Wine className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Award-Winning Winery Visit</h3>
                      <p className="text-gray-600 leading-relaxed">Tour the vineyards and facilities of one of Greece's best wineries, guided by a wine expert who will teach you about Greek wine varieties.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Castle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Historic Nafplio Walking Tour</h3>
                      <p className="text-gray-600 leading-relaxed">Explore the charming alleys of Greece's first capital, learning about Venetian heritage and modern Greek history.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <UtensilsCrossed className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Greek Deli Experience</h3>
                      <p className="text-gray-600 leading-relaxed">Taste local cheeses, sausages, various olive oils and olive varieties at a traditional Greek delicatessen.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Landmark className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Wine Cellar & Spirits</h3>
                      <p className="text-gray-600 leading-relaxed">Visit a fully upgraded wine cellar and taste the famous Greek spirits - ouzo and tsipouro.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Scenic Argolic Plain Drive</h3>
                      <p className="text-gray-600 leading-relaxed">Enjoy beautiful views of the Argolic countryside as you travel between destinations in comfort.</p>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€180</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">7 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Pick-up Time:</span>
                      <span className="font-semibold text-gray-900">10:00 AM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Start Point:</span>
                      <span className="font-semibold text-gray-900">Porto Heli</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Season:</span>
                      <span className="font-semibold text-green-600">All Year</span>
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
          <Image src="/images/portoheli-food-wine-tour-hero-2.jpg" alt="Wine Tasting Tour" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Taste the Best of Greece</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your wine and food tour and discover the incredible flavors of the Argolida region.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
