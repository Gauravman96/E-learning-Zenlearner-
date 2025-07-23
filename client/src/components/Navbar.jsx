
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
   // <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
   <nav className="bg-purple-600 text-white px-6 py-3 flex justify-between items-center shadow">
     
      <h1 className="text-xl font-bold"><Link to="/">ZenLearner 🎓</Link></h1>

      <div className="flex gap-5 items-center text-gray-700 font-medium text-base">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/enrollments">Enrollments</Link>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
