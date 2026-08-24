import { motion } from "framer-motion";
import "./Customisation.css";
import DeviceLink from "./DeviceLink";

const Customisation = () => {
  return (
    <section id="customisation" className="customisation-section">

      {/* Pink → Customisation diagonal transition */}
      <div
        className="customisation-top-edge"
        aria-hidden="true"
      />

      <div className="customisation-content">

        <div className="customisation-copy">

          <span className="customisation-kicker">
            Customisation
          </span>

          <motion.h2
            className="customisation-title"
            initial={{
              scale: 1.45,
            }}
            whileInView={{
              scale: [1.45, 0.96, 1.03, 1],
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.85,
              times: [0, 0.65, 0.82, 1],
              ease: "easeOut",
            }}
          >
            <span>IT&apos;S YOUR</span>
            <span>GAMESHOW</span>
          </motion.h2>

          <p className="customisation-intro">
            Create your own personalised show on your phone or computer.
          </p>

        </div>


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


      {/* Customisation → New Packs jagged divider */}

      <div
        className="customisation-bottom-edge"
        aria-hidden="true"
      />

    </section>
  );
};

export default Customisation;