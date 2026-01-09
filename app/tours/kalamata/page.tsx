import Image from "next/image";
import Link from "next/link";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";

const kalamataTours = [
  {
    title: "Ancient Olympia Tour",
    slug: "kalamata-ancient-olympia-tour",
    description: "Visit the birthplace of the Olympic Games. See the ancient stadium, Temple of Zeus, and world-famous archaeological museum.",
    image: "/images/kalamata-olympia-tour-hero-1.jpg",
    duration: "7 hours",
    price: "€140",
    groupSize: "Private",
  },
  {
    title: "Castle Olive Oil Tasting Tour",
    slug: "kalamata-olive-oil-tour",
    description: "Experience Greek olive oil culture at 13th century Castle of Androus. Olive walk, mill tours, expert tasting, and traditional meal.",
    image: "/images/kalamata-olive-oil-tour-hero-1.jpg",
    duration: "4 hours",
    price: "€95",
    groupSize: "Private",
  },
  {
    title: "Food Tasting Tour",
    slug: "kalamata-food-tasting-tour",
    description: "Experience Greek food like a local. Visit family stores, taste regional specialties, and explore hidden historic areas.",
    image: "/images/kalamata-food-tour-hero-1.jpg",
    duration: "3 hours",
    price: "€75",
    groupSize: "Walking",
  },
  {
    title: "Villages of Mani Tour",
    slug: "kalamata-mani-tour",
    description: "Explore coastal Mani villages. Visit Balcony of Kardamyli, natural port of Agios Nikolaos, and historic Kardamyli.",
    image: "/images/kalamata-mani-tour-hero-1.jpg",
    duration: "4 hours",
    price: "€85",
    groupSize: "Private",
  },
  {
    title: "Navarino Bay Mini Cruise",
    slug: "kalamata-navarino-tour",
    description: "Cruise turquoise Navarino Bay. Swim at secluded spots, visit historic islands, spot sea turtles and dolphins.",
    image: "/images/kalamata-navarino-tour-hero-1.jpg",
    duration: "5 hours",
    price: "€120",
    groupSize: "Boat",
  },
];

export default function KalamataToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/kalamata-olympia-tour-hero-1.jpg"
          alt="Kalamata Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Kalamata Tours</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the treasures of Messinia - from Ancient Olympia to turquoise Navarino Bay
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <span className="text-primary">Kalamata Tours</span>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              Explore Kalamata & Messinia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the birthplace of the Olympic Games to the dramatic Mani peninsula, 
              discover the diverse beauty and rich history of western Peloponnese.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kalamataTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/kalamata/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sand-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-primary">{tour.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sand-100">
                    <span className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Kalamata Section */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary mb-6">About Kalamata</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kalamata, the capital of Messinia, is a vibrant coastal city in southwestern Peloponnese. 
              Famous worldwide for its olives and olive oil, Kalamata serves as the perfect base for 
              exploring this diverse region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the ancient ruins of Olympia to the dramatic Mani peninsula, from pristine Navarino Bay 
              to traditional mountain villages, Messinia offers an incredible variety of experiences for 
              every type of traveler.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
