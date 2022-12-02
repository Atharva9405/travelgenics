import React from 'react'
import './Destination.css';
import Fade from 'react-reveal/Fade';

function DestinationData(props) {
  return (
    <Fade>
    <div className={props.className}>
    <div className="des-text">
    
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
    <div className="image">
        <img alt="valcano" src={props.img1} />
        <img alt="valcano" src={props.img2}/>
    </div>
</div>
</Fade>
  );
}

export default DestinationData