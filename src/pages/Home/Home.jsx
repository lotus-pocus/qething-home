import {
  useEffect,
  useRef,
  useState,
} from "react";

import Hero from "../../components/Hero/Hero";
import IntroSection from "../../components/IntroSection/IntroSection";
import GamesSection from "../../components/GamesSection/GamesSection";
import Customisation from "../../components/Customisation/Customisation";
import NewPacks from "../../components/NewPacks/NewPacks";
import ComingSoon from "../../components/ComingSoon/ComingSoon";


const Home = () => {
  /*
    Incrementing this value gives the
    animated section tree a new React key.

    That remounts the animation components
    so Framer Motion's viewport:
      once: true
    animations are ready to play again.
  */
  const [
    animationCycle,
    setAnimationCycle,
  ] = useState(0);


  /*
    We only want to reset after the user
    has genuinely travelled down the page.

    This prevents tiny movements around the
    top of the page repeatedly resetting it.
  */
  const hasLeftTop = useRef(false);


  useEffect(() => {

    const handleScroll = () => {

      /*
        Once the user is more than 150px
        down the page, arm the reset.
      */
      if (window.scrollY > 150) {
        hasLeftTop.current = true;
      }


      /*
        Once they return all the way to
        the top, create a fresh animation cycle.
      */
      if (
        window.scrollY <= 5 &&
        hasLeftTop.current
      ) {
        hasLeftTop.current = false;

        setAnimationCycle(
          (currentCycle) =>
            currentCycle + 1
        );
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  return (
    <main>

      {/* =====================================
          ANIMATED HOME CONTENT

          Returning to the top changes this
          key, allowing Framer Motion's
          once:true animations to play again.
      ====================================== */}

      <div key={animationCycle}>

        <Hero />

        <IntroSection />

        <GamesSection />

        <Customisation />

        <NewPacks />

      </div>


      {/* =====================================
          COMING SOON

          Kept outside the reset wrapper so
          returning to the top does NOT reload
          the YouTube iframe.
      ====================================== */}

      <ComingSoon />

    </main>
  );
};


export default Home;