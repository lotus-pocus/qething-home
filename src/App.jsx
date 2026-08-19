import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <main>
      <Hero />

      <section className="intro-section">
        <div className="intro-content">
          <h2>Question Everything</h2>
        </div>
      </section>
    </main>
  );
}

export default App;