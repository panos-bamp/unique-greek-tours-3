import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star, Compass, Landmark } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athens Tours & Experiences | Private Tours from Athens | Unique Greek Tours",
  description: "Discover Athens with premium private tours. Explore the Acropolis, ancient Agora, and take day trips to Delphi. Expert licensed guides and luxury transportation.",
  keywords: "Athens tours, Acropolis tour, Athens private tour, Delphi day trip, Athens guided tours",
};

// Athens Tours
const athensTours = [
  {
    title: "Athens City & Acropolis Tour",
    slug: "athens-city-tour",
    duration: "8 hours",
    price: "€320",
    type: "Private",
    image: "/images/athens-city-tour-hero-1.jpg",
    description: "Explore the iconic Acropolis, ancient Agora, and vibrant neighborhoods of Athens with an expert guide.",
    icon: Landmark,
    highlights: ["Acropolis & Parthenon", "Ancient Agora", "Vibrant neighborhoods"],
  },
  {
    title: "Delphi Day Trip",
    slug: "athens-delphi-tour",
    duration: "10 hours",
    price: "€380",
    type: "Private",
    image: "/images/athens-delphi-tour-hero-1.jpg",
    description: "Journey to the ancient Oracle of Delphi, the center of the ancient Greek world.",
    icon: Compass,
    highlights: ["Oracle of Delphi", "Ancient sanctuary", "Archaeological museum"],
  },
];

export default function AthensPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/destination-athens.jpg"
          alt="Athens Greece - The Acropolis and Parthenon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Athens
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
            The birthplace of democracy and Western civilization. Discover ancient wonders 
            and modern Greek culture in one of the world's oldest cities.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>2 Tours Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <span>4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Athens, the cradle of Western civilization, is a city where <strong>ancient history meets vibrant modern life</strong>. 
            The iconic Acropolis, crowned by the magnificent Parthenon, has watched over this remarkable city for nearly 
            2,500 years, standing as a testament to the golden age of classical Greece.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Beyond its world-famous archaeological sites, Athens offers a dynamic urban experience with charming 
            neighborhoods like Plaka and Monastiraki, exceptional museums housing priceless treasures, and a culinary 
            scene that blends traditional Greek flavors with contemporary innovation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our private tours from Athens unlock both the iconic landmarks and hidden corners of this historic capital. 
            Whether you're exploring the ancient Agora where Socrates once walked, or venturing to the mystical Oracle 
            of Delphi, our expert guides bring the stories of ancient Greece to vivid life.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">EXPLORE ANCIENT WONDERS</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Athens Tours & Day Trips</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Experience the best of Athens and beyond with our expertly guided private tours. From the iconic 
            Acropolis to the mystical Oracle of Delphi, discover the cradle of Western civilization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {athensTours.map((tour, index) => (
              <TourCard key={index} tour={tour} basePath="/tours/athens" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Athens Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Visit Athens?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Heritage</h3>
              <p className="text-gray-600">Home to the Acropolis, one of the most important monuments in Western history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Cultural Capital</h3>
              <p className="text-gray-600">World-class museums, theaters, and galleries celebrating 5,000 years of history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Vibrant Neighborhoods</h3>
              <p className="text-gray-600">From historic Plaka to trendy Kolonaki, each district offers unique character</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Gateway to Greece</h3>
              <p className="text-gray-600">Perfect starting point for exploring the Peloponnese and Greek islands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/athens-city-tour-hero-2.jpg"
          alt="Plan your Athens trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Athens Adventure Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us design the perfect Athens experience tailored to your interests. 
            Contact us to customize any tour or create a multi-day itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/plan-trip" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
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

// Tour Card Component - UPDATED TO MATCH PORTO HELI STYLE
function TourCard({ tour, basePath }: { tour: any; basePath: string }) {
  const IconComponent = tour.icon || Compass;
  
  return (
    <Link 
      href={`${basePath}/${tour.slug}`}
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
        
        {/* Icon badge - top left */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
            <IconComponent className="h-6 w-6 text-white" />
          </div>
        </div>
        
        {/* Price badge - top right */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-bold text-primary-dark">From {tour.price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        
        {/* Highlights tags */}
        {tour.highlights && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.highlights.map((highlight: string, idx: number) => (
              <span key={idx} className="text-xs bg-sand-100 text-gray-700 px-3 py-1 rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-sand-200">
          <div className="flex items-center gap-2 text-accent">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
