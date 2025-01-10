import React from "react";

const InsideCodeCrush = () => {
  return (
    <div className="md:mt-8 mt-4 px-3 md:px-0">
      {/* Container */}
      <div className="">
        {/* Heading */}
        <h1 className="text-3xl text-left font-bold text-black mb-4">
          A Look Inside Code Crush
        </h1>
        <p className="text-[#21083B] max-w-3xl mb-4">
          Step into our workspace! Watch exclusive videos showcasing our
          professional environment, teamwork, and commitment to delivering the
          best solutions.
        </p>

        {/* Two Columns Layout */}
        <div className="flex flex-col  md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col h-full text-center border border-gray-400 rounded-lg p-4">
            <iframe
              width="100%"
              height="347"
              src="https://www.youtube.com/embed?v=oRLW6aw3o2U&list=PLLBWNs6n7YMUihYEVNEUGB29t3Rfq6bTa&index=20"
              title="Team Collaboration"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
            <p className="text-xl text-left text-gray-700 mt-4">Teamwork in action</p>
          </div>

          {/* Right Column */}
          <div className="flex flex-row md:flex-col border border-gray-400 rounded-lg p-4 gap-4 md:w-[40%] w-full">
            {/* Video Card */}
            <div className="flex-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed?v=ZYYJhE-O2tU&list=PLLBWNs6n7YMUihYEVNEUGB29t3Rfq6bTa&index=11"
                title="Team Collaboration"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md h-40"
              ></iframe>
              <p className="text-md text-left text-gray-700 mt-1">Teamwork in action</p>
            </div>

            {/* Second Video Card */}
            <div className="flex-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed?v=jPK2DiZ4XZU&list=PLLBWNs6n7YMUihYEVNEUGB29t3Rfq6bTa&index=18"
                title="Team Collaboration"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md h-40"
              ></iframe>
              <p className="text-md text-left text-gray-700 mt-1">Teamwork in action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCodeCrush;
