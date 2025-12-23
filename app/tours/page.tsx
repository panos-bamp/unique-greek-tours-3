import Link from "next/link";
import Image from "next/image";
import { MapPin, Compass } from "lucide-react";

export const metadata = {
  title: "Tours & Experiences | Unique Greek Tours",
  description: "Browse our authentic Peloponnese tours by destination or category. Archaeological sites, cultural experiences, food tours, and nature adventures.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Tours & <span className="text-accent-light">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Choose your way to explore the Peloponnese
          </p>
        </div>
      </section>

      {/* Browse Options */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* By Destination */}
            <div className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200"
                  alt="Browse by Destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <MapPin className="h-12 w-12 mb-4 text-accent-light" />
                  <h2 className="font-display text-4xl font-bold mb-3">
                    Browse by Destination
                  </h2>
                  <p className="text-lg text-blue-100">
                    Explore tours organized by location: Nafplio, Mycenae, Epidaurus, Olympia, and more
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DestinationCard name="Nafplio" slug="nafplio" image="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=400" />
                <DestinationCard name="Mycenae" slug="mycenae" image="https://images.unsplash.com/photo-1555993539-1732b0258235?w=400" />
                <DestinationCard name="Epidaurus" slug="epidaurus" image="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400" />
                <DestinationCard name="Olympia" slug="olympia" image="https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=400" />
              </div>
            </div>

            {/* By Category */}
            <div className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200"
                  alt="Browse by Category"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Compass className="h-12 w-12 mb-4 text-accent-light" />
                  <h2 className="font-display text-4xl font-bold mb-3">
                    Browse by Category
                  </h2>
                  <p className="text-lg text-blue-100">
                    Discover tours by experience type: Archaeological, Cultural, Food & Wine, Nature
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <CategoryCard name="Archaeological" slug="archaeological" icon="🏛️" />
                <CategoryCard name="Cultural" slug="cultural" icon="🎭" />
                <CategoryCard name="Food & Wine" slug="food-wine" icon="🍷" />
                <CategoryCard name="Nature" slug="nature" icon="🌿" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ name, slug, image }: { name: string; slug: string; image: string }) {
  return (
    <Link href={`/tours/${slug}`} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
      <div className="relative h-32">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
          <div className="font-semibold text-lg">{name}</div>
        </div>
      </div>
    </Link>
  );
}

function CategoryCard({ name, slug, icon }: { name: string; slug: string; icon: string }) {
  return (
    <Link href={`/tours/category/${slug}`} className="group p-6 bg-sand-50 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="font-semibold text-lg text-primary">{name}</div>
    </Link>
  );
}
