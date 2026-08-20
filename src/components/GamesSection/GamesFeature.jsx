import { motion } from "framer-motion";
import "./GamesFeature.css";

const GamesFeature = () => {
  return (
    <section className="games-feature">
      <div className="games-feature-media">
        <img
          className="games-feature-image"
          src="/images/GamesSection/QE_pointyKnight.png"
          alt="QEthing game show scene"
        />

        <div className="games-feature-copy">
          <motion.span
            className="games-feature-line games-feature-line-one"
            initial={{
              x: -180,
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              x: [-180, 0, 0, 0],
              opacity: [0, 1, 1, 1],
              scale: [0.9, 1, 1.08, 1],
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.58, 0.78, 1],
              ease: ["easeOut", "easeOut", "easeInOut"],
            }}
          >
            BRINGING SATURDAY NIGHT
          </motion.span>

          <motion.span
            className="games-feature-line games-feature-line-two"
            initial={{
              x: -180,
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              x: [-180, 0, 0, 0],
              opacity: [0, 1, 1, 1],
              scale: [0.9, 1, 1.1, 1],
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 1.15,
              duration: 1.5,
              times: [0, 0.58, 0.78, 1],
              ease: ["easeOut", "easeOut", "easeInOut"],
            }}
          >
            TO SUNDAY AFTERNOON
          </motion.span>
        </div>

        <svg
          className="games-feature-bottom-edge"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="82"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
};

export default GamesFeature;
