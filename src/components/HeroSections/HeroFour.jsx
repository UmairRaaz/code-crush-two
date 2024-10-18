import HeroFourImage from "/Images/heroSectionImages/slideFour.webp";
const HeroFour = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroFourImage})` }}
    >
      <div className="text-center px-2 md:px-0">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Your Partner in Digital Transformation
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Drive growth and efficiency with our seamless tech integration and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default HeroFour;
