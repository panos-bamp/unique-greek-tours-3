import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TripsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - matching tours page style */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Multi-Day Tours in Greece"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Multi-Day Tours in Greece
          </h1>
          <p className="text-xl text-gray-100">
            Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
          </p>
        </div>
      </section>

      {/* Intro Text - matching tours page style */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Experience Greece like never before with <strong>Unique Greek Tours</strong>, your trusted partner for premium <strong>multi-day tours in Greece</strong>. Whether you're exploring the ancient sites of the Peloponnese or tracing the footsteps of gods and heroes, our expertly curated multi-day excursions combine luxury, comfort, and local insight for an unforgettable journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We design our multi-day tours for travelers who crave authenticity, flexibility, and a deeper connection with the places they visit. With our fleet of new-generation VIP vehicles and experienced local guides, every tour is an immersive experience that reveals the hidden gems and iconic landmarks of Greece in complete comfort.
          </p>
        </div>
      </section>

      {/* Why Choose Section - matching tours page style */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Multi-Day Tours?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Itineraries</h3>
              <p className="text-gray-700">
                Your journey is crafted to cover the must-see destinations with enough time to truly experience each location
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Accommodations</h3>
              <p className="text-gray-700">
                Stay in carefully selected hotels that combine comfort, location, and authentic Greek hospitality
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Local Guides</h3>
              <p className="text-gray-700">
                Passionate locals who share history, mythology, and culture at every UNESCO World Heritage Site
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All-Inclusive Service</h3>
              <p className="text-gray-700">
                Transportation, accommodations, and guided tours all arranged for your complete peace of mind
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Pacing</h3>
              <p className="text-gray-700">
                Itineraries designed with comfortable pacing, free time, and flexibility to match your preferences
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Experiences</h3>
              <p className="text-gray-700">
                Family tavernas, local wine tastings, and off-the-beaten-path gems throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Multi-Day Tours */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Multi-Day Tours
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 2-Day Classic Tour */}
            <Link
              href="/trips/two-day-classic-trip"
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src="/images/two-day-classic-hero-1.jpg"
                  alt="2-Day Classic Tour in Nafplio"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md">
                  <p className="text-sm font-bold text-gray-900">From €380</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  2-Day Classic Tour in Nafplio
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore ancient Mycenae, the charming city of Nafplion, and the famous Epidavros Theater on this two-day adventure from Athens.
                </p>
                <p className="text-sm text-gray-600 mb-6">2 days</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Tour Highlights:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Corinth Canal & Akrokorinthos</li>
                    <li>• Ancient Mycenae & Lion Gate</li>
                    <li>• Overnight in Nafplion</li>
                    <li>• Ancient Theater of Epidavros</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center text-blue-600 font-semibold">
                    View Tour
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* 8-Day Classical Greece Tour */}
            <Link
              href="/trips/eight-day-greece-trip"
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src="/images/eight-day-greece-hero-1.jpg"
                  alt="8-Day Classical Greece Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md">
                  <p className="text-sm font-bold text-gray-900">From €1,850</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  8-Day Classical Greece Tour
                </h3>
                <p className="text-gray-700 mb-4">
                  Embark on an unforgettable journey through Classical Greece, visiting the most famous monuments and archaeological sites.
                </p>
                <p className="text-sm text-gray-600 mb-6">8 days</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Tour Highlights:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Acropolis & Acropolis Museum</li>
                    <li>• Meteora Monasteries</li>
                    <li>• Delphi Archaeological Site</li>
                    <li>• Ancient Olympia</li>
                    <li>• Mycenae & Epidavros</li>
                    <li>• Wine tasting in Nemea</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center text-blue-600 font-semibold">
                    View Tour
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Are Our Tours For - matching tours page style */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Who Are Our Multi-Day Tours For?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Whether you're on a romantic honeymoon, a family holiday, or a cultural journey, our multi-day tours are designed for everyone
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-gray-700">Couples looking for romantic experiences</p>
            </div>
            <div>
              <p className="text-gray-700">Families seeking educational adventures</p>
            </div>
            <div>
              <p className="text-gray-700">Small groups wanting personalized attention</p>
            </div>
            <div>
              <p className="text-gray-700">History enthusiasts exploring ancient sites</p>
            </div>
            <div>
              <p className="text-gray-700">Solo travelers seeking guided exploration</p>
            </div>
            <div>
              <p className="text-gray-700">Seniors who appreciate comfort and pacing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Every Booking Includes - matching tours page style */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Every Multi-Day Tour Includes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <p>✓ Professional English-speaking driver and licensed guide</p>
            <p>✓ Luxury transportation in new-generation VIP vehicles</p>
            <p>✓ Accommodation in selected hotels</p>
            <p>✓ Flexible schedules adapted to your pace</p>
            <p>✓ Full itinerary planning and support</p>
            <p>✓ Door-to-door hotel pickup and drop-off</p>
            <p>✓ Bottled water and refreshments</p>
            <p>✓ Full refund in case of adverse weather</p>
          </div>
        </div>
      </section>

      {/* CTA Section - matching tours page style */}
      <section className="relative py-24 px-4">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Greece Tours"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Multi-Day Journey Today
          </h2>
          <p className="text-xl mb-10">
            There's no better way to experience the beauty, history, and culture of Greece than with multi-day tours by Unique Greek Tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/plan-trip"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
