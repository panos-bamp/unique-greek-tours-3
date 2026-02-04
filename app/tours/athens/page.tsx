"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Landmark, Mountain, Compass } from "lucide-react";

const tours = [
  {
    slug: "athens-city-tour",
    title: "Athens City & Acropolis Tour",
    description:
      "Explore the iconic Acropolis, ancient Agora, and vibrant neighborhoods of Athens with an expert guide.",
    duration: "8 hours",
    price: "From €320",
    image: "/images/athens-city-tour-hero-1.jpg",
    highlights: [
      "Acropolis & Parthenon",
      "Ancient Agora",
      "Vibrant neighborhoods",
    ],
    icon: Landmark,
  },
  {
    slug: "athens-delphi-tour",
    title: "Delphi Day Trip",
    description:
      "Journey to the ancient Oracle of Delphi, the center of the ancient Greek world.",
    duration: "10 hours",
    price: "From €380",
    image: "/images/athens-delphi-tour-hero-1.jpg",
    highlights: [
      "Oracle of Delphi",
      "Ancient sanctuary",
      "Archaeological museum",
    ],
    icon: Mountain,
  },
  {
    slug: "athens-corinth-nafplio",
    title: "Corinth, Epidaurus, Nafplio & Mycenae",
    description:
      "Full-day private tour to the Corinth Canal, ancient Epidaurus, romantic Nafplio, and legendary Mycenae.",
    duration: "11 hours",
    price: "From €320",
    image: "/images/corinth-nafplio-tour-hero-1.jpg",
    highlights: [
      "Corinth Canal",
      "Epidaurus Theater",
      "Nafplio Old Town",
    ],
    icon: Compass,
  },
];

const whyVisitFeatures = [
  {
    title: "Ancient Heritage",
    description:
      "Home to the Acropolis, one of the most important monuments in Western history",
    icon: Landmark,
  },
  {
    title: "Cultural Capital",
    description:
      "World-class museums, theaters, and galleries celebrating 5,000 years of history",
    icon: Compass,
  },
  {
    title: "Vibrant Neighborhoods",
    description:
      "From historic Plaka to trendy Kolonaki, each district offers unique character",
    icon: Mountain,
  },
  {
    title: "Gateway to Greece",
    description:
      "Perfect starting point for exploring the Peloponnese and Greek islands",
    icon: ArrowRight,
  },
];

export default function AthensToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <Image
          src="/images/destination-athens.jpg"
          alt="Athens Greece - The Acropolis and Parthenon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="container-custom pb-16 relative z-10">
          <p className="text-accent text-lg mb-2 font-semibold">Explore</p>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6 font-bold">
            Athens
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mb-8 leading-relaxed">
            The birthplace of democracy and Western civilization. Discover ancient
            wonders and modern Greek culture in one of the world's oldest cities.
          </p>
          <div className="flex gap-6 text-white/80 text-sm">
            <span>{tours.length} Tours Available</span>
            <span>•</span>
            <span>4.9 Average Rating</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Athens, the cradle of Western civilization, is a city where{" "}
            <strong>ancient history meets vibrant modern life</strong>. The iconic
            Acropolis, crowned by the magnificent Parthenon, has watched over this
            remarkable city for nearly 2,500 years, standing as a testament to the
            golden age of classical Greece.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond its world-famous archaeological sites, Athens offers a dynamic
            urban experience with charming neighborhoods like Plaka and Monastiraki,
            exceptional museums housing priceless treasures, and a culinary scene
            that blends traditional Greek flavors with contemporary innovation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our private tours from Athens unlock both the iconic landmarks and
            hidden corners of this historic capital. Whether you're exploring the
            ancient Agora where Socrates once walked, or venturing to the mystical
            Oracle of Delphi, our expert guides bring the stories of ancient Greece
            to vivid life.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="text-left mb-12">
            <p className="text-accent uppercase tracking-wider font-semibold mb-2">
              EXPLORE ANCIENT WONDERS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold">
              Athens Tours & Day Trips
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl">
              Experience the best of Athens and beyond with our expertly guided
              private tours. From the iconic Acropolis to the mystical Oracle of
              Delphi, discover the cradle of Western civilization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => {
              const Icon = tour.icon;
              return (
                <Link
                  key={tour.slug}
                  href={`/tours/athens/${tour.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-200"
                >
                  <div className="relative h-64">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                      <span className="font-bold text-primary">{tour.price}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-display text-2xl text-primary group-hover:text-accent transition-colors">
                        {tour.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tour.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {tour.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-primary text-center mb-12 font-bold">
            Why Visit Athens?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVisitFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl hover:bg-sand-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image
          src="/images/athens-city-tour-hero-2.jpg"
          alt="Plan your Athens trip"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/80" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-bold">
            Start Your Athens Adventure Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us design the perfect Athens experience tailored to your interests.
            Contact us to customize any tour or create a multi-day itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/plan-trip"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-50 text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Plan Your Trip
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
