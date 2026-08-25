import { motion } from "framer-motion";
import "./GamePacksIntro.css";

const GamePacksIntro = () => {
  return (
    <section
      className="game-packs-intro"
      aria-labelledby="game-packs-intro-title"
    >
      <div className="game-packs-intro-bg" />

      <div className="game-packs-intro-copy">

        <motion.h2
          id="game-packs-intro-title"
          className="game-packs-intro-title"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>SAME SOFA.</span>
          <span>DIFFERENT NIGHT.</span>
        </motion.h2>


        <motion.p
          className="game-packs-intro-text"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Switch up the games, switch up the teams
          and keep everyone guessing.
        </motion.p>


        <motion.div
          className="game-packs-intro-kicker"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            delay: 0.45,
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <span>NEW GAME PACKS.</span>
          <span>NEW WAYS TO PLAY.</span>
        </motion.div>

      </div>
    </section>
  );
};

export default GamePacksIntro;