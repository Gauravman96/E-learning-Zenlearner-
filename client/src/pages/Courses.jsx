import React from 'react';
import { useEnroll } from '../context/EnrollContext';

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React, JSX, and component lifecycle.",
  },
  {
    id: 2,
    title: "Advanced Node.js",
    description: "Go beyond basics with Node.js, Express, and backend patterns.",
  },
  {
    id: 3,
    title: "MongoDB Deep Dive",
    description: "Understand NoSQL data models and advanced Mongo queries.",
  },
  {
    id: 4,
    title: "Fullstack MERN Project",
    description: "Build and deploy a complete project using the MERN stack.",
  },
  {
    id: 5,
    title: "Authentication with JWT",
    description: "Secure login/logout using tokens and protected routes.",
  },
  {
    id: 6,
    title: "Git & GitHub Essentials",
    description: "Master version control and collaboration workflows.",
  },
];

function Courses() {
  const { enroll } = useEnroll();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">💡 Available Courses</h1>
        <p className="text-lg text-gray-600">
          Browse and enroll in top MERN stack development courses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-indigo-400 hover:border-indigo-600 transition"
          >
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
            <button
              onClick={() => enroll(course)}
              className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;


