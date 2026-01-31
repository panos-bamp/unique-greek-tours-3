import { Metadata } from "next";
import FareHarborCalendar from "@/components/FareHarborCalendar";
import { Calendar, Clock, CreditCard, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Tour | Unique Greek Tours",
  description: "Book your private tour in Greece's Peloponnese region. Check availability and secure your authentic Greek adventure today.",
  alternates: {
    canonical: "https://unique-greek-tours-3.vercel.app/book",
  },
};

const bookingFeatures = [
  {
    icon: Calendar,
    title: "Instant Confirmation",
    description: "Receive immediate booking confirmation via email",
  },
  {
    icon: Clock,
    title: "Flexible Cancellation",
    description: "Free cancellation up to 24 hours before your tour",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Your payment information is protected with SSL encryption",
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "Book directly with us for the best available rates",
  },
];

export default function BookPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Book Your Greek Adventure
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Select your tour, choose your date, and get ready for an unforgettable experience in the Peloponnese
          </p>
        </div>
      </section>

      {/* Booking Features */}
      <section className="py-8 bg-sand-50 border-b border-sand-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bookingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-primary">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-2 text-center">
              Check Availability & Book
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Browse our tours and select your preferred date
            </p>
            
            {/* FareHarbor Calendar Embed */}
            <FareHarborCalendar height="700px" />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-primary mb-4">
              Need Help Booking?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you plan the perfect Greek experience. Contact us for custom tours, group bookings, or any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+302752024444"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
              >
                📞 Call Us: +30 27520 24444
              </a>
              <a
                href="mailto:info@uniquegreektours.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold rounded-lg transition-all"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
