// Google Ads Conversion Tracking Utility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Tracks a conversion event in Google Ads with callback support
 * @param url - Optional URL to redirect to after conversion is tracked
 */
export const gtag_report_conversion = (url?: string) => {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17527117768/wknbCOvwlL4bEMivyqVB',
      'event_callback': callback
    });
    console.log(`✅ Conversão Google Ads rastreada`);
  } else {
    console.warn('⚠️ Google Ads gtag não está disponível');
    // Se gtag não estiver disponível, redireciona mesmo assim
    if (url) {
      window.location.href = url;
    }
  }
  return false;
};

