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
          INTRO / WORKSTATION
      ======================================== */}
      <section className="about-story">
        <div className="about-container about-story-grid">
          <div className="about-story-copy">
            <p>
              We are a compact, senior-led studio built around a simple idea:
              keep the creative vision focused and give it room to grow.
            </p>

            <p>
              QEthing Studios brings together the game-development and creative
              experience of Gamoola with the backend engineering expertise of
              BigJump.
            </p>

            <p>
              We operate as one team, sharing responsibility for the product,
              its technology and its future.
            </p>
          </div>

          <div className="about-workstation-frame">
            <img
              src="/images/About/workStation.jpg"
              alt="Game development in progress at QEthing Studios"
              className="about-workstation-image"
            />

            <motion.div
              className="about-image-label"
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
              <AboutStickerLine>MAKING THINGS</AboutStickerLine>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          HOW WE WORK
      ======================================== */}
      <section className="about-network">
        <div className="about-container">
          <div className="about-network-heading">
            <span>ONE CORE TEAM.</span>
            <span>MORE WHEN WE NEED IT.</span>
          </div>

          <div className="about-network-layout">
            <div className="about-network-copy">
              <p>
                Our core team is integral to every creative and technical
                decision.
              </p>

              <p>
                Around that core, we have access to a trusted network of
                specialist artists, developers, producers and content creators
                whom we can bring into the project as required.
              </p>

              <p>
                It means we can move quickly during development and scale
                intelligently for launch, new content and live operations.
              </p>
            </div>

            <div className="about-photo-cluster">
              <div className="about-photo about-photo-arcade">
                <img
                  src="/images/About/ArcadeMachine.webp"
                  alt="Arcade machine at QEthing Studios"
                />
              </div>

              <div className="about-photo about-photo-pool">
                <img
                  src="/images/About/poolTable.webp"
                  alt="Pool table at the QEthing studio"
                />
              </div>

              <div className="about-photo about-photo-lava">
                <img
                  src="/images/About/LavaLamp.webp"
                  alt="Lava lamp and game characters in the studio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          EXPERIENCE
      ======================================== */}
      <section className="about-experience">
        <div className="about-container">
          <p className="about-section-kicker">WE'VE BEEN DOING THIS A WHILE</p>

          <h2 className="about-section-title">
            DECADES OF
            <br />
            EXPERIENCE.
          </h2>

          <div className="about-experience-copy">
            <p>
              Between us, we have decades of experience spanning games,
              television, interactive entertainment and scalable digital
              products.
            </p>

            <p>
              That includes the first-party PlayStation 3 title Snakeball, more
              than ten games developed for Sky's in-store experiences, work for
              the BBC and other major broadcasters, and the design of the
              real-time multiplayer, CMS and live-service technology powering
              QEthing.
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
            WE MAY BE COMPACT,
            <br />
            BUT WE ARE
            <span> AMBITIOUS,</span>
            <br />
            EXPERIENCED AND
            <br />
            BUILT TO SCALE.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
