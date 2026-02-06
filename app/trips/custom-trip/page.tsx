"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users, MapPin, Star, Check } from "lucide-react";

export default function CustomTripPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">HOME</Link>
            <span>/</span>
            <Link href="/trips" className="hover:text-primary">TRIPS</Link>
            <span>/</span>
            <span className="text-primary">CUSTOM MULTI-DAY TOUR</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-end">
        <Image
          src="/images/hero-collage.jpg"
          alt="Custom Multi-Day Tours in Greece"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="container-custom relative z-10 pb-16 text-white">
          <p className="text-accent-light uppercase tracking-widest text-sm mb-4">BESPOKE EXPERIENCES</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 font-bold max-w-4xl">
            Custom Multi-Day Tours
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-blue-100">
            Design your perfect Greek adventure with personalized itineraries crafted around your dreams
          </p>
        </div>
      </section>

      {/* Main Content - BLANK FOR NOW */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We're crafting something special for you. This page will soon feature our custom tour planning options.
            </p>
            
            <div className="bg-sand-50 p-12 rounded-2xl">
              <h3 className="font-display text-2xl text-primary mb-4">
                Ready to Plan Your Custom Tour?
              </h3>
              <p className="text-gray-600 mb-8">
                Contact us today to start designing your personalized Greek adventure
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg shadow-lg"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Contact us for custom tours"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Let's Create Your Dream Journey
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Tell us about your travel dreams and we'll design the perfect Greek adventure for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/trips" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-lg"
            >
              View All Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
