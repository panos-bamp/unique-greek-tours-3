"use client";

import { useState } from "react";
import { Calendar, Users, ArrowRight, CheckCircle, AlertCircle, Loader2, Heart } from "lucide-react";

const destinations = ["Nafplio", "Mycenae", "Epidaurus", "Olympia", "Delphi", "Monemvasia", "Corinth", "Other"];
const interests = ["Archaeological Sites", "Food & Wine", "Cultural Experiences", "Nature & Hiking", "Photography", "Family Activities"];

export default function PlanTripPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDates: "",
    travelers: "",
    destinations: [] as string[],
    interests: [] as string[],
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = (field: "destinations" | "interests", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    if (!formData.firstName || !formData.email) {
      setStatus({
        type: "error",
        message: "Please fill in at least your name and email.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "plan-trip",
          formData: formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message || "Your trip request has been sent! We'll respond within 24 hours with a personalized itinerary.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          travelDates: "",
          travelers: "",
          destinations: [],
          interests: [],
          specialRequests: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please email us directly at info@uniquegreektours.com",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "Network error. Please try again or email us directly at info@uniquegreektours.com",
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
            Plan Your <span className="text-accent-light">Dream Trip</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tell us about your perfect Greek adventure and we&apos;ll craft a personalized itinerary
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gradient-to-b from-white to-sand-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Status Messages */}
            {status.type === "success" && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-semibold">Request Sent!</p>
                  <p className="text-green-700 text-sm">{status.message}</p>
                </div>
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-semibold">Something went wrong</p>
                  <p className="text-red-700 text-sm">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Your Information</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                        placeholder="e.g., June 2026"
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
                        <option value="">Select...</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3-4">3-4 people</option>
                        <option value="5-8">5-8 people</option>
                        <option value="9+">9+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Destinations
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {destinations.map((dest) => (
                        <label key={dest} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.destinations.includes(dest)}
                            onChange={() => handleCheckbox("destinations", dest)}
                            className="rounded border-gray-300 text-accent focus:ring-accent"
                          />
                          <span className="text-sm text-gray-700">{dest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Heart className="inline h-4 w-4 mr-2" />
                      Interests
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckbox("interests", interest)}
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
                      name="specialRequests"
                      rows={6}
                      placeholder="Share any special requests, preferences, or questions..."
                      value={formData.specialRequests}
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
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Submit Trip Request
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                We&apos;ll respond within 24 hours with a personalized itinerary proposal
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
