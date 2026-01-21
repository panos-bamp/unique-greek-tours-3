import Image from "next/image";
import Link from "next/link";

export default function TwoDayClassicTripPage() {
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
            <span className="text-gray-900">2-Day Classic Tour in Nafplio</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/two-day-classic-hero-1.jpg"
          alt="2-day classic tour gallery"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Title and Metadata */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            2-Day Classic Tour in Nafplio
          </h1>
          <div className="flex flex-wrap gap-8 text-gray-700">
            <div>
              <span className="font-semibold">Duration:</span> 2 days
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
                    On this two-day tour beginning from Athens, you will have the opportunity to admire the most important sights and monuments of Argolida and enjoy the charming city of Nafplion.
                  </p>
                  <p>
                    Starting from Athens, we will travel to the Corinth Canal and visit the archaeological site of Akrokorinthos, the famous temple of Apollo and the steps of Apostle Paul. We continue towards Argolida and our next stop is the archaeological site of Mycenae, where we will travel to the kingdom of mythical Agamemnon and discover where the Mycenaean civilization developed, one of the most brilliant cultures of Greek prehistory.
                  </p>
                  <p>
                    The fortification of the Acropolis with the famous Cyclopean Walls, the Gate of Lions, the monumental entrance to the palaces and the mythical vaulted tomb of Atreus are just some of the outstanding attractions of the area.
                  </p>
                  <p>
                    Towards midday, we will arrive at Nafplion. You will check in your hotel and the rest of the day is free to stroll around the beautiful city. You will walk through cobbled streets surrounded by Venetian and Neoclassical buildings, exploring the local restaurants, shops and cafes of this fascinating castle town.
                  </p>
                  <p>
                    The next day we will head to Epidavros and visit the ancient theater, one of the most famous archaeological monuments in Greece. The place has been dedicated to deities with healing abilities since prehistoric times. At the end of the Classical Age (330 BC) the ancient theater was also built, the most perfect and famous ancient Greek theater, which combines elegance with perfect acoustics. In 1988, the theater was included, along with the entire Asklepiion, on the UNESCO World Heritage List.
                  </p>
                  <p>
                    We will then transfer you back to Athens to end an amazing two-days tour!
                  </p>
                </div>
              </div>

              {/* What You Can Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Expect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Corinth Canal & Akrokorinthos</h3>
                    <p className="text-gray-700">
                      Visit the impressive Corinth Canal and explore the archaeological site of Akrokorinthos with the temple of Apollo and the steps of Apostle Paul.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ancient Mycenae</h3>
                    <p className="text-gray-700">
                      Discover the kingdom of mythical Agamemnon with the famous Cyclopean Walls, the Gate of Lions, and the tomb of Atreus.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nafplion Old Town</h3>
                    <p className="text-gray-700">
                      Explore Greece's first capital with its Venetian architecture, charming cobbled streets, and romantic atmosphere.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ancient Theater of Epidavros</h3>
                    <p className="text-gray-700">
                      Visit the UNESCO World Heritage Site with perfect acoustics and the sacred Asclepion healing center.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Overnight in Nafplion</h3>
                    <p className="text-gray-700">
                      Stay overnight in romantic Nafplion, with free time to explore local restaurants, shops and cafes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
                <div className="space-y-2 text-gray-700">
                  <p>Visit the Corinth Canal and Akrokorinthos</p>
                  <p>Explore Ancient Mycenae and the Lion Gate</p>
                  <p>Walk through the Cyclopean Walls</p>
                  <p>See the tomb of Atreus</p>
                  <p>Overnight stay in romantic Nafplion</p>
                  <p>Visit the Ancient Theater of Epidavros</p>
                  <p>Explore the sacred Asclepion</p>
                  <p>UNESCO World Heritage Sites</p>
                </div>
              </div>

              {/* What is Included */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Included</h2>
                <div className="space-y-2 text-gray-700">
                  <p>Return private transportation from Athens</p>
                  <p>Pick up from your hotel or from our meeting point</p>
                  <p>Guided tour of archaeological sites (upon request)</p>
                  <p>Overnight stay</p>
                  <p>Liability insurance</p>
                  <p>All taxes</p>
                </div>
                <p className="mt-6 font-bold text-gray-900">
                  **Full refund or change of date in case of adverse weather conditions**
                </p>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">From</p>
                  <p className="text-4xl font-bold text-gray-900 mb-1">€380</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <span className="text-gray-700">2 days</span>
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
            src="/images/two-day-classic-hero-3.jpg"
            alt="Beautiful Nafplion"
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
            Ready to Discover Ancient Greece?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Book your 2-Day Classic Tour and explore the wonders of Mycenae and Epidavros with an expert local guide.
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
