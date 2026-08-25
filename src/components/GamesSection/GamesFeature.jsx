import { motion } from "framer-motion";
import "./GamesFeature.css";

const GamesFeature = () => {
  return (
    <section className="games-feature">
      <div className="games-feature-media">
        {/* =====================================
            SCENE VIEWPORT
        ====================================== */}

        <div className="games-feature-scene">
          {/* ===================================
              CAMERA / WORLD

              Everything inside here shares the
              same zoom anchor.
          ==================================== */}

          <motion.div
            className="games-feature-world"
            initial={{
              scale: 3.6,
            }}
            whileInView={{
              scale: 1.3,
            }}
            viewport={{
              once: true,
              amount: 0,
              margin: "0px 0px 30% 0px",
            }}
            transition={{
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* =================================
                ROOM
            ================================== */}

            <img
              className="games-feature-room"
              src="/images/GamesFeature/sofaroom.jpg"
              alt=""
              aria-hidden="true"
            />

            {/* =================================
                TV VIDEO
            ================================== */}

            <div className="games-feature-tv-screen">
              <video
                className="games-feature-tv-video"
                src="/video/GamesFeature/TV_movie.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            {/* =================================
                AUDIENCE
            ================================== */}

            <img
              className="games-feature-audience"
              src="/images/GamesFeature/sofa_friends.png"
              alt="People playing QEthing together"
            />
          </motion.div>
        </div>

        {/* =====================================
    COPY
====================================== */}

        <div className="games-feature-copy">
          {/* FROM LEFT */}

          <motion.span
            className="
      games-feature-line
      games-feature-line-one
    "
            initial={{
              x: -220,
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 1.25,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            BRINGING SATURDAY NIGHT
          </motion.span>

          {/* FROM RIGHT */}

          <motion.span
            className="
      games-feature-line
      games-feature-line-two
    "
            initial={{
              x: 220,
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 2.1,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            TO SUNDAY AFTERNOON
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default GamesFeature;
