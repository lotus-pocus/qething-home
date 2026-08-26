import { motion } from "framer-motion";
import "./Unique.css";

const Unique = () => {
  return (
    <section className="unique-section">
      <div className="unique-content">
        {/* STAR / UNIQUE FUN GAMESHOW GRAPHIC */}
        <motion.img
          className="unique-star"
          src="/images/Unique/Unique_gameshow.png"
          alt="A unique fun gameshow experience"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: [-7, 7, -7],
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            opacity: {
              duration: 0.9,
              ease: "easeOut",
            },

            scale: {
              duration: 0.55,
              ease: "easeOut",
            },

            rotate: {
              delay: 0.55,
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        />

        {/* RIGHT-HAND TITLE */}
        <motion.h2
          className="unique-title"
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
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          <span>IT&apos;S NOT</span>
          <span>JUST A</span>
          <span>GAMESHOW!</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Unique;
