import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className="hero">

      {/* VIDEO */}
      <div className="hero-video-mask">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={
            isMobile
              ? "/images/Hero/hero-mobile.jpg"
              : "/images/Hero/hero-desktop.jpg"
          }
        >

          {/* MOBILE / TABLET PORTRAIT TRAILER */}
          <source
            src="/video/qething-trailerPortrait.mp4"
            media="(max-width: 768px)"
            type="video/mp4"
          />

          {/* DESKTOP LANDSCAPE TRAILER */}
          <source
            src="/video/qething-trailer.mp4"
            type="video/mp4"
          />

        </video>

        <div
          className="hero-dot-overlay"
          aria-hidden="true"
        />

      </div>

      {/* LARGE OVERLAY LOGO */}
      <div className="hero-main-logo-wrap">
        <img
          className="hero-main-logo"
          src="/images/IntroSection/Qething_logo1.png"
          alt="QEthing"
        />
      </div>

    </section>
  );
};

export default Hero;