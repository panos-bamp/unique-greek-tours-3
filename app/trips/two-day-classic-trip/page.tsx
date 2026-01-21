"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Check,
  ChevronLeft,
  Euro,
  Info,
  Star,
} from "lucide-react";

const images = [
  "/images/two-day-classic-hero-1.jpg",
  "/images/two-day-classic-hero-2.jpg",
  "/images/two-day-classic-hero-3.jpg",
];

export default function TwoDayClassicTripPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Gallery */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div className="relative h-full w-full">
          {images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={`Nafplio Classic Tour ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Next image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 rotate-180" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Trip Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/trips"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Multi-Day Trips
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              2-Day Classic Tour in Nafplio
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow">
              Explore ancient Mycenae, the charming city of Nafplion, and the famous Epidavros Theater
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">2 Days</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">Athens - Nafplio</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">Private & Groups</span>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">All Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Trip Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  On this two-day tour beginning from Athens, you will have the opportunity to admire the most important sights and monuments of Argolida and enjoy the charming city of Nafplion. Experience the glory of ancient Mycenae, marvel at the engineering feat of the Corinth Canal, and witness the perfect acoustics of the Epidavros Theater.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Spend an evening in romantic Nafplion, walking through cobbled streets surrounded by Venetian and Neoclassical buildings, exploring local restaurants, shops, and cafes in this fascinating castle town.
                </p>
              </div>

              {/* Day 1 Itinerary */}
              <div className="bg-gradient-to-br from-gray-50 to-stone-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Day 1: Athens - Corinth - Mycenae - Nafplio
                  </h3>
                </div>

                <div className="space-y-6 ml-16">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-2" />
                      Corinth Canal & Akrokorinthos
                    </h4>
                    <p className="text-gray-700">
                      Starting from Athens, we will travel to the Corinth Canal and visit the archaeological site of Akrokorinthos, the famous temple of Apollo, and the steps of Apostle Paul.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-2" />
                      Ancient Mycenae
                    </h4>
                    <p className="text-gray-700">
                      We continue towards Argolida to the archaeological site of Mycenae, where we travel to the kingdom of mythical Agamemnon and discover where the Mycenaean civilization developed—one of the most brilliant cultures of Greek prehistory. The fortification of the Acropolis with the famous Cyclopean Walls, the Gate of Lions, the monumental entrance to the palaces, and the mythical vaulted tomb of Atreus are just some of the outstanding attractions of the area.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-2" />
                      Nafplion Arrival & Free Time
                    </h4>
                    <p className="text-gray-700">
                      Towards midday, we arrive at Nafplion. After checking into your hotel, the rest of the day is free to stroll around the beautiful city. Walk through cobbled streets surrounded by Venetian and Neoclassical buildings, exploring the local restaurants, shops, and cafes of this fascinating castle town.
                    </p>
                  </div>
                </div>
              </div>

              {/* Day 2 Itinerary */}
              <div className="bg-gradient-to-br from-gray-50 to-stone-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Day 2: Epidavros - Return to Athens
                  </h3>
                </div>

                <div className="space-y-6 ml-16">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-2" />
                      Ancient Theater of Epidavros
                    </h4>
                    <p className="text-gray-700 mb-4">
                      The next day we head to Epidavros to visit the ancient theater, one of the most famous archaeological monuments in Greece.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The place has been dedicated to deities with healing abilities since prehistoric times. Around 800 BC, a sanctuary dedicated to the god Apollo was founded, and then in the 6th century BC, a little further on, the sacred Asclepion was built in honor of Asclepius, the protector of health. The Asklepiio was the center for treating serious diseases for all of Ancient Greece.
                    </p>
                    <p className="text-gray-700">
                      At the end of the Classical Age (330 BC), the ancient theater was also built—the most perfect and famous ancient Greek theater, combining elegance with perfect acoustics. It had a capacity of about 15,000 spectators, and its harmony is due to its unique design. In 1988, the theater was included, along with the entire Asklepiion, on the UNESCO World Heritage List.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-2" />
                      Return to Athens
                    </h4>
                    <p className="text-gray-700">
                      We will then transfer you back to Athens to end an amazing two-day tour!
                    </p>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Return private transportation from Athens",
                    "Pick up from your hotel or meeting point",
                    "Guided tour of archaeological sites (upon request)",
                    "Overnight accommodation",
                    "Liability insurance",
                    "All taxes included",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Important Information
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Full refund or change of date</strong> in case of adverse weather conditions.
                    </p>
                    <p className="text-gray-700">
                      Pick up time: <strong>8:30 AM</strong> from your hotel in Athens or from our meeting point.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full mb-4">
                      <span className="text-emerald-800 font-semibold">
                        Private Tour
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      From €380
                    </div>
                    <p className="text-gray-600">per person</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold text-gray-900">2 Days</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Group Type</span>
                      </div>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Pick Up</span>
                      </div>
                      <span className="font-semibold text-gray-900">Athens</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Available</span>
                      </div>
                      <span className="font-semibold text-gray-900">All Year</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                  >
                    Book This Trip
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 text-center py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    Ask a Question
                  </Link>

                  <div className="mt-6 text-center text-sm text-gray-600">
                    <p>Have questions? We're here to help!</p>
                    <a
                      href="tel:+306974470780"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      +30 697 447 0780
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <Image
          src="/images/two-day-classic-cta.jpg"
          alt="Book Your Nafplio Tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-stone-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Ancient Greece?
          </h2>
          <p className="text-xl mb-10 text-gray-100">
            Book your 2-day adventure through Nafplio, Mycenae, and Epidavros today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book Now
            </Link>
            <Link
              href="/trips"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              View All Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
