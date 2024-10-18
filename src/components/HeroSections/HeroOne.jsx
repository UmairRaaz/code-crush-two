import HeroOneImage from "/Images/heroSectionImages/slideOne.webp";

const HeroOne = () => {
  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroOneImage})` }}
    >
      <div className="text-center px-2 md:px-0 ">
        <h1 className="md:text-6xl text-4xl font-bold uppercase leading-snug text-white">
          Transform Your Vision Into Reality
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          Unlock the potential of your ideas with our custom tech solutions.
        </p>
      </div>
    </div>
  );
};

export default HeroOne;
