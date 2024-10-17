import React from "react";
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogPost = () => {
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
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {/* Image */}
      <img src={image} alt={title} className="w-full h-auto rounded-lg mb-6" />

      {/* Introduction */}
      <p className="text-lg mb-6">{introduction}</p>

      {/* Why Choose Custom Software Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{whyChooseCustomSoftware.title}</h2>
        {whyChooseCustomSoftware.points.map((point, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </section>

      {/* Software Development Process Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{softwareDevelopmentProcess.title}</h2>
        {softwareDevelopmentProcess.steps.map((step, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      {/* Success Stories Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{successStories.title}</h2>
        <p>{successStories.description}</p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{callToAction.title}</h2>
        <p className="mb-4">{callToAction.description}</p>
        <p className="font-bold mb-4">{callToAction.finalMessage}</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">{callToAction.contact}</button>
      </section>
    </div>
  );
};

export default BlogPost;
