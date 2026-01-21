import Image from "next/image";
import Link from "next/link";

export default function TripsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/two-day-classic-hero-1.jpg"
          alt="Multi-Day Group Trips"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Multi-Day Group Trips
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our multi-day trips offer a comprehensive exploration of Greece's most iconic destinations. From ancient ruins to breathtaking landscapes, each journey is carefully designed to provide an authentic and unforgettable experience. Travel with expert local guides who bring history to life and discover hidden gems along the way.
          </p>
        </div>
      </section>

      {/* Trip Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Available Tours</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 2-Day Classic Tour */}
            <Link href="/trips/two-day-classic-trip" className="group block bg-white rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/two-day-classic-hero-1.jpg" 
                  alt="2-Day Classical Tour in Nafplio" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded font-bold text-gray-900">
                  From €380
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">2 Days • From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  2-Day Classic Tour in Nafplio
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Explore ancient Mycenae, charming Nafplion, and the famous Epidavros Theater on this two-day adventure through the heart of the Argolida region.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Full Itinerary
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* 8-Day Classical Greece Tour */}
            <Link href="/trips/eight-day-greece-trip" className="group block bg-white rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/eight-day-greece-hero-1.jpg" 
                  alt="8-Day Classical Greece Tour" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded font-bold text-gray-900">
                  From €1,850
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">8 Days • From Athens</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  8-Day Classical Greece Tour
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The ultimate journey through Classical Greece visiting Athens, Meteora, Delphi, Ancient Olympia, Mycenae, Nafplion, and Epidavros.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Full Itinerary
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Multi-Day Tours</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Local Guides</h3>
              <p className="text-gray-700">
                All tours led by licensed guides with deep knowledge of Greek history and culture
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Groups</h3>
              <p className="text-gray-700">
                Private tours ensuring personalized attention and flexibility throughout your journey
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All-Inclusive</h3>
              <p className="text-gray-700">
                Accommodation, transportation, and entrance fees included for a hassle-free experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <Image 
          src="/images/eight-day-greece-hero-3.jpg" 
          alt="Book your tour" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Classical Greece?</h2>
          <p className="text-xl mb-10">
            Book your multi-day tour today and discover the wonders of ancient Greece with expert local guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
              Contact Us
            </Link>
            <Link href="/tours" className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded font-semibold transition-colors">
              View Day Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
