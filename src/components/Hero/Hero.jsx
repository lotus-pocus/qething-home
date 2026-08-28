import "./Hero.css";

const Hero = () => {
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