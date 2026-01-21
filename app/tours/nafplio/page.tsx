import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin, Star, Users } from "lucide-react";

export const metadata = {
  title: "Nafplio Tours & Experiences | Private Tours from Nafplio | Unique Greek Tours",
  description: "Discover Nafplio with private guided tours. Explore Venetian architecture, Palamidi fortress, Mycenae, Epidaurus, wine tasting, food tours, cooking classes, and authentic local experiences.",
  keywords: "Nafplio tours, Nafplio excursions, private tours Nafplio, Mycenae tour, Epidaurus tour, wine tasting Nafplio, food tour Nafplio, cooking class Greece",
};

const sightseeingTours = [
  {
    slug: "nafplio-city-tour",
    title: "Nafplio City Walking Tour",
    description: "Discover Nafplio's Venetian old town, Palamidi fortress views, and hidden gems with a local guide.",
    duration: "4 hours",
    price: "€120",
    type: "Private",
    image: "/images/nafplio-city-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-mycenae-epidavros",
    title: "Mycenae & Epidaurus Tour",
    description: "Visit two UNESCO World Heritage sites - the ancient citadel of Mycenae and the legendary theater of Epidaurus.",
    duration: "8 hours",
    price: "€280",
    type: "Private",
    image: "/images/mycenae-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-corinth-epidavros-tour",
    title: "Corinth & Epidaurus Tour",
    description: "Explore Ancient Corinth, the Corinth Canal, and the acoustically perfect theater of Epidaurus.",
    duration: "9 hours",
    price: "€320",
    type: "Private",
    image: "/images/round-trip-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-sparta-mystras-tour",
    title: "Sparta & Mystras Byzantine Tour",
    description: "Walk in the footsteps of King Leonidas and explore the Byzantine ghost town of Mystras.",
    duration: "10 hours",
    price: "€350",
    type: "Private",
    image: "/images/sparta-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-ancient-olympia-tour",
    title: "Ancient Olympia Day Trip",
    description: "Journey to the birthplace of the Olympic Games and explore the archaeological site and museum.",
    duration: "Full day",
    price: "€380",
    type: "Private",
    image: "/images/olympia-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-monemvasia-tour",
    title: "Monemvasia Castle Tour",
    description: "Discover the hidden medieval fortress town carved into a dramatic rock peninsula.",
    duration: "10 hours",
    price: "€360",
    type: "Private",
    image: "/images/monemvasia-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-argos-cultural-tour",
    title: "Argos Cultural Heritage Tour",
    description: "Explore ancient Argos, one of the oldest continuously inhabited cities in the world.",
    duration: "6 hours",
    price: "€180",
    type: "Private",
    image: "/images/mycenae-tour-hero-2.jpg",
  },
];

const culinaryTours = [
  {
    slug: "nafplio-food-tasting-tour",
    title: "Nafplio Food Tasting Tour",
    description: "Savor authentic Greek flavors at family tavernas, delis, and hidden culinary gems in the old town.",
    duration: "4 hours",
    price: "€95",
    type: "Private",
    image: "/images/kalamata-food-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-culture-taste-tour",
    title: "Nafplio Culture & Taste Tour",
    description: "Combine history and gastronomy - explore Palamidi fortress, Akronafplia, and taste local wines and delicacies.",
    duration: "5 hours",
    price: "€130",
    type: "Private",
    image: "/images/culture-taste-hero-1.jpg",
  },
  {
    slug: "nafplio-cooking-class",
    title: "Greek Cooking Class Experience",
    description: "Hands-on cooking class at a charming farmhouse with pool, learning traditional recipes from a local family.",
    duration: "4 hours",
    price: "€110",
    type: "Private",
    image: "/images/cooking-class-hero-1.jpg",
  },
  {
    slug: "nafplio-winetasting-tour-nemea",
    title: "Nemea Wine Tasting Tour",
    description: "Visit award-winning wineries in Nemea and taste the famous Agiorgitiko red wines.",
    duration: "6 hours",
    price: "€220",
    type: "Private",
    image: "/images/wine-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-oil-tasting-epidavros-tour",
    title: "Olive Oil & Epidaurus Tour",
    description: "Combine olive oil tasting at traditional mills with a visit to the ancient theater of Epidaurus.",
    duration: "8 hours",
    price: "€260",
    type: "Private",
    image: "/images/kalamata-olive-oil-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-beekeeping-tour",
    title: "Beekeeping Experience",
    description: "Visit a family apiary, learn traditional beekeeping, and taste varieties of Greek honey.",
    duration: "4 hours",
    price: "€110",
    type: "Private",
    image: "/images/malevi-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-malevi-tour",
    title: "Malevi Monastery & Wine Tour",
    description: "Discover the historic Malevi Monastery and taste wines made using centuries-old techniques.",
    duration: "5 hours",
    price: "€160",
    type: "Private",
    image: "/images/malevi-tour-hero-2.jpg",
  },
];

