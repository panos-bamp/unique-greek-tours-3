import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - UNCHANGED */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/hero-collage.jpg"
          alt="Unique Greek Tours - Discover the Peloponnese"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            We design original journeys to<br />PELOPONNESE
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            Experience authentic Greece with local experts from Argos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan-trip"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              LET'S PLAN MY TRIP
            </Link>
            <Link
              href="/tours"
              className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 px-8 py-3 rounded font-semibold transition-colors"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - UNCHANGED */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">AS FEATURED IN</p>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <span>TripAdvisor</span>
                <span>•</span>
                <span>GetYourGuide</span>
                <span>•</span>
                <span>Google Reviews</span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-900">We are rated Excellent</p>
              <p className="text-sm text-gray-600">based on more than 500 reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - UNCHANGED */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">A FRESH WAY TO TRAVEL</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
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
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-1">500+</p>
                <p className="text-gray-700 font-semibold">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section - UNCHANGED */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">PELOPONNESE ITINERARIES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Original & Tailor-made Peloponnese Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the Peloponnese like few travelers ever do with our collection of tours that are fully customizable to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Tour Card 1 */}
            <Link href="/tours/nafplio/nafplio-mycenae-epidavros/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/mycenae-tour-hero-1.jpg"
                  alt="Mycenae & Epidaurus"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €280
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Nafplio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Mycenae & Epidaurus
                </h3>
                <p className="text-sm text-gray-600 mb-3">8 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 2 */}
            <Link href="/tours/nafplio/nafplio-ancient-olympia-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/olympia-tour-hero-1.jpg"
                  alt="Ancient Olympia Day Trip"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €380
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Nafplio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Ancient Olympia Day Trip
                </h3>
                <p className="text-sm text-gray-600 mb-3">Full Day</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 3 */}
            <Link href="/tours/nafplio/nafplio-winetasting-tour-nemea/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/wine-tour-hero-1.jpg"
                  alt="Nemea Wine Tasting"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €220
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Nafplio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Nemea Wine Tasting
                </h3>
                <p className="text-sm text-gray-600 mb-3">6 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 4 */}
            <Link href="/tours/nafplio/nafplio-sparta-mystras-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/sparta-tour-hero-1.jpg"
                  alt="Sparta & Mystras Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €350
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Nafplio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Sparta & Mystras Tour
                </h3>
                <p className="text-sm text-gray-600 mb-3">10 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 5 */}
            <Link href="/tours/nafplio/nafplio-monemvasia-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/monemvasia-tour-hero-1.jpg"
                  alt="Monemvasia Castle Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €360
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Nafplio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Monemvasia Castle Tour
                </h3>
                <p className="text-sm text-gray-600 mb-3">10 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 6 */}
            <Link href="/tours/gythio/gythio-diros-caves-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/monemvasia-tour-hero-2.jpg"
                  alt="Diros Caves Adventure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €95
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Gythio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Diros Caves Adventure
                </h3>
                <p className="text-sm text-gray-600 mb-3">4 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 7 */}
            <Link href="/tours/kalamata/kalamata-mani-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/kalamata-mani-tour-hero-1.jpg"
                  alt="Mani Peninsula Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €85
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Kalamata</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Mani Peninsula Tour
                </h3>
                <p className="text-sm text-gray-600 mb-3">4 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Tour Card 8 */}
            <Link href="/tours/athens/athens-city-tour/" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/athens-city-tour-hero-1.jpg"
                  alt="Athens City & Acropolis"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded text-sm font-bold">
                  From €320
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-1">From Athens</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Athens City & Acropolis
                </h3>
                <p className="text-sm text-gray-600 mb-3">8 hours</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                  View Tour
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/tours"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              View All Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Multi-Day Trips Section - ADDED */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">EXTENDED ADVENTURES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Day Group Trips
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 2-Day Trip */}
            <Link href="/trips/two-day-classic-trip" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/two-day-classic-hero-1.jpg"
                  alt="2-Day Classic Tour in Nafplio"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded font-bold">
                  From €380
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-600 mb-2">From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  2-Day Classic Tour in Nafplio
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore ancient Mycenae, charming Nafplion, and the famous Epidavros Theater on this two-day adventure.
                </p>
                <p className="text-sm text-gray-600 mb-4">2 days • All Year</p>
                <span className="inline-flex items-center text-blue-600 font-semibold">
                  View Full Itinerary
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </Link>

            {/* 8-Day Trip */}
            <Link href="/trips/eight-day-greece-trip" className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/eight-day-greece-hero-1.jpg"
                  alt="8-Day Classical Greece Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded font-bold">
                  From €1,850
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-600 mb-2">From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  8-Day Classical Greece Tour
                </h3>
                <p className="text-gray-700 mb-4">
                  The ultimate journey through Classical Greece visiting Athens, Meteora, Delphi, Olympia, and Nafplion.
                </p>
                <p className="text-sm text-gray-600 mb-4">8 days • All Year</p>
                <span className="inline-flex items-center text-blue-600 font-semibold">
                  View Full Itinerary
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/trips"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              View All Multi-Day Trips
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section - UPDATED with Poros and new tour counts */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">EXPLORE</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nafplio - UPDATED to 20 tours */}
            <Link href="/tours/nafplio/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-nafplio.jpg"
                alt="Nafplio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Nafplio</h3>
                <p className="text-lg">20 Tours</p>
              </div>
            </Link>

            {/* Athens */}
            <Link href="/tours/athens/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-athens.jpg"
                alt="Athens"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Athens</h3>
                <p className="text-lg">2 Tours</p>
              </div>
            </Link>

            {/* Kalamata */}
            <Link href="/tours/kalamata/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-kalamata.jpg"
                alt="Kalamata"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Kalamata</h3>
                <p className="text-lg">5 Tours</p>
              </div>
            </Link>

            {/* Gythio */}
            <Link href="/tours/gythio/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-gythio.jpg"
                alt="Gythio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Gythio</h3>
                <p className="text-lg">3 Tours</p>
              </div>
            </Link>

            {/* Porto Heli - UPDATED to 3 tours */}
            <Link href="/tours/portoheli/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-portoheli.jpg"
                alt="Porto Heli"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Porto Heli</h3>
                <p className="text-lg">3 Tours</p>
              </div>
            </Link>

            {/* Poros - NEW */}
            <Link href="/tours/poros/" className="group relative h-80 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
              <Image
                src="/images/destination-poros.jpg"
                alt="Poros"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Poros</h3>
                <p className="text-lg">5 Tours</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - UNCHANGED */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">WHY UNIQUE GREEK TOURS</p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Experts</h3>
              <p className="text-gray-700">
                Born and raised in Argos, we know the Peloponnese like no one else. Discover hidden gems that guidebooks never mention.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed Guides</h3>
              <p className="text-gray-700">
                All our guides are licensed by the Greek Ministry of Culture, ensuring authentic and professional experiences.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-700">
                Every tour is tailored to your interests, pace, and preferences. We create memories, not just itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - UNCHANGED */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-gray-700 mb-6 leading-relaxed">
                An absolutely incredible experience! Our guide's knowledge of ancient Greece brought history to life. The Mycenae tour was unforgettable.
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-600">London, UK</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The food tour in Nafplio was the highlight of our trip. Authentic local cuisine, wonderful stories, and genuine Greek hospitality.
              </p>
              <div>
                <p className="font-bold text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-600">New York, USA</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
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

      {/* CTA Section - UNCHANGED */}
      <section className="relative py-24 px-4">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Plan your Greece trip"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Greece?
          </h2>
          <p className="text-xl mb-10">
            Let us design your perfect Peloponnese experience. Contact us today to start planning your unforgettable Greek adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plan-trip"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
