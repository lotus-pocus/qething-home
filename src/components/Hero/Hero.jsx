import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /*
    The reveal now runs for the ENTIRE sticky scroll.

    0 = narrow slit
    1 = fully open

    It reaches full size exactly when the sticky hero ends.
  */
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "polygon(0% 42%, 100% 38%, 100% 58%, 0% 62%)",
      "polygon(0% 0%, 100% 0%, 100% 92%, 0% 96%)",
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.06, 1]
  );

  /*
    White line follows the exact same lower
    edge as the video clip.
  */
  const lineLeftY = useTransform(
    scrollYProgress,
    [0, 1],
    [62, 96]
  );

  const lineRightY = useTransform(
    scrollYProgress,
    [0, 1],
    [58, 92]
  );

  /*
    Tagline follows the lower shutter.
  */
  const taglineY = useTransform(
    scrollYProgress,
    [0, 1],
    ["62%", "95%"]
  );

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-sticky">

        {/* VIDEO */}
        <motion.div
          className="hero-video-mask"
          style={{ clipPath }}
        >
          <motion.video
            className="hero-video"
            style={{ scale }}
            src="/video/qething-trailer.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        {/* WHITE DIAGONAL EDGE */}
        <svg
          className="hero-edge"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.line
            x1="0"
            x2="100"
            y1={lineLeftY}
            y2={lineRightY}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* LOGO */}
        <div className="hero-logo-wrap">
          <img
            className="hero-logo"
            src="/images/qething-logo.png"
            alt="QEthing"
          />
        </div>

        {/* TAGLINE */}
        <motion.div
          className="hero-tagline-wrap"
          style={{ top: taglineY }}
        >
          <div className="hero-tagline">
            A Premium TV Gameshow Party Experience
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;