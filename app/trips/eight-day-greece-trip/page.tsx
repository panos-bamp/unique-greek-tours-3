"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Check,
  ChevronLeft,
  Info,
  Star,
} from "lucide-react";

const images = [
  "/images/eight-day-greece-hero-1.jpg",
  "/images/eight-day-greece-hero-2.jpg",
  "/images/eight-day-greece-hero-3.jpg",
];

const dayItineraries = [
  {
    day: 1,
    title: "Athens Arrival",
    activities: [
      {
        name: "Airport Pick-up & Check-in",
        description: "Pick up from Athens airport and check-in to your hotel. Relax and enjoy your evening, preparing for the exciting journey ahead."
      }
    ]
  },
  {
    day: 2,
    title: "Athens Acropolis & City Tour",
    activities: [
      {
        name: "Acropolis & Its Monuments",
        description: "Start the day with a visit to the famous Acropolis and its UNESCO-listed admirable monuments: the Temple of Athena Nike, the Propylaia gateway, the Erechtheion, and the astonishing Parthenon."
      },
      {
        name: "Acropolis Museum",
        description: "Visit the Acropolis Museum with its unique design. The marble masterpieces are given the prominence they deserve in the excellent exhibition areas."
      },
      {
        name: "Historical Center Walking Tour",
        description: "Continue with a leisurely walking tour of the historical center of Athens. Pass by Syntagma Square and the Greek Parliament, then head towards charming Plaka, Athens's most picturesque neighborhood. Admire archaeological remains and learn the thousand-year-old history of the area."
      },
      {
        name: "Traditional Greek Meal",
        description: "Your tour leader will drop you off at a cozy restaurant for a traditional Greek meal."
      }
    ]
  },
  {
    day: 3,
    title: "Journey to Meteora",
    activities: [
      {
        name: "Drive through Central Greece",
        description: "After breakfast, depart towards Kalambaka via Central Greece. Kalambaka is a small town built at the foot of the Meteora rocks complex."
      },
      {
        name: "Meteora Monasteries Visit",
        description: "Check into your hotel, then visit two of the many beautiful monasteries hanging from the rocks like nests. Your guide will explain all about Byzantine artwork and the culture of Orthodoxy."
      },
      {
        name: "Meteora Sunset Experience",
        description: "At the end of the tour, at the best viewpoint, you'll watch the famous breathtaking sunset of Meteora—a once-in-a-lifetime experience. Return to your hotel for a relaxing evening."
      }
    ]
  },
  {
    day: 4,
    title: "Delphi - The Navel of the World",
    activities: [
      {
        name: "Scenic Drive to Delphi",
        description: "Depart for Delphi, driving through beautiful scenery. Check into your hotel upon arrival."
      },
      {
        name: "Arahova Village",
        description: "Your driver will take you to the picturesque mountainous village of Arahova to stroll around and relax."
      },
      {
        name: "Delphi Archaeological Site",
        description: "In the afternoon, visit the archaeological site of Delphi, known in antiquity as 'the navel of the world.' Your guide will revive the fascinating past through myths and knowledgeable information. Grand monuments including the Temple of Apollo, the Theatre of Delphi, the Athens Treasury, Castalia Pigi, and the dome of Athena Pronaia will fascinate you."
      },
      {
        name: "Delphi Archaeological Museum",
        description: "At the magnificent Delphi Archaeological Museum, admire statues and artifacts from the surrounding sites, including findings dated back to the Neolithic Age (4000 BC). Stay overnight in Delphi."
      }
    ]
  },
  {
    day: 5,
    title: "Ancient Olympia - Birthplace of Olympics",
    activities: [
      {
        name: "Drive to Ancient Olympia",
        description: "Start your day with a drive towards Peloponnese to Ancient Olympia, the birthplace of the Olympic Games. Check into your hotel."
      },
      {
        name: "Olympic Site Tour",
        description: "In the afternoon, meet your guide and tour the impressive site. Visit the stadium where the Olympic Games were held, and the Temple of Zeus with its 13.5-meter-high golden statue of the god—one of the seven wonders of the ancient world."
      },
      {
        name: "Archaeological Museum of Olympia",
        description: "The outstanding findings exhibited in the museum will amaze you, starting with the exquisite Hermes of Praxiteles. Tour buildings and temples that depict the beauty, harmony, and balance of ancient Greek art."
      }
    ]
  },
  {
    day: 6,
    title: "Mycenae & Journey to Nafplio",
    activities: [
      {
        name: "Ancient Mycenae",
        description: "After breakfast, check out and drive to Nafplion. First, visit Mycenae, where one of the most brilliant cultures of Greek prehistory developed—the Mycenaean Civilization. The fortification of the Acropolis with the famous Cyclopean Walls, the Gate of Lions, the monumental entrance to the palaces, and the mythical vaulted tomb of Atreus are outstanding attractions."
      },
      {
        name: "Wine Tasting in Nemea",
        description: "Visit a famous Greek winery for wine tasting and a meal. Nemea is one of the biggest wine zones in Greece. Indulge in the culture of winemaking and taste high-quality local wines."
      },
      {
        name: "Arrival in Nafplion",
        description: "Drive through the Argolic plain to Nafplion, the most romantic city of Greece. Check into your hotel, relax, and stroll around the beautiful city."
      }
    ]
  },
  {
    day: 7,
    title: "Epidavros & Nafplion Exploration",
    activities: [
      {
        name: "Ancient Theater of Epidavros",
        description: "Your driver will pick you up and head to Epidavros where you'll meet your guide. Visit the ancient theater, one of the most famous archaeological monuments in Greece. The place has been dedicated to deities with healing abilities since prehistoric times."
      },
      {
        name: "Sacred Asclepion",
        description: "Around 800 BC, a sanctuary dedicated to Apollo was founded, and in the 6th century BC, the sacred Asclepion was built in honor of Asclepius, the protector of health. It was the center for treating serious diseases for all of Ancient Greece."
      },
      {
        name: "Theater Perfection",
        description: "At the end of the Classical Age (330 BC), the ancient theater was built—the most perfect and famous ancient Greek theater, combining elegance with perfect acoustics. It had a capacity of about 15,000 spectators. In 1988, it was included on the UNESCO World Heritage List."
      },
      {
        name: "Nafplion Walking Tour",
        description: "Return to Nafplion for a leisurely walking tour through cobbled streets of the old town. Your tour leader will revive the long history of this magnificent castle town and discuss Venetian architecture and local culture. The evening is free to relax."
      }
    ]
  },
  {
    day: 8,
    title: "Return to Athens",
    activities: [
      {
        name: "Journey's End",
        description: "Your return to Athens marks the end of this exciting multiday trip to Classical Greece. According to your schedule, you'll be transferred to Athens or Athens airport."
      }
    ]
  }
];

