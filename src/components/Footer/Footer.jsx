import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  /*
   * Add the full QEthing social profile URLs here
   * once they are ready to go live.
   */
  const socialLinks = [
    {
      name: "Instagram",
      url: "",
    },
    {
      name: "TikTok",
      url: "",
    },
    {
      name: "Snapchat",
      url: "",
    },
    {
      name: "Facebook",
      url: "",
    },
    {
      name: "LinkedIn",
      url: "",
    },
  ];

  const activeSocialLinks = socialLinks.filter(
    (social) => social.url
  );

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        {/* ========================================
            BRAND
        ======================================== */}

        <div className="site-footer-brand">
          <img
            src="/images/About/QEthing_Studios_black.svg"
            alt="QEthing Studios"
            className="site-footer-logo"
          />
        </div>

        {/* ========================================
            SITE LINKS
        ======================================== */}

        <nav
          className="site-footer-nav"
          aria-label="Footer navigation"
        >
          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/privacy">
            Privacy Policy
          </Link>
        </nav>

        {/* ========================================
            SOCIAL LINKS
        ======================================== */}

        {activeSocialLinks.length > 0 && (
          <div
            className="site-footer-socials"
            aria-label="QEthing social media"
          >
            {activeSocialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`QEthing on ${social.name}`}
              >
                {social.name}
              </a>
            ))}
          </div>
        )}

        {/* ========================================
            COPYRIGHT
        ======================================== */}

        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()} QEthing Studios.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;