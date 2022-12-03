import React from 'react'
import ServicesData from './ServicesData';
import './services.css';

function Services() {
  return (
      <div className="services">
      <h1>Our Packages</h1>
      <p>Travel is the only thing you buy that makes you richer....</p>
      <div className="servicescard">
        <ServicesData 
        heading  = "-Basic-" text= "100 USD"
        />
        <ServicesData 
        heading  = "-Silver-" text= "200 USD"
        />
        <ServicesData 
        heading  = "-Gold-" text= "300 USD"
        />
      </div>
    </div>
  )
}

export default Services
