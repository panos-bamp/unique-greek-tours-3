import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porto Heli Tours & Experiences | Private Tours from Porto Heli | Unique Greek Tours",
  description: "Discover Porto Heli and the Argolida peninsula with premium private tours. Wine tasting, ancient sites, and day trips to Epidavros, Mycenae, and Nafplio.",
  keywords: "Porto Heli tours, Argolida tours, wine tasting Porto Heli, Epidavros tour, Mycenae from Porto Heli, Greek Riviera tours",
};

// Porto Heli Tours
const portoheliTours = [
  {
    title: "Wine Tasting & City Food Tour",
    slug: "portoheli-food-wine-tour",
    duration: "7 hours",
    price: "€180",
    type: "Private",
    image: "/images/portoheli-food-wine-tour-hero-1.jpg",
    description: "Visit award-winning Nemea winery, explore historic Nafplio, taste local delicacies and Greek spirits.",
  },
  {
    title: "Ancient Epidavros, Mycenae & Nafplio",
    slug: "portoheli-epidavros-mycenae-tour",
    duration: "9 hours",
    price: "€200",
    type: "Private",
    image: "/images/portoheli-epidavros-mycenae-tour-hero-1.jpg",
    description: "Full-day tour to UNESCO World Heritage sites - Ancient Theatre of Epidavros and Mycenae citadel.",
  },
];

export default function PortoHeliPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/portoheli-hero.jpg"
          alt="Porto Heli Greece - Crystal clear turquoise waters and colorful harbor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Porto Heli
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
            The Greek Riviera's hidden gem. Crystal-clear waters, exclusive atmosphere, 
            and easy access to ancient treasures of the Argolida.
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
            Porto Heli, often called the <strong>Greek Riviera</strong>, is an exclusive coastal resort on the 
            eastern tip of the Argolida peninsula. With its crystal-clear turquoise waters, sophisticated marina, 
            and stunning natural beauty, this charming town has become a favorite retreat for those seeking 
            Mediterranean elegance combined with authentic Greek character.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Beyond its pristine beaches and upscale atmosphere, Porto Heli offers exceptional access to some of 
            Greece's most significant historical sites. The ancient theater of Epidavros, renowned for its perfect 
            acoustics, lies just 30 minutes away. The legendary citadel of Mycenae, home of King Agamemnon, is 
            within easy reach, as is the romantic first capital of Greece, Nafplio.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our private tours from Porto Heli combine the region's rich history with its celebrated culinary 
            traditions. Whether you're exploring UNESCO World Heritage Sites or savoring wine at a historic 
            vineyard, our expert guides ensure an experience that captures the very best of the Argolida.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">DISCOVER THE ARGOLIDA</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Porto Heli Tours & Experiences</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From UNESCO World Heritage sites to award-winning wineries, explore the rich history and 
            culinary traditions of the Argolida peninsula with our expertly guided private tours.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {portoheliTours.map((tour, index) => (
              <TourCard key={index} tour={tour} basePath="/tours/portoheli" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Porto Heli Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Why Visit Porto Heli?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Greek Riviera", desc: "Exclusive atmosphere with crystal-clear waters and sophisticated marina" },
              { title: "Ancient Epidavros", desc: "Just 30 minutes from the most acoustically perfect ancient theater" },
              { title: "Gateway to Mycenae", desc: "Easy access to the legendary citadel of King Agamemnon" },
              { title: "Wine Country", desc: "Close to Nemea's renowned wineries and local gastronomic treasures" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Porto Heli - Additional Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                The Perfect Base for Exploration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Porto Heli's strategic location makes it an ideal starting point for discovering the 
                Peloponnese's greatest treasures. Within a short drive, you can step back in time at 
                some of Greece's most important archaeological sites.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                The ancient theater of Epidavros, a UNESCO World Heritage Site, offers an unforgettable 
                acoustic experience. Mycenae reveals the grandeur of Bronze Age civilization, while 
                Nafplio charms with its Venetian architecture and romantic atmosphere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                After a day of exploration, return to Porto Heli's serene waters for a sunset swim 
                or enjoy fresh seafood at a waterfront taverna—the perfect end to a perfect day.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/mycenae-tour-hero-1.jpg"
          alt="Plan your Porto Heli trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Porto Heli Adventure Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us design the perfect Argolida experience tailored to your interests. 
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
      <div className="relative h-64 overflow-hidden">
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
