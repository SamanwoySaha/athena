import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div id="contact" className="text-center">
            <h1 className="heading">Get your design right, right now</h1>
            <p className="description">Be the first know our latest offers and updates!</p>
            <div className="input-field d-flex justify-content-between align-items-center mt-5">
                <input type="text" placeholder="Enter your email address"/>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Contact;