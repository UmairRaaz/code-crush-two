import peopleOnboard from "../assets/website_icons/peopleOnboard.svg";
import clutchRating from "../assets/website_icons/clutchRating.svg";
import projectsCompleted from "../assets/website_icons/projectsCompleted.svg";
import globalOffice from "../assets/website_icons/globalOffice.svg";

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
      value: 900,
      prefix: "+",
    },
    {
      icon: globalOffice,
      label: "Global offices",
      value: 4,
      prefix: "",
    },
    {
      icon: projectsCompleted,
      label: "Projects completed",
      value: 550,
      prefix: "+",
    },
    {
      icon: clutchRating,
      label: "Clutch rating",
      value: 4.9,
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
      <div className="md:mt-10 mb-5 w-full">
        <h1 className="text-5xl text-center px-4 md:px-0 pt-20 pb-8 font-bold">
          A Journey of
          <span className="text-blue-800 ml-2">15 years</span>
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
      className="flex border py-10 md:py-0 border-gray-200 items-center justify-center flex-col cursor-pointer"
    >
      <img src={icon} alt="icon" className="w-[70px]" />
      <h1 className="text-gray-700 mt-2 text-4xl font-bold">
        <CountUp start={0} end={inView ? value : 0} duration={5} />
        {prefix}
      </h1>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

export default JourneySection;
