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

      </div>


      {/* =====================================
          NEW PACKS → COMING SOON
          YELLOW DIAGONAL
      ====================================== */}

      <div
        className="new-packs-bottom-edge"
        aria-hidden="true"
      />

    </section>
  );
};

export default NewPacks;