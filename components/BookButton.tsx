'use client';

import { Calendar, ArrowRight } from 'lucide-react';

/**
 * FareHarbor Configuration
 * Update these values with your specific FareHarbor account details
 */
export const FAREHARBOR_CONFIG = {
  shortname: 'uniquegreektours',
  flowId: '481752',
  baseUrl: 'https://fareharbor.com/embeds/book/uniquegreektours',
  language: 'en-us',
};

interface BookButtonProps {
  /** Optional: Link to a specific tour item by ID */
  itemId?: string;
  /** Optional: Custom flow ID (overrides default) */
  flowId?: string;
  /** Button text */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Show calendar icon */
  showIcon?: boolean;
  /** Show arrow */
  showArrow?: boolean;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * BookButton Component
 * 
 * A reusable booking button that opens the FareHarbor Lightframe.
 * 
 * Usage:
 * - <BookButton /> - Opens general booking flow
 * - <BookButton itemId="12345" /> - Opens specific tour booking
 * - <BookButton variant="accent" size="lg">Book Now</BookButton>
 */
export default function BookButton({
  itemId,
  flowId,
  children = 'Book Now',
  className = '',
  variant = 'primary',
  size = 'md',
  showIcon = true,
  showArrow = false,
  fullWidth = false,
}: BookButtonProps) {
  // Build the FareHarbor URL
  const buildBookingUrl = () => {
    const params = new URLSearchParams();
    
    // Add flow ID
    params.set('flow', flowId || FAREHARBOR_CONFIG.flowId);
    
    // Add tracking parameters (optional)
    params.set('from-ssl', 'yes');
    
    let url = FAREHARBOR_CONFIG.baseUrl;
    
    // If specific item, add to URL path
    if (itemId) {
      url += `/items/${itemId}`;
    }
    
    url += `/?${params.toString()}`;
    
    return url;
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-white hover:bg-gray-50 text-primary border-2 border-primary',
    outline: 'bg-transparent hover:bg-white/10 text-white border-2 border-white',
    accent: 'bg-accent hover:bg-accent-dark text-white',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={buildBookingUrl()}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-lg
        transition-all duration-300
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {showIcon && <Calendar className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />}
      {children}
      {showArrow && <ArrowRight className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />}
    </a>
  );
}

/**
 * BookLink Component
 * 
 * A simple text link that opens FareHarbor booking.
 * Use this for inline text links.
 */
export function BookLink({
  itemId,
  children = 'Book this tour',
  className = '',
}: {
  itemId?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const buildBookingUrl = () => {
    let url = `${FAREHARBOR_CONFIG.baseUrl}/?flow=${FAREHARBOR_CONFIG.flowId}&from-ssl=yes`;
    if (itemId) {
      url = `${FAREHARBOR_CONFIG.baseUrl}/items/${itemId}/?flow=${FAREHARBOR_CONFIG.flowId}&from-ssl=yes`;
    }
    return url;
  };

  return (
    <a
      href={buildBookingUrl()}
      className={`text-accent hover:text-accent-dark underline underline-offset-2 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
