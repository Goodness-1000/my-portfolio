import React from 'react'
import Works from "../components/Works";


const AllworksPage = () => {
  return (
        <div className="px-6 md:px-24 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">All Projects</h1>
      <div className="flex flex-wrap gap-6">
        <Works img="/course-1.svg" />
        <Works img="/course-2.svg" />
        <Works img="/course-3.svg" />
      </div>
    </div>
  )
}

export default AllworksPage