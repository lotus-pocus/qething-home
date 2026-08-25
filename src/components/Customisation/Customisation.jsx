import { motion } from "framer-motion";
import "./Customisation.css";
import DeviceLink from "./DeviceLink";

const Customisation = () => {
  return (
    <section id="customisation" className="customisation-section">
      {/* Pink → Customisation diagonal transition */}
      <div className="customisation-top-edge" aria-hidden="true" />

      <div className="customisation-content">
        <div className="customisation-copy">
          <span className="customisation-kicker">Customisation</span>

          <motion.h2
            className="customisation-title"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <motion.span
              className="customisation-title-its"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              IT&apos;S
            </motion.span>

            <motion.span
              className="customisation-title-your"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.7,
                },

                visible: {
                  opacity: 1,
                  scale: 1,

                  transition: {
                    delay: 0.3,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                scale: 1.07,

                transition: {
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                  mass: 0.8,
                },
              }}
            >
              YOUR
            </motion.span>

            <motion.span
              className="customisation-title-gameshow"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.65,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              GAMESHOW
            </motion.span>
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

          <motion.img
            className="customisation-show-creator"
            src="/images/GamesSection/show_creator_02.png"
            alt="QEthing show creator on a mobile phone"
            initial={{
              x: 120,
              scale: 0.85,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              delay: 1.6,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>

      {/* Customisation → New Packs jagged divider */}
      <div className="customisation-bottom-edge" aria-hidden="true" />
    </section>
  );
};

export default Customisation;
