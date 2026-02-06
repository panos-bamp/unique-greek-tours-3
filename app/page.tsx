"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, ArrowRight, Heart, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

// Featured tours for carousel
const featuredTours = [
  {
    title: "Mycenae & Epidaurus",
    slug: "/tours/nafplio/nafplio-mycenae-epidavros",
    duration: "8 hours",
    price: "From €160",
    image: "/images/mycenae-tour-hero-1.jpg",
    location: "From Nafplio",
  },
  {
    title: "Ancient Olympia Day Trip",
    slug: "/tours/nafplio/nafplio-ancient-olympia-tour",
    duration: "Full Day",
    price: "From €290",
    image: "/images/olympia-tour-hero-1.jpg",
    location: "From Nafplio",
  },
  {
    title: "Nemea Wine Tasting",
    slug: "/tours/nafplio/nafplio-winetasting-tour-nemea",
    duration: "6 hours",
    price: "€150",
    image: "/images/wine-tour-hero-1.jpg",
    location: "From Nafplio",
  },
  {
    title: "Sparta & Mystras Tour",
    slug: "/tours/nafplio/nafplio-sparta-mystras-tour",
    duration: "10 hours",
    price: "From €250",
    image: "/images/sparta-tour-hero-1.jpg",
    location: "From Nafplio",
  },
  {
    title: "Monemvasia Castle Tour",
    slug: "/tours/nafplio/nafplio-monemvasia-tour",
    duration: "10 hours",
    price: "From €310",
    image: "/images/monemvasia-tour-hero-1.jpg",
    location: "From Nafplio",
  },
  {
    title: "Diros Caves Adventure",
    slug: "/tours/gythio/gythio-diros-caves-tour",
    duration: "4 hours",
    price: "From €180",
    image: "/images/monemvasia-tour-hero-2.jpg",
    location: "From Gythio",
  },
  {
    title: "Mani Peninsula Tour",
    slug: "/tours/kalamata/kalamata-mani-tour",
    duration: "4 hours",
    price: "From €100",
    image: "/images/kalamata-mani-tour-hero-1.jpg",
    location: "From Kalamata",
  },
  {
    title: "Athens City & Acropolis",
    slug: "/tours/athens/athens-city-tour",
    duration: "8 hours",
    price: "From €250",
    image: "/images/athens-city-tour-hero-1.jpg",
    location: "From Athens",
  },
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Width with Collage Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-collage.jpg"
          alt="Unique Greek Tours - Discover the Peloponnese"
          fill
          className="object-cover brightness-50"
          priority
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in font-bold leading-tight">
              We design original journeys to
              <span className="block text-accent-light mt-2">PELOPONNESE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-light leading-relaxed animate-slide-up text-blue-100">
              Experience authentic Greece with local experts from Argos
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/plan-trip" className="btn-primary text-lg animate-scale-in">
                LET'S PLAN MY TRIP
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/tours" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/80 text-white font-medium rounded-md hover:bg-white hover:text-primary transition-all">
                Explore Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-gray-600 mb-8 uppercase tracking-widest text-sm">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-800">TripAdvisor</div>
            <div className="text-2xl font-bold text-gray-800">GetYourGuide</div>
            <div className="text-2xl font-bold text-gray-800">Google Reviews</div>
          </div>
          <p className="text-center mt-8 text-gray-700">
            We are rated <span className="font-bold text-primary">Excellent</span> based on more than{" "}
            <span className="font-bold">500 reviews</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="section-heading">
                A FRESH WAY TO TRAVEL
              </h2>
              <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">
                Experience the journey of a lifetime.
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Take all the stress out of planning and prepare only to make unforgettable memories 
                  with your loved ones. With a deep-rooted passion for crafting personalized itineraries, 
                  we focus on delivering authentic experiences that capture the heart of living in the 
                  Peloponnese.
                </p>
                <p>
                  Born and raised in Argos, we share stories and places that guidebooks never mention. 
                  You can rest assured that every detail is handled carefully so you can immerse yourself 
                  in the rich tapestry of Greek life without any worries.
                </p>
              </div>
              <Link href="/about" className="btn-secondary mt-8">
                More about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/nafplio-city-tour-hero-1.jpg"
                  alt="Nafplio Greece"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-gray-600">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section with Horizontal Carousel */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 100px)',
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent-light uppercase tracking-widest text-sm mb-4">PELOPONNESE ITINERARIES</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
              Original & Tailor-made Peloponnese Tours
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Explore the Peloponnese like few travelers ever do with our collection of tours 
              that are fully customizable to your preferences.
            </p>
          </div>

          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all -ml-6"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}

            <div
              ref={carouselRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredTours.map((tour, index) => (
                <Link
                  key={index}
                  href={tour.slug}
                  className="group flex-shrink-0 w-80 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                      <span className="font-bold text-primary text-sm">{tour.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-accent-light text-xs uppercase tracking-wider mb-2">{tour.location}</p>
                    <h3 className="font-display text-2xl mb-3 group-hover:text-accent-light transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-100 text-sm">{tour.duration}</span>
                      <span className="flex items-center gap-1 text-white group-hover:gap-2 transition-all">
                        View Tour <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all -mr-6"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/tours" className="btn-secondary">
              View All Tours
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Multi-Day Trips Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">EXTENDED ADVENTURES</p>
            <h2 className="section-heading">Multi-Day Group Trips</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 2-Day Trip Card */}
            <Link href="/trips/two-day-classic-trip" className="group card-hover">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-80">
                  <Image 
                    src="/images/two-day-classic-hero-1.jpg" 
                    alt="2-Day Classic Tour in Nafplio" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                    <span className="font-bold text-primary">From €380</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent uppercase tracking-wider mb-2">From Athens</p>
                  <h3 className="font-display text-3xl text-primary mb-3 group-hover:text-accent transition-colors">
                    2-Day Classic Tour in Nafplio
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Explore ancient Mycenae, charming Nafplion, and the famous Epidavros Theater on this two-day adventure.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2 days • All Year</span>
                    <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      View Tour <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* 8-Day Trip Card */}
            <Link href="/trips/eight-day-greece-trip" className="group card-hover">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-80">
                  <Image 
                    src="/images/eight-day-greece-hero-1.jpg" 
                    alt="8-Day Classical Greece Tour" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                    <span className="font-bold text-primary">From €1,850</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent uppercase tracking-wider mb-2">From Athens</p>
                  <h3 className="font-display text-3xl text-primary mb-3 group-hover:text-accent transition-colors">
                    8-Day Classical Greece Tour
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The ultimate journey through Classical Greece visiting Athens, Meteora, Delphi, Olympia, and Nafplion.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>8 days • All Year</span>
                    <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      View Tour <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/trips" className="btn-primary">
              View All Multi-Day Trips
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section - UPDATED with Poros */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">EXPLORE</p>
            <h2 className="section-heading">
              Our Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Nafplio", tours: 20, image: "/images/destination-nafplio.jpg", slug: "/tours/nafplio" },
              { name: "Athens", tours: 3, image: "/images/destination-athens.jpg", slug: "/tours/athens" },
              { name: "Kalamata", tours: 5, image: "/images/destination-kalamata.jpg", slug: "/tours/kalamata" },
              { name: "Gythio", tours: 3, image: "/images/destination-gythio.jpg", slug: "/tours/gythio" },
              { name: "Porto Heli", tours: 3, image: "/images/destination-portoheli.jpg", slug: "/tours/portoheli" },
              { name: "Poros", tours: 5, image: "/images/destination-poros.jpg", slug: "/tours/poros" },
            ].map((destination) => (
              <Link
                key={destination.name}
                href={destination.slug}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-accent-light text-sm">{destination.tours} Tours</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">WHY UNIQUE GREEK TOURS</p>
            <h2 className="section-heading">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Local Experts</h3>
              <p className="text-gray-600">
                Born and raised in Argos, we know the Peloponnese like no one else. 
                Discover hidden gems that guidebooks never mention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Licensed Guides</h3>
              <p className="text-gray-600">
                All our guides are licensed by the Greek Ministry of Culture, 
                ensuring authentic and professional experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Every tour is tailored to your interests, pace, and preferences. 
                We create memories, not just itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent-light uppercase tracking-widest text-sm mb-4">TESTIMONIALS</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "An absolutely incredible experience! Our guide's knowledge of ancient Greece brought history to life. The Mycenae tour was unforgettable.",
                author: "Sarah M.",
                location: "London, UK",
              },
              {
                quote: "The food tour in Nafplio was the highlight of our trip. Authentic local cuisine, wonderful stories, and genuine Greek hospitality.",
                author: "Michael R.",
                location: "New York, USA",
              },
              {
                quote: "Professional, knowledgeable, and truly passionate about sharing their culture. We felt like friends, not tourists. Highly recommend!",
                author: "Emma L.",
                location: "Sydney, Australia",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-blue-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Plan your Greece trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Explore Greece?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Let us design your perfect Peloponnese experience. Contact us today 
            to start planning your unforgettable Greek adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plan-trip" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all text-lg"
            >
              Plan Your Trip
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
