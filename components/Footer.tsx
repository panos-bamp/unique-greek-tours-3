import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-display text-2xl mb-4 text-accent-light">Unique Greek Tours</h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              Authentic experiences in the Peloponnese, crafted by local experts who are passionate about sharing Greece's hidden treasures.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/uniquegreektours" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/uniquegreektours" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent-light">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/tours" className="hover:text-accent transition-colors">All Tours</Link></li>
              <li><Link href="/tours/nafplio" className="hover:text-accent transition-colors">Nafplio Tours</Link></li>
              <li><Link href="/tours/poros" className="hover:text-accent transition-colors">Poros Tours</Link></li>
              <li><Link href="/tours/athens" className="hover:text-accent transition-colors">Athens Tours</Link></li>
              <li><Link href="/trips" className="hover:text-accent transition-colors">Multi-Day Trips</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent-light">Popular Tours</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="/tours/nafplio/nafplio-mycenae-epidavros" className="hover:text-accent transition-colors">Mycenae & Epidaurus</Link></li>
              <li><Link href="/tours/nafplio/nafplio-ancient-olympia-tour" className="hover:text-accent transition-colors">Ancient Olympia</Link></li>
              <li><Link href="/tours/nafplio/nafplio-sparta-mystras-tour" className="hover:text-accent transition-colors">Sparta & Mystras</Link></li>
              <li><Link href="/tours/nafplio/nafplio-monemvasia-tour" className="hover:text-accent transition-colors">Monemvasia</Link></li>
              <li><Link href="/tours/nafplio/nafplio-winetasting-tour-nemea" className="hover:text-accent transition-colors">Nemea Wine Tour</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-4 text-accent-light">Contact Us</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>Argos, Peloponnese<br />Greece</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <a href="tel:+302751067616" className="hover:text-accent transition-colors block">+30 27510 67616</a>
                  <a href="tel:+306984261899" className="hover:text-accent transition-colors block">+30 698 4261899</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <span className="block text-accent-light">Vaggelis Zouzias</span>
                  <a href="tel:+306945890920" className="hover:text-accent transition-colors">+30 694 5890920</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <a href="mailto:info@uniquegreektours.com" className="hover:text-accent transition-colors">
                  info@uniquegreektours.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>&copy; {new Date().getFullYear()} Unique Greek Tours. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
