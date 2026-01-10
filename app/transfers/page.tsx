import { Car, MapPin, Briefcase, Users, Heart, Music, Landmark, Package, Shield, Calendar } from "lucide-react";

export const metadata = {
  title: "Transfer Services | Unique Greek Tours",
  description: "Professional VIP transfer services throughout Greece - airports, ports, corporate transfers, weddings, and more.",
};

export default function TransfersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img
          src="/images/transfers-hero.jpg"
          alt="Luxury Transfer Service"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
              Transfer Services Throughout Greece
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8">
              Professional VIP transportation with luxury vehicles, available 24/7, 365 days a year
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all font-semibold text-lg shadow-lg"
              >
                Book Transfer
              </a>
              <a
                href="tel:+302752024444"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                <Car className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Our professionalism and long experience in private transport, combined with our luxurious VIP vehicles, 
            enable us to provide our customers with comfortable transportation to their destination through a top level service.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-6">
            With respect to the personalized needs of travelers, we undertake the transportation of you or your clients 
            to the Peloponnese and throughout Greece. We are available <strong>24 hours a day, 365 days a year</strong> and 
            provide immediate service with high quality travel, safety, consistency, comfort and discretion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-sand-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Our Transfer Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Professional transportation solutions for every occasion
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Airport & Port Transfers */}
            <ServiceCard
              icon={<MapPin className="h-12 w-12 text-accent" />}
              title="Airport & Port Transfers"
              description="Safe and timely transfer to and from airports, ports, train stations and bus stations. Your personal driver will meet and welcome you and help with your luggage."
            />

            {/* Corporate Transfers */}
            <ServiceCard
              icon={<Briefcase className="h-12 w-12 text-accent" />}
              title="Corporate Transfers"
              description="Trust Unique Greek Tours to transfer you or your business partners to business meetings or daily staff transfers with professionalism and punctuality."
            />

            {/* Group Transfers */}
            <ServiceCard
              icon={<Users className="h-12 w-12 text-accent" />}
              title="Group & Club Transfers"
              description="Transfer of members of clubs and sports clubs. Our luxury buses have comfortable seating, air conditioning, and are perfect for long trips and excursions."
            />

            {/* Accessible Transfers */}
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-accent" />}
              title="Accessible Transfers"
              description="Certified wheelchair accessible vehicles fitted with special ramps suitable for all types of wheelchairs for the convenient transfer of people with disabilities."
            />

            {/* VIP Transfers */}
            <ServiceCard
              icon={<Car className="h-12 w-12 text-accent" />}
              title="VIP Transfers"
              description="VIP shuttle services in collaboration with security professionals, ensuring you arrive at your destination quickly, safely, responsibly and securely."
            />

            {/* Wedding Transfers */}
            <ServiceCard
              icon={<Heart className="h-12 w-12 text-accent" />}
              title="Wedding & Events"
              description="Choose us for your wedding or formal events. We'll transport your guests from hotels to the ceremony and reception with our luxurious vehicles."
            />

            {/* Nightlife Transfers */}
            <ServiceCard
              icon={<Music className="h-12 w-12 text-accent" />}
              title="Nightlife & Entertainment"
              description="We transfer you to nightclubs or theaters. Enjoy your evening without worrying about parking, taxis, or driving back."
            />

            {/* Cultural Site Transfers */}
            <ServiceCard
              icon={<Landmark className="h-12 w-12 text-accent" />}
              title="Archaeological Sites"
              description="Visit any archaeological site or cultural monument in comfort and luxury. Tours with qualified guides available upon request."
            />

            {/* Luggage & Parcel Transfer */}
            <ServiceCard
              icon={<Package className="h-12 w-12 text-accent" />}
              title="Luggage & Parcels"
              description="Responsible and prompt pick-up and delivery of unaccompanied parcels and luggage throughout Greece."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Our Transfer Service
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="24/7 Availability"
              description="Round-the-clock service, 365 days a year for your convenience"
            />
            <FeatureCard
              title="Luxury Vehicles"
              description="Modern VIP fleet with comfort, safety, and style"
            />
            <FeatureCard
              title="Professional Drivers"
              description="Experienced, courteous drivers with local knowledge"
            />
            <FeatureCard
              title="Punctuality Guaranteed"
              description="Timely service ensuring you never miss your schedule"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Transfer?
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-3xl mx-auto">
            Contact us now for immediate service. Professional transfers throughout Greece with luxury vehicles.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all font-semibold text-lg shadow-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </a>
            <a
              href="tel:+302752024444"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg shadow-lg"
            >
              <Car className="h-5 w-5 mr-2" />
              (+30) 27520 24444
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sand-200">
      <div className="mb-6">{icon}</div>
      <h3 className="font-display text-2xl font-bold mb-4 text-primary-dark">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="w-8 h-8 bg-accent rounded-full"></div>
      </div>
      <h3 className="font-display text-xl font-bold mb-3 text-primary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
