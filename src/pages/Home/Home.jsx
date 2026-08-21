import Hero from "../../components/Hero/Hero";
import IntroSection from "../../components/IntroSection/IntroSection";
import GamesSection from "../../components/GamesSection/GamesSection";
import Customisation from "../../components/Customisation/Customisation";
import NewPacks from "../../components/NewPacks/NewPacks";

const Home = () => {
  return (
    <main>
      <Hero />
      <IntroSection />
      <GamesSection />
      <Customisation />
      <NewPacks />
    </main>
  );
};

export default Home;