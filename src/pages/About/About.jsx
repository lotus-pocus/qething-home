import "./About.css";

import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import AboutCommercial from "./AboutCommercial";
import AboutLondon from "./AboutLondon";
import AboutClosing from "./AboutClosing";

const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutCommercial />
      <AboutLondon />
      <AboutClosing />
    </main>
  );
};

export default About;