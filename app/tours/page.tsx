import Link from "next/link";
import Image from "next/image";
import { MapPin, Compass, ArrowRight, Star, Users, Clock, Utensils, Mountain, Camera } from "lucide-react";

export const metadata = {
  title: "Private Tours in Greece | Unique Greek Tours - Peloponnese Excursions",
  description: "Browse our authentic Peloponnese tours by destination or category. Private tours to Nafplio, Poros, Porto Heli, Athens, Kalamata. Archaeological sites, food tours, wine tasting, and nature adventures.",
  keywords: "private tours Greece, Peloponnese tours, Nafplio tours, Poros tours, Porto Heli tours, Mycenae tour, Epidaurus tour, Greek food tours, wine tasting Greece",
};

const destinations = [
  {
    name: "Nafplio",
    slug: "nafplio",
    description: "Greece's most romantic town with Venetian charm",
    tourCount: 20,
    image: "/images/destination-nafplio.jpg",
  },
  {
    name: "Poros",
    slug: "poros",
    description: "Saronic island adventures - hiking, kayaking & wine",
    tourCount: 5,
    image: "/images/destination-poros.jpg",
  },
  {
    name: "Porto Heli",
    slug: "portoheli",
    description: "Greek Riviera - sailing and ancient sites",
    tourCount: 3,
    image: "/images/destination-portoheli.jpg",
  },
  {
    name: "Athens",
    slug: "athens",
    description: "Birthplace of democracy and Western civilization",
    tourCount: 2,
    image: "/images/destination-athens.jpg",
  },
  {
    name: "Kalamata",
    slug: "kalamata",
    description: "Gateway to the Mani and olive oil paradise",
    tourCount: 5,
    image: "/images/destination-kalamata.jpg",
  },
  {
    name: "Gythio",
    slug: "gythio",
    description: "Ancient Spartan port with stunning coastline",
    tourCount: 3,
    image: "/images/destination-gythio.jpg",
  },
];

const categories = [
  { name: "Archaeological", slug: "archaeological", icon: "🏛️", description: "UNESCO sites, ancient ruins" },
  { name: "Food & Wine", slug: "food-wine", icon: "🍷", description: "Tastings, cooking classes" },
  { name: "Nature & Hiking", slug: "nature", icon: "🌿", description: "Trails, gorges, beaches" },
  { name: "Water Sports", slug: "water", icon: "🚣", description: "Kayaking, sailing, snorkeling" },
];

const popularDestinations = [
  { name: "Ancient Olympia", description: "Birthplace of the Olympic Games" },
  { name: "Mycenae", description: "Home of King Agamemnon" },
  { name: "Epidaurus", description: "Ancient theater with perfect acoustics" },
  { name: "Monemvasia", description: "Medieval castle town on the rock" },
  { name: "Mystras & Sparta", description: "Byzantine ruins and Spartan legends" },
  { name: "Delphi", description: "The Oracle and center of the ancient world" },
  { name: "Mani Peninsula", description: "Wild beauty and tower houses" },
  { name: "Corinth", description: "Ancient city and canal crossing" },
  { name: "Nemea", description: "Famous wine region with ancient temple" },
  { name: "Lousios Gorge", description: "Dramatic gorge with cliff monasteries" },
  { name: "Diros Caves", description: "Spectacular underground lakes" },
  { name: "Acropolis", description: "The iconic symbol of Athens" },
];

