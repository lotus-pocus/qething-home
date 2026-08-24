import "./NewPacks.css";

import NewPacksFeature from "./NewPacksFeature";
import PlayModes from "./PlayModes";

const NewPacks = () => {
  return (
    <section
      id="new-packs"
      className="new-packs-section"
    >
      <div className="new-packs-content">

        {/* =====================================
            NEW PACKS FEATURE
        ====================================== */}

        <NewPacksFeature />


        {/* =====================================
            PLAY SOLO / OR IN TEAMS
        ====================================== */}

        <PlayModes />


        {/* =====================================
            UP TO 16 PLAYERS
        ====================================== */}

        <div className="new-packs-players">

          <img
            className="new-packs-players-image"
            src="/images/NewPacks/16players.png"
            alt="QEthing supports up to 16 players"
          />

          <div className="new-packs-player-count">
            UP TO 16 PLAYERS!
          </div>

        </div>

      </div>


      {/* =====================================
          NEW PACKS → FOOTER JAGGED EDGE
      ====================================== */}

      <div
        className="new-packs-bottom-edge"
        aria-hidden="true"
      />

    </section>
  );
};

export default NewPacks;