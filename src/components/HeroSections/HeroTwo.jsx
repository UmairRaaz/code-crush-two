import HeroTwoImage from "../../assets/heroSectionImages/slideTwo.webp";
const HeroTwo = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroTwoImage})` }}
    >
      <div className="text-center px-2 md:px-0">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Strategic Tech Consulting
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Guiding your business with expert advice and innovative technology
          strategies.
        </p>
      </div>
    </div>
  );
};

export default HeroTwo;
