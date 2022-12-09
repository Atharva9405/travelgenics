import React from "react";
import "./Hero.css";
import ScrollToTop from './ScrollToTop'

function Hero(props) {
  return (
    <>
    <ScrollToTop />
      <div className={props.cName}>
        <video autoPlay loop muted id="video" >
          <source src={props.heroImg} type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
