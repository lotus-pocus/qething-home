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

      {/* LOGO */}
      <div className="hero-logo-wrap">
        <img
          className="hero-logo"
          src="/images/qething-logo.png"
          alt="QEthing"
        />
      </div>

      {/* TAGLINE */}
      <div className="hero-tagline-wrap">
        <div className="hero-tagline">
          A Premium TV Gameshow Party Experience
        </div>
      </div>
    </section>
  );
};

export default Hero;