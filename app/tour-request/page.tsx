"use client";

import { Calendar, Users, MapPin, Clock, ArrowRight, Info } from "lucide-react";
import { useState } from "react";

export default function TourRequestPage() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tourType: '',
    date: '',
    numberOfPeople: '',
    pickupLocation: '',
    additionalInfo: ''
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'tour-request',
          formData: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            tourType: formData.tourType,
            date: formData.date,
            numberOfPeople: formData.numberOfPeople,
            pickupLocation: formData.pickupLocation,
            additionalInfo: formData.additionalInfo,
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your tour request has been submitted. We\'ll contact you soon to confirm details.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          tourType: '',
          date: '',
          numberOfPeople: '',
          pickupLocation: '',
          additionalInfo: ''
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
            Request Your <span className="text-accent-light">Tour</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Select your preferred tour and we'll take care of the rest
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

              {/* Tour Details */}
              <div>
                <h2 className="font-display text-3xl text-primary mb-6">Tour Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-2" />
                      Select Tour *
                    </label>
                    <select
                      name="tourType"
                      required
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Choose a tour...</option>
                      <option value="Mycenae & Epidaurus">Mycenae & Epidaurus</option>
                      <option value="Ancient Olympia">Ancient Olympia</option>
                      <option value="Sparta & Mystras">Sparta & Mystras</option>
                      <option value="Monemvasia Castle">Monemvasia Castle</option>
                      <option value="Corinth & Epidaurus">Corinth & Epidaurus</option>
                      <option value="Delphi Tour">Delphi Tour</option>
                      <option value="Nemea Wine Tasting">Nemea Wine Tasting</option>
                      <option value="Food & Wine Tour">Food & Wine Tour</option>
                      <option value="Cooking Class">Cooking Class</option>
                      <option value="Kayaking Tour">Kayaking Tour</option>
                      <option value="Hiking Tour">Hiking Tour</option>
                      <option value="Custom Tour">Custom Tour</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-2" />
                        Number of People *
                      </label>
                      <input
                        type="number"
                        name="numberOfPeople"
                        min="1"
                        placeholder="e.g., 4"
                        required
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      placeholder="e.g., Hotel Grande Bretagne, Athens"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Info className="inline h-4 w-4 mr-2" />
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={4}
                      placeholder="Any special requests or questions?"
                      value={formData.additionalInfo}
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
                {loading ? 'Submitting...' : 'Submit Tour Request'}
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours to confirm your booking details
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
