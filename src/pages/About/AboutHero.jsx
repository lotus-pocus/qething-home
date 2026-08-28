import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-container">

        <img
          src="/images/About/QEthing_Studios_black.svg"
          alt="QEthing Studios"
          className="about-studios-logo"
        />

        <h1 className="about-title">
          <span>SMALL STUDIO.</span>

          <span className="about-title-pink">
            BIG EXPERIENCE.
          </span>
        </h1>

        <p className="about-intro">
          We are QEthing Studios.
          <br />

          <span className="about-intro-line">
            A London-based development team behind the QEthing platform.
          </span>
        </p>

      </div>
    </section>
  );
};

export default AboutHero;