import React from 'react';
import './services.css';

function ServicesData(props) {
  return (
    <div className="s-card">
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button>Book Now!</button>
    </div>
  )
}

export default ServicesData