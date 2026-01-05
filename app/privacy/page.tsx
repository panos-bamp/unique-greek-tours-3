export const metadata = {
  title: "Privacy Policy | Unique Greek Tours",
  description: "Privacy policy for Unique Greek Tours - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl mb-4 font-bold">
            Privacy Policy
          </h1>
          <p className="text-lg text-blue-100">
            How we protect and use your information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Unique Greek Tours respects your privacy and is committed to protecting your personal data. This privacy policy 
              will inform you about how we look after your personal data when you visit our website and tell you about your 
              privacy rights.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data:</strong> First name, last name, title</li>
              <li><strong>Contact Data:</strong> Email address, telephone number</li>
              <li><strong>Transaction Data:</strong> Details about payments and bookings</li>
              <li><strong>Technical Data:</strong> IP address, browser type, time zone settings</li>
              <li><strong>Usage Data:</strong> Information about how you use our website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To process and deliver your tour bookings</li>
              <li>To communicate with you about your bookings</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
              employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2>Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with 
              a good experience when you browse our website and also allows us to improve our site.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or 
              enabling those connections may allow third parties to collect or share data about you. We do not control these 
              third-party websites and are not responsible for their privacy statements.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@uniquegreektours.com<br />
              <strong>Phone:</strong> (+30) 27520 24444<br />
              <strong>Address:</strong> Argos, Peloponnese, Greece
            </p>

            <div className="mt-12 p-6 bg-sand-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-0">
                <strong>Last Updated:</strong> December 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
