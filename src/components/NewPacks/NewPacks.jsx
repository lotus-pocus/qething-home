import "./NewPacks.css";
import NewPacksCarousel from "./NewPacksCarousel";
import PlayModes from "./PlayModes";

const NewPacks = () => {
  return (
    <section id="new-packs" className="new-packs-section">
      <div className="new-packs-content">

        <div className="new-packs-heading">
          <h2 className="new-packs-title">
            NEW PACKS DEPLOYED
            <br />
            INSTANTLY
          </h2>
        </div>

        <NewPacksCarousel />

        <PlayModes />

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

      <div
        className="new-packs-bottom-edge"
        aria-hidden="true"
      />
    </section>
  );
};

export default NewPacks;