import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      {/* =====================================
          TOP NAVIGATION
      ===================================== */}

      <header
        className={`site-navigation ${
          hasScrolled ? "site-navigation-scrolled" : ""
        } ${isLightPage ? "site-navigation-light" : ""} ${
          isAbout ? "site-navigation-about" : ""
        }`}
      >
        {/* LOGO */}

        <Link
          to="/"
          className={`site-navigation-logo-link ${
            !isHome ? "site-navigation-logo-sticky" : ""
          }`}
          aria-label="QEthing home"
        >
          <img
            className="site-navigation-logo"
            src={
              isHome ? "/images/qething-logo.png" : "/images/Q_E_logo_Black.png"
            }
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
        className={`navigation-burger ${
          hasScrolled || !isHome ? "navigation-burger-visible" : ""
        } ${menuOpen ? "navigation-burger-open" : ""}`}
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
        className={`navigation-overlay ${
          menuOpen ? "navigation-overlay-open" : ""
        }`}
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

        <div className="navigation-overlay-decoration" aria-hidden="true">
          QUESTION EVERYTHING
        </div>
      </div>
    </>
  );
};

export default Navigation;
