import "./NewPacks.css";

import GamePacksIntro from "./GamePacksIntro/GamePacksIntro";
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

        <GamePacksIntro />


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