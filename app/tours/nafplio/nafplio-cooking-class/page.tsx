"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, X, ChefHat, Utensils, Camera, Heart, ArrowRight } from "lucide-react";

const gallery = [
  "/images/cooking-class-hero-1.jpg",
  "/images/cooking-class-hero-2.jpg",
  "/images/cooking-class-hero-3.jpg",
];

const highlights = [
  "Hands-on Greek cooking experience",
  "Learn traditional recipes",
  "Professional chef instruction",
  "Fresh local ingredients",
  "Enjoy the meal you prepare",
  "Take recipes home",
];

const included = [
  "Chef instructor",
  "All ingredients",
  "Meal (dishes you prepare)",
  "Return transportation",
  "Liability insurance",
  "All taxes",
];

const excluded = [
  "Personal expenses",
];

export default function NafplioCookingClass() {
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
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Greek Cooking Class</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Greek Cooking Class"
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
                Greek Cooking Class Experience
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

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Immerse yourself in authentic Greek cuisine with this hands-on cooking class led by a professional 
                  chef. Learn to prepare traditional dishes using fresh, local ingredients and time-honored techniques 
                  passed down through generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Your culinary adventure begins at a traditional kitchen where your chef instructor will introduce you 
                  to Greek cooking basics - from selecting quality olive oil to mastering the perfect Greek salad. Learn 
                  the secrets of classic dishes like moussaka, spanakopita, tzatziki, and more.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Work alongside your chef to prepare a complete Greek meal, learning tips and tricks that will help you 
                  recreate these dishes at home. Discover the importance of fresh herbs, understand traditional cooking 
                  methods, and learn about the Mediterranean diet's health benefits.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After cooking, sit down to enjoy the delicious meal you've prepared, accompanied by local wine. Take 
                  home recipe cards so you can share your new culinary skills with family and friends. This is more than 
                  a cooking class - it's a cultural experience that connects you with the heart of Greek hospitality.
                </p>
              </div>

              {/* Tour Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Experience Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What is Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is NOT Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What is NOT Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {excluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">Price</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €110
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">4 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">Year-round</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Class Type:</span>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                  </div>

                  <Link
                    href="https://unique-greek-tours-3.vercel.app/tour-request/"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                  >
                    Request Class
                  </Link>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Questions?
                  </h3>
                  <p className="text-sm mb-4 text-blue-100">
                    Contact us for custom requests or group bookings
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-sand-50 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/cooking-class-hero-3.jpg"
          alt="Book your cooking class"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Master the Art of Greek Cooking
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request your cooking class and bring the flavors of Greece to your own kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://unique-greek-tours-3.vercel.app/tour-request/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Request This Class
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/tours/nafplio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-sand-50 transition-all shadow-lg font-semibold text-lg"
            >
              View All Nafplio Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
