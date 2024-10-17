import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogPost = () => {
  // Access the blog at index 2
  const blog = blogsArray[2];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      {/* Blog Image */}
      <div className="w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h1>

      {/* Introduction */}
      <p className="text-gray-600 mt-4">{blog.introduction}</p>

      {/* Understanding AI Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.understandingAI.title}
        </h2>
        <p className="text-gray-600 mt-2">
          {blog.sections.understandingAI.description}
        </p>
      </div>

      {/* Key Benefits Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.keyBenefits.title}
        </h2>
        <ul className="list-disc list-inside mt-4">
          {blog.sections.keyBenefits.benefits.map((benefit, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-xl font-medium text-gray-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* AI in Industries Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.aiInIndustries.title}
        </h2>
        <ul className="list-disc list-inside mt-4">
          {blog.sections.aiInIndustries.industries.map((industry, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-xl font-medium text-gray-700">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Future of AI Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.futureOfAI.title}
        </h2>
        <ul className="list-disc list-inside mt-4">
          {blog.sections.futureOfAI.trends.map((trend, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-xl font-medium text-gray-700">{trend.title}</h3>
              <p className="text-gray-600">{trend.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* How We Harness AI Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.howWeHarnessAI.title}
        </h2>
        <p className="text-gray-600 mt-2">
          {blog.sections.howWeHarnessAI.description}
        </p>
      </div>

      {/* Conclusion */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {blog.sections.conclusion.title}
        </h2>
        <p className="text-gray-600 mt-2">
          {blog.sections.conclusion.description}
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {blog.sections.conclusion.callToAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
