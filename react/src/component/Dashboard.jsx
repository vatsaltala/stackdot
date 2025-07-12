import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard</h2>
      <p>You're logged in </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;