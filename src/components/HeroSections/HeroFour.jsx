import ThirdHeroImage from "../../assets/ThirdHeroImage.png";
import backgroundGlobe from "../../assets/backgroundGlobe.png";
const HeroFour = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
      <div className="absolute top-20 -z-50">
          <img src={backgroundGlobe} alt="" className="w-[20rem] opacity-70" />
        </div>
        <div className="w-1/2 pt-52 ml-20 z-50">
          <h1 className="text-5xl font-bold uppercase  ">
            Your Trusted Partner in Software Excellence
          </h1>
          <p className="mt-6 text-lg">
            Delivering Reliable, Scalable, and Efficient Solutions with
            CodeCrushTech
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center mt-36 ">
          <img src={ThirdHeroImage} alt="hero image" className="w-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
