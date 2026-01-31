'use client';

import { useEffect, useRef } from 'react';
import { FAREHARBOR_CONFIG } from './BookButton';

interface FareHarborCalendarProps {
  /** Height of the calendar embed */
  height?: string;
  /** Optional: Show only specific tour item */
  itemId?: string;
  /** Optional: Custom flow ID */
  flowId?: string;
  /** Full width calendar */
  fullWidth?: boolean;
  /** Additional className */
  className?: string;
}

/**
 * FareHarborCalendar Component
 * 
 * Embeds a FareHarbor availability calendar directly in the page.
 * This allows customers to see available dates without clicking a button.
 * 
 * Usage:
 * <FareHarborCalendar /> - Shows all tours calendar
 * <FareHarborCalendar itemId="12345" /> - Shows specific tour calendar
 */
export default function FareHarborCalendar({
  height = '600px',
  itemId,
  flowId,
  fullWidth = true,
  className = '',
}: FareHarborCalendarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Build the calendar embed URL
  const buildCalendarUrl = () => {
    const params = new URLSearchParams();
    params.set('flow', flowId || FAREHARBOR_CONFIG.flowId);
    params.set('from-ssl', 'yes');
    params.set('full-items', 'yes');

    let url = FAREHARBOR_CONFIG.baseUrl;
    
    if (itemId) {
      url += `/items/${itemId}`;
    }
    
    url += `/?${params.toString()}`;
    
    return url;
  };

  return (
    <div 
      ref={containerRef}
      className={`
        fareharbor-calendar-container
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      style={{ minHeight: height }}
    >
      <iframe
        src={buildCalendarUrl()}
        style={{
          width: '100%',
          height: height,
          border: 'none',
          borderRadius: '8px',
        }}
        title="Tour Booking Calendar"
        loading="lazy"
      />
    </div>
  );
}
