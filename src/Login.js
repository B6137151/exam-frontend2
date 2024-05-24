import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import CustomModal from './CustomModal';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setModalMessage('Please fill in both fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setModalMessage(response.data.message);
      setTimeout(() => navigate('/'), 2000); // Navigate after showing the message
    } catch (error) {
      console.error('Error logging in', error);
      setModalMessage('Error logging in');
    }
  };

  const closeModal = () => {
    setModalMessage('');
  };

  return (
    <div className="container">
      {modalMessage && <CustomModal message={modalMessage} onClose={closeModal} />}
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-short"
            />
          </div>
          <div style={{ marginTop: '10px' }}> {/* Added marginTop to increase space between inputs */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-short"
            />
          </div>
          <button type="submit" style={{ marginTop: '20px' }}> {/* Added marginTop to increase space above the button */}
            Login
          </button>
        </form>
        <p style={{ marginTop: '20px' }}> {/* Added marginTop to increase space above the link */}
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
