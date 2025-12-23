import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-2">
              <img 
                src="/images/logo.png"
                alt="Unique Greek Tours"
                className="w-[122px] h-[122px] object-contain -mb-6"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Experience the real Peloponnese with authentic tours led by Argos natives. 
              We share our homeland with passion and deep local knowledge.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-accent-light">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tours" className="text-blue-100 hover:text-accent-light transition-colors">
                  All Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-accent-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-accent-light transition-colors">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-accent-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/plan-trip" className="text-blue-100 hover:text-accent-light transition-colors">
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-accent-light">
              Popular Destinations
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tours/nafplio" className="text-blue-100 hover:text-accent-light transition-colors">
                  Nafplio
                </Link>
              </li>
              <li>
                <Link href="/tours/mycenae" className="text-blue-100 hover:text-accent-light transition-colors">
                  Mycenae
                </Link>
              </li>
              <li>
                <Link href="/tours/epidaurus" className="text-blue-100 hover:text-accent-light transition-colors">
                  Epidaurus
                </Link>
              </li>
              <li>
                <Link href="/tours/olympia" className="text-blue-100 hover:text-accent-light transition-colors">
                  Ancient Olympia
                </Link>
              </li>
              <li>
                <Link href="/tours/delphi" className="text-blue-100 hover:text-accent-light transition-colors">
                  Delphi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-accent-light">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  Argos, Peloponnese<br />
                  Greece
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+302752024444" className="text-blue-100 hover:text-accent-light transition-colors">
                  (+30) 27520 24444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@uniquegreektours.com" className="text-blue-100 hover:text-accent-light transition-colors break-all">
                  info@uniquegreektours.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div>
              © {new Date().getFullYear()} Unique Greek Tours. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-accent-light text-xs">Licensed by Greek Ministry of Culture</span>
              <span className="hidden md:inline">•</span>
              <Link href="/privacy" className="hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-accent-light transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
