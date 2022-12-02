import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutVid from '../Assets/video1.mp4';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';


function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" heroImg= {AboutVid} title="About Us" url="/" 
        />
        <AboutUs/>
        <Footer/>
        </>
    );
};

export default About;