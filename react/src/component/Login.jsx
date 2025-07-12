import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.email === 'vatsal@gmail.com' && formData.password === '15102003') {
      const dummyToken = 'dummy';
      
      localStorage.setItem('authToken', dummyToken);

      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }

  };

  return (
    <div >
      <h2>Login</h2>
      {error && <div>{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>

      <div className="demo-credentials">
        <p>Demo credentials:</p>
        <p>Email: vatsal@gmail.com</p>
        <p>Password: 15102003</p>
      </div>
    </div>
  );
};

export default Login;