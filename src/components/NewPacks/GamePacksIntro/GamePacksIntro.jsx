import { motion } from "framer-motion";
import "./GamePacksIntro.css";

const GamePacksIntro = () => {
  return (
    <section
      className="game-packs-intro"
      aria-labelledby="game-packs-intro-title"
    >
      {/* Existing gradient / divider geometry */}
      <div className="game-packs-intro-bg" />

      <div className="game-packs-intro-content">

        {/* ========================================
            MAIN TWO-COLUMN LAYOUT
        ======================================== */}

        <div className="game-packs-intro-grid">

          {/* ========================================
              LEFT COMPOSITION
          ======================================== */}

          <div className="game-packs-intro-left">

            {/* TITLE */}

            <motion.h2
              id="game-packs-intro-title"
              className="game-packs-intro-title"
              initial={{
                opacity: 0,
                scale: 0.82,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>PLAY LIVE</span>
              <span>WEEKLY QUIZ</span>
            </motion.h2>


            {/* COPY */}

            <motion.p
              className="game-packs-intro-description"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: 0.12,
                duration: 0.55,
              }}
            >
              Or just play our curated game packs...
              plenty to choose from.
            </motion.p>


            {/* LANDSCAPE IMAGE */}

            <motion.div
              className="game-packs-intro-image-wrap game-packs-intro-image-wrap-left"
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: 0.18,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                className="game-packs-intro-image"
                src="/images/NewPacks/GamePacksIntro/QEthingWeeklyPack.jpg"
                alt="QEthing Weekly game pack"
              />
            </motion.div>

          </div>


          {/* ========================================
              RIGHT COMPOSITION
          ======================================== */}

          <motion.div
            className="game-packs-intro-right"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.28,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="game-packs-intro-image-wrap game-packs-intro-image-wrap-right">
              <img
                className="game-packs-intro-image"
                src="/images/NewPacks/GamePacksIntro/QEthing_Weekly.jpg"
                alt="QEthing Weekly quiz game"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GamePacksIntro;