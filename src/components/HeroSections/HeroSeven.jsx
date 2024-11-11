import HeroSevenImage from "/Images/heroSectionImages/heroSeven.webp";
const HeroSeven = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroSevenImage})` }}
    >
      <div className="text-center px-2 md:px-0 ">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Digital Twin Technology
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Optimize performance with real-time digital replicas of your assets
        </p>
      </div>
    </div>
  );
};

export default HeroSeven;
