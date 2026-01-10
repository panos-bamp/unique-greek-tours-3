import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Users, Car, Heart, Compass, UtensilsCrossed, Footprints, Mountain, Wine, Camera, Landmark, Ship, TreePine } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Tours in Greece | Unique Greek Tours - Peloponnese Excursions",
  description: "Discover premium private tours in Greece with Unique Greek Tours. Explore the Peloponnese with expert local guides, luxury vehicles, and authentic experiences. Tailored itineraries for families, couples, and groups.",
  keywords: "private tours Greece, Peloponnese tours, Greece excursions, Nafplio tours, Athens tours, Kalamata tours, Greek guided tours, luxury Greece tours",
};

const destinations = [
  {
    name: "Nafplio",
    slug: "nafplio",
    image: "/images/destination-nafplio.jpg",
    tours: 18,
    description: "Greece's most romantic town with Venetian charm",
  },
  {
    name: "Athens",
    slug: "athens",
    image: "/images/destination-athens.jpg",
    tours: 2,
    description: "Birthplace of democracy and Western civilization",
  },
  {
    name: "Kalamata",
    slug: "kalamata",
    image: "/images/destination-kalamata.jpg",
    tours: 5,
    description: "Gateway to the Mani and olive oil paradise",
  },
  {
    name: "Gythio",
    slug: "gythio",
    image: "/images/destination-gythio.jpg",
    tours: 3,
    description: "Ancient Spartan port with stunning coastline",
  },
  {
    name: "Porto Heli",
    slug: "portoheli",
    image: "/images/destination-portoheli.jpg",
    tours: 2,
    description: "The Greek Riviera's hidden gem",
  },
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

const whyChooseUs = [
  { icon: Users, title: "Tailored Itineraries", description: "Your journey is crafted around what you want to see and do" },
  { icon: Car, title: "Luxury Fleet", description: "Travel in style with our top-tier VIP vehicles" },
  { icon: Compass, title: "Expert Local Guides", description: "Passionate locals who share history, mythology, and culture" },
  { icon: MapPin, title: "Door-to-Door Service", description: "Pickup and drop-off at your hotel, villa, or port" },
  { icon: Heart, title: "Authentic Experiences", description: "Family tavernas, local artisans, and off-the-beaten-path gems" },
];

export default function ToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/mycenae-tour-hero-1.jpg"
          alt="Private Tours in Greece"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Private Tours in Greece
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience Greece like never before with expertly curated excursions that combine luxury, comfort, and local insight for an unforgettable journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Experience Greece like never before with <strong>Unique Greek Tours</strong>, your trusted partner for premium <strong>private tours in Greece</strong>. Whether you're exploring the rugged beauty of the Peloponnese or tracing the footsteps of ancient civilizations, our expertly curated excursions combine luxury, comfort, and local insight for an unforgettable journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We design our private tours for travelers who crave authenticity, flexibility, and a deeper connection with the places they visit. With our fleet of new-generation VIP vehicles and experienced local guides, every tour is an immersive experience that reveals the hidden gems and iconic landmarks of Greece in complete comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Why Choose Our Private Tours?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There's no better way to explore Greece than on a private tour, designed with your interests, pace, and preferences in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid - Like Greeking.me */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Explore Our Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the best of each destination with our handpicked tours and local experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/tours/${destination.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{destination.description}</p>
                  <span className="text-accent font-semibold text-sm">{destination.tours} Tours →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations We Visit */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Where We Go – Popular Destinations
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our private tours focus on the Peloponnese and Attica regions, rich in history, natural beauty, and local flavor
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularDestinations.map((dest, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <h3 className="font-display text-lg font-bold text-white mb-1">{dest.name}</h3>
                <p className="text-blue-100 text-sm">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themed Tours Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Custom Excursions & Themed Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking for something unique? Our team can create fully customized private tours to match your personal interests
            </p>
          </div>

          {/* Food & Culinary Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Food & Culinary Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                The best way to understand Greek culture is through its food. Our <strong>food tasting tours in Greece</strong> take you beyond tourist restaurants to discover authentic Greek cuisine at its finest. From savory moussaka and fresh seafood to creamy tzatziki and honey-drenched baklava, every bite tells a story of tradition passed down through generations.
              </p>
              <p className="leading-relaxed mb-4">
                Visit family-run tavernas in Nafplio's charming old town, sample local delicacies at Kalamata's bustling markets, or enjoy a traditional Greek meze experience overlooking the Argolic Gulf. Our expert guides introduce you to passionate local chefs, farmers, and artisans who share the secrets of Greek gastronomy.
              </p>
              <p className="leading-relaxed">
                Whether you're a passionate foodie or simply curious about Greek culinary traditions, our food tours offer an unforgettable journey through flavors that have delighted palates for thousands of years.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/tours/nafplio/nafplio-food-tasting-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Explore our Food Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Wine & Olive Oil Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <Wine className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Wine & Olive Oil Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Greece has been producing wine and olive oil for over 4,000 years, and our <strong>wine tasting tours</strong> and <strong>olive oil experiences</strong> let you taste this incredible heritage firsthand. The Peloponnese is home to some of Greece's finest vineyards, including the legendary Nemea region, famous for its robust Agiorgitiko red wines.
              </p>
              <p className="leading-relaxed mb-4">
                Visit award-winning wineries where passionate vintners guide you through tastings of indigenous Greek varietals. Learn the art of wine pairing with local cheeses and cured meats. In Kalamata, discover why Greek olive oil is called "liquid gold" at traditional olive mills where families have perfected their craft for generations.
              </p>
              <p className="leading-relaxed">
                Our wine and olive oil tours combine stunning vineyard landscapes, educational experiences, and of course, plenty of delicious tastings—the perfect blend for anyone who appreciates the finer things in life.
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="/tours/nafplio/nafplio-winetasting-tour-nemea" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Wine Tasting Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/kalamata/kalamata-olive-oil-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Olive Oil Tours <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Historical & Archaeological Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <Landmark className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Historical & Archaeological Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Greece is the cradle of Western civilization, and our <strong>historical tours</strong> bring ancient legends to life. Walk in the footsteps of kings at Mycenae, where Agamemnon once ruled. Stand in the ancient theater of Epidaurus, where a whisper carries perfectly to the last row. Explore the birthplace of the Olympic Games at Ancient Olympia.
              </p>
              <p className="leading-relaxed mb-4">
                Our expert licensed guides—archaeologists and historians trained by the Greek Ministry of Culture—transform archaeological sites into living stories. They'll share myths, explain architectural marvels, and reveal secrets that guidebooks miss. From the UNESCO-listed Acropolis to the Byzantine splendor of Mystras, every site becomes an unforgettable journey through time.
              </p>
              <p className="leading-relaxed">
                Whether you're fascinated by ancient Sparta, intrigued by Oracle of Delphi, or captivated by Minoan mysteries, our historical tours offer an educational and inspiring experience that connects you with 5,000 years of human achievement.
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link href="/tours/nafplio/nafplio-mycenae-epidavros" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Mycenae & Epidaurus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/nafplio/nafplio-ancient-olympia-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Ancient Olympia <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/athens/athens-city-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Acropolis Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hiking & Nature Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <Mountain className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Hiking & Nature Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Beyond the ancient ruins and beaches, Greece offers breathtaking natural landscapes perfect for <strong>hiking adventures</strong>. The Peloponnese features dramatic gorges, pine-covered mountains, and coastal trails that rival any in Europe. Our hiking tours take you through terrain that few tourists ever see.
              </p>
              <p className="leading-relaxed mb-4">
                Trek through the spectacular Lousios Gorge, where cliff-hanging monasteries cling to sheer rock faces. Hike the forested trails around Vytina and Elati, Arcadia's mountain villages. Follow ancient paths from Nafplio to Karathona Beach through olive groves and past historic fortifications. Explore the wild Mani Peninsula with its dramatic coastline and stone tower villages.
              </p>
              <p className="leading-relaxed">
                Our hiking tours cater to all fitness levels—from leisurely nature walks to challenging mountain treks. Each route combines stunning scenery with opportunities to discover hidden churches, meet shepherds, and experience rural Greek life far from tourist crowds.
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link href="/tours/nafplio/nafplio-hiking-lousios" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Lousios Gorge Hike <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/nafplio/nafplio-hiking-vytina-elati" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Mountain Villages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/nafplio/nafplio-hiking-karathona-beach" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Coastal Hiking <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Kayaking & Sea Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <Ship className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Kayaking & Sea Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Discover Greece from the water with our unique <strong>kayaking tours</strong>. Paddle through crystal-clear Aegean waters, explore hidden sea caves, and reach secluded beaches inaccessible by land. The coastline around Nafplio offers some of the most spectacular kayaking in Greece.
              </p>
              <p className="leading-relaxed mb-4">
                Glide beneath the imposing Bourtzi fortress as the sun rises over the Argolic Gulf. Kayak to ancient sunken cities near Tolo, where you can snorkel over submerged ruins that date back thousands of years. Explore the dramatic sea caves of the Argolid coastline, discovering hidden swimming spots along the way.
              </p>
              <p className="leading-relaxed">
                No experience necessary—our experienced guides provide all equipment and instruction. These tours combine adventure, history, and natural beauty for an unforgettable way to experience the Greek coastline.
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="/tours/nafplio/nafplio-kayak-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Nafplio Kayak Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/nafplio/nafplio-sunken-kayak-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Sunken City Kayaking <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Photography Tours */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <Camera className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Photography Tours</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Greece offers endless opportunities for stunning photographs, and our <strong>photography tours</strong> take you to the most photogenic locations at the perfect times. Capture the golden light of sunset over Nafplio's harbor, the dramatic ruins of Mycenae at dawn, or the colorful boats of a traditional fishing village.
              </p>
              <p className="leading-relaxed mb-4">
                Our guides know the best vantage points, the most beautiful villages, and the ideal times for capturing Greece's magical light. Whether you're a professional photographer or an enthusiastic amateur, we'll help you create images that capture the essence of Greece.
              </p>
              <p className="leading-relaxed">
                From the whitewashed churches and bougainvillea-draped streets of Monemvasia to the wild landscapes of the Mani Peninsula, our photography tours combine beautiful destinations with practical guidance to help you return home with unforgettable images.
              </p>
            </div>
          </div>

          {/* Agritourism & Rural Experiences */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <TreePine className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-primary font-bold">Greece Agritourism & Rural Experiences</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Experience authentic rural Greece with our <strong>agritourism tours</strong> that connect you with the land and its people. Visit working farms and apiaries, learn traditional crafts from local artisans, and discover how Greek families have lived off the land for generations.
              </p>
              <p className="leading-relaxed mb-4">
                Our beekeeping experience takes you into the world of Greek honey production, one of the finest in the Mediterranean. Visit a family apiary, learn about beekeeping traditions, and taste varieties of honey you won't find anywhere else. At the Malevi Monastery, discover how monks have been making wine and preserves for centuries using ancient techniques.
              </p>
              <p className="leading-relaxed">
                These intimate experiences offer a window into a way of life that is rapidly disappearing, giving you memories and connections that last far longer than any souvenir.
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="/tours/nafplio/nafplio-beekeeping-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Beekeeping Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/tours/nafplio/nafplio-malevi-tour" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark">
                Malevi Monastery Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are Our Tours For */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Who Are Our Tours For?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're on a romantic honeymoon, a family holiday, or a solo cultural journey, our tours are designed for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Couples looking for intimate experiences",
              "Seniors who appreciate comfort and slower-paced travel",
              "Families seeking educational and fun activities",
              "Small groups wanting exclusivity and personalized attention",
              "Cruise passengers with limited time and specific interests",
              "Solo travelers seeking safe, guided exploration",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-600 mt-10 max-w-3xl mx-auto">
            With over a decade of experience delivering premium <strong>private tours in Greece</strong>, we know how to make every traveler feel like a VIP.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Every Booking Includes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Professional English-speaking driver and licensed guide",
                "Luxury transportation in new-generation VIP vehicles",
                "Flexible schedules adapted to your pace",
                "Entry tickets available (optional)",
                "Full itinerary planning and support",
                "Door-to-door hotel pickup and drop-off",
                "Bottled water and refreshments",
                "Full refund in case of adverse weather",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-sand-50 rounded-lg p-4">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/monemvasia-tour-hero-1.jpg"
            alt="Greece Tours"
            fill
            className="object-cover brightness-40"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Start Your Private Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            There's no better way to experience the beauty, history, and culture of Greece than with private tours by Unique Greek Tours. Browse our destinations, book your tour, or contact us to design your own Greek adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all text-lg"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/plan-trip"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-lg"
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
