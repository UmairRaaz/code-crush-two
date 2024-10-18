import React from "react";
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogFour = () => {
  // Extracting the blog at index 3 from blogsArray
  const blogData = blogsArray[3]; // Make sure this index is correct

  const {
    image,
    title,
    introduction,
    sections: { 
      whyChooseCustomSoftware,
      softwareDevelopmentProcess,
      successStories,
      callToAction
    }
  } = blogData;

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{introduction}</p>

      {/* Why Choose Custom Software Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{whyChooseCustomSoftware.title}</h2>
        <div className="space-y-4">
          {whyChooseCustomSoftware.points.map((point, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Development Process Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{softwareDevelopmentProcess.title}</h2>
        <div className="space-y-4">
          {softwareDevelopmentProcess.steps.map((step, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{successStories.title}</h2>
        <p className="text-gray-600 leading-relaxed">{successStories.description}</p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#4E148D] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{callToAction.title}</h2>
        <p className="text-lg mb-4">{callToAction.description}</p>
        <p className="font-bold text-lg mb-4">{callToAction.finalMessage}</p>
        <button className="bg-white text-[#4E148D] py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition">
          {callToAction.contact}
        </button>
      </section>
    </div>
  );
};

export default BlogFour;
