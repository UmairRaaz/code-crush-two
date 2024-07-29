import HeroThreeImage from "../../assets/heroSectionImages/slideThree.webp";
const HeroThree = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroThreeImage})` }}
    >
      <div className="text-center px-2 md:px-0">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Innovative Software Development
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Delivering and scalable software solutions for your unique needs.
        </p>
      </div>
    </div>
  );
};

export default HeroThree;
