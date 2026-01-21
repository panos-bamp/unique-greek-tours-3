import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const trips = [
  {
    id: "two-day-classic-trip",
    title: "2-Day Classic Tour in Nafplio",
    description: "Explore the most important sights of Argolida and enjoy the charming city of Nafplion on this two-day adventure from Athens.",
    duration: "2 days",
    location: "Athens - Argolida - Nafplio",
    groupSize: "Private & Small Groups",
    price: "From €380",
    image: "/images/two-day-classic-hero-1.jpg",
    highlights: [
      "Corinth Canal & Akrokorinthos",
      "Ancient Mycenae & Lion Gate",
      "Overnight in Nafplion",
      "Ancient Theater of Epidavros"
    ],
    season: "All year"
  },
  {
    id: "eight-day-greece-trip",
    title: "8-Day Classical Greece Tour",
    description: "Embark on an unforgettable journey through Classical Greece, visiting the most famous monuments and archaeological sites in this comprehensive multiday adventure.",
    duration: "8 days",
    location: "Athens - Meteora - Delphi - Olympia - Nafplio",
    groupSize: "Private & Small Groups",
    price: "From €1,850",
    image: "/images/eight-day-greece-hero-1.jpg",
    highlights: [
      "Acropolis & Acropolis Museum",
      "Meteora Monasteries & Sunset",
      "Delphi Archaeological Site",
      "Ancient Olympia & Museum",
      "Mycenae & Epidavros",
      "Wine tasting in Nemea",
      "Nafplion Old Town"
    ],
    season: "All year"
  }
];

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Greek Tours"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Multi-Day Group Trips
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light">
            Immerse yourself in the rich history and stunning landscapes of Greece with our carefully curated multi-day tours
          </p>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Multi-Day Adventures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best of Classical Greece with our expertly designed multi-day tours. From ancient ruins to breathtaking landscapes, each trip is crafted to create lasting memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    {trip.price}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {trip.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {trip.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium">{trip.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">{trip.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">{trip.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">{trip.season}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {trip.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/trips/${trip.id}`}
                    className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    View Full Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Multi-Day Tours?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
              <p className="text-gray-600">
                Professional licensed guides bring history to life with engaging storytelling and deep knowledge of Greek culture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comfortable Travel</h3>
              <p className="text-gray-600">
                Travel in private luxury vehicles with carefully selected accommodations for your comfort and relaxation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                All-year availability with full refund or date change options in case of adverse weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Contact Us"
          fill
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-stone-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Greek Adventure?
          </h2>
          <p className="text-xl mb-10 text-gray-100">
            Contact us today to customize your perfect multi-day tour of Greece
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </Link>
            <Link
              href="/tours"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Browse Day Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
