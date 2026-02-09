import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Unique Greek Tours",
  description: "Get in touch with Unique Greek Tours. Plan your perfect Peloponnese adventure with our local experts.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold">
            Let's Plan Your <span className="text-accent-light">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Share your travel dreams with us and we'll make them reality
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
                We're passionate about sharing our homeland and can't wait to help you plan 
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
                        <p className="text-gray-600">{info.content}</p>
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <textarea
                    rows={6}
                    placeholder="Tell us about your trip *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  ></textarea>
                  <button type="submit" className="w-full btn-primary justify-center">
                    <Send className="h-5 w-5" />
                    Send Message
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

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    content: "Argos, Peloponnese, Greece",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "(+30) 27520 24444",
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