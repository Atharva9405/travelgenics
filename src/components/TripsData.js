import React from 'react'
import './Trips.css'

function TripsData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.Image}/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default TripsData;
