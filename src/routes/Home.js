import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import video from "../Assets/video.mp4";
import Destination from "../components/Destination";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
// import BackToTop from 'react-back-to-top';
// import ScrollToTop from 'react-scroll-to-top';

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={video}
        title="Your Journey Your Story"
        text="Plan Your Journey With us"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trips />
      <Footer />
    </>
  );
}

export default Home;
