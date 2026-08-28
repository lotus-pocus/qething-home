import "./About.css";

import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import AboutLondon from "./AboutLondon";
import AboutClosing from "./AboutClosing";

const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutLondon />
      <AboutClosing />
    </main>
  );
};

export default About;