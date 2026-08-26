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
          delay: 0.45,
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />


      {/* LAPTOP → TV CONNECTOR */}

      <motion.svg
        className="device-link-connector"
        viewBox="0 0 300 80"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.05,
        }}
        transition={{
          delay: 1,
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* animated dotted line */}

        <path
          className="device-link-path"
          d="M 262 40 H 58"
        />

        {/* arrow head pointing towards TV */}

        <path
          className="device-link-arrow"
          d="
            M 72 20
            L 48 40
            L 72 60
          "
        />
      </motion.svg>


      {/* LAPTOP */}

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