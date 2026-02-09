import { Calendar, Users, MapPin, Heart, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Plan Your Trip | Unique Greek Tours",
  description: "Create your personalized Peloponnese adventure. Tell us your preferences and we'll design the perfect itinerary.",
};

export default function PlanTripPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Plan Your <span className="text-accent-light">Perfect Trip</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tell us about your travel dreams and we'll create a personalized itinerary just for you
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-sand-50 rounded-3xl shadow-2xl p-8 md:p-12">
            <form className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Trip Details</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., June 2025"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-2" />
                        Number of Travelers
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent">
                        <option>1-2 people</option>
                        <option>3-4 people</option>
                        <option>5-8 people</option>
                        <option>More than 8</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-2" />
                      Destinations of Interest
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {destinations.map((dest) => (
                        <label key={dest} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-accent focus:ring-accent" />
                          <span className="text-sm text-gray-700">{dest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Heart className="inline h-4 w-4 mr-2" />
                      Your Interests
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-accent focus:ring-accent" />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us More About Your Dream Trip
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Share any special requests, preferences, or questions..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary justify-center text-lg py-4">
                Submit Trip Request
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours with a personalized itinerary proposal
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const destinations = ["Nafplio", "Mycenae", "Epidaurus", "Olympia", "Delphi", "Monemvasia", "Corinth", "Other"];
const interests = ["Archaeological Sites", "Food & Wine", "Cultural Experiences", "Nature & Hiking", "Photography", "Family Activities"];

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