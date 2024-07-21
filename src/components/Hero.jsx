import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HeroOne from "./HeroSections/HeroOne";
import HeroTwo from "./HeroSections/HeroTwo";
import HeroThree from "./HeroSections/HeroThree";
import HeroFour from "./HeroSections/HeroFour";

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const heroComponents = [HeroOne, HeroTwo, HeroThree, HeroFour];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prevHero) => (prevHero + 1) % heroComponents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroComponents.length]);

  const handleDotClick = (index) => {
    setCurrentHero(index);
  };

  const CurrentHeroComponent = heroComponents[currentHero];

  return (
    <div className="relative h-[90vh]" id="home">
      <TransitionGroup className="h-full">
        <CSSTransition key={currentHero} timeout={500} classNames="fade">
          <div className="absolute inset-0 w-full h-full">
            <CurrentHeroComponent />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="flex justify-center mt-4 absolute -bottom-8  md:-bottom-8 w-full z-50">
        {heroComponents.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              index === currentHero ? "bg-red-800" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
