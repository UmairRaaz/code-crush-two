import SecondHeroImage from "../../assets/SecondHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png";
const HeroThree = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <div className="absolute top-20 -z-50">
          <img src={backgroundGlobe} alt="" className="w-[20rem] opacity-70" />
        </div>
        <div className="w-1/2 pt-52 ml-20 z-50">
          <h1 className="text-5xl font-bold uppercase  ">
            From Concept to Completion, We Code Your Success
          </h1>
          <p className="mt-6 text-lg">
            Custom Software Development Services for Every Industry
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center mt-36 ">
          <img src={SecondHeroImage} alt="hero image" className="w-[24rem]" />
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
