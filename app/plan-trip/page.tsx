"use client";

import { Calendar, Users, MapPin, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PlanTripPage() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDates: '',
    travelers: '1-2 people',
    destinations: [] as string[],
    interests: [] as string[],
    message: ''
  });
  
  // State for loading and status
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ 
    type: null, 
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (field: 'destinations' | 'interests', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'plan-trip',
          formData: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            destinations: formData.destinations.join(', '),
            duration: formData.travelDates,
            travelDates: formData.travelDates,
            travelers: formData.travelers,
            interests: formData.interests.join(', '),
            specialRequests: formData.message,
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your trip request has been submitted. We\'ll contact you within 24 hours with a personalized itinerary.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          travelDates: '',
          travelers: '1-2 people',
          destinations: [],
          interests: [],
          message: ''
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Sorry, there was an error submitting your request. Please try again or email us at info@uniquegreektours.com' 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error submitting your request. Please try again or email us at info@uniquegreektours.com' 
      });
    } finally {
      setLoading(false);
    }
  };

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
            {/* Status Message */}
            {status.type && (
              <div className={`p-4 rounded-lg mb-6 ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                        name="travelDates"
                        placeholder="e.g., June 2025"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-2" />
                        Number of Travelers
                      </label>
                      <select 
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                      >
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
                          <input 
                            type="checkbox" 
                            checked={formData.destinations.includes(dest)}
                            onChange={() => handleCheckboxChange('destinations', dest)}
                            className="rounded border-gray-300 text-accent focus:ring-accent" 
                          />
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
                          <input 
                            type="checkbox" 
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckboxChange('interests', interest)}
                            className="rounded border-gray-300 text-accent focus:ring-accent" 
                          />
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
                      name="message"
                      rows={6}
                      placeholder="Share any special requests, preferences, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Trip Request'}
                {!loading && <ArrowRight className="h-5 w-5" />}
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
