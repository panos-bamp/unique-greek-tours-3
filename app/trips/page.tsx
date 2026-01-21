"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Users, MapPin, ArrowRight, Clock } from "lucide-react";

const trips = [
  {
    title: "2-Day Classic Tour in Nafplio",
    slug: "/trips/two-day-classic-trip",
    duration: "2 days",
    groupSize: "Private tour",
    price: "€380",
    image: "/images/two-day-classic-hero-1.jpg",
    description: "Explore ancient Mycenae, charming Nafplion, and the famous Epidavros Theater. Stay overnight in romantic Nafplion.",
    highlights: ["Corinth Canal", "Ancient Mycenae", "Nafplion Old Town", "Epidavros Theater"],
    location: "From Athens",
  },
  {
    title: "8-Day Classical Greece Tour",
    slug: "/trips/eight-day-greece-trip",
    duration: "8 days",
    groupSize: "Private tour",
    price: "€1,850",
    image: "/images/eight-day-greece-hero-1.jpg",
    description: "The ultimate journey through Classical Greece visiting Athens, Meteora, Delphi, Ancient Olympia, and Nafplion.",
    highlights: ["Athens Acropolis", "Meteora Monasteries", "Delphi Oracle", "Ancient Olympia"],
    location: "From Athens",
  },
];

export default function TripsPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">HOME</Link>
            <span>/</span>
            <span className="text-primary">MULTI-DAY TRIPS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/hero-collage.jpg"
          alt="Multi-Day Greece Tours"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container-custom relative z-10 text-center text-white">
          <p className="text-accent-light uppercase tracking-widest text-sm mb-4 animate-fade-in">EXTENDED ADVENTURES</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 font-bold animate-slide-up">
            Multi-Day Group Trips
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
          </p>
        </div>
      </section>

      {/* Trips Listing */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {trips.map((trip, index) => (
              <Link
                key={index}
                href={trip.slug}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative h-80 lg:h-auto">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                      <span className="font-bold text-primary">From {trip.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <p className="text-sm text-accent uppercase tracking-wider mb-3">{trip.location}</p>
                    
                    <h2 className="font-display text-3xl md:text-4xl text-primary mb-4 group-hover:text-accent transition-colors">
                      {trip.title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {trip.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-accent" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-accent" />
                        <span>{trip.groupSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span>All year</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-primary mb-3">Highlights:</h3>
                      <div className="flex flex-wrap gap-2">
                        {trip.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-sand-50 text-gray-700 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      View Full Itinerary
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Multi-Day Tours */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">EXPERIENCE MORE</p>
            <h2 className="section-heading mb-6">
              Why Choose Multi-Day Tours?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Go beyond day trips and truly immerse yourself in Greek culture, history, and landscapes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Comprehensive Exploration</h3>
              <p className="text-gray-600 leading-relaxed">
                Visit multiple UNESCO World Heritage Sites and explore regions in depth that single-day tours can't reach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Small Group Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Travel with like-minded explorers in intimate groups, creating lasting friendships and shared memories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Hassle-Free Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle all accommodations, transportation, and logistics so you can focus on enjoying your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Book your multi-day Greece tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready for an Epic Greek Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Join us on a journey through ancient Greece and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg"
            >
              Book Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/plan-trip" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-lg"
            >
              Customize Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
