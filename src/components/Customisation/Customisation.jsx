import "./Customisation.css";
import DeviceLink from "./DeviceLink";

const Customisation = () => {
  return (
    <section
      id="customisation"
      className="customisation-section"
    >

      {/* Pink → Customisation diagonal transition */}
      <div
        className="customisation-top-edge"
        aria-hidden="true"
      />

      <div className="customisation-content">

        {/* COPY */}
        <div className="customisation-copy">

          <span className="customisation-kicker">
            Customisation
          </span>

          <h2 className="customisation-title">
            IT&apos;S YOUR
            <br />
            GAMESHOW
          </h2>

          <p className="customisation-intro">
            Create your own personalised show on your phone or computer.
          </p>

        </div>


        {/* VISUALS */}
        <div
          className="customisation-visuals"
          aria-label="QEthing show customisation"
        >

          <DeviceLink />

          <img
            className="customisation-show-creator"
            src="/images/GamesSection/show_creator_02.png"
            alt="QEthing show creator on a mobile phone"
          />

        </div>

      </div>

    </section>
  );
};

export default Customisation;