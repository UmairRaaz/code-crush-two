import backgroundImage from "../../assets/backgroundImage.jpg";

const HeroOne = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent"></div>
      <div className="relative w-[40rem] pt-52 ml-20">
        <h1 className="text-5xl font-bold uppercase leading-snug text-white">
          Transform Your Vision into Reality with CodeCrushTech
        </h1>
        <p className="mt-4 text-lg text-white">
          Expert Software Development Services Tailored to Your Business Needs
        </p>
      </div>
    </div>
  )
}

export default HeroOne