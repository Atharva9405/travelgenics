import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceVid from '../Assets/video2.mp4';
import Footer from '../components/Footer';
import Services from '../components/Services';


function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" heroImg={ServiceVid} title="Services" url="/" 
        />
        <Services/>
        <Footer/>
        </>
    );
}

export default Service;