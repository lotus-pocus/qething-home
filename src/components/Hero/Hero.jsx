import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* VIDEO */}
      <div className="hero-video-mask">
        <video
          className="hero-video"
          src="/video/qething-trailer.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-dot-overlay" aria-hidden="true" />
      </div>

      {/* WHITE DIAGONAL EDGE */}
      <svg
        className="hero-edge"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="92"
          x2="100"
          y2="82"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* LARGE OVERLAY LOGO */}
      <div className="hero-main-logo-wrap">
        <img
          className="hero-main-logo"
          src="/images/IntroSection/Qething_logo.png"
          alt="QEthing"
        />
      </div>
    </section>
  );
};

export default Hero;
