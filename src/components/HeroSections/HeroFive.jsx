import HeroOneImage from "../../assets/heroSectionImages/slideThree.webp";

const HeroFive = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroOneImage})` }}
    >
      <div className="text-center px-2 md:px-0 ">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Vision
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          To be the largest & innovative IT Development Company till 2030.
        </p>
      </div>
    </div>
  );
};

export default HeroFive;
