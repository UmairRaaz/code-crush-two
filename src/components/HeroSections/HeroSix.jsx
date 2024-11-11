import HeroSixImage from "/Images/heroSectionImages/heroSix.webp";

const HeroSix = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroSixImage})` }}
    >
      <div className="text-center px-2 md:px-0 ">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Artificial Intelligence
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Drive innovation and smarter decisions with AI-powered solutions.
        </p>
      </div>
    </div>
  );
};

export default HeroSix;
