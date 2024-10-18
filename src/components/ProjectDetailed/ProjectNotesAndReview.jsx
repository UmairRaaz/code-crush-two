import React from 'react'

const ProjectNotesAndReview = ({project}) => {
  return (
    <div className="max-w-6xl mx-auto flex gap-10 mb-10  border-gray-300">
        {/* Additional Notes Section */}
        <div className="flex-1  bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#06496b]">
            Additional Notes
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            {project.additionalNotes}
          </p>
        </div>

        {/* Client Review Section */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="text-[#06496b] flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {project.clientReview.clientName}
            </h2>
            <p className="mb-4 text-center">{project.clientReview.review}</p>
            <div className="flex items-center justify-center">
              <p className="text-yellow-500 text-xl mr-2">⭐️⭐️⭐️⭐️⭐️</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectNotesAndReview