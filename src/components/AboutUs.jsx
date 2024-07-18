import meetingImage from "../assets/meetingImage.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-[80vh] w-[90%] my-20 mx-auto font-googleFonts" id="about">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-full md:relative">
          <img src={meetingImage} alt="image" className="md:absolute md:top-14 md:-right-9" />
        </div>
        <div className="md:w-1/2 w-full h-full bg-[#f4f5f7] text-[#203653]">
          <div className="max-w-[70%]  mx-auto md:mt-20 py-10 md:py-10">
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