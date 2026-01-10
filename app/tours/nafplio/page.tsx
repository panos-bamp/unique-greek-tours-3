import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafplio Tours & Experiences | Private Tours from Nafplio | Unique Greek Tours",
  description: "Discover 18+ premium tours from Nafplio - Greece's first capital and most romantic town. Explore Mycenae, Epidaurus, Ancient Olympia, wine tours, hiking adventures, and authentic culinary experiences.",
  keywords: "Nafplio tours, Nafplio day trips, private tours Nafplio, Mycenae tour, Epidaurus tour, Peloponnese tours",
};

// Sightseeing & Historical Tours
const sightseeingTours = [
  {
    title: "Nafplio City Walking Tour",
    slug: "nafplio-city-tour",
    duration: "4 hours",
    price: "€120",
    type: "Private",
    image: "/images/nafplio-city-tour-hero-1.jpg",
    description: "Discover Nafplio's Venetian old town, Palamidi fortress views, and hidden gems with a local guide.",
  },
  {
    title: "Mycenae & Epidaurus Tour",
    slug: "nafplio-mycenae-epidavros",
    duration: "8 hours",
    price: "€280",
    type: "Private",
    image: "/images/mycenae-tour-hero-1.jpg",
    description: "Visit two UNESCO World Heritage sites - the ancient citadel of Mycenae and the legendary theater of Epidaurus.",
  },
  {
    title: "Corinth & Epidaurus Tour",
    slug: "nafplio-corinth-epidavros-tour",
    duration: "9 hours",
    price: "€320",
    type: "Private",
    image: "/images/round-trip-tour-hero-1.jpg",
    description: "Explore Ancient Corinth, the Corinth Canal, and the acoustically perfect theater of Epidaurus.",
  },
  {
    title: "Sparta & Mystras Byzantine Tour",
    slug: "nafplio-sparta-mystras-tour",
    duration: "10 hours",
    price: "€350",
    type: "Private",
    image: "/images/sparta-tour-hero-1.jpg",
    description: "Walk in the footsteps of King Leonidas and explore the Byzantine ghost town of Mystras.",
  },
  {
    title: "Ancient Olympia Day Trip",
    slug: "nafplio-ancient-olympia-tour",
    duration: "Full day",
    price: "€380",
    type: "Private",
    image: "/images/olympia-tour-hero-1.jpg",
    description: "Journey to the birthplace of the Olympic Games and explore the archaeological site and museum.",
  },
  {
    title: "Monemvasia Castle Tour",
    slug: "nafplio-monemvasia-tour",
    duration: "10 hours",
    price: "€360",
    type: "Private",
    image: "/images/monemvasia-tour-hero-1.jpg",
    description: "Discover the hidden medieval fortress town carved into a dramatic rock peninsula.",
  },
  {
    title: "Argos Cultural Heritage Tour",
    slug: "nafplio-argos-cultural-tour",
    duration: "6 hours",
    price: "€180",
    type: "Private",
    image: "/images/mycenae-tour-hero-2.jpg",
    description: "Explore ancient Argos, one of the oldest continuously inhabited cities in the world.",
  },
];

// Culinary & Wine Tours
const culinaryTours = [
  {
    title: "Nafplio Food Tasting Tour",
    slug: "nafplio-food-tasting-tour",
    duration: "4 hours",
    price: "€95",
    type: "Private",
    image: "/images/kalamata-food-tour-hero-1.jpg",
    description: "Savor authentic Greek flavors at family tavernas, delis, and hidden culinary gems in the old town.",
  },
  {
    title: "Nemea Wine Tasting Tour",
    slug: "nafplio-winetasting-tour-nemea",
    duration: "6 hours",
    price: "€220",
    type: "Private",
    image: "/images/wine-tour-hero-1.jpg",
    description: "Visit award-winning wineries in Nemea and taste the famous Agiorgitiko red wines.",
  },
  {
    title: "Olive Oil & Epidaurus Tour",
    slug: "nafplio-oil-tasting-epidavros-tour",
    duration: "8 hours",
    price: "€260",
    type: "Private",
    image: "/images/kalamata-olive-oil-tour-hero-1.jpg",
    description: "Combine olive oil tasting at traditional mills with a visit to the ancient theater of Epidaurus.",
  },
  {
    title: "Beekeeping Experience",
    slug: "nafplio-beekeeping-tour",
    duration: "4 hours",
    price: "€110",
    type: "Private",
    image: "/images/malevi-tour-hero-1.jpg",
    description: "Visit a family apiary, learn traditional beekeeping, and taste varieties of Greek honey.",
  },
  {
    title: "Malevi Monastery & Wine Tour",
    slug: "nafplio-malevi-tour",
    duration: "5 hours",
    price: "€160",
    type: "Private",
    image: "/images/malevi-tour-hero-2.jpg",
    description: "Discover the historic Malevi Monastery and taste wines made using centuries-old techniques.",
  },
];