const adventureTours = [
  {
    slug: "nafplio-kayak-tour",
    title: "Nafplio Kayak Tour",
    description: "Paddle beneath Bourtzi fortress and explore hidden coves along the Argolic Gulf.",
    duration: "4 hours",
    price: "€85",
    type: "Small Group",
    image: "/images/nafplio-kayak-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-sunken-kayak-tour",
    title: "Sunken City Kayaking & Snorkeling",
    description: "Kayak to ancient submerged ruins and snorkel over a sunken city near Tolo.",
    duration: "5 hours",
    price: "€95",
    type: "Small Group",
    image: "/images/nafplio-sunken-kayak-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-hiking-lousios",
    title: "Lousios Gorge Hiking",
    description: "Trek through spectacular gorge scenery past cliff-hanging monasteries and waterfalls.",
    duration: "8 hours",
    price: "€180",
    type: "Private",
    image: "/images/nafplio-hiking-lousios-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-hiking-vytina-elati",
    title: "Vytina & Elati Mountain Hike",
    description: "Explore the forested trails and traditional mountain villages of Arcadia.",
    duration: "7 hours",
    price: "€160",
    type: "Private",
    image: "/images/nafplio-hiking-vytina-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-hiking-karathona-beach",
    title: "Karathona Beach Coastal Hike",
    description: "Follow ancient paths through olive groves to the beautiful Karathona Beach.",
    duration: "4 hours",
    price: "€90",
    type: "Private",
    image: "/images/nafplio-hiking-karathona-tour-hero-1.jpg",
  },
  {
    slug: "nafplio-hiking-mycenae",
    title: "Mycenae Archaeological Hike",
    description: "Combine hiking with archaeology as you explore the trails around ancient Mycenae.",
    duration: "6 hours",
    price: "€150",
    type: "Private",
    image: "/images/nafplio-hiking-mycenae-tour-hero-1.jpg",
  },
];

export default function NafplioToursPage() {
  const totalTours = sightseeingTours.length + culinaryTours.length + adventureTours.length;
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Nafplio Greece - Bourtzi Fortress at sunset"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="container-custom relative z-10 text-white pb-16">
          <p className="text-accent-light uppercase tracking-widest mb-4">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">Nafplio</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mb-6">
            Greece's first capital and most romantic town. Discover Venetian architecture, 
            historic fortresses, and authentic experiences in the heart of the Peloponnese.
          </p>
          <div className="flex gap-6 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent-light" />
              <span>{totalTours} Tours Available</span>
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
          <p className="text-xl text-gray-700 leading-relaxed">
            Nafplio, the jewel of the Peloponnese, is a <strong>magical destination</strong> that combines 
            historic charm with modern Greek lifestyle. Often called Greece's most romantic town, its 
            cobblestone streets, neoclassical mansions, and impressive fortifications transport visitors 
            to another era.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            As Greece's first capital (1823-1834), Nafplio serves as the perfect base to explore the 
            Peloponnese's greatest treasures—from the ancient citadel of Mycenae and the legendary theater 
            of Epidaurus to hidden mountain villages and pristine coastlines. Our private tours from 
            Nafplio unlock these wonders with expert local guides and luxury transportation.
          </p>
        </div>
      </section>

      {/* Sightseeing Tours */}
      <TourSection
        subtitle="EXPLORE ANCIENT WONDERS"
        title="Sightseeing & Historical Tours"
        description="Discover the most important archaeological sites and historic destinations accessible from Nafplio. From UNESCO World Heritage Sites to hidden Byzantine treasures, our expert guides bring ancient Greece to life."
        tours={sightseeingTours}
        bgColor="bg-sand-50"
      />

      {/* Culinary Tours */}
      <TourSection
        subtitle="TASTE TRADITION"
        title="Culinary & Wine Experiences"
        description="Savor the authentic flavors of Greece with our food tours, wine tastings, cooking classes, and unique culinary experiences. From family tavernas in Nafplio's old town to world-renowned Nemea wineries."
        tours={culinaryTours}
        bgColor="bg-white"
      />

      {/* Adventure Tours */}
      <TourSection
        subtitle="ACTIVE EXPLORATION"
        title="Adventure & Nature Tours"
        description="Experience the Peloponnese's stunning natural landscapes through kayaking, hiking, and outdoor adventures. From sea caves to mountain gorges, discover Greece's wild beauty."
        tours={adventureTours}
        bgColor="bg-sand-50"
      />

      {/* Why Nafplio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Start Your Journey in Nafplio?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Strategic Location</h3>
              <p className="text-gray-600">2 hours from Athens, central to all major Peloponnese sites</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Rich History</h3>
              <p className="text-gray-600">Greece's first capital with Venetian, Ottoman, and Greek heritage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Stunning Beauty</h3>
              <p className="text-gray-600">Romantic old town, seaside promenades, and dramatic fortresses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">Authentic Experience</h3>
              <p className="text-gray-600">Local tavernas, artisan shops, and genuine Greek hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/nafplio-city-tour-hero-2.jpg"
          alt="Plan your Nafplio trip"
          fill
          className="object-cover brightness-50"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Nafplio Adventure Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us design the perfect Peloponnese experience tailored to your interests. 
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

// Tour Section Component
function TourSection({ 
  subtitle, 
  title, 
  description, 
  tours, 
  bgColor = "bg-white" 
}: { 
  subtitle: string;
  title: string; 
  description: string; 
  tours: any[]; 
  bgColor?: string;
}) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container-custom">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{subtitle}</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">{title}</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">{description}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
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
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand-200"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            {tour.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="text-lg font-bold">From {tour.price}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{tour.description}</p>
        <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors">
          View Tour Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
