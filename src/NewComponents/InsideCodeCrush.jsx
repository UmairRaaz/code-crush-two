import React from "react";

const InsideCodeCrush = () => {
  return (
    <div className="md:mt-8 mt-4">
      {/* Container */}
      <div className="">
        {/* Heading */}
        <h1 className="text-3xl text-left font-bold text-black mb-4 ">
          A Look Inside Code Crush
        </h1>
        <p className="text-[#21083B] max-w-3xl mb-12">
          Step into our workspace! Watch exclusive videos showcasing our
          professional environment, teamwork, and commitment to delivering the
          best solutions.
        </p>

        {/* Two Columns Layout */}
        <div className="flex md:flex-row flex-col gap-8">
          {/* Left Column */}
          <div className="text-center  border border-gray-400 rounded-lg p-4 w-full md:w-[70%]">
            <div className="relative">
              <img
                src="/Images/InsideCodeCrush/teamwork.png"
                alt="Our Workspace"
                className="rounded-lg shadow-md h-80 w-full"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  src="/Images/InsideCodeCrush/play-circle.png"
                  alt="Play Icon"
                  className="h-12 w-12 text-white"
                />
              </div>
            </div>
            <p className="text-xl text-left text-gray-500 mt-4">Teamwork in action</p>
          </div>

          {/* Right Column */}
          <div className="md:space-y-4 flex flex-row md:flex-col items-center gap-4 rounded-lg border p-4 border-gray-400 w-full md:w-[40%]">
            {/* Video Card */}
            <div className="relative">
              <img
                src="/Images/InsideCodeCrush/team-collaboration.png"
                alt="Team Collaboration"
                className="rounded-lg shadow-md w-full"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  src="/Images/InsideCodeCrush/play-circle.png"
                  alt="Play Icon"
                  className="h-12 w-12 text-white"
                />
              </div>
            </div>
            {/* Second Video Card */}
            <div className="relative">
              <img
                src="/Images/InsideCodeCrush/office-lounge.png"
                alt="Office Lounge"
                className="rounded-lg shadow-md w-full"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  src="/Images/InsideCodeCrush/play-circle.png"
                  alt="Play Icon"
                  className="h-12 w-12 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCodeCrush;
