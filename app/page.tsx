import Link from "next/link";
import Image from "next/image";
import { MapPin, Compass, ArrowRight, Star, Users, Clock, Utensils, Mountain, Camera, Wine, Hiking, Anchor, UtensilsCrossed } from "lucide-react";

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

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4">Where We Go</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Browse our carefully curated private tours organized by destination across the Peloponnese and beyond
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/tours/${dest.slug}`}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-3xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-blue-100 mb-3">{dest.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-light font-semibold">{dest.tourCount} Tours</span>
                    <ArrowRight className="h-5 w-5 text-accent-light group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Experience - UPDATED SECTION */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-4">Explore by Experience</h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Discover Greece through experiences that match your passions - from ancient history to culinary adventures
          </p>
          
          <div className="space-y-16">
            {/* Food & Culinary Tours */}
            <ExperienceSection
              icon={<UtensilsCrossed className="h-12 w-12 text-accent" />}
              title="Greece Food & Culinary Tours"
              description="The best way to understand Greek culture is through its food. Our food tasting tours in Greece take you beyond tourist restaurants to discover authentic Greek cuisine at its finest. From savory moussaka and fresh seafood to creamy tzatziki and honey-drenched baklava, every bite tells a story of tradition passed down through generations. Experience traditional cooking classes, visit family-run tavernas, explore local markets, and taste regional specialties prepared by passionate Greek cooks."
              tours={[
                { name: "Nafplio Food Tasting Tour", url: "/tours/nafplio/nafplio-food-tasting-tour" },
                { name: "Culture & Taste Tour", url: "/tours/nafplio/nafplio-culture-taste-tour" },
                { name: "Greek Cooking Class", url: "/tours/nafplio/nafplio-cooking-class" },
              ]}
              linkText="Explore Food Tours"
              linkUrl="/tours/nafplio/nafplio-food-tasting-tour"
            />
            
            {/* Wine & Olive Oil Tours */}
            <ExperienceSection
              icon={<Wine className="h-12 w-12 text-accent" />}
              title="Greece Wine & Olive Oil Tours"
              description="Greece has been producing wine and olive oil for over 4,000 years. Visit award-winning wineries where passionate vintners guide you through tastings of indigenous Greek varietals. Learn the art of wine pairing with local cheeses and cured meats. In Kalamata, discover why Greek olive oil is called 'liquid gold' at traditional olive mills. Experience the terroir of Nemea, taste rare Agiorgitiko wines, and understand the ancient traditions that make Greek wine and olive oil world-renowned."
              tours={[
                { name: "Nemea Wine Tasting Tour", url: "/tours/nafplio/nafplio-winetasting-tour-nemea" },
                { name: "Olive Oil & Epidavros Tour", url: "/tours/nafplio/nafplio-oil-tasting-epidavros-tour" },
                { name: "Poros Wine Tasting", url: "/tours/poros/poros-wine-tasting" },
              ]}
              linkText="Wine Tasting Tours"
              linkUrl="/tours/nafplio/nafplio-winetasting-tour-nemea"
            />
            
            {/* Historical & Archaeological Tours */}
            <ExperienceSection
              icon={<Compass className="h-12 w-12 text-accent" />}
              title="Greece Historical & Archaeological Tours"
              description="Greece is the cradle of Western civilization, and our historical tours bring ancient legends to life. Walk in the footsteps of kings at Mycenae. Stand in the ancient theater of Epidaurus where 14,000 spectators once gathered. Explore the birthplace of the Olympic Games at Ancient Olympia. Visit the oracle at Delphi where kings sought divine wisdom. Our expert licensed guides transform archaeological sites into living stories, revealing the myths, battles, and triumphs that shaped Western culture."
              tours={[
                { name: "Mycenae & Epidaurus Tour", url: "/tours/nafplio/nafplio-mycenae-epidavros" },
                { name: "Ancient Olympia Day Trip", url: "/tours/nafplio/nafplio-ancient-olympia-tour" },
                { name: "Sparta & Mystras Tour", url: "/tours/nafplio/nafplio-sparta-mystras-tour" },
                { name: "Monemvasia Castle Tour", url: "/tours/nafplio/nafplio-monemvasia-tour" },
                { name: "Corinth & Epidavros Tour", url: "/tours/nafplio/nafplio-corinth-epidavros-tour" },
              ]}
              linkText="Archaeological Tours"
              linkUrl="/tours/nafplio/nafplio-mycenae-epidavros"
            />
            
            {/* Hiking & Nature Tours */}
            <ExperienceSection
              icon={<Mountain className="h-12 w-12 text-accent" />}
              title="Greece Hiking & Nature Tours"
              description="Beyond the ancient ruins and beaches, Greece offers breathtaking natural landscapes perfect for hiking adventures. Trek through the spectacular Lousios Gorge, where cliff-hanging monasteries cling to sheer rock faces. Hike the forested trails around Vytina and Elati in the Arcadian mountains. Follow ancient paths from Nafplio to Karathona Beach through olive groves and coastal cliffs. Discover hidden waterfalls, Byzantine monasteries, and panoramic mountain vistas that few tourists ever see."
              tours={[
                { name: "Lousios Gorge Hike", url: "/tours/nafplio/nafplio-hiking-lousios" },
                { name: "Vytina & Elati Hike", url: "/tours/nafplio/nafplio-hiking-vytina-elati" },
                { name: "Mycenae Hiking Tour", url: "/tours/nafplio/nafplio-hiking-mycenae" },
                { name: "Karathona Beach Hike", url: "/tours/nafplio/nafplio-hiking-karathona-beach" },
                { name: "Poros Hiking Tour", url: "/tours/poros/poros-hiking-tour" },
              ]}
              linkText="Hiking Tours"
              linkUrl="/tours/nafplio/nafplio-hiking-lousios"
            />
            
            {/* Kayaking & Sea Tours */}
            <ExperienceSection
              icon={<Anchor className="h-12 w-12 text-accent" />}
              title="Greece Kayaking & Sea Tours"
              description="Discover Greece from the water with our unique kayaking and sailing tours. Paddle through crystal-clear Aegean waters, explore hidden sea caves, and reach secluded beaches inaccessible by land. Glide beneath the imposing Bourtzi fortress in Nafplio. Kayak to ancient sunken cities near Tolo. Explore the dramatic sea caves of the Argolid coastline. Sail around the pine-covered island of Poros. Experience Greece's maritime heritage and pristine coastline from a completely different perspective."
              tours={[
                { name: "Nafplio Kayak Tour", url: "/tours/nafplio/nafplio-kayak-tour" },
                { name: "Sunken City Kayak Tour", url: "/tours/nafplio/nafplio-sunken-kayak-tour" },
                { name: "Porto Heli Sailing Tour", url: "/tours/portoheli/portoheli-sailing-tour" },
                { name: "Poros Kayaking Adventure", url: "/tours/poros/poros-kayaking-tour" },
              ]}
              linkText="Water Tours"
              linkUrl="/tours/nafplio/nafplio-kayak-tour"
            />
          </div>
        </div>
      </section>

      {/* Custom Excursions & Themed Tours - UPDATED SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Custom Excursions & Themed Tours</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Every traveler is unique, and so should be their journey. At Unique Greek Tours, we specialize in creating 
              <strong> fully customized private tours</strong> tailored to your exact interests, pace, and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sand-50 p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-primary-dark mb-4 flex items-center gap-3">
                <Star className="h-8 w-8 text-accent" />
                Your Interests, Your Tour
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're passionate about Byzantine art, ancient mythology, Greek wines, traditional crafts, 
                or off-the-beaten-path villages, we'll design a tour that matches your specific interests perfectly.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Photography-focused tours with perfect lighting times</li>
                <li>• Family tours with kid-friendly activities</li>
                <li>• Romantic honeymoon itineraries</li>
                <li>• Cultural immersion with local families</li>
                <li>• Religious and pilgrimage tours</li>
                <li>• Film location tours (Mamma Mia, 300, Troy)</li>
              </ul>
            </div>

            <div className="bg-sand-50 p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-primary-dark mb-4 flex items-center gap-3">
                <Clock className="h-8 w-8 text-accent" />
                Your Schedule, Your Pace
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We adapt to your timeline and energy level. Whether you're on a tight cruise ship schedule, 
                have mobility considerations, or want to spend extra time at sites that fascinate you most.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Half-day express tours for cruise passengers</li>
                <li>• Multi-day comprehensive tours with overnight stays</li>
                <li>• Accessible tours for travelers with mobility needs</li>
                <li>• Early morning or sunset tours for photographers</li>
                <li>• Leisurely-paced tours for seniors</li>
                <li>• Combined tours linking multiple regions</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-2xl text-center">
            <h3 className="font-display text-3xl mb-4">Ready to Create Your Perfect Greek Adventure?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Share your interests, travel dates, and preferences with us. Our team will craft a personalized 
              itinerary that brings your Greek travel dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/plan-trip" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all"
              >
                Plan Your Custom Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <h4 className="font-semibold text-primary-dark mb-2">Tell Us Your Dreams</h4>
              <p className="text-sm text-gray-600">Fill out our trip planning form with your interests and preferences</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <h4 className="font-semibold text-primary-dark mb-2">We Design Your Tour</h4>
              <p className="text-sm text-gray-600">Our experts create a personalized itinerary just for you</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <h4 className="font-semibold text-primary-dark mb-2">Experience Greece</h4>
              <p className="text-sm text-gray-600">Enjoy your perfectly tailored private Greek adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are Tours For */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">Who Are Our Tours For?</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
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
              <div key={idx} className="p-4 bg-white rounded-xl text-center border border-sand-200">
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

function ExperienceSection({ 
  icon, 
  title, 
  description, 
  tours, 
  linkText, 
  linkUrl 
}: { 
  icon: React.ReactNode;
  title: string; 
  description: string; 
  tours: Array<{ name: string; url: string }>;
  linkText: string; 
  linkUrl: string;
}) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-4">{title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">Featured Tours:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {tours.map((tour, idx) => (
                <Link 
                  key={idx}
                  href={tour.url}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors group"
                >
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                  <span>{tour.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href={linkUrl} 
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors group"
          >
            {linkText} 
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
