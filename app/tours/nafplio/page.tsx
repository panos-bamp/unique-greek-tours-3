import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin, Star, Users, Compass, Wine, Utensils, Mountain, Anchor, Castle, Landmark, ChefHat } from "lucide-react";

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
    price: "€80",
    type: "Private",
    image: "/images/nafplio-city-tour-hero-1.jpg",
    icon: Castle,
    highlights: ["Venetian old town", "Palamidi views", "Local guide"],
  },
  {
    slug: "nafplio-mycenae-epidavros",
    title: "Mycenae & Epidaurus Tour",
    description: "Visit two UNESCO World Heritage sites - the ancient citadel of Mycenae and the legendary theater of Epidaurus.",
    duration: "8 hours",
    price: "€160",
    type: "Private",
    image: "/images/mycenae-tour-hero-1.jpg",
    icon: Landmark,
    highlights: ["UNESCO sites", "Lion Gate", "Ancient theater"],
  },
  {
    slug: "nafplio-corinth-epidavros-tour",
    title: "Corinth & Epidaurus Tour",
    description: "Explore Ancient Corinth, the Corinth Canal, and the acoustically perfect theater of Epidaurus.",
    duration: "9 hours",
    price: "€230",
    type: "Private",
    image: "/images/round-trip-tour-hero-1.jpg",
    icon: Compass,
    highlights: ["Corinth Canal", "Ancient Corinth", "Epidavros theater"],
  },
  {
    slug: "nafplio-sparta-mystras-tour",
    title: "Sparta & Mystras Byzantine Tour",
    description: "Walk in the footsteps of King Leonidas and explore the Byzantine ghost town of Mystras.",
    duration: "10 hours",
    price: "€250",
    type: "Private",
    image: "/images/sparta-tour-hero-1.jpg",
    icon: Landmark,
    highlights: ["King Leonidas", "Byzantine Mystras", "UNESCO site"],
  },
  {
    slug: "nafplio-ancient-olympia-tour",
    title: "Ancient Olympia Day Trip",
    description: "Journey to the birthplace of the Olympic Games and explore the archaeological site and museum.",
    duration: "Full day",
    price: "€290",
    type: "Private",
    image: "/images/olympia-tour-hero-1.jpg",
    icon: Compass,
    highlights: ["Olympic Games site", "Zeus temple", "Museum"],
  },
  {
    slug: "nafplio-monemvasia-tour",
    title: "Monemvasia Castle Tour",
    description: "Discover the hidden medieval fortress town carved into a dramatic rock peninsula.",
    duration: "10 hours",
    price: "€310",
    type: "Private",
    image: "/images/monemvasia-tour-hero-1.jpg",
    icon: Castle,
    highlights: ["Medieval fortress", "Rock peninsula", "Byzantine churches"],
  },
  {
    slug: "nafplio-argos-cultural-tour",
    title: "Argos Cultural Heritage Tour",
    description: "Explore ancient Argos, one of the oldest continuously inhabited cities in the world.",
    duration: "6 hours",
    price: "€190",
    type: "Private",
    image: "/images/mycenae-tour-hero-2.jpg",
    icon: Landmark,
    highlights: ["Ancient Argos", "Larisa castle", "Archaeological museum"],
  },
];

const culinaryTours = [
  {
    slug: "nafplio-food-tasting-tour",
    title: "Nafplio Food Tasting Tour",
    description: "Savor authentic Greek flavors at family tavernas, delis, and hidden culinary gems in the old town.",
    duration: "4 hours",
    price: "€100",
    type: "Private",
    image: "/images/kalamata-food-tour-hero-1.jpg",
    icon: Utensils,
    highlights: ["Family tavernas", "Local delis", "Hidden gems"],
  },
  {
    slug: "nafplio-culture-taste-tour",
    title: "Nafplio Culture & Taste Tour",
    description: "Combine history and gastronomy - explore Palamidi fortress, Akronafplia, and taste local wines and delicacies.",
    duration: "5 hours",
    price: "€140",
    type: "Private",
    image: "/images/culture-taste-hero-1.jpg",
    icon: Wine,
    highlights: ["Palamidi fortress", "Wine tasting", "Local delicacies"],
  },
  {
    slug: "nafplio-cooking-class",
    title: "Greek Cooking Class Experience",
    description: "Hands-on cooking class at a charming farmhouse with pool, learning traditional recipes from a local family.",
    duration: "4 hours",
    price: "€110",
    type: "Private",
    image: "/images/cooking-class-hero-1.jpg",
    icon: ChefHat,
    highlights: ["Hands-on cooking", "Traditional recipes", "Local family"],
  },
  {
    slug: "nafplio-winetasting-tour-nemea",
    title: "Nemea Wine Tasting Tour",
    description: "Visit award-winning wineries in Nemea and taste the famous Agiorgitiko red wines.",
    duration: "6 hours",
    price: "€150",
    type: "Private",
    image: "/images/wine-tour-hero-1.jpg",
    icon: Wine,
    highlights: ["Award-winning wineries", "Agiorgitiko wines", "Vineyard tour"],
  },
  {
    slug: "nafplio-oil-tasting-epidavros-tour",
    title: "Olive Oil & Epidaurus Tour",
    description: "Combine olive oil tasting at traditional mills with a visit to the ancient theater of Epidaurus.",
    duration: "8 hours",
    price: "€115",
    type: "Private",
    image: "/images/kalamata-olive-oil-tour-hero-1.jpg",
    icon: Utensils,
    highlights: ["Olive oil tasting", "Traditional mills", "Epidavros theater"],
  },
  {
    slug: "nafplio-beekeeping-tour",
    title: "Beekeeping Experience",
    description: "Visit a family apiary, learn traditional beekeeping, and taste varieties of Greek honey.",
    duration: "4 hours",
    price: "€50",
    type: "Private",
    image: "/images/malevi-tour-hero-1.jpg",
    icon: Compass,
    highlights: ["Family apiary", "Traditional beekeeping", "Greek honey"],
  },
  {
    slug: "nafplio-malevi-tour",
    title: "Holy Monastery of Malevi Tour",
    description: "Discover the historic Malevi Monastery and taste wines made using centuries-old techniques.",
    duration: "5 hours",
    price: "€130",
    type: "Private",
    image: "/images/malevi-tour-hero-2.jpg",
    icon: Wine,
    highlights: ["Malevi Monastery", "Monastery wines", "Ancient techniques"],
  },
];

