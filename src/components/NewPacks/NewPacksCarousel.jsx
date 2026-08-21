import { useRef, useState } from "react";
import { packs } from "./newPacksData";
import "./NewPacksCarousel.css";

const NewPacksCarousel = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeoutRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(1);

  const goToSlide = (index) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, packs.length - 1)
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
    <div className="new-packs-carousel-wrapper">

      <div
        className="new-packs-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {packs.map((pack, index) => (
          <article
            key={pack.id}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className={`new-pack-card ${
              index === activeIndex
                ? "new-pack-card-active"
                : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={pack.image}
              alt={pack.title}
              className="new-pack-card-image"
              draggable="false"
            />

            <div className="new-pack-card-fade" />
          </article>
        ))}
      </div>


      <div className="new-packs-carousel-controls">

        <button
          className="new-packs-arrow new-packs-arrow-left"
          type="button"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          aria-label="Previous pack"
        >
          <img
            src="/images/GamesSection/Arrow.svg"
            alt=""
            aria-hidden="true"
          />
        </button>


        <div
          className="new-packs-category"
          aria-live="polite"
        >
          {packs[activeIndex].label}
        </div>


        <button
          className="new-packs-arrow new-packs-arrow-right"
          type="button"
          onClick={handleNext}
          disabled={activeIndex === packs.length - 1}
          aria-label="Next pack"
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

export default NewPacksCarousel;