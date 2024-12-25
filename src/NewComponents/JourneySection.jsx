import React from "react";

const JourneySection = () => {
  return (
    <div className="">
      <div className="text-center">
        {/* Section Heading */}
        <h1 className="text-3xl text-left font-bold text-black mb-2">
          A Journey of 2 Years
        </h1>

        {/* Journey Stats */}
        <div className="flex justify-center items-center gap-10">
          {/* Box 1 */}
          <div className=" p-6 text-center w-60">
            <h2 className="text-4xl font-bold text-[#7F56D9] mb-2">30+</h2>
            <p className="text-[#21083B] mt-4">Onboard People</p>
          </div>

          {/* Box 2 */}
          <div className=" p-6 text-center w-60">
            <h2 className="text-4xl font-bold text-[#7F56D9] mb-2">2</h2>
            <p className="text-[#21083B] mt-4">Offices</p>
          </div>

          {/* Box 3 */}
          <div className=" p-6 text-center w-60">
            <h2 className="text-4xl font-bold text-[#7F56D9] mb-2">30+</h2>
            <p className="text-[#21083B] mt-4">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
