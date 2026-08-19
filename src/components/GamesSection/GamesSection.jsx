import "./GamesSection.css";
import GamesCarousel from "./GamesCarousel";

const GamesSection = () => {
  return (
    <section id="games" className="games-section">

      {/* Diagonal transition from Intro → Games */}
      <div className="games-diagonal" aria-hidden="true" />

      <div className="games-content">

        <div className="games-heading">
          <span className="games-kicker">Games</span>

          <h2 className="games-title">
            IT'S NOT JUST
            <br />
            A QUIZ
          </h2>

          <p className="games-intro">
            From quick-fire questions to frantic challenges,
            every round brings something different.
          </p>
        </div>

        <GamesCarousel />

      </div>
    </section>
  );
};

export default GamesSection;