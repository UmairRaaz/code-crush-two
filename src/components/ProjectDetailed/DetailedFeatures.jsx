import React from "react";

const DetailedFeatures = ({ project }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white  rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#06496b]">
        Detailed Features
      </h2>
      <div className="space-y-8">
        {project.detailedFeatures.map((appSection, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 className="text-2xl font-semibold text-[#06496b] mb-4">
              {appSection.appType}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {appSection.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedFeatures;
