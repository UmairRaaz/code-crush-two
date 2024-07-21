import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import worldMap from "../assets/worldMap.png";
import LineEffect from "./Buttons/LineEffect";
const JourneySection = () => {
  const stats = [
    {
      icon: <IoPersonSharp size={50} className="text-blue-800" />,
      label: "People onboard",
      value: 900,
      prefix: "+",
    },
    {
      icon: <FaHouseChimney size={50} className="text-blue-800" />,
      label: "Global offices",
      value: 4,
      prefix: "",
    },
    {
      icon: <FcIdea size={50} />,
      label: "Projects completed",
      value: 550,
      prefix: "+",
    },
    {
      icon: <FcRating size={50} />,
      label: "Clutch rating",
      value: 4.9,
      prefix: "",
    },
  ];

  return (
    <div className="">
      <div className="relative  md:mt-10 mb-5 w-full">
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
        <img
          src={worldMap}
          alt="world-image"
          className="w-[50rem] absolute -bottom-28 md:left-[20%] -z-50"
        />
      </div>
    </div>
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
      className="flex border py-10 md:py-0 border-gray-200 items-center justify-center flex-col"
    >
      <div>{icon}</div>
      <h1 className="text-gray-700 mt-2 text-4xl font-bold">
        <CountUp start={0} end={inView ? value : 0} duration={5} />
        {prefix}
      </h1>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

export default JourneySection;
