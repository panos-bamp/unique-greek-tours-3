import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, MapPin, Star } from "lucide-react";

export const metadata = {
  title: "Porto Heli Tours & Excursions | Unique Greek Tours",
  description: "Discover Porto Heli with our exclusive tours. Wine tasting, ancient sites, and day trips to Epidavros, Mycenae, and Nafplio. Private tours from the Argolida peninsula.",
  keywords: "Porto Heli tours, Argolida excursions, wine tasting Porto Heli, Epidavros tour, Mycenae from Porto Heli, Nafplio day trip",
};

const tours = [
  {
    slug: "portoheli-food-wine-tour",
    title: "Wine Tasting & City Food Tour",
    description: "Visit award-winning Nemea winery, explore historic Nafplio, taste local delicacies and Greek spirits.",
    duration: "7 hours",
    price: "€180",
    image: "/images/portoheli-food-wine-tour-hero-1.jpg",
    highlights: ["Award-winning winery", "Nafplio walking tour", "Greek deli tasting"],
  },
  {
    slug: "portoheli-epidavros-mycenae-tour",
    title: "Ancient Epidavros, Mycenae & Nafplio",
    description: "Full-day tour to UNESCO World Heritage sites - Ancient Theatre of Epidavros and Mycenae citadel.",
    duration: "9 hours",
    price: "€200",
    image: "/images/portoheli-epidavros-mycenae-tour-hero-1.jpg",
    highlights: ["UNESCO Epidavros", "Mycenae Lion's Gate", "Nafplio free time"],
  },
];

export default function PortoHeliToursPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4">
            <Link href="/tours" className="hover:text-white">Tours & Excursions</Link>
            <span>/</span>
            <span>Porto Heli</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Porto Heli Tours</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover the beauty of the Argolida peninsula with our exclusive tours departing from Porto Heli. 
            From wine tasting to ancient archaeological sites.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <Link key={tour.slug} href={`/tours/portoheli/${tour.slug}`} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-primary-dark">From {tour.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-sand-100 text-gray-700 px-3 py-1 rounded-full">{highlight}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-sand-200">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-6">About Porto Heli</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Porto Heli is a beautiful coastal town on the eastern tip of the Argolida peninsula in the Peloponnese. 
              Known for its crystal-clear waters and upscale marina, it serves as the perfect base for exploring 
              the rich history and culture of the region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Porto Heli, you have easy access to some of Greece's most important archaeological sites including 
              Ancient Epidavros, Mycenae, and the charming city of Nafplio - Greece's first capital. Our tours 
              combine history, culture, gastronomy, and stunning scenery for an unforgettable Greek experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
