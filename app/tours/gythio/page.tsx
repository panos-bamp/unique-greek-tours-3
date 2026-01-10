import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";

const gythioTours = [
  {
    title: "Diros Caves Tour",
    slug: "gythio-diros-caves-tour",
    description: "Boat through 1,500m of spectacular underground caves. Marvel at stalactites, stalagmites, and crystal formations in this natural wonder.",
    image: "/images/gythio-diros-caves-tour-hero-1.jpg",
    duration: "4 hours",
    price: "€95",
    groupSize: "Private",
  },
  {
    title: "Monemvasia Castle Tour",
    slug: "gythio-monemvasia-tour",
    description: "Explore the medieval castle town of Monemvasia. Byzantine alleys, Venetian architecture, and panoramic sea views with a licensed guide.",
    image: "/images/gythio-monemvasia-tour-hero-1.jpg",
    duration: "6 hours",
    price: "€140",
    groupSize: "Private",
  },
  {
    title: "Sparta & Mystras Tour",
    slug: "gythio-sparta-mystras-tour",
    description: "Visit legendary Sparta and UNESCO Mystras. Archaeological museums, Byzantine churches, and ancient history come alive.",
    image: "/images/gythio-sparta-mystras-tour-hero-1.jpg",
    duration: "5-6 hours",
    price: "€130",
    groupSize: "Private",
  },
];

export default function GythioToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/gythio-hero.jpg"
          alt="Gythio Harbor - Colorful fishing boats and waterfront buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Gythio Tours</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover the treasures of Laconia - from underground caves to medieval fortresses
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <span className="text-primary">Gythio Tours</span>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              Explore Gythio & Laconia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the magical underground world of Diros Caves to the medieval splendor of Monemvasia 
              and the legendary city of Sparta, Gythio is your gateway to unforgettable Peloponnese adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gythioTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/gythio/${tour.slug}`}
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

      {/* About Gythio Section */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary mb-6">About Gythio</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Gythio, the ancient port of Sparta, is a picturesque coastal town in the Laconia region of 
              the Peloponnese. With its colorful neoclassical buildings, charming harbor, and proximity 
              to incredible historical and natural attractions, Gythio is the perfect base for exploring 
              this fascinating region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the stunning underground caves of Diros to the medieval fortress of Monemvasia and 
              the legendary city of Sparta, Gythio offers easy access to some of Greece's most remarkable 
              destinations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
