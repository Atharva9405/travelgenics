import './Contact.css'
import React from 'react';
import Zoom from 'react-reveal/Zoom';

function ContactForm() {
  return (
    <Zoom bottom>
    <div className="form-container">
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input placeholder="subject"></input>
            <textarea placeholder="Message" rows = "4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
    </Zoom>
  )
}

export default ContactForm;