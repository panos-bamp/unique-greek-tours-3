"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Castle, Wine, Landmark, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/culture-taste-hero-1.jpg",
  "/images/culture-taste-hero-2.jpg",
  "/images/culture-taste-hero-3.jpg",
];

const highlights = [
  "Discover the beauty of Nafplion, the most romantic city in Greece",
  "A tour that combines culture and history",
  "Have the unique chance to taste Greek flavors and wines",
  "Learn the long story of the old city",
  "Visit the impressive Palamidi Castle",
  "Enjoy breathtaking views from Akronafplia",
];

const included = [
  "Guided tour of Nafplion by an English-speaking tour leader",
  "Pick up from your hotel or our meeting point",
  "Return private transportation from Nafplion to ancient sites",
  "Entrance to food tastings",
  "Liability insurance",
  "All taxes",
];

const notIncluded = [
  "Tickets to archaeological sites (available upon request)",
];

export default function NafplioCultureTasteTour() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Nafplio Culture & Taste Tour</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Culture and taste tour gallery"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "w-8 bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Nafplio Culture & Taste Tour
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 4 - 5 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Max 12 people
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Meeting:</span> Nafplion center
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Discover the breathtaking beauty of Nafplion with an unforgettable tour that combines culture 
                  and history with the tastes of the region. Meet your tour leader at the meeting point in 
                  Nafplion and head to Palamidi, one of the most important achievements of Venetian fortification 
                  architecture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Here you will see the Palamidi castle, which is still in excellent condition and follows the 
                  natural line of the 216-meter hill, dominating over the city of Nafplion. It was completed in 
                  1714 to serve the Venetian military and naval operations of the time. You will learn about the 
                  reign of Otto at the end of the 18th century, and how Palamidi became the cruelest prison in 
                  all of Greece.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn about the long history of Nafplion, with stories that begin from the Venetians with its 
                  imposing castles and magnificent architecture and ends in the history of modern Greece, 
                  starring Ioannis Kapodistrias, the first governor of Greece.
                </p>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Castle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Palamidi Castle
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Explore the impressive Venetian fortress that dominates the city from its 216-meter hilltop 
                        position, completed in 1714 and still in excellent condition.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Camera className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Akronafplia Viewpoint
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visit the most beautiful part of the city with breathtaking views, one of the most favorite 
                        spots for photographers. See the Bavarian clock donated by King Otto's father.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Landmark className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Historic City Walk
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Stroll through Syntagma Square with its Venetian and neoclassical buildings, the parliament, 
                        the Archaeological Museum, and the colorful main street to Three Admirals' Square.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Greek Deli Tasting
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visit a typical Greek deli and taste local delicacies: tasty cheeses and sausages, 
                        many different flavors of olive oil, and several varieties of olives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Wine className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Wine Cellar Experience
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Visit a fully upgraded wine cellar, learn about Greek wine and its history, and get to 
                        know the unique varieties grown in the Nemea region. Finish at the scenic port with 
                        views of the iconic Bourtzi castle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What's Included</h2>
                <div className="bg-sand-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-sand-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Not included:</strong>
                    </p>
                    {notIncluded.map((item, index) => (
                      <p key={index} className="text-sm text-gray-600">• {item}</p>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-sand-200">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      <strong>Full refund or change of date in case of adverse weather conditions</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €95
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">4 - 5 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Meeting Point:</span>
                      <span className="font-semibold text-gray-900">Nafplion center</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Group Size:</span>
                      <span className="font-semibold text-gray-900">Max 12</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                  >
                    Book This Tour
                  </Link>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Reserve now and pay later
                  </p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Questions?
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Contact our team for personalized assistance
                  </p>
                  <a
                    href="tel:+302752024444"
                    className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Call (+30) 27520 24444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/culture-taste-hero-3.jpg"
            alt="Nafplio culture experience"
            fill
            className="object-cover brightness-50"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready for Culture & Taste?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Nafplio Culture & Taste Tour today and experience the perfect blend of 
            history, architecture, and Greek gastronomy.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
