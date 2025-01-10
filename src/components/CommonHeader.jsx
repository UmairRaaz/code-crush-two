import React from "react";

const CommonHeader = ({image, text }) => {
  return (
    <div className="bg-white px-2 py-1">
      <div
        className="h-[70vh] md:h-[100vh] w-[99%] rounded-3xl mx-auto overflow-hidden bg-cover bg-center flex flex-col justify-between relative transition-all duration-1000"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", // Ensures the background image covers the entire section
          backgroundPosition: "center center", // Keeps the image centered
          backgroundRepeat: "no-repeat", // Prevents image repetition
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-center text-4xl tracking-widest uppercase font-bold">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
