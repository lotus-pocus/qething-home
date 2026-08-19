import { useRef, useState } from "react";
import "./GamesCarousel.css";

const games = [
  {
    title: "Birthday",
    image: "/images/GamesSection/QE_birthday.jpg",
  },
  {
    title: "Conundrum",
    image: "/images/GamesSection/QE_conundrum.jpg",
  },
  {
    title: "Family",
    image: "/images/GamesSection/QE_family.jpg",
  },
  {
    title: "Solo",
    image: "/images/GamesSection/QE_solo.jpg",
  },
];

const GamesCarousel = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const nextIndex = Math.max(0, Math.min(index, games.length - 1));

    setActiveIndex(nextIndex);

    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handlePrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const handleNext = () => {
    goToSlide(activeIndex + 1);
  };

  return (
    <div className="games-carousel-wrapper">
      <div className="games-carousel" ref={carouselRef}>
        {games.map((game, index) => (
          <article
            key={game.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className={`game-card ${
              index === activeIndex ? "game-card-active" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="game-card-image"
            />

            <div className="game-card-fade" />

            <div className="game-card-label">
              <h3>{game.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="games-carousel-controls">
        <button
          className="games-arrow games-arrow-left"
          type="button"
          onClick={handlePrevious}
          aria-label="Previous game"
        >
          <img src="/images/GamesSection/Arrow.svg" alt="" aria-hidden="true" />
        </button>

        <button
          className="games-arrow games-arrow-right"
          type="button"
          onClick={handleNext}
          aria-label="Next game"
        >
          <img src="/images/GamesSection/Arrow.svg" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default GamesCarousel;
