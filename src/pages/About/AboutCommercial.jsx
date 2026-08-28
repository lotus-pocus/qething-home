import "./AboutCommercial.css";

const AboutCommercial = () => {
  return (
    <section className="about-commercial">
      <div className="about-container about-commercial-content">

        <h2 className="about-commercial-title">
          COMMERCIAL THINKING.
        </h2>

        <div className="about-commercial-copy">
          <p>
            That commercial thinking has influenced the design of QEThing at
            every level. The modular structure supports new content and regular
            updates, while individual mini-games have been designed with
            streaming, social media, branded content and live events in mind.
          </p>

          <p>
            QEThing is not intended to be a game that launches once and stands
            still. It is a flexible social entertainment platform, built to grow
            with its players, its content and its market.
          </p>
        </div>

        <p className="about-commercial-localisation">
          Localisation was considered from the beginning, giving QEThing the
          flexibility to adapt its content, language and commercial partnerships
          for different territories and audiences.
        </p>

      </div>
    </section>
  );
};

export default AboutCommercial;