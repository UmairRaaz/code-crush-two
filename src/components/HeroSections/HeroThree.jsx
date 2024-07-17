import SecondHeroImage from "../../assets/SecondHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png";
const HeroThree = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex md:flex-row flex-col">
        <div className="absolute top-20 -z-50  hidden md:visible">
          <img src={backgroundGlobe} alt="" className="w-[20rem] opacity-70" />
        </div>
        <div className="w-full md:w-1/2 pt-28 px-4  md:pt-52 md:ml-20 z-10">
          <h1 className="md:text-5xl text-2xl font-bold uppercase ">
            From Concept to Completion, We Code Your Success
          </h1>
          <p className="mt-6 text-lg">
            Custom Software Development Services for Every Industry
          </p>
        </div>
        <div className="w-full md:w-1/2   flex items-center justify-center md:mt-32 px-2 md:px-0 mt-4 ">
          <img src={SecondHeroImage} alt="hero image" className="w-56 md:w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
