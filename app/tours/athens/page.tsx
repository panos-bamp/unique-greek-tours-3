import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowRight, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athens Tours - Private Guided Tours from Athens | Unique Greek Tours",
  description: "Discover Athens and beyond with our private guided tours. Acropolis city tours, day trips to Delphi, and more. Expert licensed guides, private transportation.",
  keywords: "Athens tours, Athens private tours, Acropolis tour, Delphi day trip, Athens guided tours, Athens excursions",
};

const athensTours = [
  {
    slug: "athens-city-tour",
    title: "Athens City Tour, Acropolis & Museum",
    description: "Explore ancient Athens with an expert guide. Visit Syntagma Square, the UNESCO-listed Acropolis monuments including Parthenon and Erechtheion, and the world-class Acropolis Museum.",
    image: "/images/athens-city-tour-hero-1.jpg",
    duration: "5 hours",
    price: "€120",
    type: "Walking Tour",
  },
  {
    slug: "athens-delphi-tour",
    title: "Tour to Delphi from Athens",
    description: "Full-day trip to the center of the ancient world. Visit the Oracle of Delphi, Temple of Apollo, Archaeological Museum, and the charming mountain village of Arachova.",
    image: "/images/athens-delphi-tour-hero-1.jpg",
    duration: "8 hours",
    price: "€180",
    type: "Full Day Trip",
  },
];

export default function AthensToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/athens-city-tour-hero-3.jpg"
          alt="Athens Acropolis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="container-custom relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <Link href="/tours" className="hover:text-accent transition-colors">Tours</Link>
            <span>/</span>
            <span>Athens</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-4 font-bold">Athens Tours</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the birthplace of democracy and Western civilization
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Explore Ancient & Modern Athens
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Athens, the cradle of Western civilization, is home to the iconic Acropolis and countless ancient treasures. 
              Our private tours take you beyond the typical tourist experience, offering expert-guided exploration 
              of both the city's ancient wonders and its vibrant modern culture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the majestic Parthenon to the mystical Oracle at Delphi, our licensed guides bring ancient Greece to life 
              with fascinating stories, historical insights, and personalized attention that group tours simply cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-12 text-center">
            Our Athens Tours
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {athensTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/athens/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-primary">{tour.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Private</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tour.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-accent font-semibold">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-8 text-center">
              Why Choose Our Athens Tours
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">Licensed Guides</h3>
                <p className="text-gray-600">Expert archaeologists and historians licensed by the Greek Ministry of Culture.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">Private Tours</h3>
                <p className="text-gray-600">Enjoy personalized attention and flexible schedules without the crowds.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">Flexible Timing</h3>
                <p className="text-gray-600">Tours can be customized to fit your schedule and interests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/athens-delphi-tour-hero-2.jpg"
            alt="Greece"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-6 font-bold">
            Ready to Explore Athens?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to book your private Athens tour or customize your perfect Greek adventure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
