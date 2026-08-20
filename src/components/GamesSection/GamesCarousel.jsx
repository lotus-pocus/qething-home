import { useRef, useState } from "react";
import "./GamesCarousel.css";

const games = [
  {
    title: "Birthday",
    label: "REAL WORLD FUN",
    image: "/images/GamesSection/QE_birthday.jpg",
  },
  {
    title: "Conundrum",
    label: "KNOWLEDGE",
    image: "/images/GamesSection/QE_conundrum.jpg",
  },
  {
    title: "Family",
    label: "SKILL",
    image: "/images/GamesSection/QE_family.jpg",
  },
  {
    title: "Solo",
    label: "TAP THAT TUNE",
    image: "/images/GamesSection/QE_solo.jpg",
  },
];

const GamesCarousel = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, games.length - 1)
    );

    setActiveIndex(nextIndex);

    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const findClosestCard = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCentre =
      carouselRect.left + carouselRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCentre =
        cardRect.left + cardRect.width / 2;

      const distance = Math.abs(
        carouselCentre - cardCentre
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const handleScroll = () => {
    clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      findClosestCard();
    }, 100);
  };

  const handlePrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const handleNext = () => {
    goToSlide(activeIndex + 1);
  };

  return (
    <div className="games-carousel-wrapper">

      <div
        className="games-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {games.map((game, index) => (
          <article
            key={game.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className={`game-card ${
              index === activeIndex
                ? "game-card-active"
                : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="game-card-image"
              draggable="false"
            />

            <div className="game-card-fade" />
          </article>
        ))}
      </div>


      <div className="games-carousel-controls">

        <button
          className="games-arrow games-arrow-left"
          type="button"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          aria-label="Previous game"
        >
          <img
            src="/images/GamesSection/Arrow.svg"
            alt=""
            aria-hidden="true"
          />
        </button>


        <div
          className="games-carousel-category"
          aria-live="polite"
        >
          {games[activeIndex].label}
        </div>


        <button
          className="games-arrow games-arrow-right"
          type="button"
          onClick={handleNext}
          disabled={activeIndex === games.length - 1}
          aria-label="Next game"
        >
          <img
            src="/images/GamesSection/Arrow.svg"
            alt=""
            aria-hidden="true"
          />
        </button>

      </div>
    </div>
  );
};

export default GamesCarousel;