export default function ToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/mycenae-tour-hero-1.jpg"
          alt="Private Tours in Greece"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Private Tours in <span className="text-accent-light">Greece</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
            Experience Greece like never before with expertly curated excursions that combine 
            luxury, comfort, and local insight for an unforgettable journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Experience Greece like never before with <strong>Unique Greek Tours</strong>, your trusted partner 
            for premium <strong>private tours in Greece</strong>. Whether you're exploring the rugged beauty 
            of the Peloponnese or tracing the footsteps of ancient civilizations, our expertly curated 
            excursions combine luxury, comfort, and local insight for an unforgettable journey.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We design our private tours for travelers who crave authenticity, flexibility, and a deeper 
            connection with the places they visit. With our fleet of new-generation VIP vehicles and 
            experienced local guides, every tour is an immersive experience that reveals the hidden gems 
            and iconic landmarks of Greece in complete comfort.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Why Choose Our Private Tours?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Star className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Tailored Itineraries</h3>
              <p className="text-sm text-gray-600">Crafted around your interests</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Expert Guides</h3>
              <p className="text-sm text-gray-600">Passionate local historians</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Door-to-Door</h3>
              <p className="text-sm text-gray-600">Hotel pickup & drop-off</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Utensils className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Authentic Food</h3>
              <p className="text-sm text-gray-600">Family tavernas & local artisans</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Flexible Schedule</h3>
              <p className="text-sm text-gray-600">Your pace, your preferences</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Camera className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-dark mb-2">Hidden Gems</h3>
              <p className="text-sm text-gray-600">Off-the-beaten-path spots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Destination */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="h-10 w-10 text-accent" />
            <p className="text-accent uppercase tracking-widest text-sm">EXPLORE BY DESTINATION</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Choose Your Starting Point</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Meet the best of each destination with our handpicked tours and local experiences
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Link 
                key={dest.slug}
                href={`/tours/${dest.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-3xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-blue-100 mb-3">{dest.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{dest.tourCount} Tours</span>
                    <span className="flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <Compass className="h-10 w-10 text-accent" />
            <p className="text-accent uppercase tracking-widest text-sm">EXPLORE BY EXPERIENCE</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Browse by Category</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Discover tours by experience type: Archaeological, Cultural, Food & Wine, Nature
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.slug}
                href={`/tours/category/${cat.slug}`}
                className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-display text-2xl font-bold text-primary-dark mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4">Where We Go</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Our private tours focus on the Peloponnese and Attica regions, rich in history, natural beauty, and local flavor
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest, idx) => (
              <div key={idx} className="p-4 border border-sand-200 rounded-xl hover:border-accent hover:shadow-md transition-all">
                <h3 className="font-semibold text-primary-dark">{dest.name}</h3>
                <p className="text-sm text-gray-600">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themed Tours Section */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Custom Excursions & Themed Tours</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Looking for something unique? Our team can create fully customized private tours to match your personal interests
          </p>
          
          <div className="space-y-16">
            <ThemedSection
              title="Greece Food & Culinary Tours"
              description="The best way to understand Greek culture is through its food. Our food tasting tours in Greece take you beyond tourist restaurants to discover authentic Greek cuisine at its finest. From savory moussaka and fresh seafood to creamy tzatziki and honey-drenched baklava, every bite tells a story of tradition passed down through generations."
              linkText="Explore our Food Tours"
              linkUrl="/tours/nafplio/nafplio-food-tasting-tour/"
            />
            
            <ThemedSection
              title="Greece Wine & Olive Oil Tours"
              description="Greece has been producing wine and olive oil for over 4,000 years. Visit award-winning wineries where passionate vintners guide you through tastings of indigenous Greek varietals. Learn the art of wine pairing with local cheeses and cured meats. In Kalamata, discover why Greek olive oil is called 'liquid gold' at traditional olive mills."
              linkText="Wine Tasting Tours"
              linkUrl="/tours/nafplio/nafplio-winetasting-tour-nemea/"
            />
            
            <ThemedSection
              title="Greece Historical & Archaeological Tours"
              description="Greece is the cradle of Western civilization, and our historical tours bring ancient legends to life. Walk in the footsteps of kings at Mycenae. Stand in the ancient theater of Epidaurus. Explore the birthplace of the Olympic Games at Ancient Olympia. Our expert licensed guides transform archaeological sites into living stories."
              linkText="Mycenae & Epidaurus"
              linkUrl="/tours/nafplio/nafplio-mycenae-epidavros/"
            />
            
            <ThemedSection
              title="Greece Hiking & Nature Tours"
              description="Beyond the ancient ruins and beaches, Greece offers breathtaking natural landscapes perfect for hiking adventures. Trek through the spectacular Lousios Gorge, where cliff-hanging monasteries cling to sheer rock faces. Hike the forested trails around Vytina and Elati. Follow ancient paths from Nafplio to Karathona Beach through olive groves."
              linkText="Lousios Gorge Hike"
              linkUrl="/tours/nafplio/nafplio-hiking-lousios/"
            />
            
            <ThemedSection
              title="Greece Kayaking & Sea Tours"
              description="Discover Greece from the water with our unique kayaking tours. Paddle through crystal-clear Aegean waters, explore hidden sea caves, and reach secluded beaches inaccessible by land. Glide beneath the imposing Bourtzi fortress. Kayak to ancient sunken cities near Tolo. Explore the sea caves of the Argolid coastline."
              linkText="Nafplio Kayak Tour"
              linkUrl="/tours/nafplio/nafplio-kayak-tour/"
            />
          </div>
        </div>
      </section>

      {/* Who Are Tours For */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Who Are Our Tours For?</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Whether you're on a romantic honeymoon, a family holiday, or a solo cultural journey, our tours are designed for everyone
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Couples looking for intimate experiences",
              "Seniors who appreciate comfort and slower-paced travel",
              "Families seeking educational and fun activities",
              "Small groups wanting exclusivity and personalized attention",
              "Cruise passengers with limited time and specific interests",
              "Solo travelers seeking safe, guided exploration",
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-sand-50 rounded-xl text-center">
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/monemvasia-tour-hero-1.jpg"
          alt="Greece Tours"
          fill
          className="object-cover brightness-50"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Private Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            There's no better way to experience the beauty, history, and culture of Greece than 
            with private tours by Unique Greek Tours. Browse our destinations, book your tour, 
            or contact us to design your own Greek adventure.
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

function ThemedSection({ title, description, linkText, linkUrl }: { title: string; description: string; linkText: string; linkUrl: string }) {
  return (
    <div className="max-w-4xl">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-4">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">{description}</p>
      <Link href={linkUrl} className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
        {linkText} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
