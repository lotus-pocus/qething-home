import "./GamesSection.css";
import GamesFeature from "./GamesFeature";
import GamesCarousel from "./GamesCarousel";

const GamesSection = () => {
  return (
    <section id="games" className="games-section">

      <div
        className="games-jagged-transition"
        aria-hidden="true"
      />

      <div className="games-content">
        <GamesFeature />

        <div className="games-heading">
          <span className="games-kicker">Games</span>

          <h2 className="games-title">
            IT'S NOT JUST
            <br />A QUIZ
          </h2>

          <p className="games-intro">
            From quick-fire questions to frantic challenges, every round brings
            something different.
          </p>
        </div>

        <GamesCarousel />
      </div>
    </section>
  );
};

export default GamesSection;