import Image from "next/image";
import Link from "next/link";

export default function EightDayGreeceTripPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/trips" className="hover:text-blue-600">
              MULTI-DAY TRIPS
            </Link>
            <span>/</span>
            <span className="text-gray-900">8-Day Classical Greece Tour</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/eight-day-greece-hero-1.jpg"
          alt="8-day classical greece tour gallery"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Title and Metadata */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            8-Day Classical Greece Tour
          </h1>
          <div className="flex flex-wrap gap-8 text-gray-700">
            <div>
              <span className="font-semibold">Duration:</span> 8 days
            </div>
            <div>
              <span className="font-semibold">Group Size:</span> Private tour
            </div>
            <div>
              <span className="font-semibold">Season:</span> Year-round
            </div>
            <div>
              <span className="font-semibold">Meeting:</span> Athens hotel
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Embark on an unforgettable 8-day journey through Classical Greece, visiting the most famous monuments and archaeological sites of ancient Greek civilization.
                  </p>
                  <p>
                    This comprehensive tour takes you from the vibrant capital of Athens to the awe-inspiring monasteries of Meteora, the sacred oracle of Delphi, the birthplace of the Olympic Games at Ancient Olympia, and the legendary sites of Mycenae and Epidavros. Along the way, you'll stay in charming towns, taste authentic Greek cuisine, and experience the perfect blend of history, culture, and natural beauty.
                  </p>
                  <p>
                    Starting in Athens, you'll explore the iconic Acropolis and its magnificent museum before heading north to witness the breathtaking cliff-top monasteries of Meteora. Journey to Delphi, home of the ancient oracle, then visit the picturesque mountain town of Arahova. Continue to Ancient Olympia, where the Olympic flame still burns, before exploring the Mycenaean treasures and tasting wines in Nemea.
                  </p>
                  <p>
                    Your journey concludes with a stay in romantic Nafplion, Greece's first capital, followed by a visit to the perfectly preserved theater of Epidavros. This tour offers the complete Classical Greece experience, combining UNESCO World Heritage Sites, stunning landscapes, local gastronomy, and authentic Greek hospitality.
                  </p>
                </div>
              </div>

              {/* What You Can Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Expect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Athens: Acropolis & Museum</h3>
                    <p className="text-gray-700">
                      Explore the iconic Acropolis with the Parthenon, Erechtheion, and Temple of Athena Nike. Visit the world-class Acropolis Museum and stroll through the charming Plaka neighborhood.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Meteora: Monasteries in the Sky</h3>
                    <p className="text-gray-700">
                      Marvel at the Byzantine monasteries perched atop towering rock formations. Visit multiple monasteries and witness spectacular sunset views over this UNESCO World Heritage Site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Delphi: The Oracle's Sanctuary</h3>
                    <p className="text-gray-700">
                      Discover the sacred sanctuary of Apollo and the famous oracle of Delphi. Explore the archaeological museum and visit the mountain village of Arahova.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ancient Olympia: Birthplace of Olympics</h3>
                    <p className="text-gray-700">
                      Walk through the ancient Olympic stadium, visit the Temple of Zeus, and admire the famous Hermes statue in the archaeological museum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mycenae & Nemea Wine Tasting</h3>
                    <p className="text-gray-700">
                      Explore the legendary kingdom of Agamemnon with the Lion Gate and tomb of Atreus, followed by wine tasting in the renowned Nemea wine region.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nafplion & Epidavros</h3>
                    <p className="text-gray-700">
                      Stay in romantic Nafplion and visit the ancient theater of Epidavros with its perfect acoustics and the healing sanctuary of Asclepius.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
                <div className="space-y-2 text-gray-700">
                  <p>Acropolis of Athens and Acropolis Museum</p>
                  <p>Traditional taverna dinner in Plaka</p>
                  <p>Meteora monasteries and sunset views</p>
                  <p>Delphi archaeological site and oracle</p>
                  <p>Mountain village of Arahova</p>
                  <p>Ancient Olympia stadium and Temple of Zeus</p>
                  <p>Hermes statue by Praxiteles</p>
                  <p>Ancient Mycenae and Lion Gate</p>
                  <p>Wine tasting in Nemea region</p>
                  <p>Overnight in romantic Nafplion</p>
                  <p>Ancient Theater of Epidavros</p>
                  <p>Multiple UNESCO World Heritage Sites</p>
                </div>
              </div>

              {/* What is Included */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Included</h2>
                <div className="space-y-2 text-gray-700">
                  <p>7 nights accommodation in selected hotels</p>
                  <p>Daily breakfast</p>
                  <p>Private transportation throughout the tour</p>
                  <p>English-speaking professional driver/guide</p>
                  <p>Pick up and drop off from your hotel in Athens</p>
                  <p>Entrance fees to archaeological sites</p>
                  <p>Wine tasting in Nemea</p>
                  <p>Liability insurance</p>
                  <p>All taxes and road tolls</p>
                </div>
                <p className="mt-6 font-bold text-gray-900">
                  **Flexible itinerary that can be customized to your preferences**
                </p>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">From</p>
                  <p className="text-4xl font-bold text-gray-900 mb-1">€1,850</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <span className="text-gray-700">8 days</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Meeting:</span>
                    <span className="text-gray-700">Athens hotel</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Period:</span>
                    <span className="text-gray-700">All year</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Tour Type:</span>
                    <span className="text-gray-700">Private</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded font-semibold transition-colors mb-4"
                >
                  Book This Tour
                </Link>

                <p className="text-center text-sm text-gray-600 mb-6">
                  Reserve now and pay later
                </p>

                <div className="border-t border-gray-300 pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Contact our team for personalized assistance
                  </p>
                  <a
                    href="tel:+302752024444"
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                  >
                    Call (+30) 27520 24444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/eight-day-greece-hero-3.jpg"
            alt="Classical Greece landscapes"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Explore Classical Greece?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Book your 8-Day Classical Greece Tour and discover the wonders of ancient civilization with expert local guides.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
