import peopleOnboard from "../assets/website_icons/peopleOnboard.png";
import clutchRating from "../assets/website_icons/clutchRating.png";
import projectsCompleted from "../assets/website_icons/projectsCompleted.png";
import globalOffice from "../assets/website_icons/globalOffice.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import LineEffect from "./Buttons/LineEffect";
import { motion } from "framer-motion";

const JourneySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    {
      icon: peopleOnboard,
      label: "People onboard",
      value: 30,
      prefix: "+",
    },
    {
      icon: globalOffice,
      label: "Local offices",
      value: 4,
      prefix: "",
    },
    {
      icon: projectsCompleted,
      label: "Projects completed",
      value: 10,
      prefix: "+",
    },
    {
      icon: clutchRating,
      label: "Clutch rating",
      value: 4,
      prefix: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className=""
      
    >
      <div className="md:max-w:4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-3 md:px-0  mx-auto  w-full">
        <h1 className="text-5xl text-[#4e148d] text-center px-4 md:px-0 pt-20 pb-8 font-bold">
          A Journey of
          <span className="text-gray-700 font-semibold ml-2">5 years</span>
        </h1>
        <LineEffect />
        <div className="w-[80%] z-50 bg-white/70 mx-auto grid grid-cols-1 md:grid-cols-4 mt-10 min-h-44">
          {stats.map((data, index) => (
            <StatItem
              key={index}
              icon={data.icon}
              label={data.label}
              value={data.value}
              prefix={data.prefix}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StatItem = ({ icon, label, value, prefix }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="flex  py-10 md:py-0 items-center justify-center flex-col cursor-pointer"
    >
      <img src={icon} alt="icon" className="w-[100px] border-2 mb-4 rounded-full shadow-xl p-4" />
      <h1 className="text-gray-700 mt-2 text-4xl font-bold">
        <CountUp start={0} end={inView ? value : 0} duration={5} />
        {prefix}
      </h1>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

export default JourneySection;
