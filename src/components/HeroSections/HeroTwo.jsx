import FirstHeroImage from "../../assets/FirstHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png";
const HeroTwo = () => {
  return (
    <div className="h-full w-full">
      <div className="flex md:flex-row flex-col">
        <div className="absolute top-20 -z-50 invisible md:visible">
          <img src={backgroundGlobe} alt="" className="w-[17rem] opacity-70" />
        </div>
        <div className="w-full md:w-1/2 pt-28 px-4 md:pt-[15%] md:ml-20 z-10">
          <h1 className="md:text-5xl text-2xl font-bold uppercase  ">
            Strategic Tech Consulting
          </h1>
          <p className="mt-6 text-lg">
            Guiding your business with expert advice and innovative technology
            strategies.
          </p>
        </div>
        <div className="w-full md:w-1/2  flex items-center justify-center mt-4 md:mt-32 ">
          <img
            src={FirstHeroImage}
            alt="hero image"
            className="w-56 md:w-[25rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
