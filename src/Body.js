import React from 'react';
import './Body.css';
import image from './34.webp';

const Body = () => {
  return (
    <div className="body-content">
      <img src={image} alt="Center" className="center-image" />
    </div>
  );
};

export default Body;
