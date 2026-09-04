import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import CookieConsent from "./components/CookieConsent/CookieConsent";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import PlayGame from "./pages/PlayGame/PlayGame";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PlayGame" element={<PlayGame />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />

      <CookieConsent />
    </>
  );
}

export default App;