import "./AboutStory.css";

const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="about-container about-story-content">

        <p className="about-story-lead">
          We came together not simply to make a super
          <br />
          fun multi generational game.
        </p>

        <h2 className="about-story-title">
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

        <p className="about-story-copy">
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

export default AboutStory;