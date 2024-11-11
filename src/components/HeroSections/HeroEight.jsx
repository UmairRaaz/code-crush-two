import HeroEightImage from "/Images/heroSectionImages/heroEight.webp";

const HeroEight = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroEightImage})` }}
    >
      <div className="text-center px-2 md:px-0 ">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Cyber Security
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Protect your data and build resilience against cyber threats.
        </p>
      </div>
    </div>
  );
};

export default HeroEight;
