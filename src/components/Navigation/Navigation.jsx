import { useEffect, useRef, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  /*
    ABOUT PAGE LOGO COLOUR

    false = black logo
    true  = white logo
  */
  const [aboutLogoWhite, setAboutLogoWhite] = useState(true);

  const logoRef = useRef(null);

  const location = useLocation();

  const isHome = location.pathname === "/";

  const isAbout = location.pathname === "/about";

  const isLightPage = [
    "/home",
    "/about",
    "/news",
    "/contact",
    "/PlayGame",
  ].includes(location.pathname);

  /* ========================================
     SCROLL DETECTION

     This is still only responsible for
     the existing nav → burger behaviour.
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 140);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
     ABOUT PAGE
     STICKY LOGO COLOUR DETECTION
  ======================================== */

  useEffect(() => {
    /*
      Only About needs dynamic colour
      switching.

      Every other page keeps its
      existing behaviour.
    */

    if (!isAbout) {
      return;
    }

    let animationFrameId = null;

    const detectAboutLogoColour = () => {
      const logoElement = logoRef.current;

      if (!logoElement) {
        return;
      }

      const logoRect = logoElement.getBoundingClientRect();

      const logoCentreX = logoRect.left + logoRect.width / 2;

      const logoCentreY = logoRect.top + logoRect.height / 2;

      /* =====================================
         SPECIAL CASE:
         ABOUT HERO PINK STRIPE

         The stripe is ::before, so it does
         not appear in elementsFromPoint().

         We calculate its real diagonal edge
         using the exact same geometry as
         AboutHero.css.
      ===================================== */

      const aboutHero = document.querySelector(".about-hero");

      if (aboutHero) {
        const heroRect = aboutHero.getBoundingClientRect();

        const stripeStyles = window.getComputedStyle(aboutHero, "::before");

        const stripeHeight = parseFloat(stripeStyles.height);

        /*
          Position of the logo inside
          the hero section.
        */

        const localX = logoCentreX - heroRect.left;

        const localY = logoCentreY - heroRect.top;

        const heroWidth = heroRect.width;

        /*
          AboutHero.css uses slightly
          different diagonal end points
          at smaller breakpoints:

          Desktop = 50%
          <= 900px = 52%
          <= 600px = 55%
        */

        let rightEdgeRatio = 0.5;

        if (window.innerWidth <= 600) {
          rightEdgeRatio = 0.55;
        } else if (window.innerWidth <= 900) {
          rightEdgeRatio = 0.52;
        }

        const xProgress = Math.min(Math.max(localX / heroWidth, 0), 1);

        /*
          Left side of stripe ends at
          100% of its height.

          Right side ends at 50 / 52 / 55%.

          Interpolate between them so
          the switching line follows the
          actual diagonal rather than
          using a flat scroll threshold.
        */

        const stripeBottomAtLogo =
          stripeHeight * (1 - (1 - rightEdgeRatio) * xProgress);

        const logoIsInsideHeroStripe =
          localY >= 0 && localY <= stripeBottomAtLogo;

        if (logoIsInsideHeroStripe) {
          setAboutLogoWhite(true);

          return;
        }
      }

      /* =====================================
         REST OF ABOUT PAGE

         Now check the actual section
         underneath the logo.
      ===================================== */

      const elementsUnderLogo = document.elementsFromPoint(
        logoCentreX,
        logoCentreY,
      );

      for (const element of elementsUnderLogo) {
        const section = element.closest?.(
          `
              .about-hero,
              .about-story,
              .about-network,
              .about-team,
              .about-experience,
              .about-london,
              .about-closing
            `,
        );

        if (!section) {
          continue;
        }

        /* ===================================
           WHITE BACKGROUNDS
           → BLACK LOGO
        =================================== */

        if (
          section.classList.contains("about-hero") ||
          section.classList.contains("about-network") ||
          section.classList.contains("about-team") ||
          section.classList.contains("about-london") ||
          section.classList.contains("about-closing")
        ) {
          setAboutLogoWhite(false);

          return;
        }

        /* ===================================
           PURPLE / PINK / IMAGE BACKGROUNDS
           → WHITE LOGO
        =================================== */

        if (
          section.classList.contains("about-story") ||
          section.classList.contains("about-experience") ||
          section.classList.contains("about-london")
        ) {
          setAboutLogoWhite(true);

          return;
        }
      }
    };

    /* =====================================
       THROTTLED UPDATE

       We only perform one check per
       animation frame while scrolling.
    ===================================== */

    const requestLogoCheck = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;

        detectAboutLogoColour();
      });
    };

    /*
      Check immediately on load.
    */

    requestLogoCheck();

    /*
      Then update whenever the page
      scrolls or changes size.
    */

    window.addEventListener("scroll", requestLogoCheck, {
      passive: true,
    });

    window.addEventListener("resize", requestLogoCheck);

    return () => {
      window.removeEventListener("scroll", requestLogoCheck);

      window.removeEventListener("resize", requestLogoCheck);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAbout]);

  /* ========================================
     LOCK PAGE SCROLL WHEN MENU IS OPEN
  ======================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ========================================
     CLOSE OVERLAY MENU
  ======================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ========================================
     LOGO SOURCE

     HOME:
     Existing white logo.

     ABOUT:
     Dynamically black / white.

     NEWS / CONTACT / PLAY GAME:
     Existing black logo behaviour.
  ======================================== */

  const getLogoSource = () => {
    if (isHome) {
      return "/images/qething-logo.png";
    }

    if (isAbout) {
      return aboutLogoWhite
        ? "/images/qething-logo.png"
        : "/images/Q_E_logo_Black.png";
    }

    return "/images/Q_E_logo_Black.png";
  };

  return (
    <>
      {/* =====================================
          TOP NAVIGATION
      ===================================== */}

      <header
        className={`
          site-navigation
          ${hasScrolled ? "site-navigation-scrolled" : ""}
          ${isLightPage ? "site-navigation-light" : ""}
          ${isAbout ? "site-navigation-about" : ""}
        `}
      >
        {/* LOGO */}

        <Link
          ref={logoRef}
          to="/"
          className={`
            site-navigation-logo-link
            ${!isHome ? "site-navigation-logo-sticky" : ""}
          `}
          aria-label="QEthing home"
        >
          <img
            className="site-navigation-logo"
            src={getLogoSource()}
            alt="QEthing"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="site-navigation-links" aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            News
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/PlayGame"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Play Game
          </NavLink>
        </nav>
      </header>

      {/* =====================================
          STICKY BURGER
      ===================================== */}

      <button
        className={`
          navigation-burger
          ${hasScrolled || !isHome ? "navigation-burger-visible" : ""}
          ${menuOpen ? "navigation-burger-open" : ""}
        `}
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* =====================================
          FULL SCREEN BURGER MENU
      ===================================== */}

      <div
        className={`
          navigation-overlay
          ${menuOpen ? "navigation-overlay-open" : ""}
        `}
      >
        <nav className="navigation-overlay-links" aria-label="Menu navigation">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "overlay-link-active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "overlay-link-active" : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/news"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "overlay-link-active" : ""
            }
          >
            News
          </NavLink>

          <NavLink
            to="/PlayGame"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "overlay-link-active" : ""
            }
          >
            Play Game
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "overlay-link-active" : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* BACKGROUND DECORATION */}

        <div
          className="
            navigation-overlay-decoration
          "
          aria-hidden="true"
        >
          QUESTION EVERYTHING
        </div>
      </div>
    </>
  );
};

export default Navigation;
