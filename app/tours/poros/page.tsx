import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, MapPin, Star, Bike, Anchor, Mountain, Wine, Compass } from "lucide-react";

export const metadata = {
  title: "Poros Tours & Experiences | Private Tours from Poros | Unique Greek Tours",
  description: "Discover Poros island with private tours. City walks, hiking to Dana Lighthouse, kayaking to Eros Island, e-bike adventures, and volcano wine tours to Methana.",
  keywords: "Poros tours, Poros excursions, Poros hiking, Dana Lighthouse, kayak Poros, Eros Island, Temple of Poseidon, Methana volcano, Poros wine tour",
};

const tours = [
  {
    slug: "poros-city-tour",
    title: "Poros Three Peaks City Tour",
    description: "Hiking and sightseeing tour exploring Poros town's three peaks - Agioi Anargyroi Chapel, Ottoman Windmill, and the iconic Clock Tower.",
    duration: "2.5 hours",
    price: "From €60",
    priceNote: "per person",
    image: "/images/city-tour-hero-1.jpg",
    highlights: ["Agioi Anargyroi Chapel", "Ottoman Windmill", "Clock Tower views"],
    icon: Compass,
  },
  {
    slug: "poros-hike-dana-tour",
    title: "Hike to Dana Lighthouse",
    description: "Coastal trail from Mikro Neoreio to historic Dana Lighthouse (1870), with swimming at Gerolimano Beach and lunch at Vasilis Tavern.",
    duration: "3 hours",
    price: "From €60",
    priceNote: "per person",
    image: "/images/hike-dana-hero-1.jpg",
    highlights: ["Dana Lighthouse 1870", "Gerolimano Beach", "Seaside tavern lunch"],
    icon: Mountain,
  },
  {
    slug: "poros-kayak-to-eros-tour",
    title: "Kayak to Eros Island",
    description: "Sea kayaking adventure to Eros Island (Dascalio) with snorkeling and optional extension to Dana Lighthouse. Multiple duration options.",
    duration: "2-4 hours",
    price: "From €70",
    priceNote: "from per person",
    image: "/images/kayak-eros-hero-1.jpg",
    highlights: ["Eros Island exploration", "Snorkeling included", "Dana Lighthouse option"],
    icon: Anchor,
  },
  {
    slug: "poros-bike-tour",
    title: "Mountain E-Bike Tour",
    description: "Cycling adventure through Poros and Kalavria peninsula visiting the Temple of Poseidon, Russian Naval Station, and scenic viewpoints.",
    duration: "2-4 hours",
    price: "From €85",
    priceNote: "from per person",
    image: "/images/bike-tour-hero-1.jpg",
    highlights: ["Temple of Poseidon", "Russian Naval Station", "Mountain & coastal views"],
    icon: Bike,
  },
  {
    slug: "poros-winery-tour",
    title: "Methana Volcano & Winery Tour",
    description: "Full-day adventure by boat to Methana peninsula with volcano hiking, wine tasting at local winery, and optional Peristera Cave visit.",
    duration: "6 hours",
    price: "€160",
    priceNote: "per person",
    image: "/images/winery-tour-hero-1.jpg",
    highlights: ["Methana Volcano hike", "Wine tasting", "Peristera Cave optional"],
    icon: Wine,
  },
];

export default function PorosToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/destination-poros.jpg"
          alt="Poros Island Greece - Clock tower and harbor view"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent-light uppercase tracking-widest mb-4">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">Poros</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mb-6">
            A picturesque Saronic island just off the Peloponnese coast. Ancient temples, 
            scenic trails, crystal waters, and unforgettable adventures await.
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
            Poros is a <strong>charming Saronic island</strong> separated from the Peloponnese mainland by 
            a narrow strait just 200 meters wide. Its iconic clock tower, neoclassical buildings, and 
            stunning natural harbor create a quintessentially Greek island atmosphere that has enchanted 
            visitors for centuries.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            The island consists of two parts connected by a bridge: Sferia, where the main town is located, 
            and the larger forested Kalavria, home to the ancient Temple of Poseidon. From dramatic coastal 
            hikes and sea kayaking adventures to e-bike explorations and wine tours to the volcanic Methana 
            peninsula, Poros offers an incredible variety of experiences in a compact, accessible setting.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm mb-2">DISCOVER POROS</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Poros Tours & Adventures</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From coastal hiking and sea kayaking to e-bike explorations and volcano wine tours, 
            discover the many ways to experience this beautiful Saronic island.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link 
                key={tour.slug} 
                href={`/tours/poros/${tour.slug}`} 
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
                    <span className="font-bold text-primary-dark">{tour.price}</span>
                    <span className="text-xs text-gray-500 block">{tour.priceNote}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
                      <tour.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
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

      {/* Why Poros Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Visit Poros?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Easy Access</h3>
              <p className="text-accent">Just 1 hour from Athens by hydrofoil, or a short ferry from Galatas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Temple of Poseidon</h3>
              <p className="text-accent">Ancient sanctuary where orator Demosthenes met his fate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Crystal Waters</h3>
              <p className="text-accent">Perfect for kayaking, swimming, and snorkeling adventures</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Authentic Charm</h3>
              <p className="text-accent">Iconic clock tower, waterfront tavernas, and island hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Poros */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hike-dana-hero-2.jpg" 
                alt="Dana Lighthouse Poros" 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                An Island of Adventures
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Poros may be small, but it packs an incredible variety of experiences. Start your morning 
                with a coastal hike to the historic Dana Lighthouse, swim at secluded beaches, and enjoy 
                fresh seafood at a waterfront taverna.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In the afternoon, explore the forested trails of Kalavria by e-bike, visit the ancient 
                Temple of Poseidon, or paddle a sea kayak to the uninhabited Eros Island for snorkeling 
                in pristine waters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For a full-day adventure, take a boat to the volcanic Methana peninsula, hike an active 
                volcano crater, and end with wine tasting at a local vineyard. Whatever your pace, Poros 
                delivers unforgettable Greek island experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/kayak-eros-hero-3.jpg"
          alt="Kayaking in Poros"
          fill
          className="object-cover brightness-50"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Poros Adventure Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you prefer hiking, kayaking, cycling, or wine tasting, we'll help you 
            discover the best of this charming Saronic island.
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
