import { motion } from "framer-motion";
import "./PlayModes.css";


/* ========================================
   CONTAINER
======================================== */

const containerVariants = {
  hidden: {},
  visible: {},
};


/* ========================================
   VIDEO PANEL ANIMATIONS
======================================== */

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


/* ========================================
   LEFT COPY ANIMATION
======================================== */

const soloCopyVariants = {
  hidden: {
    x: "-120%",
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    x: 0,
    opacity: 1,
    scale: 1,

    transition: {
      delay: 1.4,

      x: {
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.9,
      },

      scale: {
        type: "spring",
        stiffness: 240,
        damping: 10,
        mass: 0.7,
      },

      opacity: {
        duration: 0.15,
      },
    },
  },
};


/* ========================================
   RIGHT COPY ANIMATION
======================================== */

const teamsCopyVariants = {
  hidden: {
    x: "120%",
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    x: 0,
    opacity: 1,
    scale: 1,

    transition: {
      delay: 1.5,

      x: {
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.9,
      },

      scale: {
        type: "spring",
        stiffness: 240,
        damping: 10,
        mass: 0.7,
      },

      opacity: {
        duration: 0.15,
      },
    },
  },
};


/* ========================================
   COMPONENT
======================================== */

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

      <div
        className="play-modes-top-edge"
        aria-hidden="true"
      />


      {/* =====================================
          ANIMATION STAGE
      ====================================== */}

      <div className="play-modes-stage">


        {/* =====================================
            LEFT VIDEO — RIVALS
        ====================================== */}

        <motion.div
          className="play-modes-panel play-modes-panel-solo"
          variants={soloVariants}
        >
          <div className="play-modes-solo-border">

            <video
              className="play-modes-image play-modes-image-solo"
              src="/images/NewPacks/solo_1.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="QEthing rivals play"
            />

          </div>
        </motion.div>


        {/* =====================================
            RIGHT VIDEO — TEAMS
        ====================================== */}

        <motion.div
          className="play-modes-panel play-modes-panel-teams"
          variants={teamsVariants}
        >
          <div className="play-modes-teams-border">

            <video
              className="play-modes-image play-modes-image-teams"
              src="/images/NewPacks/teams.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="QEthing team play"
            />

          </div>
        </motion.div>


        {/* =====================================
            LEFT STICKER COPY
        ====================================== */}

        <motion.div
          className="play-modes-copy play-modes-copy-solo"
          variants={soloCopyVariants}
        >
          <span className="play-modes-copy-line">
            PLAY AS{" "}
            <span className="play-modes-copy-emphasis">
              RIVALS!
            </span>
          </span>
        </motion.div>


        {/* =====================================
            RIGHT STICKER COPY
        ====================================== */}

        <motion.div
          className="play-modes-copy play-modes-copy-teams"
          variants={teamsCopyVariants}
        >
          <span className="play-modes-copy-line">
            OR PLAY AS{" "}
            <span className="play-modes-copy-emphasis">
              TEAMS!
            </span>
          </span>
        </motion.div>

      </div>


      {/* =====================================
          LOWER DIAGONAL
      ====================================== */}

      <div
        className="play-modes-bottom-edge"
        aria-hidden="true"
      />

    </motion.section>
  );
};


export default PlayModes;