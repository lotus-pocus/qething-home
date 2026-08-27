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
