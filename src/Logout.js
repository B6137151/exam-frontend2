import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Clear any authentication tokens
    navigate('/login'); // Redirect to the login page
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
