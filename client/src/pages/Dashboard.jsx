
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { isLoggedIn } from '../utils/auth';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    try {
      const decoded = jwtDecode(token);
      setUser(decoded); // ✅ contains name and userId
    } catch (e) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, []);

  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: '#ffffff22',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          Welcome, {user.name || 'User'} 🎉
        </h1>
        <p style={{ fontSize: '1.2rem' }}>You're logged in successfully!</p>
        <hr style={{ margin: '20px 0', borderColor: '#ffffff44' }} />
        <div style={{ textAlign: 'left' }}>
          <p><strong>User ID:</strong> {user.userId || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

