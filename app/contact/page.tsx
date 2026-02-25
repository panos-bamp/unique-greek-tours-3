"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    content: "Argos, Peloponnese, Greece",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+30 27510 67616", "+30 698 4261899"],
  },
  {
    icon: Phone,
    title: "Vaggelis Zouzias",
    lines: ["+30 694 5890920"],
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@uniquegreektours.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Saturday: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    if (!formData.firstName || !formData.email || !formData.message) {
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
          formType: "contact",
          formData: formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message || "Your message has been sent! We'll get back to you soon.",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
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
            Let&apos;s Plan Your <span className="text-accent-light">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Share your travel dreams with us and we&apos;ll make them reality
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-white to-sand-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-primary mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our tours? Want to create a custom itinerary? 
                We&apos;re passionate about sharing our homeland and can&apos;t wait to help you plan 
                your perfect Peloponnese adventure.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                        {info.content && <p className="text-gray-600">{info.content}</p>}
                        {info.lines && info.lines.map((line, i) => (
                          <p key={i} className="text-gray-600">
                            <a href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                              {line}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="font-display text-3xl text-primary mb-8">Send Us a Message</h2>

                {/* Status Messages */}
                {status.type === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-green-700">{status.message}</p>
                  </div>
                )}

                {status.type === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700">{status.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your trip *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
