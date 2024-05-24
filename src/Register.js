import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import CustomModal from './CustomModal';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !email || !tel) {
      setModalMessage('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/register', {
        username,
        password,
        email,
        tel,
      });
      setModalMessage(response.data.message);
      setTimeout(() => navigate('/login'), 2000); // Navigate after showing the message
    } catch (error) {
      console.error('Error registering', error);
      setModalMessage('Error registering');
    }
  };

  const closeModal = () => {
    setModalMessage('');
  };

  return (
    <div className="container">
      {modalMessage && <CustomModal message={modalMessage} onClose={closeModal} />}
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-short"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-short"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-short"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="input-short"
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
