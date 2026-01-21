import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star, Compass, Wine, Utensils, Mountain, Anchor, Ship } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalamata Tours & Experiences | Private Tours from Kalamata | Unique Greek Tours",
  description: "Discover Kalamata and Messinia with premium private tours. Explore Ancient Olympia, the Mani Peninsula, taste world-famous olive oil, and cruise Navarino Bay.",
  keywords: "Kalamata tours, Messinia tours, Ancient Olympia tour, Mani tour, olive oil tour Kalamata, Navarino Bay cruise",
};

// Kalamata Tours
const kalamataTours = [
  {
    title: "Ancient Olympia Tour",
    slug: "kalamata-ancient-olympia-tour",
    duration: "7 hours",
    price: "€140",
    type: "Private",
    image: "/images/kalamata-olympia-tour-hero-1.jpg",
    description: "Visit the birthplace of the Olympic Games. See the ancient stadium, Temple of Zeus, and world-famous archaeological museum.",
    icon: Compass,
    highlights: ["Olympic Stadium", "Temple of Zeus", "Archaeological Museum"],
  },
  {
    title: "Castle Olive Oil Tasting Tour",
    slug: "kalamata-olive-oil-tour",
    duration: "4 hours",
    price: "€95",
    type: "Private",
    image: "/images/kalamata-olive-oil-tour-hero-1.jpg",
    description: "Experience Greek olive oil culture at the 13th century Castle of Androusa. Olive walk, mill tours, expert tasting, and traditional meal.",
    icon: Wine,
    highlights: ["13th century castle", "Olive mill tour", "Expert tasting"],
  },
  {
    title: "Kalamata Food Tasting Tour",
    slug: "kalamata-food-tasting-tour",
    duration: "3 hours",
    price: "€75",
    type: "Walking",
    image: "/images/kalamata-food-tour-hero-1.jpg",
    description: "Experience Greek food like a local. Visit family stores, taste regional specialties, and explore hidden historic areas.",
    icon: Utensils,
    highlights: ["Family stores", "Regional specialties", "Historic areas"],
  },
  {
    title: "Villages of Mani Tour",
    slug: "kalamata-mani-tour",
    duration: "4 hours",
    price: "€85",
    type: "Private",
    image: "/images/kalamata-mani-tour-hero-1.jpg",
    description: "Explore coastal Mani villages. Visit the Balcony of Kardamyli, natural port of Agios Nikolaos, and historic Kardamyli.",
    icon: Mountain,
    highlights: ["Kardamyli balcony", "Coastal villages", "Agios Nikolaos"],
  },
  {
    title: "Navarino Bay Mini Cruise",
    slug: "kalamata-navarino-tour",
    duration: "5 hours",
    price: "€120",
    type: "Boat",
    image: "/images/kalamata-navarino-tour-hero-1.jpg",
    description: "Cruise turquoise Navarino Bay. Swim at secluded spots, visit historic islands, spot sea turtles and dolphins.",
    icon: Ship,
    highlights: ["Turquoise waters", "Historic islands", "Sea turtles"],
  },
];

export default function KalamataPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/kalamata-hero.jpg"
          alt="Kalamata Greece - Panoramic sunset view over the Messenian Gulf"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Kalamata
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
            The gateway to Messinia and the dramatic Mani Peninsula. Famous for its olives, 
            stunning coastline, and proximity to Ancient Olympia.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>5 Tours Available</span>
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
            Kalamata, the capital of Messinia, is a <strong>vibrant coastal city</strong> in southwestern Peloponnese 
            that perfectly blends urban sophistication with natural beauty. Famous worldwide for its prized Kalamata 
            olives and exceptional olive oil, this sun-drenched destination offers travelers an authentic taste of 
            Greek life away from the tourist crowds.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The region's diverse landscapes—from the dramatic stone towers of the Mani Peninsula to the golden 
            beaches of Navarino Bay—provide endless opportunities for exploration. History enthusiasts can journey 
            to Ancient Olympia, birthplace of the Olympic Games, while food lovers can immerse themselves in one 
            of Greece's most celebrated culinary traditions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our private tours from Kalamata reveal the treasures of Messinia with expert local guides who share 
            intimate knowledge of the region's history, traditions, and hidden gems. Whether you're tasting olive 
            oil at a medieval castle or cruising the turquoise waters of Navarino Bay, every experience is crafted 
            to create lasting memories.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">DISCOVER MESSINIA</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Kalamata Tours & Experiences</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From the birthplace of the Olympic Games to the dramatic Mani peninsula, discover the diverse 
            beauty and rich history of western Peloponnese with our expertly guided private tours.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kalamataTours.map((tour, index) => (
              <TourCard key={index} tour={tour} basePath="/tours/kalamata" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Kalamata Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Why Visit Kalamata?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "World-Famous Olives", desc: "Home to the legendary Kalamata olive and some of the finest olive oil in the Mediterranean" },
              { title: "Gateway to Olympia", desc: "Just 2 hours from Ancient Olympia, birthplace of the Olympic Games" },
              { title: "Dramatic Mani Coast", desc: "Access to the wild beauty of the Mani Peninsula with its tower villages and caves" },
              { title: "Pristine Beaches", desc: "Stunning coastline including the crystal-clear waters of Navarino Bay" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/kalamata-mani-tour-hero-1.jpg"
          alt="Plan your Kalamata trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Kalamata Adventure Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us design the perfect Messinia experience tailored to your interests. 
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
