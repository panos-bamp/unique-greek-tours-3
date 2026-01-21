import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, MapPin, Star, Anchor, Compass, Ship, Wine } from "lucide-react";

export const metadata = {
  title: "Porto Heli Tours & Experiences | Private Tours from Porto Heli | Unique Greek Tours",
  description: "Discover Porto Heli with our exclusive tours. Private sailing charters, wine tasting, ancient sites, and day trips to Epidavros, Mycenae, Hydra, and Nafplio.",
  keywords: "Porto Heli tours, Argolida excursions, wine tasting Porto Heli, Epidavros tour, Mycenae from Porto Heli, Nafplio day trip, Porto Heli sailing, Hydra cruise",
};

const tours = [
  {
    slug: "portoheli-sailing-tour",
    title: "Private Sailing Tours",
    description: "Private sailing charters exploring the Greek Riviera, Spetses, Hydra, and Nafplio. Full-day cruises with swimming and island hopping.",
    duration: "8 hours",
    price: "€800",
    priceNote: "per boat",
    image: "/images/sailing-hero-1.jpg",
    highlights: ["Choose your route", "Spetses, Hydra or Nafplio", "Swimming & snorkeling"],
    icon: Ship,
  },
  {
    slug: "portoheli-food-wine-tour",
    title: "Wine Tasting & City Food Tour",
    description: "Visit award-winning Nemea winery, explore historic Nafplio, taste local delicacies and Greek spirits.",
    duration: "7 hours",
    price: "€180",
    priceNote: "per person",
    image: "/images/portoheli-food-wine-tour-hero-1.jpg",
    highlights: ["Award-winning winery", "Nafplio walking tour", "Greek deli tasting"],
    icon: Wine,
  },
  {
    slug: "portoheli-epidavros-mycenae-tour",
    title: "Ancient Epidavros, Mycenae & Nafplio",
    description: "Full-day tour to UNESCO World Heritage sites - Ancient Theatre of Epidavros and Mycenae citadel.",
    duration: "9 hours",
    price: "€200",
    priceNote: "per person",
    image: "/images/portoheli-epidavros-mycenae-tour-hero-1.jpg",
    highlights: ["UNESCO Epidavros", "Mycenae Lion's Gate", "Nafplio free time"],
    icon: Compass,
  },
];

export default function PortoHeliToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/portoheli-hero.jpg"
          alt="Porto Heli Greece - Crystal clear turquoise waters and colorful harbor"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent-light uppercase tracking-widest mb-4">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">Porto Heli</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mb-6">
            The Greek Riviera's hidden gem. Crystal-clear waters, exclusive atmosphere, 
            and easy access to ancient treasures of the Argolida.
          </p>
          <div className="flex gap-6 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent-light" />
              <span>{tours.length} Tours Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent-light fill-accent-light" />
              <span>4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Porto Heli, often called the <strong>Greek Riviera</strong>, is an exclusive coastal resort on the 
            eastern tip of the Argolida peninsula. With its crystal-clear turquoise waters, sophisticated marina, 
            and stunning natural beauty, this charming town has become a favorite retreat for those seeking 
            Mediterranean elegance combined with authentic Greek character.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Beyond its pristine beaches and upscale atmosphere, Porto Heli offers exceptional access to some of 
            Greece's most significant historical sites. The ancient theater of Epidavros, renowned for its perfect 
            acoustics, lies just 30 minutes away. The legendary citadel of Mycenae, home of King Agamemnon, is 
            within easy reach, as is the romantic first capital of Greece, Nafplio.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm mb-2">DISCOVER THE ARGOLIDA</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Porto Heli Tours & Experiences</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From private sailing charters to UNESCO World Heritage sites to award-winning wineries, explore the 
            rich history and culinary traditions of the Argolida peninsula with our expertly guided private tours.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link 
                key={tour.slug} 
                href={`/tours/portoheli/${tour.slug}`} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={tour.image} 
                    alt={tour.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-primary-dark">From {tour.price}</span>
                    <span className="text-xs text-gray-500 block">{tour.priceNote}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
                      <tour.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-sand-100 text-gray-700 px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-sand-200">
                    <div className="flex items-center gap-2 text-accent">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Porto Heli Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Visit Porto Heli?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Greek Riviera</h3>
              <p className="text-accent">Exclusive atmosphere with crystal-clear waters and sophisticated marina</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Epidavros</h3>
              <p className="text-accent">Just 30 minutes from the most acoustically perfect ancient theater</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Gateway to Mycenae</h3>
              <p className="text-accent">Easy access to the legendary citadel of King Agamemnon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Wine Country</h3>
              <p className="text-accent">Close to Nemea's renowned wineries and local gastronomic treasures</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Porto Heli */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                The Perfect Base for Exploration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Porto Heli's strategic location makes it an ideal starting point for discovering the 
                Peloponnese's greatest treasures. Within a short drive, you can step back in time at 
                some of Greece's most important archaeological sites.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The ancient theater of Epidavros, a UNESCO World Heritage Site, offers an unforgettable 
                acoustic experience. Mycenae reveals the grandeur of Bronze Age civilization, while 
                Nafplio charms with its Venetian architecture and romantic atmosphere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                After a day of exploration, return to Porto Heli's serene waters for a sunset swim or 
                enjoy fresh seafood at a waterfront taverna—the perfect end to a perfect day.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/portoheli-epidavros-mycenae-tour-hero-2.jpg" 
                alt="Epidavros Theater" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/mycenae-tour-hero-1.jpg"
          alt="Plan your Porto Heli trip"
          fill
          className="object-cover brightness-50"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Porto Heli Adventure Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us design the perfect Argolida experience tailored to your interests. 
            Contact us to customize any tour or create a multi-day itinerary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/plan-trip" className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              Plan Your Trip <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
