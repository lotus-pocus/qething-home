import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  /*
   * Add the full QEthing social URLs
   * when the profiles are ready to go live.
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
            TOP ROW
        ======================================== */}

        <div className="site-footer-top">

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

        </div>


        {/* ========================================
            DIVIDER
        ======================================== */}

        <div className="site-footer-divider" />


        {/* ========================================
            BOTTOM ROW
        ======================================== */}

        <div className="site-footer-bottom">

          <div className="site-footer-brand">
            <img
              src="/images/About/QEthing_Studios_black.svg"
              alt="QEthing Studios"
              className="site-footer-logo"
            />
          </div>


          <p className="site-footer-copyright">
            © {new Date().getFullYear()} QEthing Studios.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;