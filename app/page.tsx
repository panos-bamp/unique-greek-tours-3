import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, ArrowRight, Heart, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1920&q=80"
            alt="Peloponnese Greece"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary-dark/70"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in font-bold">
            We design original journeys to
            <span className="block text-accent-light mt-4">PELOPONNESE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up">
            Experience authentic Greece with local experts from Argos
          </p>
          <Link href="/plan-trip" className="btn-primary text-lg animate-scale-in">
            LET'S PLAN MY TRIP
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Trust Badges - Like Greeking.me */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-gray-600 mb-8 uppercase tracking-widest text-sm">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-800">TripAdvisor</div>
            <div className="text-2xl font-bold text-gray-800">GetYourGuide</div>
            <div className="text-2xl font-bold text-gray-800">Google Reviews</div>
          </div>
          <p className="text-center mt-8 text-gray-700">
            We are rated <span className="font-bold text-primary">Excellent</span> based on more than{" "}
            <span className="font-bold">500 reviews</span>
          </p>
        </div>
      </section>

      {/* About Section - Asymmetric Layout like Greeking.me */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="lg:order-2">
              <h2 className="section-heading">
                A FRESH WAY TO TRAVEL
              </h2>
              <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">
                Experience the journey of a lifetime.
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Take all the stress out of planning and prepare only to make unforgettable memories 
                  with your loved ones. With a deep-rooted passion for crafting personalized itineraries, 
                  we focus on delivering authentic experiences that capture the heart of living in the 
                  Peloponnese.
                </p>
                <p>
                  Born and raised in Argos, we share stories and places that guidebooks never mention. 
                  You can rest assured that every detail is handled carefully so you can immerse yourself 
                  in the rich tapestry of Greek life without any worries.
                </p>
              </div>
              <Link href="/about" className="btn-secondary mt-8">
                More about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=800"
                  alt="Nafplio Greece"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-bold text-2xl text-primary">500+</div>
                    <div className="text-sm text-gray-600">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section - Varied Card Sizes like Greeking.me */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">PELOPONNESE ITINERARIES</p>
            <h2 className="section-heading">
              Original & Tailor-made<br />
              <span className="text-accent">Peloponnese Tours</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore the Peloponnese like few travelers ever do with our collection 
              of tours that are fully customizable to your preferences.
            </p>
          </div>

          {/* Varied Grid - Not Uniform */}
          <div className="grid md:grid-cols-6 gap-6 mb-12">
            {/* Large Card */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200"
                  alt="Nafplio Walking Tour"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="overlay-gradient"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full">
                    Private
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm mb-2 text-accent-light">4 hours</p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                    Nafplio Walking & Food Tour
                  </h3>
                  <p className="text-blue-50 mb-4 text-lg">
                    Discover Greece's most romantic town through its cobblestone streets and authentic cuisine
                  </p>
                  <Link href="/tours/nafplio/nafplio-walking-tour" className="inline-flex items-center text-white font-semibold group/link">
                    Discover Tour
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Two Stacked Small Cards */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=800"
                  alt="Mycenae Tour"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="overlay-gradient"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs mb-1 text-accent-light">8 hours • Private</p>
                  <h3 className="font-display text-xl font-bold mb-2">
                    Mycenae & Epidaurus
                  </h3>
                  <Link href="/tours/mycenae/mycenae-epidaurus-tour" className="text-sm text-white hover:text-accent-light transition-colors">
                    Discover →
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=800"
                  alt="Ancient Olympia"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="overlay-gradient"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs mb-1 text-accent-light">Full Day • Private</p>
                  <h3 className="font-display text-xl font-bold mb-2">
                    Ancient Olympia Day Trip
                  </h3>
                  <Link href="/tours/olympia" className="text-sm text-white hover:text-accent-light transition-colors">
                    Discover →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/tours" className="btn-primary">
              Browse our Tours
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Three Columns */}
      <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              How it <span className="text-accent">works</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hop on a call with a local expert</h3>
              <p className="text-gray-600">
                Share your travel dreams and preferences with our Argos-based team
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Receive your tailor-made itinerary</h3>
              <p className="text-gray-600">
                Get a personalized plan crafted specifically for your interests
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fine-tune the details and off you go!</h3>
              <p className="text-gray-600">
                Make final adjustments and embark on your Peloponnese adventure
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/plan-trip" className="btn-primary">
              LET'S PLAN MY TRIP
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              You make us <span className="text-accent-light">BLUSH</span>
            </h2>
            <p className="text-blue-100 text-lg">Your feedback makes us better.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-light fill-accent-light" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-accent-light">{testimonial.author}</div>
                  <div className="text-blue-100 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920&q=80"
            alt="Greece"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Take the first step of your next journey today.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Design a curated trip with the help of our local travel designers and make precious 
            memories with your loved ones while we handle logistics and planning.
          </p>
          <Link href="/plan-trip" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">
            Let's Plan My Trip
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    text: "We've taken many guided tours around the world, but Unique Greek Tours stands out as the most authentic and well-organized. The Peloponnese region was a revelation!",
    author: "James & Sarah B.",
    location: "United States",
  },
  {
    text: "As a history professor, I was impressed by the depth of knowledge on our tour. The Peloponnese archaeological sites were expertly presented by true local experts.",
    author: "Professor David K.",
    location: "United Kingdom",
  },
  {
    text: "The personal touch made all the difference. Being guided by Argos natives who genuinely love their homeland created an experience we'll treasure forever.",
    author: "Maria & Antonio",
    location: "Italy",
  },
];
