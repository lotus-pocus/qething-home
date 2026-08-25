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
  const [
    animationCycle,
    setAnimationCycle,
  ] = useState(0);

  const hasLeftTop = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        hasLeftTop.current = true;
      }

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

      {/* Hero never resets */}
      <Hero />


      {/* These sections reset when
          the user returns to the top */}
      <div key={animationCycle}>

        <IntroSection />

        <GamesSection />

        <Customisation />

        <NewPacks />

      </div>


      {/* YouTube player also stays mounted */}
      <ComingSoon />

    </main>
  );
};


export default Home;