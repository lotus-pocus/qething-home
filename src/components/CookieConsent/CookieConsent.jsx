import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import "./CookieConsent.css";

const STORAGE_KEY = "qething-cookie-consent";

const GA_MEASUREMENT_ID = "G-01X3LXHCRV";


/* ========================================
   MICROSOFT CLARITY CONSENT
======================================== */

const updateClarityConsent = (hasConsent) => {
  if (typeof window.clarity !== "function") {
    return;
  }

  window.clarity(
    "consentv2",
    {
      ad_Storage: "denied",
      analytics_Storage:
        hasConsent
          ? "granted"
          : "denied",
    }
  );
};


/* ========================================
   GOOGLE ANALYTICS
======================================== */

const loadGoogleAnalytics = () => {

  /*
   * Don't add the Google Analytics script
   * more than once.
   */
  if (
    document.querySelector(
      `script[data-qething-ga="${GA_MEASUREMENT_ID}"]`
    )
  ) {
    return;
  }

  /*
   * Grant analytics storage.
   *
   * Advertising-related consent remains
   * denied because QEthing is using GA
   * for website analytics, not advertising.
   */
  if (typeof window.gtag === "function") {
    window.gtag(
      "consent",
      "update",
      {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      }
    );
  }

  /*
   * Load Google's analytics library only
   * after analytics consent has been granted.
   */
  const script =
    document.createElement("script");

  script.async = true;

  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.dataset.qethingGa =
    GA_MEASUREMENT_ID;

  document.head.appendChild(script);

  /*
   * Configure Google Analytics.
   */
  if (typeof window.gtag === "function") {
    window.gtag(
      "js",
      new Date()
    );

    window.gtag(
      "config",
      GA_MEASUREMENT_ID
    );
  }
};


/* ========================================
   GOOGLE ANALYTICS REJECTION
======================================== */

const rejectGoogleAnalytics = () => {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag(
    "consent",
    "update",
    {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    }
  );
};


/* ========================================
   COOKIE CONSENT COMPONENT
======================================== */

const CookieConsent = () => {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(
    () => !localStorage.getItem(STORAGE_KEY)
  );


  /* ========================================
     RESTORE SAVED CONSENT
  ======================================== */

  useEffect(() => {
    const savedConsent =
      localStorage.getItem(STORAGE_KEY);

    /*
     * If analytics were previously accepted,
     * restore consent for both Clarity
     * and Google Analytics.
     */
    if (savedConsent === "accepted") {
      updateClarityConsent(true);
      loadGoogleAnalytics();
    }

    /*
     * If analytics were previously rejected,
     * keep both services denied.
     */
    if (savedConsent === "rejected") {
      updateClarityConsent(false);
      rejectGoogleAnalytics();
    }


    /* ========================================
       COOKIE PREFERENCES BUTTON
    ======================================== */

    const handleOpenPreferences = () => {
      setIsVisible(true);
    };

    window.addEventListener(
      "qething-open-cookie-preferences",
      handleOpenPreferences
    );

    return () => {
      window.removeEventListener(
        "qething-open-cookie-preferences",
        handleOpenPreferences
      );
    };
  }, []);


  /* ========================================
     ACCEPT ANALYTICS
  ======================================== */

  const handleAccept = () => {
    localStorage.setItem(
      STORAGE_KEY,
      "accepted"
    );

    updateClarityConsent(true);

    loadGoogleAnalytics();

    window.dispatchEvent(
      new CustomEvent(
        "qething-cookie-consent-changed",
        {
          detail: {
            analytics: true,
          },
        }
      )
    );

    setIsVisible(false);
  };


  /* ========================================
     REJECT ANALYTICS
  ======================================== */

  const handleReject = () => {
    localStorage.setItem(
      STORAGE_KEY,
      "rejected"
    );

    updateClarityConsent(false);

    rejectGoogleAnalytics();

    window.dispatchEvent(
      new CustomEvent(
        "qething-cookie-consent-changed",
        {
          detail: {
            analytics: false,
          },
        }
      )
    );

    setIsVisible(false);
  };


  /* ========================================
     HIDE CARD AFTER CHOICE
  ======================================== */

  if (!isVisible) {
    return null;
  }


  /* ========================================
     CARD COLOUR BY ROUTE
  ======================================== */

  /*
   * These pages have predominantly light
   * backgrounds at their initial viewport,
   * so the consent card uses the purple
   * treatment for contrast.
   */
  const lightBackgroundRoutes = [
    "/news",
    "/contact",
    "/privacy",
    "/PlayGame",
  ];

  const useDarkCard =
    lightBackgroundRoutes.includes(
      location.pathname
    );


  /* ========================================
     RENDER
  ======================================== */

  return (
    <aside
      className={
        useDarkCard
          ? "cookie-consent cookie-consent--dark"
          : "cookie-consent"
      }
      aria-label="Cookie preferences"
    >
      <div className="cookie-consent-inner">

        <h2 className="cookie-consent-title">
          Cookies & analytics
        </h2>

        <p className="cookie-consent-copy">
          We use analytics to understand how people use
          QEthing and help us improve the website.
        </p>

        <Link
          to="/privacy"
          className="cookie-consent-privacy"
        >
          Privacy Policy
        </Link>

        <div className="cookie-consent-actions">

          <button
            type="button"
            className="cookie-consent-button cookie-consent-accept"
            onClick={handleAccept}
          >
            Accept analytics
          </button>

          <button
            type="button"
            className="cookie-consent-button cookie-consent-reject"
            onClick={handleReject}
          >
            Reject analytics
          </button>

        </div>

      </div>
    </aside>
  );
};

export default CookieConsent;