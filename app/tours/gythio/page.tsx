import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star, Compass, Anchor, Castle, Landmark, Mountain } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gythio Tours & Experiences | Private Tours from Gythio | Unique Greek Tours",
  description: "Discover Gythio and Laconia with premium private tours. Explore Diros Caves, medieval Monemvasia, and legendary Sparta. Expert guides and luxury transportation.",
  keywords: "Gythio tours, Diros Caves tour, Monemvasia tour, Sparta tour, Laconia tours, Mani Peninsula",
};

// Gythio Tours
const gythioTours = [
  {
    title: "Diros Caves Tour",
    slug: "gythio-diros-caves-tour",
    duration: "4 hours",
    price: "From €180",
    type: "Private",
    image: "/images/monemvasia-tour-hero-2.jpg",
    description: "Boat through 1,500m of spectacular underground caves. Marvel at stalactites, stalagmites, and crystal formations in this natural wonder.",
    icon: Anchor,
    highlights: ["Underground boat", "Stalactites", "Crystal formations"],
  },
  {
    title: "Monemvasia Castle Tour",
    slug: "gythio-monemvasia-tour",
    duration: "6 hours",
    price: "From €220",
    type: "Private",
    image: "/images/monemvasia-tour-hero-1.jpg",
    description: "Explore the medieval castle town of Monemvasia. Byzantine alleys, Venetian architecture, and panoramic sea views with a licensed guide.",
    icon: Castle,
    highlights: ["Medieval fortress", "Byzantine alleys", "Panoramic views"],
  },
  {
    title: "Sparta & Mystras Tour",
    slug: "gythio-sparta-mystras-tour",
    duration: "5-6 hours",
    price: "From €200",
    type: "Private",
    image: "/images/sparta-tour-hero-1.jpg",
    description: "Visit legendary Sparta and UNESCO Mystras. Archaeological museums, Byzantine churches, and ancient history come alive.",
    icon: Landmark,
    highlights: ["Legendary Sparta", "UNESCO Mystras", "Byzantine churches"],
  },
];

export default function GythioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/gythio-hero.jpg"
          alt="Gythio Greece - Colorful harbor with fishing boats"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Gythio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
            The ancient port of Sparta and gateway to the wild Mani Peninsula. 
            Discover underground caves, medieval fortresses, and legendary history.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>3 Tours Available</span>
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
            Gythio, the ancient port of Sparta, is a <strong>picturesque coastal town</strong> in the Laconia region 
            of the Peloponnese. Its colorful neoclassical buildings cascade down to a charming harbor where fishing 
            boats bob gently in crystal-clear waters, creating one of Greece's most photogenic waterfronts.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This enchanting town serves as the perfect gateway to some of Greece's most remarkable attractions. 
            The spectacular Diros Caves offer an otherworldly underground boat journey through chambers of 
            stalactites and stalagmites. The legendary medieval fortress of Monemvasia rises dramatically from 
            the sea, while the ancient city of Sparta and Byzantine Mystras lie just a short drive away.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our private tours from Gythio unlock the treasures of Laconia with expert local guides who bring 
            the region's rich history to life. From the myths of Helen of Troy, who legend says eloped with 
            Paris from nearby Kranae islet, to the warrior culture of ancient Sparta, every tour is an 
            immersive journey through time.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">DISCOVER LACONIA</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Gythio Tours & Experiences</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From the magical underground world of Diros Caves to the medieval splendor of Monemvasia 
            and the legendary city of Sparta, Gythio is your gateway to unforgettable Peloponnese adventures.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gythioTours.map((tour, index) => (
              <TourCard key={index} tour={tour} basePath="/tours/gythio" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Gythio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Visit Gythio?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Diros Caves</h3>
              <p className="text-gray-600">One of Europe's most spectacular cave systems, explored by underground boat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Gateway to Mani</h3>
              <p className="text-gray-600">Starting point for exploring the wild and dramatic Mani Peninsula</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Sparta</h3>
              <p className="text-gray-600">Close proximity to legendary Sparta and Byzantine Mystras</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Castle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Medieval Monemvasia</h3>
              <p className="text-gray-600">Easy access to the stunning 'Gibraltar of the East'</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/sparta-tour-hero-1.jpg"
          alt="Plan your Gythio trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Gythio Adventure Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us design the perfect Laconia experience tailored to your interests. 
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
