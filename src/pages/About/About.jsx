import { motion } from "framer-motion";
import "./About.css";

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

const AboutStickerLine = ({ children }) => {
  return (
    <motion.span className="about-sticker-line" variants={lineVariants}>
      {children.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          className="about-sticker-character"
          variants={characterVariants}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
};

const About = () => {
  return (
    <main className="about-page">
      {/* ========================================
          HERO
      ======================================== */}
      <section className="about-hero">
        <div className="about-container">
          <img
            src="/images/About/QEthing_Studios_black.svg"
            alt="QEthing Studios"
            className="about-studios-logo"
          />

          <p className="about-eyebrow">ABOUT QETHING STUDIOS</p>

          <h1 className="about-title">
            <span>SMALL STUDIO.</span>
            <span className="about-title-pink">BIG EXPERIENCE.</span>
          </h1>

          <p className="about-intro">
            We are QEthing Studios. A London-based development team behind
            QEthing.
          </p>
        </div>
      </section>

      {/* ========================================
    WHY WE BUILT QETHING
======================================== */}
      <section className="about-story">
        <div className="about-container about-built-content">
          <h2 className="about-built-title">WHY WE BUILT QETHING</h2>

          <p className="about-built-subtitle">
            We came together not simply to make a game,
            <br />
            <span>BUT TO BUILD A PLATFORM.</span>
          </p>

          <div className="about-built-copy">
            <p>
              From day one, QEthing was designed as a scalable, constantly
              evolving platform. Its content is managed through a secure,
              scalable backend, allowing us to introduce new question packs,
              game types and experiences without rebuilding the core game.
            </p>

            <p>
              Localisation was considered from the beginning, giving QEthing the
              flexibility to adapt its content, language and commercial
              partnerships for different territories and audiences.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
    ONE CORE TEAM
======================================== */}
<section className="about-network">
  <div className="about-container about-network-content">
    <div className="about-network-heading">
      <span>ONE CORE TEAM.</span>
      <span>MORE WHEN WE NEED IT.</span>
    </div>

    <div className="about-network-copy">
      <p>
        Although we are a compact development team, we bring decades of experience
        across games, television, interactive entertainment and technology. We
        understand that creating a successful product involves much more than
        developing a great game. It requires a clear audience, a sustainable content
        strategy, reliable technology and multiple routes to market.
      </p>
    </div>
  </div>
</section>

      {/* ========================================
    COMMERCIAL THINKING
======================================== */}
<section className="about-experience">
  <div className="about-container about-commercial-content">
    <h2 className="about-commercial-title">
      COMMERCIAL THINKING.
    </h2>

    <div className="about-commercial-copy">
      <p>
        That commercial thinking has influenced the design of QEthing at every
        level. The modular structure supports new content and regular updates,
        while individual mini-games have been designed with streaming, social
        media, branded content and live events in mind.
      </p>

      <p>
        QEthing is not intended to be a game that launches once and stands still.
        It is a flexible social entertainment platform, built to grow with its
        players, its content and its market.
      </p>
    </div>
  </div>
</section>

      {/* ========================================
          LONDON
      ======================================== */}
      <section className="about-london">
        <div className="about-london-image-wrap">
          <img
            src="/images/About/AllSaintsRoadW11.jpg"
            alt="All Saints Road in West London, home of QEthing Studios"
            className="about-london-image"
          />
        </div>

        <div className="about-london-copy">
          <span>BASED IN</span>
          <strong>
            WEST
            <br />
            LONDON.
          </strong>
          <span>WORKING EVERYWHERE.</span>
        </div>
      </section>

      {/* ========================================
          CLOSING
      ======================================== */}
      <section className="about-closing">
        <div className="about-container">
          <p className="about-closing-copy">
            QEthing studios
            <br />
                <span> AMBITIOUS </span>
                experienced
            <br />
            AND BUILT TO SCALE.
            <br />
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
