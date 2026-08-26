import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import "./PlayModes.css";


/* ========================================
   VIDEO PANEL ANIMATIONS
======================================== */

const soloVariants = {
  hidden: {
    x: "-110%",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1.1,
      ease: [0.9, 0, 0.86, 0],
    },
  },
};


const teamsVariants = {
  hidden: {
    x: "110%",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1.1,
      ease: [0.9, 0, 0.86, 0],
    },
  },
};


/* ========================================
   COMPONENT
======================================== */

const PlayModes = () => {

  /* ----------------------------------------
     VIDEO READY STATES
  ---------------------------------------- */

  const [
    soloVideoReady,
    setSoloVideoReady,
  ] = useState(false);


  const [
    teamsVideoReady,
    setTeamsVideoReady,
  ] = useState(false);


  /* ----------------------------------------
     PANEL ANIMATION COMPLETE STATES
  ---------------------------------------- */

  const [
    soloPanelComplete,
    setSoloPanelComplete,
  ] = useState(false);


  const [
    teamsPanelComplete,
    setTeamsPanelComplete,
  ] = useState(false);


  /* ----------------------------------------
     COPY REVEAL
  ---------------------------------------- */

  const [
    showCopy,
    setShowCopy,
  ] = useState(false);


  /* ========================================
     WAIT FOR EVERYTHING FIRST
  ======================================== */

  useEffect(() => {

    const videosReady =
      soloVideoReady &&
      teamsVideoReady;


    const panelsComplete =
      soloPanelComplete &&
      teamsPanelComplete;


    if (
      !videosReady ||
      !panelsComplete
    ) {
      return;
    }


    /*
      Both MP4 panels are now in place
      and both videos are ready.

      Give them a little moment on screen
      before bringing in the stickers.
    */

    const copyTimer =
      window.setTimeout(() => {

        setShowCopy(true);

      }, 900);


    return () => {
      window.clearTimeout(
        copyTimer
      );
    };

  }, [
    soloVideoReady,
    teamsVideoReady,
    soloPanelComplete,
    teamsPanelComplete,
  ]);


  return (
    <motion.section
      className="play-modes"

      aria-label="QEthing play modes"

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.35,
      }}
    >

      {/* =====================================
          TOP DIAGONAL
      ====================================== */}

      <div
        className="play-modes-top-edge"
        aria-hidden="true"
      />


      {/* =====================================
          ANIMATION STAGE
      ====================================== */}

      <div className="play-modes-stage">


        {/* =====================================
            LEFT VIDEO — RIVALS
        ====================================== */}

        <motion.div
          className="
            play-modes-panel
            play-modes-panel-solo
          "

          variants={soloVariants}

          onAnimationComplete={(
            definition
          ) => {

            if (
              definition === "visible"
            ) {
              setSoloPanelComplete(
                true
              );
            }

          }}
        >

          <div className="play-modes-solo-border">

            <video
              className="
                play-modes-image
                play-modes-image-solo
              "

              src="/images/NewPacks/solo_1.mp4"

              autoPlay
              muted
              loop
              playsInline
              preload="auto"

              aria-label="QEthing rivals play"

              onCanPlay={() => {
                setSoloVideoReady(
                  true
                );
              }}
            />

          </div>

        </motion.div>


        {/* =====================================
            RIGHT VIDEO — TEAMS
        ====================================== */}

        <motion.div
          className="
            play-modes-panel
            play-modes-panel-teams
          "

          variants={teamsVariants}

          onAnimationComplete={(
            definition
          ) => {

            if (
              definition === "visible"
            ) {
              setTeamsPanelComplete(
                true
              );
            }

          }}
        >

          <div className="play-modes-teams-border">

            <video
              className="
                play-modes-image
                play-modes-image-teams
              "

              src="/images/NewPacks/teams.mp4"

              autoPlay
              muted
              loop
              playsInline
              preload="auto"

              aria-label="QEthing team play"

              onCanPlay={() => {
                setTeamsVideoReady(
                  true
                );
              }}
            />

          </div>

        </motion.div>


        {/* =====================================
            LEFT STICKER COPY
        ====================================== */}

        <motion.div
          className="
            play-modes-copy
            play-modes-copy-solo
          "

          initial={{
            x: "-150%",
            opacity: 0,
            scale: 0.9,
          }}

          animate={
            showCopy
              ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  x: "-150%",
                  opacity: 0,
                  scale: 0.9,
                }
          }

          transition={{
            x: {
              type: "spring",
              stiffness: 80,
              damping: 14,
              mass: 1.1,
            },

            scale: {
              type: "spring",
              stiffness: 120,
              damping: 11,
              mass: 0.9,
            },

            opacity: {
              duration: 0.25,
            },
          }}
        >

          <span className="play-modes-copy-line">

            PLAY AS{" "}

            <span className="play-modes-copy-emphasis">
              RIVALS!
            </span>

          </span>

        </motion.div>


        {/* =====================================
            RIGHT STICKER COPY
        ====================================== */}

        <motion.div
          className="
            play-modes-copy
            play-modes-copy-teams
          "

          initial={{
            x: "150%",
            opacity: 0,
            scale: 0.9,
          }}

          animate={
            showCopy
              ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  x: "150%",
                  opacity: 0,
                  scale: 0.9,
                }
          }

          transition={{
            delay:
              showCopy
                ? 0.18
                : 0,

            x: {
              type: "spring",
              stiffness: 80,
              damping: 14,
              mass: 1.1,
            },

            scale: {
              type: "spring",
              stiffness: 120,
              damping: 11,
              mass: 0.9,
            },

            opacity: {
              duration: 0.25,
            },
          }}
        >

          <span className="play-modes-copy-line">

            OR PLAY AS{" "}

            <span className="play-modes-copy-emphasis">
              TEAMS!
            </span>

          </span>

        </motion.div>

      </div>


      {/* =====================================
          LOWER DIAGONAL
      ====================================== */}

      <div
        className="play-modes-bottom-edge"
        aria-hidden="true"
      />

    </motion.section>
  );
};


export default PlayModes;