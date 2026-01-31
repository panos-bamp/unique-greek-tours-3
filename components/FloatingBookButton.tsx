'use client';

import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { FAREHARBOR_CONFIG } from './BookButton';

interface FloatingBookButtonProps {
  /** Position on screen */
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  /** Show after scrolling (in pixels) */
  showAfterScroll?: number;
  /** Hide on specific pages (e.g., ['/contact', '/book']) */
  hideOnPages?: string[];
}

/**
 * FloatingBookButton Component
 * 
 * A floating "Book Now" button that stays visible as users scroll.
 * Recommended by FareHarbor for maximizing conversions.
 * 
 * Add to layout.tsx:
 * <FloatingBookButton position="bottom-right" showAfterScroll={200} />
 */
export default function FloatingBookButton({
  position = 'bottom-right',
  showAfterScroll = 200,
  hideOnPages = [],
}: FloatingBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if on a page where button should be hidden
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (hideOnPages.some(page => currentPath.startsWith(page))) {
        setIsVisible(false);
        return;
      }
    }

    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= showAfterScroll) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, isDismissed, hideOnPages]);

  const positionStyles = {
    'bottom-right': 'right-4 sm:right-6',
    'bottom-left': 'left-4 sm:left-6',
    'bottom-center': 'left-1/2 -translate-x-1/2',
  };

  const bookingUrl = `${FAREHARBOR_CONFIG.baseUrl}/?flow=${FAREHARBOR_CONFIG.flowId}&from-ssl=yes`;

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-4 sm:bottom-6 z-50
        ${positionStyles[position]}
        transition-all duration-300 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
          aria-label="Dismiss booking button"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Book Now button */}
        <a
          href={bookingUrl}
          className="
            flex items-center gap-2 px-6 py-3
            bg-accent hover:bg-accent-dark
            text-white font-semibold
            rounded-full shadow-lg hover:shadow-xl
            transition-all duration-300
            animate-pulse-subtle
          "
        >
          <Calendar className="h-5 w-5" />
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
}
