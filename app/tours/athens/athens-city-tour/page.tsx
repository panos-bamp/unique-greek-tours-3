"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, Check, Star, Landmark, Building, Eye, BookOpen, ArrowRight } from "lucide-react";

const gallery = [
  "/images/athens-city-tour-hero-1.jpg",
  "/images/athens-city-tour-hero-2.jpg",
  "/images/athens-city-tour-hero-3.jpg",
];

const included = [
  "Guided tour of Athens by an English-speaking licensed guide",
  "Liability",
  "Taxes",
];

const excluded = [
  "Entrance tickets to the sites",
  "Personal expenses",
];

export default function AthensCityTour() {
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
            <Link href="/tours/athens" className="hover:text-primary">Athens Tours</Link>
            <span>/</span>
            <span className="text-primary">Athens City Tour, Acropolis & Acropolis Museum</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Athens City Tour, Acropolis and Acropolis Museum" fill className="object-cover" priority />
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
                Athens City Tour, Acropolis and Acropolis Museum
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 5 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Type:</span> For all
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> All year
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This tour begins at your meeting point with your expert licensed guide in the heart of Athens, 
                  Syntagma square. A brief look at the archaeological findings discovered during recent excavations 
                  in the area, will give you an idea of what to expect of this tour. Your tour continues to the 
                  elegant House of Parliament and the Tomb of the Unknown Soldier, where you will watch the change 
                  of Guards from the famous Evzones. You will then walk through the National Garden and admire the 
                  neoclassical architecture of Zappeion Hall.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You will visit the Temple of Zeus and Hadrian's Arch from the Roman Era and then walk through the 
                  beautiful Dionysiou Areopagitou walkway until you reach the entrance to the Acropolis. On the way 
                  up the slope, you will visit the first theater of antiquity the Dionysus theater and the famous 
                  Odeon of Herodes Atticus. And then the Unesco-listed admirable Acropolis monuments: the Temple of 
                  Athena Nike, the Propylaia gateway, the Erechtheion and the astonishing Parthenon. Your 
                  knowledgeable guide will provide all the information about the construction and history of the 
                  monuments. The breathtaking view of Athens with the Mars Hill, the Ancient Agora and the Temple of 
                  Hephaestus will capture your heart and mind.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your tour continues to the new Acropolis Museum with its unique design. The marble masterpieces 
                  are given the prominence they deserve through the ideal atmosphere conditions and the natural 
                  light. About 4,000 artifacts are exhibited at the museum. The excavations are visible under 
                  stunning glass floors. Panoramic views and excellent exhibition areas makes this museum 
                  unforgettable.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Building className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Syntagma Square & Parliament</h3>
                      <p className="text-gray-600 leading-relaxed">See the House of Parliament, the Tomb of the Unknown Soldier, and watch the famous Evzones changing of the guard.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Landmark className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">The Acropolis</h3>
                      <p className="text-gray-600 leading-relaxed">Explore the UNESCO-listed Parthenon, Erechtheion, Temple of Athena Nike, and Propylaia gateway with breathtaking views of Athens.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Eye className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Theaters & Roman Monuments</h3>
                      <p className="text-gray-600 leading-relaxed">Visit the Dionysus theater, Odeon of Herodes Atticus, Temple of Zeus and Hadrian's Arch from the Roman Era.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Acropolis Museum</h3>
                      <p className="text-gray-600 leading-relaxed">About 4,000 artifacts, stunning glass floors revealing excavations, panoramic views and excellent exhibition areas.</p>
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
                    <div className="font-display text-4xl font-bold text-primary-dark">€250</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">5 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-semibold text-gray-900">All Year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">For All</span>
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
          <Image src="/images/athens-city-tour-hero-3.jpg" alt="Athens Acropolis" fill className="object-cover brightness-50" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Walk Where Democracy Was Born</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Athens city tour and discover the birthplace of Western civilization.
          </p>
          <Link href="/tour-request" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Book Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
