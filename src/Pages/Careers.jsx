import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";
import workWiuthUsBG from "/Images/Banners/workWiuthUsBG.webp";
import { NavLink } from "react-router-dom";
// import careerPage from "../assets/careerPage.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa6";
import { GiChaingun } from "react-icons/gi";
import CommonHeader from "../components/CommonHeader";

const CareerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const features = [
    {
      icon: <BsFillPeopleFill />,
      title: "We Put People First",
      description: `Our strength lies in our team and community. We foster a culture of respect, empathy, and support for everyone.`,
    },
    {
      icon: <FaRocket />,
      title: "We're Always Growing",
      description: `We believe in continuous learning and innovation. Growth is a journey, and we're committed to pushing boundaries.`,
    },
    {
      icon: <GiChaingun />,
      title: "We Are Accessible",
      description: `We ensure our services and opportunities are available to all. Accessibility and inclusivity are at the core of our mission.`,
    },
  ];

  // Positions for full-time jobs
  const positions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Work on the latest web technologies to build user-friendly interfaces.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      description: "Develop robust backend systems using modern frameworks.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description:
        "Design intuitive and engaging user experiences for our products.",
    },
    {
      title: "Project Manager",
      location: "Remote",
      description:
        "Lead project teams to deliver high-quality software solutions.",
    },
  ];

  // Internship positions
  const internships = [
    {
      title: "Web Development Intern",
      location: "Remote",
      description:
        "Gain hands-on experience working on real-world projects under expert supervision.",
    },
    {
      title: "App Development Intern",
      location: "Remote",
      description:
        "Gain hands-on experience working on real-world projects under expert supervision.",
    },
    {
      title: "UI/UX Design Intern",
      location: "Remote",
      description:
        "Work on designing cutting-edge user interfaces with guidance from senior designers.",
    },
    {
      title: "Marketing Intern",
      location: "Remote",
      description:
        "Assist in developing marketing campaigns and strategies to promote our products.",
    },
  ];

  return (
    <div className=" bg-gray-50">
      {/* Background Image Section */}
      {/* <div
        className="relative h-[70vh] sm:h-[80vh] md:h-[50vh] lg:h-[90vh] xl:h-[80vh] 2xl:h-[60vh] border"
        style={{
          backgroundImage: `url(${workWiuthUsBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-white px-4 md:px-10 tracking-widest leading-[3rem] text-center uppercase text-4xl md:text-5xl font-bold">
            Explore Exciting Career <br /> Opportunities with Us
          </h1>
        </div>
      </div> */}
      <CommonHeader
        image={workWiuthUsBG}
        text={
          <>
            Explore Exciting Career  Opportunities  <br /> with Us
          </>
        }
      />

      {/* Features Section */}
      <div className="min-h-screen max-w-6xl 2xl:max-w-7xl mx-auto">
        <section className="py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Interested in our mission?</h1>
            <p className="text-xl text-gray-700 mt-4">
              Help shape the future with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="shadow-md p-6 rounded-lg text-center flex flex-col items-center"
              >
                <div className="text-4xl text-[#4E148D] bg-blue-100 rounded-full p-4 mb-4">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-12">
          <h2 className="text-5xl font-bold text-center mb-8">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="flex items-center flex-col gap-8 md:gap-0 md:flex-row justify-between rounded-xl p-6 bg-gray-50 border border-gray-300"
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold">{position.title}</h3>
                  <p className="text-gray-600 mb-2">{position.location}</p>
                  <p className="text-gray-700">{position.description}</p>
                  <NavLink
                    to="/careers/apply"
                    className="text-white w-28 bg-[#4E148D] hover:bg-[#6828E8] rounded-lg px-4 py-2 mt-4"
                  >
                    Apply Now
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Openings Section */}
        <section className="py-12">
          <h2 className="text-5xl font-bold text-center mb-8">
            Internship Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="flex items-center flex-col gap-8 md:gap-0 md:flex-row justify-between rounded-xl p-6 bg-gray-50 border border-gray-300"
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold">{internship.title}</h3>
                  <p className="text-gray-600 mb-2">{internship.location}</p>
                  <p className="text-gray-700">{internship.description}</p>
                  <NavLink
                    to="/careers/internship/apply"
                    className="text-white w-28 bg-[#4E148D] hover:bg-[#6828E8] rounded-lg px-4 py-2 mt-4"
                  >
                    Apply Now
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;