export default function EightDayGreeceTripPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div className="relative h-full w-full">
          {images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={`Classical Greece Tour ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 rotate-180" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-8" : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/trips"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Multi-Day Trips
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              8-Day Classical Greece Tour
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow">
              The ultimate journey through ancient Greece's most famous sites
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">8 Days</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold text-sm">Athens - Meteora - Delphi</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">Private Tour</span>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold">All Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Trip Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  On this multiday classical tour, you will have the opportunity to explore the glory of ancient Greece and its rich history. This comprehensive 8-day journey takes you through the most iconic archaeological sites and UNESCO World Heritage locations, from the majestic Acropolis in Athens to the hanging monasteries of Meteora, the oracle of Delphi, the birthplace of the Olympics, and the romantic city of Nafplion.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Travel in comfort with private luxury transportation, stay in carefully selected accommodations, and benefit from professional licensed guides who bring ancient history to life. This is the ultimate Classical Greece experience, combining breathtaking landscapes, profound historical insights, and authentic Greek culture.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-br from-emerald-50 to-stone-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Acropolis & Acropolis Museum",
                    "Meteora Monasteries & Sunset",
                    "Delphi Oracle & Museum",
                    "Ancient Olympia & Stadium",
                    "Mycenae & Lion Gate",
                    "Wine Tasting in Nemea",
                    "Epidavros Ancient Theater",
                    "Nafplion Old Town"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Day-by-Day Itinerary
                </h2>

                <div className="space-y-8">
                  {dayItineraries.map((dayPlan) => (
                    <div
                      key={dayPlan.day}
                      className="bg-gradient-to-br from-gray-50 to-stone-50 p-8 rounded-2xl"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                          {dayPlan.day}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Day {dayPlan.day}: {dayPlan.title}
                        </h3>
                      </div>

                      <div className="space-y-6 ml-16">
                        {dayPlan.activities.map((activity, index) => (
                          <div key={index}>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                              <Star className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                              {activity.name}
                            </h4>
                            <p className="text-gray-700">{activity.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Return private transportation from Athens",
                    "Pick up from your hotel or meeting point",
                    "Professional licensed guide for archaeological sites",
                    "7 nights accommodation in selected hotels",
                    "Liability insurance",
                    "All taxes and fees included",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Important Information
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Full refund or change of date</strong> in case of adverse weather conditions.
                    </p>
                    <p className="text-gray-700">
                      Pick up time: <strong>8:30 AM</strong> from Athens airport or your hotel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full mb-4">
                      <span className="text-emerald-800 font-semibold">
                        Private Tour
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      From €1,850
                    </div>
                    <p className="text-gray-600">per person</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold text-gray-900">8 Days</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Group Type</span>
                      </div>
                      <span className="font-semibold text-gray-900">Private</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Pick Up</span>
                      </div>
                      <span className="font-semibold text-gray-900">Athens</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                        <span>Available</span>
                      </div>
                      <span className="font-semibold text-gray-900">All Year</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                  >
                    Book This Trip
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 text-center py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    Ask a Question
                  </Link>

                  <div className="mt-6 text-center text-sm text-gray-600">
                    <p>Have questions? We're here to help!</p>
                    <a
                      href="tel:+306974470780"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      +30 697 447 0780
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <Image
          src="/images/eight-day-greece-cta.jpg"
          alt="Book Your Classical Greece Tour"
          fill
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 to-stone-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for the Ultimate Greek Adventure?
          </h2>
          <p className="text-xl mb-10 text-gray-100">
            Book your 8-day journey through Classical Greece today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book Now
            </Link>
            <Link
              href="/trips"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              View All Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
