import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
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
    price: "€95",
    type: "Private",
    image: "/images/monemvasia-tour-hero-2.jpg",
    description: "Boat through 1,500m of spectacular underground caves. Marvel at stalactites, stalagmites, and crystal formations in this natural wonder.",
  },
  {
    title: "Monemvasia Castle Tour",
    slug: "gythio-monemvasia-tour",
    duration: "6 hours",
    price: "€140",
    type: "Private",
    image: "/images/monemvasia-tour-hero-1.jpg",
    description: "Explore the medieval castle town of Monemvasia. Byzantine alleys, Venetian architecture, and panoramic sea views with a licensed guide.",
  },
  {
    title: "Sparta & Mystras Tour",
    slug: "gythio-sparta-mystras-tour",
    duration: "5-6 hours",
    price: "€130",
    type: "Private",
    image: "/images/sparta-tour-hero-1.jpg",
    description: "Visit legendary Sparta and UNESCO Mystras. Archaeological museums, Byzantine churches, and ancient history come alive.",
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
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Why Visit Gythio?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Diros Caves", desc: "One of Europe's most spectacular cave systems, explored by underground boat" },
              { title: "Gateway to Mani", desc: "Starting point for exploring the wild and dramatic Mani Peninsula" },
              { title: "Ancient Sparta", desc: "Close proximity to legendary Sparta and Byzantine Mystras" },
              { title: "Medieval Monemvasia", desc: "Easy access to the stunning 'Gibraltar of the East'" },
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

// Tour Card Component
function TourCard({ tour, basePath }: { tour: any; basePath: string }) {
  return (
    <Link 
      href={`${basePath}/${tour.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            {tour.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="text-lg font-bold">
            From {tour.price}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-primary mb-2 group-hover:text-accent transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
        <span className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
          View Tour Details
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
