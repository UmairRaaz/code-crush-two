import aboutUs from "../assets/aboutUs.webp";
import aboutImage from "../assets/aboutImage.webp";
import habibImage from "../assets/habib.png";
import LineEffect from "../components/Buttons/LineEffect";

const AboutUs = () => {
  return (
    <div className="mt-20 bg-white">
      <div
        className="relative h-[70vh]  sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${aboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl tracking-widest uppercase font-bold">
            About Us
          </h1>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        CEO Message
      </h1>
      <LineEffect />
      <div className="mb-20 mt-10">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full md:w-1/2 text-justify">
            <h4 className="text-xl font-semibold mb-2">
              Dear Stakeholders, Partners, and Employees,
            </h4>
            <p className="text-gray-500 mb-4">
              As we navigate the ever-evolving software industry, I am proud of
              the code crush technologies team&rsquo;s resilience and
              innovation. Our focus on cutting-edge technology, customer-centric
              solutions, novel business ideas, and sustainable practices
              positions us well for the future. Innovation is at the heart of
              everything we do. We are not just developing software; we are
              shaping the future of industries, technologies and business
              sections according to the market. Our commitment to pushing
              boundaries and embracing new technologies sets us apart and allows
              us to deliver high quality solutions that exceed expectations.
              Looking forward,we must remain agile and adaptable with the
              cutting edge technologies. Thank you for your continued support,
              hard work, dedication, and passion for excellence. Our journey is
              just beginning, and I am honored to lead this exceptional team.The
              future is bright, and I am excited to see where our collective
              efforts will take us. Sincerely,
            </p>
            <h4 className="text-xl">Professor Dr.Habib Shah</h4>
            <p className="text-xl">CEO of Code Crush Technologies, Pakistan</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src={habibImage}
              alt="ceo-image"
              className="w-96 max-h-96 object-contain mt-4"
            />
          </div>
        </div>
      </div>
      <h1 className="text-5xl pt-10 mb-6 font-bold text-center font-googleFonts text-gray-700">
        Why Partner with Code Crush Tech?
      </h1>
      <LineEffect />
      <div className="mb-20 mt-10">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full md:w-1/2 text-justify">
            <p className="text-md text-gray-600 mb-2">
              With our dynamic and professional development team and their high
              quality services, the excellent soft solution can be provided
              based on the cutting-edge computing tools and methods for
              maintaining and improving your local and international
              business.The code crush team will also assist you to validate your
              idea and provide the business-oriented solutions that align with
              your company needs, reflect the core values of your brand and
              attract the customers. The codecrush are very professional,
              cooperative and have expertise in different domains such as
              digital marketing, website development, Artificial Intelligence
              based projects, smart apps and other services which are required
              to your company&apos;s needs.
            </p>

            <h4 className="text-lg text-gray-800 mb-2 mt-8 font-semibold">Code Crush Technologies</h4>
            <p className="text-gray-500">
              Code Crush Technologies provides innovative software solutions
              through sophisticated, Reliable and Secure technological tools for
              individuals, businesses, and communities, aiming to drive
              efficiency, profit, and growth through an expert team and
              commitment to quality and customer satisfaction.
            </p>

            <h4 className="text-lg text-gray-800 mb-2 mt-8 font-semibold">Mission</h4>
            <p className="text-gray-500">
              Our mission is to develop innovative Ideas and maintain their
              highest quality standards and best practices in the current
              Digital Marketplace.
            </p>

            <h4 className="text-lg text-gray-800 mb-2 mt-8  font-semibold">Objective</h4>
            <p className="text-gray-500 md:text-nowrap">
              To provide fast solutions to our customers using emerging
              technologies tools.
            </p>
            <p className="text-gray-500 md:text-nowrap">
              To continuously improve the developed models based on customer
              satisfactions.
            </p>
            <p className="text-gray-500 md:text-nowrap">
              To train the interested students in the field of IT and their
              Solutions.
            </p>
            <p className="text-gray-500 md:text-nowrap">
              To share innovative ideas, solutions, and business models with
              interested investors.
            </p>
            <p className="text-gray-500 md:text-nowrap">
              To establish strong communication and collaboration with local and
              business industries.
            </p>
            <p className="text-gray-500 md:text-nowrap">
              To support the government and private organizations in the digital
              transformation process.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src={aboutImage}
              alt="ceo-image"
              className="w-96 max-h-72 object-cover rounded shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
