"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, X, Landmark, Theater, Castle, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/corinth-epidavros-tour-hero-1.jpg",
  "/images/mycenae-tour-hero-1.jpg",
  "/images/nafplio-city-tour-hero-1.jpg",
];

const highlights = [
  "Corinth Canal engineering marvel",
  "Ancient Epidavros theatre (UNESCO)",
  "Nafplio old town walking tour",
  "Mycenae archaeological site (UNESCO)",
  "Lion's Gate and Royal Tombs",
  "Professional licensed guide available",
];

const included = [
  "Return private transportation",
  "Liability & Taxes",
  "Full refund or change of date in case of adverse weather conditions",
];

const excluded = [
  "Professional licensed guide (upon request)",
  "Entrance tickets to the sites",
  "Personal expenses",
];

export default function AthensCorinthNafplioMycenaeTour() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/athens" className="hover:text-primary">Athens Tours</Link>
            <span>/</span>
            <span className="text-primary">Corinth, Epidavros, Nafplio & Mycenae Tour</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Athens to Argolis Tour"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "w-8 bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Corinth Canal, Epidavros, Nafplio City & Mycenae from Athens
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 11 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Type:</span> Private
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> All year
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Trip type:</span> For all
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A one-day excursion, starting from Athens, with the first stop being the Corinth Canal, 
                  a huge engineering project that connects the Corinthian Gulf with the Saronic Gulf.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We continue the tour to ancient Epidaurus, where the ancient theater is one of the most 
                  famous archaeological monuments in Greece. The Asclepius was the center for healing serious 
                  diseases for the entire ancient Greece, therefore many monuments were developed around it, 
                  the most important of which is the Temple of Asclepius, the Tholos and others.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We return to the romantic city of Nafplio for a walk in the old town. Our walk starts from 
                  the Land Gate, the only entrance to the city during Venetian rule. We pass by the spot where 
                  Ioannis Kapodistrias, the first governor of Greece, was assassinated and we end up in Syntagma 
                  Square, where Venetian and neoclassical buildings dominate the surroundings. Characteristic 
                  buildings, such as the Parliament and the archaeological museum are on our way and the tour of 
                  the alleys of the old town is fairytale. We climb to Akronafplia, the acropolis of Nafplio and 
                  enjoy the unique view. Our walk will end at the city's port, in front of the famous Bourtzi, 
                  the Venetian fortress built on an island, which is also the trademark of Nafplio.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our last stop is the archaeological site of Mycenae. We will travel to the kingdom of the 
                  mythical Agamemnon, where one of the most brilliant civilizations of Greek prehistory, the 
                  Mycenaean civilization, developed. The Lion Gate, the monumental entrance to the palaces, the 
                  Cyclopean walls around the acropolis and the vaulted tombs of Atreus and Clytemnestra, are a 
                  magnet for lovers of the ancient world.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Check className="h-6 w-6 text-accent" /> Included
                  </h3>
                  <ul className="space-y-2">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <X className="h-6 w-6 text-gray-400" /> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €250
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">11 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tour Type:</span>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg mb-4"
                  >
                    Book This Tour
                  </Link>

                  <p className="text-xs text-gray-500 text-center">
                    Reserve now and pay later
                  </p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">
                    Contact us for customized itineraries or group bookings.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <Image
          src={gallery[0]}
          alt="Book your Corinth, Epidavros, Nafplio & Mycenae tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Experience Ancient Greece in One Day
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request your tour to Corinth Canal, Epidavros, Nafplio & Mycenae
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://unique-greek-tours-3.vercel.app/tour-request/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Request This Tour
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/tours/athens"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-sand-50 transition-all shadow-lg font-semibold text-lg"
            >
              View All Athens Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
