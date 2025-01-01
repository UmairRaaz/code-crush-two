import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const JourneySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="py-2 ">
      <div className="text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold text-black mb-6">
          A Journey of 2 Years
        </h1>

        {/* Journey Stats */}
        <div className="flex justify-center items-center gap-10">
          {/* Box 1 */}
          <div className="p-6 text-center w-60">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7F56D9] mb-2">
              {inView ? <CountUp start={0} end={30} suffix="+" duration={4} /> : "30+"}
            </h2>
            <p className="text-[#21083B] text-xl mt-2">Onboard People</p>
          </div>

          {/* Box 2 */}
          <div className="p-6 text-center w-60">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7F56D9] mb-2">
              {inView ? <CountUp start={0} end={2} duration={4} /> : "2"}
            </h2>
            <p className="text-[#21083B] text-xl mt-2">Offices</p>
          </div>

          {/* Box 3 */}
          <div className="p-6 text-center w-60">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7F56D9] mb-2">
              {inView ? <CountUp start={0} end={30} suffix="+" duration={4} /> : "30+"}
            </h2>
            <p className="text-[#21083B] text-xl mt-2">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
