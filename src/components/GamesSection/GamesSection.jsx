import { motion } from "framer-motion";
import "./GamesSection.css";
import GamesFeature from "./GamesFeature";
import GamesCarousel from "./GamesCarousel";

const characterVariants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
  },

  visible: {
    opacity: 1,
    scale: [0.65, 1.12, 1],

    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const StickerLine = ({ children }) => {
  return (
    <motion.span className="games-sticker-line" variants={lineVariants}>
      {children.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          className="games-sticker-character"
          variants={characterVariants}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
};

const GamesSection = () => {
  return (
    <section id="games" className="games-section">
      {/* =====================================
          INTRO → GAMES TRANSITION
      ====================================== */}

      <div className="games-jagged-transition" aria-hidden="true" />

      <div className="games-content">
        {/* =====================================
            FEATURE IMAGE
        ====================================== */}

        <GamesFeature />

        {/* =====================================
            GAMES HEADING AREA
        ====================================== */}

        <div className="games-heading">
          <span className="games-kicker">Games</span>

          {/* ===================================
              TOP-RIGHT STICKER
              IT'S NOT / JUST / A QUIZ!
          ==================================== */}

          <div
            className="
              games-title-sticker
              games-title-sticker-top
            "
          >
            <motion.h2
              className="games-sticker-title"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                staggerChildren: 0.18,
              }}
            >
              <StickerLine>IT&apos;S NOT</StickerLine>

              <StickerLine>JUST A</StickerLine>

              <StickerLine>QUIZ!</StickerLine>
            </motion.h2>
          </div>

          {/* ===================================
              SUPPORTING COPY
          ==================================== */}

          <p className="games-intro">
            From quick-fire questions to frantic challenges, every round brings
            something different.
          </p>

          {/* ===================================
              CENTRE STICKER
              IT'S A / GAMESHOW
          ==================================== */}

          <div
            className="
              games-title-sticker
              games-title-sticker-centre
            "
          >
            <motion.div
              className="
                games-sticker-title
                games-sticker-title-centre
              "
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                staggerChildren: 0.18,
              }}
            >
              <StickerLine>IT&apos;S A</StickerLine>

              <StickerLine>GAMESHOW</StickerLine>
            </motion.div>
          </div>
        </div>

        {/* =====================================
            CAROUSEL
        ====================================== */}

        <GamesCarousel />

              
      </div>
    </section>
  );
};

export default GamesSection;
