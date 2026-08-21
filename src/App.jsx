import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;