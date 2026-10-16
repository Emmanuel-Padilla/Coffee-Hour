/**
 * GA4 is only wired up if PUBLIC_GA_MEASUREMENT_ID is set in the environment.
 * No ID is ever hardcoded or invented here — see .env.example.
 */
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
let initialized = false;

export function initAnalytics() {
  if (!GA_ID || initialized || typeof document === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', { page_path: path });
}

export type AnalyticsEvent =
  | 'click_phone'
  | 'click_directions'
  | 'click_view_menu'
  | 'change_language'
  | 'view_experience'
  | 'play_video'
  | 'click_social'
  | 'submit_form';

export function trackEvent(name: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
