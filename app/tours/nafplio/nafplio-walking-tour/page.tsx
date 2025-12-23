"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Check, X, Calendar, Users, Clock, ArrowRight } from "lucide-react";

export default function TourPage() {
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
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Nafplio Walking & Food Tour</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Tour gallery"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* Tour Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Nafplio Walking & Food Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 4 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Type:</span> Private
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Discover one of Greece's most romantic cities through its cobblestone streets, 
                  Venetian architecture, and authentic local cuisine. This intimate walking tour 
                  combines history, culture, and gastronomy in the charming old town of Nafplio.
                </p>
              </div>

              {/* What to Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">What you can expect?</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Begin your journey at Syntagma Square, the heart of Nafplio and site of Greece's 
                    first parliament. Your expert local guide will share fascinating stories about the 
                    town's role as the nation's first capital from 1829 to 1834.
                  </p>
                  <p>
                    Wander through narrow cobblestone alleys lined with neoclassical mansions and 
                    Venetian architecture. Stop at traditional tavernas and local shops to taste 
                    authentic Greek specialties including fresh bread, local cheeses, olive oil, 
                    and regional wines.
                  </p>
                  <p>
                    Visit the imposing Palamidi fortress, accessible by 999 steps, offering 
                    breathtaking panoramic views of the Argolic Gulf. Learn about the fortress's 
                    strategic importance throughout Greek history.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-sand-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included/Excluded */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-display text-2xl text-primary mb-4">Inclusions</h3>
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-primary mb-4">Exclusions</h3>
                  <ul className="space-y-3">
                    {excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-3 leading-relaxed italic">
                        "{review.text}"
                      </p>
                      <div className="text-sm">
                        <span className="font-semibold text-primary">{review.author}</span>
                        <span className="text-gray-500"> • {review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border-2 border-primary rounded-xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">Price per person</div>
                  <div className="font-display text-4xl font-bold text-primary">€75</div>
                  <div className="text-sm text-gray-600 mt-1">From</div>
                </div>

                <Link
                  href="/contact"
                  className="w-full px-6 py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl block mb-4"
                >
                  CHECK AVAILABILITY
                </Link>

                <Link
                  href="/contact"
                  className="w-full px-6 py-4 border-2 border-primary text-primary text-center font-semibold rounded-lg hover:bg-primary hover:text-white transition-all block"
                >
                  BOOK NOW
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Free cancellation up to 24h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Instant confirmation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Professional guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6 font-bold">
            Ready to explore Nafplio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book this unforgettable experience or design a custom itinerary with our local experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">
              Book This Tour
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/plan-trip" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const gallery = [
  "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1920",
  "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920",
  "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920",
];

const highlights = [
  "Explore the historic Venetian old town",
  "Visit Syntagma Square and first Greek parliament",
  "Climb to Palamidi fortress for panoramic views",
  "Taste traditional specialties at local tavernas",
  "Learn about Nafplio's role as Greece's first capital",
  "Discover hidden courtyards and alleyways",
];

const included = [
  "Professional licensed local guide",
  "Food tastings at 4-5 authentic locations",
  "Bottled water throughout the tour",
  "All taxes and service fees",
];

const excluded = [
  "Hotel pickup and drop-off",
  "Palamidi fortress entrance fee (€8)",
  "Additional food and drinks",
  "Gratuities (optional)",
];

const reviews = [
  {
    text: "This was the highlight of our trip to Greece! Our guide was incredibly knowledgeable and the food stops were all authentic and delicious. The perfect way to experience Nafplio.",
    author: "Sarah M.",
    date: "October 2024",
  },
  {
    text: "Excellent tour combining history, culture, and gastronomy. The climb to Palamidi was worth it for the views alone. Highly recommend!",
    author: "James T.",
    date: "September 2024",
  },
  {
    text: "Our guide was born in Argos and shared so many local insights you'd never find in guidebooks. The small group size made it feel very personal.",
    author: "Maria K.",
    date: "August 2024",
  },
];
