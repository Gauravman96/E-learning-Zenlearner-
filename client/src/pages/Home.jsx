import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1600195077072-3619a97f6f42?auto=format&fit=crop&w=1600&q=80"
          alt="Learning background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Empower Your Learning Journey 🎓</h1>
          <p className="text-lg max-w-2xl mb-8 drop-shadow">
            ZenLearner helps you master MERN stack development with practical courses and guided learning.
          </p>

          <div className="flex gap-4">
            <Link
              to="/courses"
              className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition"
            >
              Explore Courses
            </Link>
            <a
              href="#learnmore"
              className="bg-transparent border border-white py-2 px-6 rounded-full hover:bg-white hover:text-purple-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div id="learnmore" className="bg-white text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What You’ll Learn at ZenLearner</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10">
         ZenLearner is designed for aspiring full stack developers. You’ll gain hands-on experience with:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {[
            {
              title: "React.js Mastery",
              desc: "Learn components, hooks, routing, and state management in modern React.",
            },
            {
              title: "Node & Express",
              desc: "Build REST APIs, handle authentication, and manage server-side logic like a pro.",
            },
            {
              title: "MongoDB Integration",
              desc: "Store and manage user/course data with Mongoose, MongoDB Compass and more.",
            },
            {
              title: "JWT Auth",
              desc: "Secure your app with JSON Web Token-based authentication and route protection.",
            },
            {
              title: "Real Project Structure",
              desc: "Use folders, routes, components, APIs and DB like a real-world full-stack project.",
            },
            {
              title: "Deploy MERN App",
              desc: "Take your code live using platforms like Vercel and Render for frontend/backend.",
            },
          ].map((item, index) => (
            <Link
              to="/courses"
              key={index}
              className="block p-6 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-xl shadow-md hover:shadow-2xl hover:from-purple-400 hover:to-indigo-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{item.title}</h3>
              <p className="text-gray-800">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
