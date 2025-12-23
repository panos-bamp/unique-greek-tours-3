import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Award, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Unique Greek Tours",
  description: "Learn about Unique Greek Tours and our team of Argos natives passionate about sharing the authentic Peloponnese.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Born in <span className="text-accent-light">Argos</span>,<br />
            Sharing Our Home
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We're not just tour guides—we're Argos natives with generations of family history in the Peloponnese
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Growing up in Argos, we spent our childhood exploring ancient ruins, swimming in hidden gorges, 
                  and learning traditional recipes from our grandmothers. The Peloponnese isn't just a destination 
                  for us—it's our heritage, our playground, and our passion.
                </p>
                <p>
                  After years of watching tourists miss the real magic of our region, confined to crowded bus tours 
                  and superficial experiences, we decided to do something about it. We founded Unique Greek Tours 
                  with a simple mission: share the Peloponnese we know and love.
                </p>
                <p>
                  Today, we're proud to offer authentic experiences that connect travelers with the real Greece—the 
                  one locals know. Every tour is infused with our family stories, local connections, and deep knowledge 
                  of every hidden path and village tradition.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200"
                alt="Peloponnese"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-sand-50">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-16">
            What Makes Us <span className="text-accent">Different</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-6xl text-primary-dark mb-6 font-bold">
            Ready to Explore with Us?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Let us share our homeland with you. Experience the Peloponnese through the eyes of those who know it best.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/tours" className="btn-primary">
              Browse Our Tours
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: Heart,
    title: "Authentic Passion",
    description: "This is our home. We share it with genuine love and enthusiasm.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Maximum 8 guests for personalized attention and flexibility.",
  },
  {
    icon: Shield,
    title: "Licensed Experts",
    description: "Ministry certified guides with university training in history.",
  },
  {
    icon: Award,
    title: "Local Knowledge",
    description: "Family connections spanning generations. Access to hidden gems.",
  },
];
