"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

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
              <img 
                src="/images/logo.png" 
                alt="Unique Greek Tours"
                className="h-16 w-auto object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/tours" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Tours & Experiences
              </Link>
              
              <Link href="/transfers" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Transfers
              </Link>
              
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
                <Link href="/transfers" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                  Transfers
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
