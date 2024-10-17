import React from 'react';
import { blogsArray } from '../../Content/Blogs/BlogContent';

const BlogOne = () => {
    const blog = blogsArray[0]; // Accessing the first blog object directly
    
    return (
        <div className="bg-white p-6 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <h2 className="text-xl text-gray-600 mb-4">{blog.company}</h2>
                <p className="text-gray-700">{blog.overview}</p>
            </div>

            {/* Phases Section */}
            <div className="space-y-10">
                {blog.phases.map((phase, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">{phase.name}</h3>
                        <p className="text-gray-700 mb-2">{phase.description}</p>
                        <ul className="list-disc list-inside space-y-2">
                            {phase.details.map((detail, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: detail }} className="text-gray-600"></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Conclusion Section */}
            <div className="mt-12">
                <h4 className="text-xl font-bold">Conclusion</h4>
                <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: blog.conclusion }}></p>
            </div>
        </div>
    );
};

export default BlogOne;
