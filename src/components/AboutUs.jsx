import meetingImage from "../assets/meetingImage.jpg";

const AboutUs = () => {
  return (
    <div className="h-[80vh] w-[90%] mb-20 mx-auto font-googleFonts ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full relative">
          <img src={meetingImage} alt="image" className="absolute top-14 -right-9" />
        </div>
        <div className="w-1/2 h-full bg-[#f4f5f7] text-[#203653]">
          <div className="max-w-[70%] mx-auto mt-20">
            <h1 className="text-4xl font-bold">We are our people</h1>
            <p className="text-lg mt-4">
              Our team of over 900 blends the skills of engineers, developers,
              UX architects, and designers to craft impactful solutions.
              Together, we have aided businesses in their journey toward digital
              transformation by delivering custom software that drives change.
            </p>
            <button className="bg-blue-500 text-white text-lg px-4 py-1 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
