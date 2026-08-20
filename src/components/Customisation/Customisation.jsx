import "./Customisation.css";

const Customisation = () => {
  return (
    <section id="customisation" className="customisation-section">
      <div className="customisation-content">
        <div className="customisation-copy">
          <span className="customisation-kicker">Customisation</span>

          <h2 className="customisation-title">
            IT&apos;S YOUR
            <br />
            GAMESHOW
          </h2>

          <p className="customisation-intro">
            Create your own personalised show on your phone or computer.
          </p>
        </div>

        <div className="customisation-visuals" aria-label="QEthing show customisation">
          <img
            className="customisation-question-maker"
            src="/images/GamesSection/question_maker.png"
            alt="QEthing question maker shown across TV and laptop screens"
          />

          <img
            className="customisation-show-creator"
            src="/images/GamesSection/show_creator_02.png"
            alt="QEthing show creator on a mobile phone"
          />
        </div>
      </div>

      <img
        className="customisation-divider"
        src="/images/CustomisationDivider.svg"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default Customisation;