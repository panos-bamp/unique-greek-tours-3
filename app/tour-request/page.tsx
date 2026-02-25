"use client";

import { useState } from "react";
import { MapPin, Calendar, Users, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const tourOptions = [
  "Mycenae & Epidaurus",
  "Ancient Olympia",
  "Sparta & Mystras",
  "Monemvasia Castle",
  "Corinth & Epidaurus",
  "Delphi Tour",
  "Nemea Wine Tasting",
  "Food & Wine Tour",
  "Cooking Class",
  "Kayaking Tour",
  "Hiking Tour",
  "Custom Tour",
];

export default function TourRequestPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tourType: "",
    date: "",
    numberOfPeople: "",
    pickupLocation: "",
    additionalInfo: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.tourType || !formData.date || !formData.numberOfPeople) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "tour-request",
          formData: formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message || "Your tour request has been sent successfully! We'll respond within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          tourType: "",
          date: "",
          numberOfPeople: "",
          pickupLocation: "",
          additionalInfo: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again or email us directly at info@uniquegreektours.com",
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
            Request Your <span className="text-accent-light">Tour</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Select your preferred tour and we&apos;ll take care of the rest
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
              {/* Your Information */}
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Tour Details */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Tour Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Tour *
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                    >
                      <option value="">Choose a tour...</option>
                      {tourOptions.map((tour) => (
                        <option key={tour} value={tour}>
                          {tour}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-1" />
                        Number of People *
                      </label>
                      <input
                        type="number"
                        name="numberOfPeople"
                        placeholder="e.g. 2"
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="Hotel name or address"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={4}
                      placeholder="Any special requests, dietary requirements, accessibility needs..."
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
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
                    <Send className="h-5 w-5" />
                    Submit Tour Request
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                We&apos;ll respond within 24 hours to confirm your booking details
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
