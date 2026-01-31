'use client';

import { useEffect } from 'react';

/**
 * FareHarbor Lightframe Script Component
 * 
 * This component loads the FareHarbor Lightframe API script.
 * Add this to your root layout.tsx to enable booking functionality site-wide.
 * 
 * The script automatically converts any link starting with 
 * "https://fareharbor.com/embeds/book/" into a Lightframe modal.
 */
export default function FareHarborScript() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="fareharbor.com/embeds/api"]')) {
      return;
    }

    // Create and append the FareHarbor script
    const script = document.createElement('script');
    script.src = 'https://fareharbor.com/embeds/api/v1/?autolightframe=yes';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount (optional)
      const existingScript = document.querySelector('script[src*="fareharbor.com/embeds/api"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
