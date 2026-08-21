import "./NewPacks.css";
import NewPacksCarousel from "./NewPacksCarousel";

const NewPacks = () => {
  return (
    <section
      id="new-packs"
      className="new-packs-section"
    >
      <div className="new-packs-content">

        <div className="new-packs-heading">
          <h2 className="new-packs-title">
            NEW PACKS DEPLOYED
            <br />
            INSTANTLY
          </h2>
        </div>


        <NewPacksCarousel />


        <div className="new-packs-gameplay">

          {/* =====================================
              PLAY SOLO + OR IN TEAMS
          ====================================== */}

          <div className="new-packs-modes">

            <div className="new-packs-mode new-packs-mode-solo">
              <img
                className="new-packs-mode-image"
                src="/images/NewPacks/PlaySolo.jpg"
                alt="QEthing solo play"
              />

              <div className="new-packs-play-solo">
                PLAY
                <br />
                SOLO
              </div>
            </div>


            <div className="new-packs-mode new-packs-mode-teams">
              <img
                className="new-packs-mode-image"
                src="/images/NewPacks/OrInTeams.jpg"
                alt="QEthing team play"
              />

              <div className="new-packs-play-teams">
                OR IN TEAMS
              </div>
            </div>


            {/* Blue diagonal between the two images */}
            <div
              className="new-packs-mode-divider"
              aria-hidden="true"
            />

          </div>


          {/* =====================================
              UP TO 16 PLAYERS
          ====================================== */}

          <div className="new-packs-players">

            <div
              className="new-packs-players-top-edge"
              aria-hidden="true"
            />

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