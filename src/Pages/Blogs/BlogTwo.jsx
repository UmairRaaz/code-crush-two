import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogTwo = () => {
  const blog = blogsArray[1]; // Access data from index 1

  return (
    <div className="bg-gray-50 p-6 md:p-12 my-20">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* <img src={blog.image} alt={blog.title} className="w-96 mx-auto mb-6" /> */}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-600">{blog.introduction}</p>
      </div>

      {/* Understanding Custom Software Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.understandingCustomSoftware.title}
        </h2>
        <p className="text-gray-700">{blog.sections.understandingCustomSoftware.description}</p>
      </section>

      {/* Key Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.keyBenefits.title}
        </h2>
        <div className="space-y-6">
          {blog.sections.keyBenefits.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.developmentProcess.title}
        </h2>
        <div className="space-y-6">
          {blog.sections.developmentProcess.steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.industriesWeServe.title}
        </h2>
        <div className="space-y-6">
          {blog.sections.industriesWeServe.industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.whyChooseUs.title}
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {blog.sections.whyChooseUs.reasons.map((reason, index) => (
            <li key={index} className="mb-2">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          {blog.sections.conclusion.title}
        </h2>
        <p className="text-gray-700 mb-4">{blog.sections.conclusion.description}</p>
        <p className="text-lg text-blue-600 font-semibold">
          {blog.sections.conclusion.callToAction}
        </p>
      </section>
    </div>
  );
};

export default BlogTwo;
