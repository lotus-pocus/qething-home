import "./GamesSection.css";
import GamesFeature from "./GamesFeature";
import GamesCarousel from "./GamesCarousel";

const GamesSection = () => {
  return (
    <section id="games" className="games-section">
      <div className="games-jagged-transition" aria-hidden="true" />

      <div className="games-content">
        <GamesFeature />

        <div className="games-heading">
          <span className="games-kicker">Games</span>

          <div className="games-title-sticker games-title-sticker-top">
            <h2 className="games-sticker-title">
              <span>IT&apos;S NOT</span>
              <span>JUST</span>
              <span>A QUIZ</span>
            </h2>
          </div>

          <p className="games-intro">
            From quick-fire questions to frantic challenges, every round brings
            something different.
          </p>
        </div>

        <GamesCarousel />
        <div className="games-title-sticker games-title-sticker-bottom">
          <div className="games-sticker-title games-sticker-title-small">
            <span>IT&apos;S A</span>
            <span>GAMESHOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