// Adventure & Nature Tours
const adventureTours = [
  {
    title: "Nafplio Kayak Tour",
    slug: "nafplio-kayak-tour",
    duration: "4 hours",
    price: "€85",
    type: "Small Group",
    image: "/images/nafplio-kayak-tour-hero-1.jpg",
    description: "Paddle beneath Bourtzi fortress and explore hidden coves along the Argolic Gulf.",
  },
  {
    title: "Sunken City Kayaking & Snorkeling",
    slug: "nafplio-sunken-kayak-tour",
    duration: "5 hours",
    price: "€95",
    type: "Small Group",
    image: "/images/nafplio-sunken-kayak-tour-hero-1.jpg",
    description: "Kayak to ancient submerged ruins and snorkel over a sunken city near Tolo.",
  },
  {
    title: "Lousios Gorge Hiking",
    slug: "nafplio-hiking-lousios",
    duration: "8 hours",
    price: "€180",
    type: "Private",
    image: "/images/nafplio-hiking-lousios-tour-hero-1.jpg",
    description: "Trek through spectacular gorge scenery past cliff-hanging monasteries and waterfalls.",
  },
  {
    title: "Vytina & Elati Mountain Hike",
    slug: "nafplio-hiking-vytina-elati",
    duration: "7 hours",
    price: "€160",
    type: "Private",
    image: "/images/nafplio-hiking-vytina-tour-hero-1.jpg",
    description: "Explore the forested trails and traditional mountain villages of Arcadia.",
  },
  {
    title: "Karathona Beach Coastal Hike",
    slug: "nafplio-hiking-karathona-beach",
    duration: "4 hours",
    price: "€90",
    type: "Private",
    image: "/images/nafplio-hiking-karathona-tour-hero-1.jpg",
    description: "Follow ancient paths through olive groves to the beautiful Karathona Beach.",
  },
  {
    title: "Mycenae Archaeological Hike",
    slug: "nafplio-hiking-mycenae",
    duration: "6 hours",
    price: "€150",
    type: "Private",
    image: "/images/nafplio-hiking-mycenae-tour-hero-1.jpg",
    description: "Combine hiking with archaeology as you explore the trails around ancient Mycenae.",
  },
];

export default function NafplioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Nafplio Greece - Bourtzi Fortress at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Nafplio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
            Greece's first capital and most romantic town. Discover Venetian architecture, 
            historic fortresses, and authentic experiences in the heart of the Peloponnese.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>18 Tours Available</span>
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
            Nafplio, the jewel of the Peloponnese, is a <strong>magical destination</strong> that combines 
            historic charm with modern Greek lifestyle. Often called Greece's most romantic town, its 
            cobblestone streets, neoclassical mansions, and impressive fortifications transport visitors 
            to another era.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            As Greece's first capital (1823-1834), Nafplio serves as the perfect base to explore the 
            Peloponnese's greatest treasures—from the ancient citadel of Mycenae and the legendary 
            theater of Epidaurus to hidden mountain villages and pristine coastlines. Our private tours 
            from Nafplio unlock these wonders with expert local guides and luxury transportation.
          </p>
        </div>
      </section>

      {/* Sightseeing & Historical Tours */}
      <TourSection
        title="Sightseeing & Historical Tours"
        subtitle="EXPLORE ANCIENT WONDERS"
        description="Discover the most important archaeological sites and historic destinations accessible from Nafplio. From UNESCO World Heritage Sites to hidden Byzantine treasures, our expert guides bring ancient Greece to life."
        tours={sightseeingTours}
      />

      {/* Culinary & Wine Tours */}
      <TourSection
        title="Culinary & Wine Experiences"
        subtitle="TASTE TRADITION"
        description="Savor the authentic flavors of Greece with our food tours, wine tastings, and unique culinary experiences. From family tavernas in Nafplio's old town to world-renowned Nemea wineries."
        tours={culinaryTours}
        bgColor="bg-sand-50"
      />

      {/* Adventure & Nature Tours */}
      <TourSection
        title="Adventure & Nature Tours"
        subtitle="ACTIVE EXPLORATION"
        description="Experience the Peloponnese's stunning natural landscapes through kayaking, hiking, and outdoor adventures. From sea caves to mountain gorges, discover Greece's wild beauty."
        tours={adventureTours}
      />

      {/* Why Nafplio Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Why Start Your Journey in Nafplio?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Strategic Location", desc: "2 hours from Athens, central to all major Peloponnese sites" },
              { title: "Rich History", desc: "Greece's first capital with Venetian, Ottoman, and Greek heritage" },
              { title: "Stunning Beauty", desc: "Romantic old town, seaside promenades, and dramatic fortresses" },
              { title: "Authentic Experience", desc: "Local tavernas, artisan shops, and genuine Greek hospitality" },
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
          src="/images/nafplio-city-tour-hero-2.jpg"
          alt="Plan your Nafplio trip"
          fill
          className="object-cover brightness-40"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Nafplio Adventure Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us design the perfect Peloponnese experience tailored to your interests. 
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

// Tour Section Component
function TourSection({ 
  title, 
  subtitle, 
  description, 
  tours, 
  bgColor = "bg-white" 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  tours: any[]; 
  bgColor?: string;
}) {
  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="container-custom">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">{subtitle}</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">{title}</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">{description}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tour Card Component
function TourCard({ tour }: { tour: any }) {
  return (
    <Link 
      href={`/tours/nafplio/${tour.slug}`}
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
