import "./GamesSection.css";
import GamesFeature from "./GamesFeature";
import GamesCarousel from "./GamesCarousel";

const GamesSection = () => {
  return (
    <section id="games" className="games-section">
      <div className="games-diagonal" aria-hidden="true" />
      <svg
        className="games-jagged-transition"
        viewBox="0 0 2081 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Blue from the Intro section continues down to the jagged edge */}
        <path
          d="
      M 0 0
      H 2081
      V 244
      L 1008.5 41.5
      L 870 211.5
      L 0 20
      Z
    "
          fill="var(--qe-blue)"
        />

        {/* White jagged divider */}
        <polyline
          points="
      0,20
      870,211.5
      1008.5,41.5
      2081,244
    "
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
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
