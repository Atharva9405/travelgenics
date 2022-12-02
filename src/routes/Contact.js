import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactVid from '../Assets/video3.mp4';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" heroImg ={ContactVid} title="Contact Us" url="/" 
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;