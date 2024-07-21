import backgroundImage from "../../assets/backgroundImage.jpg";

const HeroOne = () => {
  return (
    <div
      className="h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bg-contain inset-0 bg-gradient-to-r from-black/95 to-transparente flex items-center justify-center"></div>
      <div className="relative md:w-[40rem] pt-28 px-4 md:pt-[15%] md:ml-20 ">
        <h1 className="md:text-5xl text-4xl font-bold uppercase leading-snug text-white">
          Transform Your Vision into Reality with CodeCrushTech
        </h1>
        <p className="mt-4 text-lg text-white">
          Expert Software Development Services Tailored to Your Business Needs
        </p>
      </div>
    </div>
  );
};

export default HeroOne;
