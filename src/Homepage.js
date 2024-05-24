import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppBar from './AppBar';
import Footer from './Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <AppBar />
          <div className="body-content">
            <h1> Welcome Manchester</h1>
            <img src="/34.webp" alt="Center Image" className="center-image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
