import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users, Star } from "lucide-react";

export const metadata = {
  title: "Nafplio Tours & Experiences | Unique Greek Tours",
  description: "Discover Nafplio, Greece's first capital and most romantic town. Explore Venetian architecture, historic fortresses, and authentic local experiences.",
};

export default function NafplioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1920&q=80"
          alt="Nafplio Greece"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="container-custom relative z-10 text-white pb-16">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Nafplio
          </h1>
          <p className="text-2xl text-blue-100 max-w-2xl">
            Embark on Nafplio adventures that unveil Venetian architecture, historic fortresses, 
            and indulge your senses in authentic Greek culture and cuisine.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            Nafplio, the jewel of the Peloponnese, is a <strong>magical place</strong> that combines 
            historic charm with modern Greek lifestyle. With countless opportunities for experiencing 
            authentic culture, nightlife, history, and cuisine, Nafplio is a destination everyone should 
            include in their itinerary.
          </p>
        </div>
      </section>

      {/* Cultural Tours Section */}
      <TourSection
        title="Sightseeing Nafplio Tours"
        subtitle="CHERISH MOMENTS"
        description="Explore the most important historic sites of Nafplio with our cultural experiences. From guided tours across the Venetian old town to climbing Palamidi fortress, watch the rich history of Greece's first capital unfold before your eyes."
        tours={sightseeingTours}
      />

      {/* Culinary Tours Section */}
      <TourSection
        title="Nafplio Culinary Tours"
        subtitle="TASTE TRADITION"
        description="Let us show you around the best of what Nafplio has to offer in regard to Greece's food culture and gastronomy! Opt for one of our food tours or cooking classes to discover authentic flavors."
        tours={culinaryTours}
        bgColor="bg-sand-50"
      />

      {/* Day Trips Section */}
      <TourSection
        title="Day trips from Nafplio"
        subtitle="EXPLORE FURTHER"
        description="Don't miss the opportunity to explore striking regions near Nafplio. Visit Mycenae, Epidaurus, Ancient Corinth, and catch romantic sunsets at hidden locations. These day trips will be a breath of fresh air for your Greek vacation!"
        tours={dayTripTours}
      />

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1920"
          alt="Plan your trip"
          fill
          className="object-cover brightness-50"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Take the first step of your next journey today.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Design a curated trip with the help of our local travel designers
          </p>
          <Link href="/plan-trip" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">
            Let's Plan My Trip
            <ArrowRight className="h-5 w-5" />
          </Link>
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
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{subtitle}</p>
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
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="overlay-gradient"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            {tour.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
          {tour.title}
        </h3>
        <Link href={tour.link} className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link">
          Discover
          <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

// Sample tour data
const sightseeingTours = [
  {
    title: "Nafplio Walking & Food Tour",
    duration: "4 hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800",
    link: "/tours/nafplio/nafplio-walking-tour",
  },
  {
    title: "Palamidi Fortress Sunset Tour",
    duration: "3 hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
    link: "/tours/nafplio",
  },
  {
    title: "Old Town Photography Walk",
    duration: "2.5 hours",
    type: "Small Group",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800",
    link: "/tours/nafplio",
  },
];

const culinaryTours = [
  {
    title: "Traditional Cooking Class",
    duration: "4 hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    link: "/tours/nafplio",
  },
  {
    title: "Greek Wine Tasting Experience",
    duration: "3 hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
    link: "/tours/nafplio",
  },
];

const dayTripTours = [
  {
    title: "Mycenae & Epidaurus UNESCO Sites",
    duration: "8 hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    link: "/tours/mycenae/mycenae-epidaurus-tour",
  },
  {
    title: "Ancient Olympia Day Trip",
    duration: "Full Day",
    type: "Private",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=800",
    link: "/tours/olympia",
  },
];
