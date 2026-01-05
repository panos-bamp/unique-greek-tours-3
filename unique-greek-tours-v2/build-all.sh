#!/bin/bash

echo "Building Unique Greek Tours v2..."

# Create Navigation component
cat > components/Navigation.tsx << 'NAVEOF'
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-dark text-white py-2 text-sm hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:+302752024444" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>(+30) 27520 24444</span>
              </a>
              <a href="mailto:info@uniquegreektours.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>info@uniquegreektours.com</span>
              </a>
            </div>
            <div className="text-accent-light text-xs tracking-wide">
              Licensed by Greek Ministry of Culture
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                  UGT
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-primary leading-tight tracking-tight">
                  Unique Greek Tours
                </span>
                <span className="text-xs text-gray-600 tracking-widest uppercase">
                  Authentic Peloponnese
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Tours & Experiences
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link href="/tours" className="block px-4 py-2 hover:bg-sand-50 hover:text-primary transition-colors">
                    All Tours
                  </Link>
                  <Link href="/tours/nafplio" className="block px-4 py-2 hover:bg-sand-50 hover:text-primary transition-colors">
                    Nafplio Tours
                  </Link>
                  <Link href="/tours/mycenae" className="block px-4 py-2 hover:bg-sand-50 hover:text-primary transition-colors">
                    Mycenae & Epidaurus
                  </Link>
                  <Link href="/tours/olympia" className="block px-4 py-2 hover:bg-sand-50 hover:text-primary transition-colors">
                    Ancient Olympia
                  </Link>
                </div>
              </div>
              
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
                About Us
              </Link>
              
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Travel Blog
              </Link>
              
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                href="/plan-trip" 
                className="px-6 py-2.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition-all shadow-md hover:shadow-lg"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <Link href="/tours" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                  Tours & Experiences
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                  About Us
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                  Travel Blog
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                  Contact
                </Link>
                <Link 
                  href="/plan-trip" 
                  className="px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition-all text-center mt-4"
                >
                  Plan Your Trip
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
NAVEOF

echo "✓ Navigation component created"

# Create Footer component
cat > components/Footer.tsx << 'FOOTEOF'
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-white font-display text-2xl font-bold">
                UGT
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold leading-tight">
                  Unique Greek Tours
                </span>
                <span className="text-xs text-blue-200 tracking-widest">
                  PELOPONNESE EXPERTS
                </span>
              </div>
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
FOOTEOF

echo "✓ Footer component created"
echo "✓ All components built successfully!"

