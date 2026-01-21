import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Award, Heart, Calendar, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/hero-collage.jpg"
          alt="Unique Greek Tours - Discover the Peloponnese"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
            We design original journeys to
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            PELOPONNESE
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto">
            Experience authentic Greece with local experts from Argos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan-trip"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              LET'S PLAN MY TRIP
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center">
              <p className="text-sm font-semibold mb-1">AS FEATURED IN</p>
              <div className="flex items-center gap-6 text-sm">
                <span>TripAdvisor</span>
                <span>GetYourGuide</span>
                <span>Google Reviews</span>
              </div>
            </div>
            <div className="h-12 w-px bg-white/30 hidden md:block" />
            <div className="text-center">
              <p className="text-2xl font-bold">Excellent</p>
              <p className="text-sm">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
                A FRESH WAY TO TRAVEL
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experience the journey of a lifetime.
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Take all the stress out of planning and prepare only to make unforgettable memories with your loved ones. With a deep-rooted passion for crafting personalized itineraries, we focus on delivering authentic experiences that capture the heart of living in the Peloponnese.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Born and raised in Argos, we share stories and places that guidebooks never mention. You can rest assured that every detail is handled carefully so you can immerse yourself in the rich tapestry of Greek life without any worries.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
              >
                More about us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <Image
                src="/images/nafplio-city-tour-hero-1.jpg"
                alt="Nafplio Greece"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl">
                <p className="text-5xl font-bold text-emerald-600 mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
              PELOPONNESE ITINERARIES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Original & Tailor-made Peloponnese Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the Peloponnese like few travelers ever do with our collection of tours that are fully customizable to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Tour Card 1 */}
            <Link
              href="/tours/nafplio/nafplio-mycenae-epidavros/"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/mycenae-tour-hero-1.jpg"
                  alt="Mycenae & Epidaurus"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  From €280
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Nafplio</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Mycenae & Epidaurus
                </h3>
                <p className="text-gray-600 text-sm mb-4">8 hours</p>
                <span className="inline-flex items-center text-emerald-600 font-semibold">
                  View Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 2 */}
            <Link
              href="/tours/nafplio/nafplio-ancient-olympia-tour/"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/olympia-tour-hero-1.jpg"
                  alt="Ancient Olympia Day Trip"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  From €380
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Nafplio</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Ancient Olympia Day Trip
                </h3>
                <p className="text-gray-600 text-sm mb-4">Full Day</p>
                <span className="inline-flex items-center text-emerald-600 font-semibold">
                  View Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 3 */}
            <Link
              href="/tours/nafplio/nafplio-winetasting-tour-nemea/"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/wine-tour-hero-1.jpg"
                  alt="Nemea Wine Tasting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  From €220
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Nafplio</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Nemea Wine Tasting
                </h3>
                <p className="text-gray-600 text-sm mb-4">6 hours</p>
                <span className="inline-flex items-center text-emerald-600 font-semibold">
                  View Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 4 */}
            <Link
              href="/tours/nafplio/nafplio-sparta-mystras-tour/"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/sparta-tour-hero-1.jpg"
                  alt="Sparta & Mystras Tour"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  From €350
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Nafplio</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Sparta & Mystras Tour
                </h3>
                <p className="text-gray-600 text-sm mb-4">10 hours</p>
                <span className="inline-flex items-center text-emerald-600 font-semibold">
                  View Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Multi-Day Trips Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
              EXTENDED ADVENTURES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Multi-Day Group Trips
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 2-Day Trip Card */}
            <Link
              href="/trips/two-day-classic-trip"
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/two-day-classic-hero-1.jpg"
                  alt="2-Day Classic Tour in Nafplio"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  From €380
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  2-Day Classic Tour in Nafplio
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore ancient Mycenae, charming Nafplion, and the famous Epidavros Theater on this two-day adventure from Athens.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>2 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>All Year</span>
                  </div>
                </div>
                <span className="inline-flex items-center text-emerald-600 font-semibold text-lg">
                  View Full Itinerary
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </Link>

            {/* 8-Day Trip Card */}
            <Link
              href="/trips/eight-day-greece-trip"
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/eight-day-greece-hero-1.jpg"
                  alt="8-Day Classical Greece Tour"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  From €1,850
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  8-Day Classical Greece Tour
                </h3>
                <p className="text-gray-600 mb-6">
                  The ultimate journey through Classical Greece visiting Athens, Meteora, Delphi, Olympia, and Nafplion.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>8 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>All Year</span>
                  </div>
                </div>
                <span className="inline-flex items-center text-emerald-600 font-semibold text-lg">
                  View Full Itinerary
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/trips"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Multi-Day Trips
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section - UPDATED */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
              EXPLORE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nafplio - UPDATED count to 20 */}
            <Link
              href="/tours/nafplio/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-nafplio.jpg"
                alt="Nafplio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Nafplio</h3>
                <p className="text-lg">20 Tours</p>
              </div>
            </Link>

            {/* Athens */}
            <Link
              href="/tours/athens/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-athens.jpg"
                alt="Athens"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Athens</h3>
                <p className="text-lg">2 Tours</p>
              </div>
            </Link>

            {/* Kalamata */}
            <Link
              href="/tours/kalamata/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-kalamata.jpg"
                alt="Kalamata"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Kalamata</h3>
                <p className="text-lg">5 Tours</p>
              </div>
            </Link>

            {/* Gythio */}
            <Link
              href="/tours/gythio/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-gythio.jpg"
                alt="Gythio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Gythio</h3>
                <p className="text-lg">3 Tours</p>
              </div>
            </Link>

            {/* Porto Heli - UPDATED count to 3 */}
            <Link
              href="/tours/portoheli/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-portoheli.jpg"
                alt="Porto Heli"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Porto Heli</h3>
                <p className="text-lg">3 Tours</p>
              </div>
            </Link>

            {/* NEW: Poros */}
            <Link
              href="/tours/poros/"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/destination-poros.jpg"
                alt="Poros"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Poros</h3>
                <p className="text-lg">5 Tours</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
              WHY UNIQUE GREEK TOURS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                Born and raised in Argos, we know the Peloponnese like no one else. Discover hidden gems that guidebooks never mention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                All our guides are licensed by the Greek Ministry of Culture, ensuring authentic and professional experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Every tour is tailored to your interests, pace, and preferences. We create memories, not just itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold mb-4 tracking-wide">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                An absolutely incredible experience! Our guide's knowledge of ancient Greece brought history to life. The Mycenae tour was unforgettable.
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-600">London, UK</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The food tour in Nafplio was the highlight of our trip. Authentic local cuisine, wonderful stories, and genuine Greek hospitality.
              </p>
              <div>
                <p className="font-bold text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-600">New York, USA</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Professional, knowledgeable, and truly passionate about sharing their culture. We felt like friends, not tourists. Highly recommend!
              </p>
              <div>
                <p className="font-bold text-gray-900">Emma L.</p>
                <p className="text-sm text-gray-600">Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Plan your Greece trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-stone-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Greece?
          </h2>
          <p className="text-xl mb-10 text-gray-100">
            Let us design your perfect Peloponnese experience. Contact us today to start planning your unforgettable Greek adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan-trip"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
