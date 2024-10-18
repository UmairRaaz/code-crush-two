import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogFive = () => {
  const blog = blogsArray[4]; // Fetch the data at index 4

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={blog.image} // Use the image from your blog data
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{blog.introduction}</p>

      {/* Sections */}
      <div>
        {/* Traditional Software Development Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {blog.sections.traditionalSoftwareDevelopment.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {blog.sections.traditionalSoftwareDevelopment.overview}
          </p>

          {/* Traditional Advantages */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {blog.sections.traditionalSoftwareDevelopment.advantages.title}
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-600 leading-relaxed">
            {blog.sections.traditionalSoftwareDevelopment.advantages.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>

          {/* Traditional Challenges */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {blog.sections.traditionalSoftwareDevelopment.challenges.title}
          </h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            {blog.sections.traditionalSoftwareDevelopment.challenges.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Agile Practices Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{blog.sections.agilePractices.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{blog.sections.agilePractices.overview}</p>

          {/* Agile Advantages */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.sections.agilePractices.advantages.title}</h3>
          <ul className="list-disc list-inside mb-6 text-gray-600 leading-relaxed">
            {blog.sections.agilePractices.advantages.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>

          {/* Agile Challenges */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.sections.agilePractices.challenges.title}</h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            {blog.sections.agilePractices.challenges.points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.title}</strong>: {point.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Choosing the Right Methodology */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{blog.sections.choosingTheRightMethodology.title}</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            {blog.sections.choosingTheRightMethodology.considerations.map((consideration, index) => (
              <li key={index} className="mb-2">
                <strong>{consideration.title}</strong>: {consideration.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{blog.sections.conclusion.title}</h2>
          <p className="text-gray-600 leading-relaxed">{blog.sections.conclusion.description}</p>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{blog.sections.callToAction.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{blog.sections.callToAction.description}</p>
          <p className="font-semibold">{blog.sections.callToAction.finalMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogFive;
