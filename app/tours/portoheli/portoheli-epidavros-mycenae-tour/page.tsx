"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Landmark, Castle, Camera, Theater, Crown, ArrowRight } from "lucide-react";

const gallery = [
  "/images/portoheli-epidavros-mycenae-tour-hero-1.jpg",
  "/images/portoheli-epidavros-mycenae-tour-hero-2.jpg",
  "/images/portoheli-epidavros-mycenae-tour-hero-3.jpg",
];

const highlights = [
  "Ancient Theatre of Epidavros (330 BC)",
  "Sanctuary of Apollo & Asclepieion",
  "UNESCO World Heritage Mycenae",
  "Famous Lion's Gate entrance",
  "Cyclopean walls and Royal Tombs",
  "Picturesque Nafplio free time",
];

const included = [
  "Return private transportation from Porto Heli",
  "Pick up from your hotel",
  "English-speaking driver",
  "Liability insurance",
  "All taxes",
];

const excluded = [
  "Archaeological site entrance fees",
  "Licensed guide (available on request for extra cost)",
  "Personal expenses",
  "Food and beverages",
];

export default function PortoHeliEpidavrosMycenaeTour() {
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
            <span className="text-primary">Epidavros, Mycenae & Nafplio Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Porto Heli Epidavros Mycenae Tour" fill className="object-cover" priority />
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
                Ancient Epidavros, Mycenae & Nafplio Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 9 hours
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
                  <span className="font-semibold">Pick-up:</span> 9:00 AM
                </div>
              </div>

              <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-semibold">
                  <Crown className="inline h-5 w-5 mr-2" />
                  2 UNESCO World Heritage Sites | Mycenaean Civilization | Greek History
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The coastal town of Porto Heli is perfectly located for excursions and experiences, since it 
                  is very close to famous archaeological sites and the picturesque city of Nafplio. This 
                  comprehensive day tour takes you through 3,500 years of Greek history.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Start your day by traveling with a luxurious private vehicle towards Ancient Epidavros. There 
                  you will visit the ancient theater, one of the most famous monuments of Greece. Built at the 
                  end of the classical era (330 BC), it is famous for its elegance, perfect acoustics and unique 
                  design. You will also visit the Sanctuary dedicated to Apollo and the Asclepieion of Epidavros, 
                  which was the center of healing for all of ancient Greece.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Your tour continues to the archaeological site of Mycenae. You will travel to the kingdom of 
                  mythical Agamemnon, where one of the most brilliant cultures of Greek prehistory developed - 
                  the Mycenaean civilization. The Lion's Gate, the monumental entrance of the palaces, the 
                  Cyclopean walls around the Acropolis, and the tholos tombs of Atreus and Clytemnestra are 
                  all must-see attractions for lovers of the ancient world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your last stop will be the beautiful city of Nafplio. You will have free time to stroll around 
                  the picturesque alleys, discover historical buildings and admire the breathtaking views from 
                  the Venetian castle of Acronafplia. Your tour ends with your return to your hotel in Porto Heli.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Theater className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Theatre of Epidavros</h3>
                      <p className="text-gray-600 leading-relaxed">Marvel at the 330 BC theatre famous for its perfect acoustics, elegant design, and capacity for 14,000 spectators.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Landmark className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Sanctuary & Asclepieion</h3>
                      <p className="text-gray-600 leading-relaxed">Visit the ancient healing center dedicated to Asclepius, god of medicine, where pilgrims came for cures throughout antiquity.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Crown className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Mycenae - Kingdom of Agamemnon</h3>
                      <p className="text-gray-600 leading-relaxed">Explore the legendary citadel of the Mycenaean civilization, including the famous Lion's Gate and Cyclopean walls.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Castle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Nafplio Free Time</h3>
                      <p className="text-gray-600 leading-relaxed">Explore Greece's first capital at your own pace - picturesque alleys, Venetian architecture, and stunning sea views.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Royal Tombs</h3>
                      <p className="text-gray-600 leading-relaxed">Visit the impressive tholos tombs of Atreus and Clytemnestra - masterpieces of Bronze Age architecture.</p>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Not Included:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {excluded.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span>•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€200</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">9 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Pick-up Time:</span>
                      <span className="font-semibold text-gray-900">9:00 AM</span>
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
          <Image src="/images/portoheli-epidavros-mycenae-tour-hero-3.jpg" alt="Ancient Sites Tour" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Journey Through Ancient Greece</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your comprehensive tour and explore 3,500 years of Greek history in one unforgettable day.
          </p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