const adventureTours = [
  {
    slug: "nafplio-kayak-tour",
    title: "Nafplio Kayak Tour",
    description: "Paddle beneath Bourtzi fortress and explore hidden coves along the Argolic Gulf.",
    duration: "4 hours",
    price: "€75",
    type: "Small Group",
    image: "/images/nafplio-kayak-tour-hero-1.jpg",
    icon: Anchor,
    highlights: ["Bourtzi fortress", "Hidden coves", "Argolic Gulf"],
  },
  {
    slug: "nafplio-sunken-kayak-tour",
    title: "Sunken City Kayaking & Snorkeling",
    description: "Kayak to ancient submerged ruins and snorkel over a sunken city near Tolo.",
    duration: "5 hours",
    price: "€95",
    type: "Small Group",
    image: "/images/nafplio-sunken-kayak-tour-hero-1.jpg",
    icon: Anchor,
    highlights: ["Sunken city", "Snorkeling", "Ancient ruins"],
  },
  {
    slug: "nafplio-hiking-lousios",
    title: "Lousios Gorge Hiking",
    description: "Trek through spectacular gorge scenery past cliff-hanging monasteries and waterfalls.",
    duration: "8 hours",
    price: "€130",
    type: "Private",
    image: "/images/nafplio-hiking-lousios-tour-hero-1.jpg",
    icon: Mountain,
    highlights: ["Spectacular gorge", "Cliff monasteries", "Waterfalls"],
  },
  {
    slug: "nafplio-hiking-vytina-elati",
    title: "Vytina & Elati Mountain Hike",
    description: "Explore the forested trails and traditional mountain villages of Arcadia.",
    duration: "7 hours",
    price: "€130",
    type: "Private",
    image: "/images/nafplio-hiking-vytina-tour-hero-1.jpg",
    icon: Mountain,
    highlights: ["Forested trails", "Mountain villages", "Arcadia"],
  },
  {
    slug: "nafplio-hiking-karathona-beach",
    title: "Karathona Beach Coastal Hike",
    description: "Follow ancient paths through olive groves to the beautiful Karathona Beach.",
    duration: "4 hours",
    price: "€80",
    type: "Private",
    image: "/images/nafplio-hiking-karathona-tour-hero-1.jpg",
    icon: Mountain,
    highlights: ["Ancient paths", "Olive groves", "Karathona Beach"],
  },
  {
    slug: "nafplio-hiking-mycenae",
    title: "Mycenae Archaeological Hike",
    description: "Combine hiking with archaeology as you explore the trails around ancient Mycenae.",
    duration: "6 hours",
    price: "€100",
    type: "Private",
    image: "/images/nafplio-hiking-mycenae-tour-hero-1.jpg",
    icon: Mountain,
    highlights: ["Hiking & archaeology", "Mycenae trails", "Ancient site"],
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
        baseSlug="nafplio"
        bgColor="bg-sand-50"
      />

      {/* Culinary Tours */}
      <TourSection
        subtitle="TASTE TRADITION"
        title="Culinary & Wine Experiences"
        description="Savor the authentic flavors of Greece with our food tours, wine tastings, cooking classes, and unique culinary experiences. From family tavernas in Nafplio's old town to world-renowned Nemea wineries."
        tours={culinaryTours}
        baseSlug="nafplio"
        bgColor="bg-white"
      />

      {/* Adventure Tours */}
      <TourSection
        subtitle="ACTIVE EXPLORATION"
        title="Adventure & Nature Tours"
        description="Experience the Peloponnese's stunning natural landscapes through kayaking, hiking, and outdoor adventures. From sea caves to mountain gorges, discover Greece's wild beauty."
        tours={adventureTours}
        baseSlug="nafplio"
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
  baseSlug,
  bgColor = "bg-white" 
}: { 
  subtitle: string;
  title: string; 
  description: string; 
  tours: any[]; 
  baseSlug: string;
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
            <TourCard key={tour.slug} tour={tour} baseSlug={baseSlug} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tour Card Component - UPDATED TO MATCH PORTO HELI STYLE
function TourCard({ tour, baseSlug }: { tour: any; baseSlug: string }) {
  const IconComponent = tour.icon || Compass;
  
  return (
    <Link 
      href={`/tours/${baseSlug}/${tour.slug}`} 
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
          <span className="font-bold text-primary-dark">
                      {tour.price.startsWith('€') ? `From ${tour.price}` : tour.price}
                    </span>
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
