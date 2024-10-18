import React from "react";

const AdditionalFeatures = ({ project }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white  rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#06496b]">
        Additional Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.additionalFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalFeatures;
