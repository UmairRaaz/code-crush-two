import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HeroOne from "./HeroSections/HeroOne";
import HeroTwo from "./HeroSections/HeroTwo";
import HeroThree from "./HeroSections/HeroThree";
import HeroFour from "./HeroSections/HeroFour";
import HeroFive from "./HeroSections/HeroFive";

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const heroComponents = [HeroFive, HeroOne, HeroTwo, HeroThree, HeroFour];

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
    <div className="md:mt-20 h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] relative py-10 overlay-component" id="home">
      <TransitionGroup>
        <CSSTransition key={currentHero} timeout={500} classNames="fade">
          <div className="absolute inset-0 w-full">
            <CurrentHeroComponent />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="flex justify-center mt-4 invisible md:visible absolute -bottom-10 md:-bottom-6 w-full z-50">
        {heroComponents.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              index === currentHero ? "bg-[#4e148d]" : "bg-blue-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;