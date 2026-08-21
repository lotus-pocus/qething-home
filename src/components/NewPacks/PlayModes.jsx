import { motion } from "framer-motion";
import "./PlayModes.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const soloVariants = {
  hidden: {
    x: "-110%",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1.1,
      ease: [0.9, 0, 0.86, 0],
    },
  },
};


const teamsVariants = {
  hidden: {
    x: "110%",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1.1,
      ease: [0.9, 0, 0.86, 0],
    },
  },
};

const PlayModes = () => {
  return (
    <motion.section
      className="play-modes"
      aria-label="QEthing play modes"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {/* =====================================
          TOP DIAGONAL
      ====================================== */}

      <div className="play-modes-top-edge" aria-hidden="true" />

      {/* =====================================
          ANIMATION STAGE
      ====================================== */}

      <div className="play-modes-stage">
        {/* LEFT — PLAY SOLO */}

        <motion.div
          className="play-modes-panel play-modes-panel-solo"
          variants={soloVariants}
        >
          <div className="play-modes-solo-border">
            <img
              className="play-modes-image play-modes-image-solo"
              src="/images/NewPacks/PlaySolo.jpg"
              alt="QEthing solo play"
            />
          </div>
        </motion.div>

        {/* RIGHT — OR IN TEAMS */}

        <motion.div
          className="play-modes-panel play-modes-panel-teams"
          variants={teamsVariants}
        >
          <div className="play-modes-teams-border">
            <img
              className="play-modes-image play-modes-image-teams"
              src="/images/NewPacks/OrInTeams.jpg"
              alt="QEthing team play"
            />
          </div>
        </motion.div>
      </div>

      {/* =====================================
          LOWER DIAGONAL
      ====================================== */}

      <div className="play-modes-bottom-edge" aria-hidden="true" />
    </motion.section>
  );
};

export default PlayModes;
