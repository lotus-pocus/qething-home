import "./AboutPlatform.css";

const AboutPlatform = () => {
  return (
    <section className="about-platform">
      <div className="about-container about-platform-content">

        <p className="about-platform-lead">
          We came together not simply to make a super
          <br />
          fun multi generational game.
        </p>

        <h2 className="about-platform-title">
          <span>
            From day one, QEThing was
          </span>

          <span>
            designed as a{" "}
            <strong>
              scalable platform.
            </strong>
          </span>
        </h2>

        <p className="about-platform-copy">
          Its content is managed through a secure, scalable backend,
          allowing us to introduce
          <br />
          new question packs, game types and experiences without
          rebuilding the core game.
        </p>

      </div>
    </section>
  );
};

export default AboutPlatform;