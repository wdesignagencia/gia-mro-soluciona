// Google Ads Conversion Tracking Utility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Tracks a conversion event in Google Ads
 * @param conversionLabel - The conversion label configured in Google Ads
 * @param value - Optional conversion value (defaults to 1.0)
 */
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': ['AW-17527117768/ZcUACJr7m74bEMivyqVB'],
      'value': value || 1.0,
      'currency': 'BRL'
    });
    console.log(`✅ Conversão Google Ads rastreada: ${conversionLabel}`);
  } else {
    console.warn('⚠️ Google Ads gtag não está disponível');
  }
};

/**
 * Predefined conversion labels for different user actions
 * These labels must match the conversion actions created in Google Ads
 */
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  FORM_CONTACT_SUBMIT: 'form_contact_submit',
  FORM_QUICK_SUBMIT: 'form_quick_submit'
};
