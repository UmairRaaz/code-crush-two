import React from "react";

const DetailedOverView = ({ projectOverViewDetailed }) => {
  console.log(projectOverViewDetailed);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{projectOverViewDetailed.name}</h1>
      <p className="mb-4">{projectOverViewDetailed.description}</p>
      <h2 className="text-xl font-semibold mb-2">Components</h2>
      <ul className="list-disc list-inside mb-4">
        {projectOverViewDetailed.components.map((component, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{component.name}:</span>{" "}
            {component.functionality}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Benefits</h2>
      <p>{projectOverViewDetailed.benefits}</p>
    </div>
  );
};

export default DetailedOverView;
