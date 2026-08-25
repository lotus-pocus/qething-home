import { motion } from "framer-motion";
import "./DeviceLink.css";

const DeviceLink = () => {
  return (
    <div className="device-link">

      {/* TV — SECOND */}

      <motion.img
        className="device-link-tv"
        src="/images/Customisation/TVScreen.png"
        alt="QEthing displayed on a TV"

        initial={{
          x: -220,
          scale: 1.14,
          opacity: 0,
        }}

        whileInView={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}

        viewport={{
          once: true,
          amount: 0.05,
        }}

        transition={{
          delay: 0.55,
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />


      {/* NETWORK LINE — THIRD */}

      <motion.svg
        className="device-link-connector"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
        aria-hidden="true"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
          amount: 0.05,
        }}

        transition={{
          delay: 1.45,
          duration: 0.45,
        }}
      >
        <path
          className="device-link-path"
          d="
            M 790 300
            L 790 205
            C 790 155, 755 135, 700 135
            L 405 135
            C 350 135, 320 160, 320 210
            L 320 285
          "
        />
      </motion.svg>


      {/* LAPTOP — FIRST */}

      <motion.img
        className="device-link-laptop"
        src="/images/Customisation/LapTop.png"
        alt="QEthing question creator displayed on a laptop"

        initial={{
          x: 220,
          scale: 1.14,
          opacity: 0,
        }}

        whileInView={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}

        viewport={{
          once: true,
          amount: 0.05,
        }}

        transition={{
          delay: 0,
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

    </div>
  );
};

export default DeviceLink;