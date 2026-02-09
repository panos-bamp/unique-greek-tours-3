"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function TourRequestForm() {
  const searchParams = useSearchParams();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  useEffect(() => {
    // Pre-fill tour if passed in URL parameter
    const tour = searchParams.get("tour");
    if (tour) {
      setSelectedTour(decodeURIComponent(tour));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Success Message */}
        <section className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-sand-50 to-white">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Request Received!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Thank you for your tour request. Our team will review your
                information and get back to you within 24 hours with
                availability and booking confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Browse More Tours
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-50 text-primary px-8 py-4 rounded-lg font-semibold border-2 border-primary transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Book Your Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="container-custom relative z-10 text-white">
          <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
            Request Your Tour
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours
            with availability and confirmation.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-br from-white to-sand-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border border-sand-200">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-gray-600">
                  We respond to all requests within 24 hours
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-sand-200">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  Flexible Booking
                </h3>
                <p className="text-sm text-gray-600">
                  Reserve now and pay later with free cancellation
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-sand-200">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  Personal Service
                </h3>
                <p className="text-sm text-gray-600">
                  Direct contact with our local team
                </p>
              </div>
            </div>

            {/* Request Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Tour Selection */}
                <div>
                  <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-accent" />
                    Select Your Tour
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tour *
                    </label>
                    <select
                      required
                      value={selectedTour}
                      onChange={(e) => setSelectedTour(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      <option value="">Choose a tour...</option>
                      
                      <optgroup label="From Nafplio">
                        <option value="City Walking Tour">City Walking Tour - 80€</option>
                        <option value="Mycenae & Epidavros">Mycenae & Epidavros - From 160€</option>
                        <option value="Anc.Corinth, Mycenae & Epidavros">Anc.Corinth, Mycenae & Epidavros - From 250€</option>
                        <option value="Sparta - Mystras">Sparta - Mystras - From 250€</option>
                        <option value="Ancient Olympia">Ancient Olympia - From 290€</option>
                        <option value="Monemvasia">Monemvasia - From 310€</option>
                        <option value="Argos Cultural Tour">Argos Cultural Tour - From 190€</option>
                        <option value="Malevi Monastery Tour">Malevi Monastery Tour - From 130€</option>
                        <option value="Food Tasting Tour">Food Tasting Tour - 100€</option>
                        <option value="Culture & Taste Tour">Culture & Taste Tour - 140€</option>
                        <option value="Cooking Class">Cooking Class - 110€</option>
                        <option value="Nemea Wine Tour">Nemea Wine Tour - 150€</option>
                        <option value="Olive oil & Epidavros Tour">Olive oil & Epidavros Tour - 115€</option>
                        <option value="Beekeeping Experience">Beekeeping Experience - 50€</option>
                        <option value="Medieval Castles Kayak Tour">Medieval Castles Kayak Tour - 75€</option>
                        <option value="Ancient Sunken City Kayak Tour">Ancient Sunken City Kayak Tour - 95€</option>
                        <option value="Lousios Gorge Hiking">Lousios Gorge Hiking - 130€</option>
                        <option value="Vytina & Elati Hiking">Vytina & Elati Hiking - 130€</option>
                        <option value="Karathona Hiking">Karathona Hiking - 80€</option>
                        <option value="Mycenae - Prosymna Hiking">Mycenae - Prosymna Hiking - 100€</option>
                      </optgroup>

                      <optgroup label="From Poros">
                        <option value="Three Picks City Tour">Three Picks City Tour - From 60€</option>
                        <option value="Hike to Dana Lughthouse">Hike to Dana Lighthouse - From 60€</option>
                        <option value="Kayak to Eros island">Kayak to Eros island - From 70€</option>
                        <option value="Mountain E-bike Tour">Mountain E-bike Tour - From 85€</option>
                        <option value="Methana Volcano & Winery Tour">Methana Volcano & Winery Tour - 160€</option>
                      </optgroup>

                      <optgroup label="From Porto Heli">
                        <option value="Private Sailing Tours">Private Sailing Tours</option>
                        <option value="Wine Tasting & City Food Tour">Wine Tasting & City Food Tour - 210€</option>
                        <option value="Epidavros, Mycenae & Nafplio Tour">Epidavros, Mycenae & Nafplio Tour - From 230€</option>
                      </optgroup>

                      <optgroup label="From Athens">
                        <option value="Athens City & Acropolis Tour">Athens City & Acropolis Tour - From 250€</option>
                        <option value="Delphi Tour">Delphi Tour - From 350€</option>
                        <option value="Corinth Canal, Epidavros, Nafplio City & Mycenae Tour">Corinth, Epidavros, Nafplio & Mycenae - From 350€</option>
                      </optgroup>

                      <optgroup label="From Kalamata">
                        <option value="Ancient Olympia from Kalamata">Ancient Olympia - From 300€</option>
                        <option value="Castle Olive Oil Tasting Tour">Castle Olive Oil Tasting Tour - From 150€</option>
                        <option value="Kalamata Food Tour">Kalamata Food Tour - From 100€</option>
                        <option value="Villages of Mani Tour">Villages of Mani Tour - From 100€</option>
                        <option value="Navarino Bay Mini Cruise">Navarino Bay Mini Cruise - From 130€</option>
                      </optgroup>

                      <optgroup label="From Gythio">
                        <option value="Diros Caves">Diros Caves - From 180€</option>
                        <option value="Monemvasia from Gythio">Monemvasia - From 220€</option>
                        <option value="Sparta - Mystras from Gythio">Sparta - Mystras - From 200€</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
                    <User className="h-7 w-7 text-accent" />
                    Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+30 123 456 7890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., United States"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div>
                  <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
                    <Calendar className="h-7 w-7 text-accent" />
                    Tour Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alternative Date (optional)
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Adults *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6">6 Adults</option>
                        <option value="7+">7+ Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Children (optional)
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent">
                        <option value="0">No Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3">3 Children</option>
                        <option value="4">4 Children</option>
                        <option value="5+">5+ Children</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
                    <MessageSquare className="h-7 w-7 text-accent" />
                    Additional Information
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Questions (optional)
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Let us know about any special requirements, dietary restrictions, accessibility needs, or questions you have..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-sand-200">
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    Submit Tour Request
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    By submitting this form, you agree to our{" "}
                    <Link href="/terms" className="text-accent hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-accent hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-primary text-white rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-3xl mb-4 font-bold">
                Prefer to Talk?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Our team is available to answer any questions and help you plan
                the perfect tour.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="tel:+302752024444"
                  className="flex items-center gap-4 bg-white text-primary px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <div className="text-sm text-gray-600">Call Us</div>
                    <div className="font-semibold">(+30) 27520 24444</div>
                  </div>
                </a>
                <a
                  href="mailto:info@uniquegreektours.com"
                  className="flex items-center gap-4 bg-white text-primary px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="h-6 w-6 text-accent" />
                  <div>
                    <div className="text-sm text-gray-600">Email Us</div>
                    <div className="font-semibold">info@uniquegreektours.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function TourRequestPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <TourRequestForm />
    </Suspense>
  );
}
// 1. Add state
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState({ type: null, message: '' });

// 2. Add handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formType: 'contact', // or 'tour-request' or 'plan-trip'
      formData: { /* your form data */ }
    }),
  });
  
  // Handle response...
};

// 3. Update form JSX
<form onSubmit={handleSubmit}>
  {/* Status message */}
  {/* Form fields */}
  <button disabled={loading}>
    {loading ? 'Sending...' : 'Submit'}
  </button>
</form>