import { motion } from "framer-motion";
import "./DeviceLink.css";

const DeviceLink = () => {
  return (
    <div className="device-link">

      {/* TV */}

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
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />


      {/* Animated connection */}

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
          delay: 0.8,
          duration: 0.4,
        }}
      >
        <path
          className="device-link-path"
          d="
            M 825 250
            L 825 165
            C 825 105, 785 75, 720 75
            L 485 75
            C 410 75, 380 115, 380 185
            L 380 270
          "
        />
      </motion.svg>


      {/* Laptop */}

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
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

    </div>
  );
};

export default DeviceLink;