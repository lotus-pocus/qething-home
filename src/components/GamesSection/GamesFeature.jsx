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
              BACKGROUND CAMERA

              Room + TV pull backwards together.
          ==================================== */}

          <motion.div
            className="games-feature-background-camera"
            initial={{
              scale: 4.2,
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
              duration: 2.45,
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
          </motion.div>

          {/* ===================================
              AUDIENCE CAMERA

              Separate foreground layer.

              Starts much larger than the room,
              then retreats slightly more slowly
              to create depth/parallax.
          ==================================== */}

          <motion.div
            className="games-feature-audience-camera"
            initial={{
              scale: 40,
            }}
            whileInView={{
              scale: 1.5,
            }}
            viewport={{
              once: true,
              amount: 0,
              margin: "0px 0px 30% 0px",
            }}
            transition={{
              duration: 2.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
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
              delay: 1.75,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            BRINGING SATURDAY NIGHT
          </motion.span>

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
              delay: 2.35,
              duration: 1.05,
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
