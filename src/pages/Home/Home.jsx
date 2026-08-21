import Hero from "../../components/Hero/Hero";
import IntroSection from "../../components/IntroSection/IntroSection";
import GamesSection from "../../components/GamesSection/GamesSection";
import Customisation from "../../components/Customisation/Customisation";

const Home = () => {
  return (
    <main>
      <Hero />
      <IntroSection />
      <GamesSection />
      <Customisation />
    </main>
  );
};

export default Home;