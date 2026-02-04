"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Calendar,
  MapPin,
  Check,
  ArrowRight,
  Landmark,
  Building,
  Compass,
  Castle,
  Eye,
  Camera
} from "lucide-react";

const gallery = [
  "/images/corinth-nafplio-tour-hero-1.jpg",
  "/images/corinth-nafplio-tour-hero-2.jpg",
  "/images/corinth-nafplio-tour-hero-3.jpg",
];

const highlights = [
  "Marvel at the impressive Corinth Canal connecting two seas",
  "Explore the UNESCO-listed ancient theater of Epidaurus with perfect acoustics",
  "Visit the Sanctuary of Asclepius, ancient healing center",
  "Walk through romantic Nafplio's Venetian old town",
  "See the famous Bourtzi fortress on its island",
  "Climb to Akronafplia acropolis for panoramic views",
  "Discover legendary Mycenae and the Lion Gate",
  "Explore the cyclopean walls and vaulted tombs",
];

const included = [
  "Private transportation from Athens and back",
  "Professional English-speaking driver",
  "All taxes and liability insurance",
  "Bottled water during the tour",
  "Free time for lunch in Nafplio",
  "Flexible itinerary tailored to your interests",
];

const notIncluded = [
  "Professional licensed guide (available upon request)",
  "Entrance tickets to archaeological sites",
  "Meals and drinks",
  "Personal expenses",
  "Gratuities (optional)",
];

export default function CorinthNafplioTourPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/tours"
              className="hover:text-accent transition-colors"
            >
              Tours
            </Link>
            <span>/</span>
            <Link
              href="/tours/athens"
              className="hover:text-accent transition-colors"
            >
              Athens
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">
              Corinth, Epidaurus, Nafplio & Mycenae
            </span>
          </div>
        </div>
      </div>

      {/* Hero Gallery */}
      <section className="relative h-[60vh] min-h-[500px] bg-black">
        {gallery.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Tour gallery image ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentImage ? "w-8 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Corinth Canal, Epidaurus, Nafplio & Mycenae Day Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 11 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Private tour
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Departure:</span> Athens
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">
                  Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Embark on an unforgettable journey through some of Greece's most
                  iconic historical sites. This full-day private tour from Athens
                  takes you to the heart of the ancient Argolis region, where myth
                  and history intertwine.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From the engineering marvel of the Corinth Canal to the acoustic
                  perfection of Epidaurus, from the romantic streets of Nafplio to
                  the legendary citadel of Mycenae, this tour offers a comprehensive
                  exploration of classical Greek civilization and Venetian heritage.
                </p>
              </div>

              {/* Journey Sections */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">
                  Your Journey
                </h2>

                {/* Corinth Canal */}
                <div className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Landmark className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                      Corinth Canal
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Begin your adventure with a stop at the breathtaking Corinth
                      Canal, a 19th-century engineering masterpiece that connects
                      the Corinthian Gulf with the Saronic Gulf. Stand on the bridge
                      and marvel at the 6.4-kilometer waterway carved through solid
                      rock, with walls rising up to 90 meters high.
                    </p>
                  </div>
                </div>

                {/* Epidaurus */}
                <div className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                      Ancient Epidaurus
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Visit the UNESCO World Heritage site of Epidaurus, home to one
                      of the most famous archaeological monuments in Greece. The
                      ancient theater, built in the 4th century BC, is renowned for
                      its perfect acoustics and exceptional preservation. Even today,
                      a whisper from the stage can be heard in the top row, 55 meters
                      away.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Explore the Sanctuary of Asclepius, the ancient healing center
                      where pilgrims came from across Greece seeking cures. See the
                      remains of the Temple of Asclepius, the Tholos (circular
                      building), and learn about ancient Greek medicine and religious
                      practices.
                    </p>
                  </div>
                </div>

                {/* Nafplio */}
                <div className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Castle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                      Romantic Nafplio
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Spend time in one of Greece's most charming cities. Walk
                      through the romantic old town, entering through the Land Gate,
                      the only entrance during Venetian rule. Stroll past neoclassical
                      mansions and Venetian buildings to reach Syntagma Square, the
                      heart of the city.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      See the spot where Ioannis Kapodistrias, Greece's first
                      governor, was assassinated, and admire the elegant architecture
                      of the former Parliament building and Archaeological Museum.
                      The narrow alleys of the old town offer a fairytale atmosphere
                      with colorful bougainvillea and cozy cafés.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Climb to Akronafplia, the acropolis of Nafplio, for stunning
                      panoramic views of the city and sea. End your walk at the
                      harbor, where you'll see the iconic Bourtzi fortress, a
                      Venetian castle built on a small island that has become
                      Nafplio's trademark. This is an ideal time for lunch at one of
                      the waterfront tavernas.
                    </p>
                  </div>
                </div>

                {/* Mycenae */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Compass className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                      Legendary Mycenae
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Journey to the kingdom of the mythical King Agamemnon, leader
                      of the Greek forces in the Trojan War. Mycenae was the center
                      of one of the most brilliant civilizations of Greek prehistory,
                      the Mycenaean civilization (1600-1100 BC).
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Enter through the famous Lion Gate, Europe's oldest monumental
                      sculpture, dating back to 1250 BC. Walk among the massive
                      cyclopean walls, built with stones so enormous that ancient
                      Greeks believed only the mythical Cyclopes could have moved
                      them.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Explore the site's royal palace remains, cisterns, and see the
                      beehive-shaped vaulted tombs of Atreus and Clytemnestra. These
                      magnificent tholos tombs showcase the architectural mastery of
                      the Mycenaeans and continue to fascinate lovers of the ancient
                      world. After your visit, return to Athens with memories of a
                      day spent traversing millennia of history.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">
                  Tour Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-2xl text-primary mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-primary mb-4">
                    Not Included
                  </h2>
                  <ul className="space-y-3">
                    {notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-sand-50 rounded-2xl p-8 shadow-lg border border-sand-200">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">€320</span>
                      <span className="text-gray-600">per person</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      For groups of 2+ people
                    </p>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>11 hours full-day tour</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Private tour</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Pick-up from Athens</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Available year-round</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
                  >
                    Book This Tour
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="/plan-trip"
                    className="block text-center text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Customize This Tour
                  </Link>

                  <div className="mt-8 pt-8 border-t border-sand-300">
                    <h3 className="font-display text-lg font-bold text-primary mb-4">
                      Important Information
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Free cancellation up to 24 hours before departure</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Comfortable walking shoes recommended</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Hat and sunscreen advised in summer</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Archaeological sites have uneven terrain</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Camera recommended for stunning photo opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-24 bg-black">
        <Image
          src="/images/corinth-nafplio-tour-hero-2.jpg"
          alt="Plan your Peloponnese adventure"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Ready to Explore Ancient Greece?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey through the most iconic sites of
            the Peloponnese. Book your private tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Book This Tour
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/tours/athens"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-50 text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              View More Athens Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
