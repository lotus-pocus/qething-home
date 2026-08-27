import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PlayGame.css";

const DEMO_PASSWORD = "qething2026";

// Replace this with the developer's WebGL URL
const WEBGL_URL = "https://play.qething.tv/game/WebGpu/index.html";

const PlayGame = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [unlocked, setUnlocked] = useState(() => {
    return sessionStorage.getItem("qething-demo-unlocked") === "true";
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.trim().toLowerCase() === DEMO_PASSWORD.toLowerCase()) {
      sessionStorage.setItem("qething-demo-unlocked", "true");

      setError("");
      setUnlocked(true);
    } else {
      setError("That password doesn't look right.");
    }
  };

  return (
    <main className="play-game-page">
      <div className="play-game-main">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              className="play-game-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="play-game-logo-wrap">
                <img
                  src="/images/IntroSection/qething logo.svg"
                  alt="QEthing"
                  className="play-game-logo"
                />
              </div>

              <h1 className="play-game-title">
                PLAY THE GAME
              </h1>

              <div className="play-game-access">
                <p className="play-game-kicker">
                  PRIVATE PLAYABLE DEMO
                </p>

                <p className="play-game-intro">
                  This build is for invited publishers, investors and partners.
                  <br />
                  Enter your access password to continue.
                </p>

                <form
                  className="play-game-form"
                  onSubmit={handleSubmit}
                >
                  <label
                    className="play-game-label"
                    htmlFor="demo-password"
                  >
                    ACCESS PASSWORD
                  </label>

                  <div className="play-game-form-row">
                    <input
                      id="demo-password"
                      className={`play-game-input ${
                        error ? "play-game-input-error" : ""
                      }`}
                      type="password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);

                        if (error) {
                          setError("");
                        }
                      }}
                      placeholder="Enter password"
                      autoComplete="off"
                    />

                    <motion.button
                      className="play-game-submit"
                      type="submit"
                      whileHover={{
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                    >
                      LET'S PLAY
                      <span aria-hidden="true">→</span>
                    </motion.button>
                  </div>

                  <div className="play-game-error-wrap">
                    {error && (
                      <motion.p
                        className="play-game-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              className="play-game-content play-game-unlocked"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="play-game-logo-wrap">
                <img
                  src="/images/IntroSection/qething logo.svg"
                  alt="QEthing"
                  className="play-game-logo"
                />
              </div>

              <p className="play-game-kicker">
                PRIVATE PLAYABLE DEMO
              </p>

              <h1 className="play-game-ready">
                YOU'RE IN.
                <span>READY TO PLAY?</span>
              </h1>

              <p className="play-game-ready-copy">
                Best experienced on desktop.
                <br />
                Have your phone ready to join the game.
              </p>

              <motion.a
                className="play-game-launch"
                href={WEBGL_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                LAUNCH QETHING
                <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="play-game-gradient"
        aria-hidden="true"
      >
        <div className="play-game-gradient-copy">
          <span>UP TO 16 PLAYERS.</span>
          <strong>ONE VERY COMPETITIVE SOFA.</strong>
        </div>
      </div>
    </main>
  );
};

export default PlayGame;