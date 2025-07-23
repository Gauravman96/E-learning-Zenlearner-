
import React from 'react';
import { useEnroll } from '../context/EnrollContext';

function Enrollments() {
  const { enrolledCourses, remove } = useEnroll();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">📚 Your Enrolled Courses</h1>
        <p className="text-lg text-gray-600">
          Here's everything you're currently enrolled in — keep learning, keep growing!
        </p>
      </div>

      {enrolledCourses.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-10">No courses enrolled yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-purple-400 hover:border-purple-600"
            >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.desc}</p>

              <div className="flex justify-between items-center mt-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                  Start Learning
                </button>

                <button
                  onClick={() => remove(course.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Enrollments;

